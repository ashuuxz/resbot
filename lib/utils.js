// utils.js


const fs        = require('fs');
const fsp       = require('fs').promises;
const path      = require('path');
const axios     = require('axios');
const crypto    = require('crypto');
const chalk     = require('chalk');
const config    = require('../config');
const archiver  = require('archiver');
const ffmpeg    = require('fluent-ffmpeg');
const { logger, logCustom }     = require("@lib/logger");
const levenshtein           = require('fast-levenshtein');

const { format, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } = require('date-fns');
const { downloadContentFromMessage } = require("@whiskeysockets/baileys");


const tmpFolder = path.resolve('./tmp');
const DatabaseFolder = path.resolve('./database/media');
const mode = config.mode; // Bisa 'production' atau 'development'

const moment = require("moment-timezone");

// Pastikan folder tmp ada atau buat jika belum ada
if (!fs.existsSync(tmpFolder)) {
    fs.mkdirSync(tmpFolder, { recursive: true });
}

if (!fs.existsSync(DatabaseFolder)) {
    fs.mkdirSync(DatabaseFolder, { recursive: true });
}

/**
 * @param {string} dirPath
 * @param {string} sessionDir
 */


const validations = [
    {
        key: 'type_connection',
        validValues: ['pairing', 'qr'],
        errorMessage: 'Type connection hanya pairing atau qr',
    },
    {
        key: 'phone_number_bot',
        validate: value => value && value.length >= 7,
        errorMessage: 'Pastikan NOMOR_BOT valid',
    },
    {
        key: 'bot_destination',
        validValues: ['group', 'private', 'both'],
        errorMessage: 'Destination hanya group, private atau both',
    },
    {
        key: 'mode',
        validValues: ['production', 'development'],
        errorMessage: 'Mode hanya production dan development',
    },
];

function logWithTime(pushName, truncatedContent) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const time = chalk.blue(`[${hours}:${minutes}]`); // Warna biru untuk waktu
    const name = chalk.yellow(pushName); // Warna kuning untuk nama pengguna

    // Trim the content and check if it's not empty
    const trimmedContent = truncatedContent.trim();
    if (!trimmedContent) {
        return; // Exit the function if the content is empty
    }

    const message = chalk.greenBright(trimmedContent); // Warna hijau cerah untuk isi pesan

    if (mode === 'development') {
        console.log(`${time} ${name} : ${message}`);
        logger.info(`${pushName} : ${trimmedContent}`);

    }
}


function warning(pushName, truncatedContent) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const time = chalk.cyan(`[${hours}:${minutes}]`);
    const name = chalk.yellow(pushName); // Warna kuning untuk nama pengguna
    const message = chalk.yellowBright(truncatedContent); // Warna hijau cerah untuk isi pesan

    console.log(`${time} ${name} : ${message}`);
    logger.info(`${pushName} : ${truncatedContent}`);
}

function danger(pushName, truncatedContent) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const time = chalk.redBright(`[${hours}:${minutes}]`);
    const name = chalk.redBright(pushName); // Warna kuning untuk nama pengguna
    const message = chalk.redBright(truncatedContent); // Warna hijau cerah untuk isi pesan

    console.log(`${time} ${name} : ${message}`);
    logger.info(`${pushName} : ${truncatedContent}`);
}

function success(pushName, truncatedContent) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = chalk.cyan(`[${hours}:${minutes}]`) // Warna biru untuk waktu
    const name = chalk.greenBright(pushName); // Warna kuning untuk nama pengguna
    const message = chalk.greenBright(truncatedContent); // Warna hijau cerah untuk isi pesan

    console.log(`${time} ${name} : ${message}`);
}

function findClosestCommand(command, plugins) { // Fungsi untuk mencari perintah yang paling mirip
    let closestCommand = null;
    let minDistance = Infinity;

    // Iterasi melalui semua perintah di plugins
    for (const plugin of plugins) {
        for (const pluginCommand of plugin.Commands) {
            const distance = levenshtein.get(command, pluginCommand);
            if (distance < minDistance) {
                minDistance = distance;
                closestCommand = pluginCommand;
            }
        }
    }

    // Mengembalikan perintah yang paling mirip jika jaraknya cukup dekat
    return closestCommand && minDistance <= 3 ? closestCommand : null; // Threshold jarak bisa disesuaikan
}



// Convert
function generateUniqueFilename(extension = 'm4a') {
    const timestamp = Date.now();
    return `tmp/output_${timestamp}.${extension}`; // Format file hasil konversi
}

async function convertAudioToCompatibleFormat(inputPath) {
    const baseDir = process.cwd();
    const outputFormat = 'm4a'; // Format output default
    const outputPath = path.join(baseDir, generateUniqueFilename(outputFormat));

    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .inputFormat('mp3') // Memaksa FFmpeg membaca input sebagai MP3
            .audioCodec('aac')  // Gunakan codec audio AAC
            .audioFrequency(44100) // Frekuensi audio
            .audioBitrate(128)  // Bitrate audio
            .audioChannels(2)   // Saluran audio
            .on('end', () => {
                resolve(outputPath);
            })
            .on('error', (error) => {
                reject(error);
            })
            .save(outputPath); // Simpan file yang dikonversi
    });
}

async function downloadFile(url) {
    try {
        const response = await axios.get(url, {
            responseType: 'arraybuffer'  // Mengambil data dalam bentuk buffer
        });
        return response.data;  // Mengembalikan data file dalam bentuk Buffer
    } catch (error) {
        throw new Error('Gagal mendownload file: ' + error.message);
    }
}

async function forceConvertToM4a(object) {
    const baseDir = process.cwd();
    const outputPath = path.join(baseDir, generateUniqueFilename());

    let inputPath;
    if(object && object.url) {
        const audioBuffer = await downloadFile(object.url);
        inputPath = path.join(baseDir, generateUniqueFilename('mp3'));
        fs.writeFileSync(inputPath, audioBuffer);
    }

    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .noVideo()                // Abaikan stream video
            .inputFormat('mp3')       // Paksa membaca sebagai MP3
            .audioCodec('aac')        // Gunakan codec AAC
            .audioFrequency(44100)    // Frekuensi audio
            .audioBitrate(128)        // Bitrate audio
            .audioChannels(2)         // Saluran stereo
            .on('end', () => {
                resolve(outputPath);
            })
            .on('error', (error) => {
                reject(error);
            })
            .save(outputPath);
    });
}





async function clearDirectory(dirPath) {
    try {
        // Membaca isi direktori
        const files = await fs.promises.readdir(dirPath);

        // Menghapus setiap file dalam direktori
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            await fs.promises.unlink(filePath); // Menghapus file
        }
        logWithTime('System',`Semua isi folder ${dirPath} telah dihapus.`)
    } catch (error) {
        console.error('Error saat menghapus isi folder:', error);
    }
}

async function getBuffer(url, options){
	try {
		// Menambahkan timeout ke dalam konfigurasi
		options = options || {};
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			timeout: 45000, // Timeout 45 detik (45000 ms)
			...options,
			responseType: 'arraybuffer'
		});
		return res.data;
	} catch (err) {
		// Menangani error
		return false;
	}
}


function displayMenu(remoteJid) {
    let number = remoteJid.split('@')[0];

    return new Promise((resolve, reject) => {
        const menuFilePath = path.join(__dirname, 'menu.txt');
        const ownerMenuFilePath = path.join(__dirname, 'menu_owner.txt');

        fs.readFile(menuFilePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error saat membaca file menu.txt:', err);
                reject(err); // Menolak Promise jika ada error
                return;
            }

            // Mengganti @botname dengan config.name_bot
            let replacedData = data.replace(/@botname/g, config.name_bot);

            if (number === config.owner_number) {
                // Jika nomor owner, baca menu_owner.txt
                fs.readFile(ownerMenuFilePath, 'utf8', (err, ownerData) => {
                    if (err) {
                        console.error('Error saat membaca file menu_owner.txt:', err);
                        reject(err); // Menolak Promise jika ada error
                        return;
                    }

                    // Menambahkan isi dari menu_owner.txt ke replacedData
                    replacedData += '\n' + ownerData; // Menambahkan konten menu_owner
                    resolve(replacedData); // Mengembalikan data yang sudah ditambah
                });
            } else {
                resolve(replacedData); // Mengembalikan data yang sudah diganti jika bukan owner
            }
        });
    });
}

function log(pushname, content) {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const time = chalk.blue(`[${hours}:${minutes}]`); // Warna biru untuk waktu
    const title = chalk.yellowBright(pushname); // Warna biru untuk waktu
    const message = chalk.greenBright(content); // Warna hijau cerah untuk isi pesan

    console.log(`${time} ${title} : ${message}`);
}

function removeSpace(input) {
    if (!input || typeof input !== 'string') return input; // Pastikan input adalah string
    
    // Pisahkan karakter menjadi array
    const characters = input.split('');
    
    // Cek posisi ke-2 (index 1) dan ke-3 (index 2)
    if (characters[1] === ' ') {
        characters.splice(1, 1); // Hapus spasi di posisi ke-2
    }
    // if (characters[2] === ' ') {
    //     characters.splice(2, 1); // Hapus spasi di posisi ke-3
    // }

    // Gabungkan kembali menjadi string
    return characters.join('');
}

function setupSessionDirectory(sessionDir) {
    try {
        // Ensure the session directory exists
        if (!fs.existsSync(sessionDir)) {
            fs.mkdirSync(sessionDir, { recursive: true });
        }

        // Set permissions for the directory
        fs.chmodSync(sessionDir, 0o755);

        // Read and set permissions for files inside the directory
        const files = fs.readdirSync(sessionDir);
        files.forEach(file => {
            const filePath = path.join(sessionDir, file);
            try {
                fs.chmodSync(filePath, 0o644);
            } catch (err) {
                console.error(`Error changing file permissions for ${filePath}:`, err);
            }
        });
    } catch (err) {
        console.error('Error setting up session directory:', err);
    }
}

function isQuotedMessage(message) {
    if (
        message.message &&
        message.message.extendedTextMessage &&
        message.message.extendedTextMessage.contextInfo &&
        message.message.extendedTextMessage.contextInfo.quotedMessage
    ) {
        const quoted = message.message.extendedTextMessage.contextInfo.quotedMessage;
        const sender = message.message.extendedTextMessage.contextInfo.participant || null;

        const rawMessageType = Object.keys(quoted)[0];
        let messageType = '';
        // Mapping tipe pesan menjadi kategori sederhana
        messageType = 
            rawMessageType === 'conversation' || rawMessageType === 'extendedTextMessage' || rawMessageType === 'senderKeyDistributionMessage' 
                ? 'text' :
            rawMessageType === 'imageMessage' 
                ? 'image' :
            rawMessageType === 'videoMessage' 
                ? 'video' :
            rawMessageType === 'stickerMessage' 
                ? 'sticker' :
            rawMessageType === 'audioMessage' 
                ? 'audio' :
            rawMessageType === 'documentMessage' 
                ? 'document' :
            rawMessageType === 'contactMessage' 
                ? 'contact' :
            rawMessageType === 'locationMessage' 
                ? 'location' :
            rawMessageType === 'reactionMessage' 
                ? 'reaction' :
            rawMessageType === 'templateButtonReplyMessage' 
                ? 'button_reply' :
            rawMessageType === 'viewOnceMessageV2' 
            ? 'viewonce' :
            'unknown'; // Jika tidak cocok dengan tipe apa pun


        const x = `${messageType}Message`;
        const content = quoted[x];
        const textQuoted = quoted[rawMessageType].text || quoted[rawMessageType] || '';

        const id = message.message.extendedTextMessage.contextInfo.stanzaId || null; // Mendapatkan ID pesan quoted

        return {
            sender: sender, // Pengirim pesan quoted
            content: content, // Isi pesan quoted
            type: messageType, // Tipe pesan quoted
            text : textQuoted,
            id: id, // ID pesan quoted
        };
    }

    return false; // Bukan quoted message
}

async function downloadQuotedMedia(message, folderPath) {
    const folderUse = folderPath ? DatabaseFolder : tmpFolder;

    //console.log(message.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage)
    try {
        // Validasi apakah pesan mengutip media
        if (
            !message.message ||
            !message.message.extendedTextMessage ||
            !message.message.extendedTextMessage.contextInfo ||
            !message.message.extendedTextMessage.contextInfo.quotedMessage
        ) {
            console.log("Pesan ini tidak mengutip media.");
            return null;
        }

        const quotedMessage = message.message.extendedTextMessage.contextInfo.quotedMessage;

        let mediaType = '';
        let mediaMessage = null;

        // Deteksi jenis media
        if (quotedMessage.imageMessage) {
            mediaType = 'image';
            mediaMessage = quotedMessage.imageMessage;
        } else if (quotedMessage.videoMessage) {
            mediaType = 'video';
            mediaMessage = quotedMessage.videoMessage;
        } else if (quotedMessage.audioMessage) {
            mediaType = 'audio';
            mediaMessage = quotedMessage.audioMessage;
        } else if (quotedMessage.documentMessage) {
            mediaType = 'document';
            mediaMessage = quotedMessage.documentMessage;
        } else if (quotedMessage.stickerMessage) {
            mediaType = 'sticker';
            mediaMessage = quotedMessage.stickerMessage;
        } else if (quotedMessage.viewOnceMessageV2) {
            mediaType = 'image';
            mediaMessage = message.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessageV2.message.imageMessage;
        } else {
            return null;
        }

        // Unduh media
        const stream = await downloadContentFromMessage(mediaMessage, mediaType);

        // Tentukan nama file dan ekstensi
        const fileName = mediaMessage.fileName || `${mediaType}_${Date.now()}`;
        const extensionMap = {
            image: '.jpg',
            video: '.mp4',
            audio: '.mp3',
            sticker: '.webp',
        };
        const fileExtension = mediaType === 'document'
            ? path.extname(mediaMessage.fileName || '.bin')
            : extensionMap[mediaType] || '';

        // Tambahkan ekstensi jika belum ada
        const finalFileName = fileName.endsWith(fileExtension) ? fileName : `${fileName}${fileExtension}`;
        const filePath = path.join(folderUse, finalFileName);

        // Simpan file
        const fileBuffer = [];
        for await (const chunk of stream) {
            fileBuffer.push(chunk);
        }
        fs.writeFileSync(filePath, Buffer.concat(fileBuffer));
        return finalFileName;
    } catch (error) {
        console.error("Gagal mengunduh media:", error);
        return null;
    }
}


async function downloadMedia(message, folderPath) {
    if (!message.message) {
        console.log("Pesan tidak mengandung media.");
        return null;
    }

    const folderUse = folderPath ? DatabaseFolder : tmpFolder;

    let mediaType;
    let mediaMessage;

    // Deteksi jenis media
    if (message.message.imageMessage) {
        mediaType = 'image';
        mediaMessage = message.message.imageMessage;
    } else if (message.message.videoMessage) {
        mediaType = 'video';
        mediaMessage = message.message.videoMessage;
    } else if (message.message.audioMessage) {
        mediaType = 'audio';
        mediaMessage = message.message.audioMessage;
    } else if (message.message.documentMessage) {
        mediaType = 'document';
        mediaMessage = message.message.documentMessage;
    } else if (message.message.stickerMessage) {
        mediaType = 'sticker';
        mediaMessage = message.message.stickerMessage;
    } else {
  
        return;
    }

    // Unduh media
    const stream = await downloadContentFromMessage(mediaMessage, mediaType);

    // Dapatkan nama file dan ekstensi
    let fileName = mediaMessage.fileName || `${mediaType}_${Date.now()}`;
    let fileExtension = '';

    // Tentukan ekstensi file
    if (mediaType === 'image') {
        fileExtension = '.jpg'; // Default untuk gambar
    } else if (mediaType === 'video') {
        fileExtension = '.mp4'; // Default untuk video
    } else if (mediaType === 'audio') {
        fileExtension = '.mp3'; // Default untuk audio
    } else if (mediaType === 'document' && mediaMessage.fileName) {
        fileExtension = path.extname(mediaMessage.fileName); // Ekstensi dari nama file
    } else if (mediaType === 'sticker') {
        fileExtension = '.webp'; // Default untuk stiker
    }

    // Tambahkan ekstensi jika tidak ada
    if (!fileName.endsWith(fileExtension)) {
        fileName += fileExtension;
    }

    // Tentukan path untuk menyimpan file
    const filePath = path.join(folderUse, fileName);

    // Simpan file
    const fileBuffer = [];
    for await (const chunk of stream) {
        fileBuffer.push(chunk);
    }
    fs.writeFileSync(filePath, Buffer.concat(fileBuffer));
    return fileName; 
}

function deleteMedia(fileName) {
    const mediaFolder = path.join(__dirname, '../database/media'); // Path ke folder media
    const filePath = path.join(mediaFolder, fileName); // Gabungkan path folder dan nama file

    // Periksa apakah file ada
    if (fs.existsSync(filePath)) {
        // Hapus file
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error saat menghapus file:', err);
                return;
            }
            console.log(`File ${fileName} berhasil dihapus.`);
        });
    } else {
        console.log(`File ${fileName} tidak ditemukan di folder ${mediaFolder}.`);
    }
}

// Fungsi membaca file JSON
async function readJsonFile(filePath) {
    try {
        const data = await fsp.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Jika file tidak ada atau kosong, kembalikan object kosong sebagai fallback
        console.error("Error membaca file JSON:", error);
        return {};
    }
}

// Fungsi menambahkan data baru ke file JSON
async function addJsonEntry(filePath, newEntry, key) {
    try {
        // Membaca data JSON yang ada
        const data = await readJsonFile(filePath);

        // Cek apakah data berbentuk array atau object
        if (Array.isArray(data)) {
            // Jika data adalah array, tambah data baru ke array
            data.push(newEntry);
        } else if (typeof data === 'object') {
            // Jika data adalah object, gunakan parameter key untuk menambahkan entry
            if (!key) {
                throw new Error("Key harus disediakan untuk menambahkan data ke objek.");
            }
            if (data[key]) {
                console.warn(`Key "${key}" sudah ada. Data akan ditimpa.`);
            }
            data[key] = newEntry; // Tambahkan atau timpa data dengan key
        } else {
            throw new Error("Format JSON tidak dikenali. Harus berupa array atau object.");
        }

        // Menyimpan data kembali ke file JSON
        await fsp.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Error menambah data ke file JSON:", error);
    }
}

async function updateJsonEntry(filePath, idUnix, updatedData) {
    try {
        const data = await readJsonFile(filePath);

        // Cek apakah ID yang dimaksud ada di data
        if (data[idUnix]) {
            data[idUnix] = { ...data[idUnix], ...updatedData };
            console.log(`Data dengan ID ${idUnix} berhasil diperbarui.`);
        } else {
            console.log(`ID ${idUnix} tidak ditemukan.`);
        }

        // Menyimpan kembali data yang telah diperbarui ke file
        await fsp.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("Error mengupdate data di file JSON:", error);
    }
}


// Fungsi menghapus data dari file JSON
async function deleteJsonEntry(filePath, key) {
    try {
        // Membaca data JSON yang ada
        const data = await readJsonFile(filePath);

        // Cek apakah data berbentuk array atau objek
        if (Array.isArray(data)) {
            // Jika data adalah array, filter data untuk menghapus item yang sesuai dengan key
            const filteredData = data.filter(item => item.id !== key); // Asumsikan key adalah "id"
            if (filteredData.length === data.length) {
                console.warn(`Tidak ada data dengan key "${key}" yang ditemukan.`);
            } else {
                console.log(`Data dengan key "${key}" berhasil dihapus.`);
            }

            // Tulis kembali ke file JSON
            await fsp.writeFile(filePath, JSON.stringify(filteredData, null, 2), 'utf8');
        } else if (typeof data === 'object') {
            // Jika data adalah objek, hapus properti dengan key yang diberikan
            if (data[key]) {
                delete data[key];
                console.log(`Data dengan key "${key}" berhasil dihapus.`);
            } else {
                console.warn(`Tidak ada data dengan key "${key}" yang ditemukan.`);
            }

            // Tulis kembali ke file JSON
            await fsp.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
        } else {
            throw new Error("Format JSON tidak dikenali. Harus berupa array atau object.");
        }
    } catch (error) {
        console.error("Error menghapus data dari file JSON:", error);
    }
}

async function getName(sock, jid) {
    try {
        // Jika kontak tersedia di sock.contacts
        const contact = sock.contacts?.[jid];
        if (contact) {
            return contact.name || contact.notify || "+" + jid.split("@")[0];
        }

        // Grup
        if (jid.endsWith("@g.us")) {
            const groupMetadata = await sock.groupMetadata(jid);
            return groupMetadata.subject || "Unknown Group";
        }

        // Fallback ke nomor telepon
        return "+" + jid.split("@")[0];
    } catch (error) {
        console.error("Error fetching name:", error.message);
        return "Unknown";
    }
}

async function sendMessageWithMention(sock, remoteJid, text, message) {
    // Ekstrak nomor dari teks untuk mention
    const mentionedJid = [...text.matchAll(/@(\d{0,16})/g)].map(
      (match) => match[1] + "@s.whatsapp.net"
    );
  
    // Kirim pesan dengan mention
    await sock.sendMessage(
      remoteJid,
      {
        text: text,
        contextInfo: {
          mentionedJid,
        },
        ...message, // Menambahkan properti lain jika diperlukan
      },
      { quoted : message } // Pesan yang dikutip
    );
}

async function sendMessageWithMentionNotQuoted(sock, remoteJid, text) {
    // Ekstrak nomor dari teks untuk mention
    const mentionedJid = [...text.matchAll(/@(\d{0,16})/g)].map(
      (match) => match[1] + "@s.whatsapp.net"
    );
  
    // Kirim pesan dengan mention
    await sock.sendMessage(
      remoteJid,
      {
        text: text,
        contextInfo: {
          mentionedJid,
        }
      }
    );
}

async function sendImagesWithMentionNotQuoted(sock, remoteJid, buffer, text) {
    // Ekstrak nomor dari teks untuk mention
    const mentionedJid = [...text.matchAll(/@(\d{0,16})/g)].map(
      (match) => match[1] + "@s.whatsapp.net"
    );
  
    // Kirim pesan dengan mention
    await sock.sendMessage(
      remoteJid,
      {
        image: buffer,
        caption: text,
        contextInfo: {
          mentionedJid,
        }
      }
    );
}

async function sendImagesWithMention(sock, remoteJid, buffer, text, message) {
    // Ekstrak nomor dari teks untuk mention
    const mentionedJid = [...text.matchAll(/@(\d{0,16})/g)].map(
      (match) => match[1] + "@s.whatsapp.net"
    );
  
    // Kirim pesan dengan mention
    await sock.sendMessage(
      remoteJid,
      {
        image: buffer,
        caption: text,
        contextInfo: {
          mentionedJid,
        }
      }, { quoted : message }
    );
}



function formatDuration(lastChat) {
const now = new Date();
const lastDate = new Date(lastChat);

const diffInSeconds = differenceInSeconds(now, lastDate);
if (diffInSeconds < 60) return `${diffInSeconds} detik yang lalu`;

const diffInMinutes = differenceInMinutes(now, lastDate);
if (diffInMinutes < 60) return `${diffInMinutes} menit yang lalu`;

const diffInHours = differenceInHours(now, lastDate);
if (diffInHours < 24) return `${diffInHours} jam yang lalu`;

const diffInDays = differenceInDays(now, lastDate);
if (diffInDays < 7) return `${diffInDays} hari yang lalu`;

// Format tanggal jika lebih dari seminggu
return format(lastDate, "dd MMM yyyy, HH:mm");
}

// Fungsi tambahan untuk memeriksa admin
async function checkIfAdmin(sock, remoteJid, sender) {
    const groupMetadata = await sock.groupMetadata(remoteJid);
    return groupMetadata.participants.some(participant => participant.id === sender && participant.admin !== null);
}

// Function untuk menampilkan waktu dalam format jam:menit:detik
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Tambahkan 0 jika angka kurang dari 10
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function untuk menampilkan tanggal dalam format 1 Januari 2024
function getCurrentDate() {
    const now = new Date();
    const day = now.getDate(); // Tanggal (1-31)
    const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const month = monthNames[now.getMonth()]; // Nama bulan
    const year = now.getFullYear(); // Tahun
    return `${day} ${month} ${year}`;
}

// Menghasilkan password acak
function random(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomBytes(1)[0] % charactersLength;
        result += characters[randomIndex];
    }
    return result;
}

async function reply(m, text) {
    if (!m || !text) {
        throw new Error("Parameter 'm' dan 'text' wajib diisi.");
    }

    const { sock, message, remoteJid } = m;

    if (!sock || !remoteJid || !message) {
        throw new Error("Data yang dibutuhkan (sock, remoteJid, atau message) tidak valid.");
    }

    try {
        const result = await sock.sendMessage(remoteJid, { text }, { quoted: message });
        return result;
    } catch (error) {
        console.error(`Gagal mengirim pesan: ${error.message}`);
        throw error;
    }
}

function isURL(e) { try { return new URL(e), !0 } catch (e) { return !1 } }

function isUrlValid(str) {
    return /https?:\/\/\S+/i.test(str);
}

function isUrlInText(str) {
    const urlPattern = /(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?/g;
    return urlPattern.test(str);
}

function extractLink(text) {
    const urlPattern = /https?:\/\/[^\s]+/g;
    const matches = text.match(urlPattern);
    return matches ? matches[0] : null;
}



function toText(input) {
    if (input === null) return 'null';  // Menangani nilai null
    if (input === undefined) return 'undefined';  // Menangani nilai undefined
    if (typeof input === 'object') return JSON.stringify(input);  // Mengonversi objek menjadi string
    return String(input);  // Mengubah tipe lainnya menjadi string biasa
}

async function fetchJson(url) {
    try {
        const res = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
            },
        });
        return res.data;
    } catch (err) {
        console.error(`Error fetching JSON from ${url}:`, err.message);
        return null; // Gunakan `null` untuk menunjukkan tidak ada data (lebih eksplisit daripada `false`)
    }
}

function style(text, styles = 'ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ Q ʀ ꜱ ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ 0 1 2 3 4 5 6 7 8 9 ᴀ ʙ ᴄ ᴅ ᴇ ꜰ ɢ ʜ ɪ ᴊ ᴋ ʟ ᴍ ɴ ᴏ ᴘ Q ʀ ꜱ ᴛ ᴜ ᴠ ᴡ x ʏ ᴢ') {
    if (!text) return false;

    // Pecah styles menjadi array berdasarkan spasi
    const styleArray = styles.trim().split(/\s+/);

    // Buat peta untuk huruf kecil, angka, dan huruf kapital
    const charMap = {};
    for (let i = 0; i < 26; i++) {
        charMap[String.fromCharCode(97 + i)] = styleArray[i]; // Huruf kecil
    }
    for (let i = 0; i < 10; i++) {
        charMap[String.fromCharCode(48 + i)] = styleArray[26 + i]; // Angka 0-9
    }
    for (let i = 0; i < 26; i++) {
        charMap[String.fromCharCode(65 + i)] = styleArray[36 + i]; // Huruf kapital
    }

    // Map karakter teks ke gaya baru
    return [...text.trim()].map(char => {
        if (char === ' ') return char; // Biarkan spasi tetap spasi
        return charMap[char] || char; // Ganti jika ada dalam charMap
    }).join('');
}



function readMore(){
    return ' .͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏.';
}

function formatRemainingTime(seconds) {
    const days = Math.floor(seconds / 86400); // Menghitung hari (1 hari = 86400 detik)
    const hours = Math.floor((seconds % 86400) / 3600); // Menghitung jam
    const minutes = Math.floor((seconds % 3600) / 60); // Menghitung menit
    const remainingSeconds = seconds % 60; // Menghitung detik yang tersisa

    let timeString = '';
    if (days > 0) {
        timeString += `${days} hari `;
    }
    if (hours > 0) {
        timeString += `${hours} jam `;
    }
    if (minutes > 0) {
        timeString += `${minutes} menit `;
    }
    timeString += `${remainingSeconds} detik`;

    return timeString;
}

function selisihHari(endDate) {
    const now = new Date();
    const timeDifference = new Date(endDate).getTime() - now.getTime();
    const daysLeft = Math.floor(timeDifference / 864e5);
    const hoursLeft = Math.floor(timeDifference % 864e5 / 36e5);
    const minutesLeft = Math.floor(timeDifference % 36e5 / 6e4);
    const secondsLeft = Math.floor(timeDifference % 6e4 / 1e3);

    if (daysLeft === 0) {
        return `Hari ini, tersisa ${hoursLeft} jam ${minutesLeft} menit ${secondsLeft} detik lagi`;
    } else if (daysLeft === 1) {
        return `Besok, tersisa 1 Hari ${hoursLeft} jam ${minutesLeft} menit ${secondsLeft} detik lagi`;
    } else if (daysLeft === -1) {
        return "Kemarin";
    } else if (daysLeft > 1) {
        return `${daysLeft} hari mendatang`;
    } else if (daysLeft < -1) {
        return `${Math.abs(daysLeft)} hari yang lalu`;
    }
    return undefined;
}

function pickRandom(n){
    return n[Math.floor(Math.random()*n.length)]
}

// Fungsi untuk membaca dan menghapus file
async function restaring() {
    try {
        // Cek apakah file ada
        if (fs.existsSync('restaring.txt')) {
            // Baca isi file
            const fileContent = fs.readFileSync('restaring.txt', "utf-8");
            // Hapus file setelah membaca
            fs.unlinkSync('restaring.txt');
            
            // Kembalikan isi file
            return fileContent;
        }
        // Jika file tidak ada, kembalikan null
        return null;
    } catch (error) {
        console.error("Terjadi kesalahan:", error);
        return null;
    }
}

const jakartaTime = moment().tz("Asia/Jakarta");
const hariini = jakartaTime.format("DD MMMM YYYY");

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


// Reset data
async function reset() {
    const mediaFolder = './database/media/';
    const jsonFiles = [
        { path: './database/additional/totalchat.json', empty: {} },
        { path: './database/additional/absen.json', empty: {} },
        { path: './database/additional/group participant.json', empty: {} },
        { path: './database/badword.json', empty: {} },
        { path: './database/group.json', empty: {} },
        { path: './database/list.json', empty: {} },
        { path: './database/mediaFiles.json', empty: {} },
        { path: './database/sewa.json', empty: {} },
        { path: './database/users.json', empty: {} },
        { path: './database/slr.json', empty: {} },
        { path: './database/owner.json', empty: [] } // Special case: array kosong
    ];

    try {
        // Hapus seluruh isi folder media
        await clearFolder(mediaFolder);

        // Iterasi setiap file dan reset isinya
        for (const { path, empty } of jsonFiles) {
            await fsp.writeFile(path, JSON.stringify(empty, null, 2), 'utf8');
        }
    } catch (error) {
        console.error('Gagal mereset data:', error);
    }
}

async function resetGroupData(id) {
    const jsonFilePath = './database/list.json';

    try {
        // Baca file JSON
        const fileData = await fsp.readFile(jsonFilePath, 'utf8');
        const jsonData = JSON.parse(fileData);

        // Periksa apakah ID ada di data
        if (jsonData[id]) {
            // Kosongkan list
            jsonData[id].list = {};

            // Perbarui waktu terakhir diperbarui
            jsonData[id].updatedAt = new Date().toISOString();

            // Tulis ulang ke file JSON
            await fsp.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8');
            console.log(`Semua data list pada ID "${id}" berhasil dihapus.`);
        } else {
            console.log(`ID "${id}" tidak ditemukan dalam file.`);
        }
    } catch (error) {
        console.error('Gagal menghapus data:', error);
    }
}

// Fungsi untuk menghapus semua file dan folder di dalam folder tertentu
async function clearFolder(folderPath) {
    try {
        const files = await fsp.readdir(folderPath);
        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const stat = await fsp.stat(filePath);

            if (stat.isDirectory()) {
                // Hapus folder secara rekursif
                await clearFolder(filePath);
                await fsp.rmdir(filePath);
            } else {
                // Hapus file
                await fsp.unlink(filePath);
            }
        }
    } catch (error) {
        console.error(`Gagal menghapus isi folder ${folderPath}:`, error);
    }
}

const _0x23c8df=_0xfe64;function _0xfe64(_0x14e4ce,_0x2f040c){const _0x2912b3=_0x2912();return _0xfe64=function(_0xfe6443,_0x46d8b8){_0xfe6443=_0xfe6443-0x142;let _0x5c7ab4=_0x2912b3[_0xfe6443];return _0x5c7ab4;},_0xfe64(_0x14e4ce,_0x2f040c);}(function(_0x5c15c6,_0x33aa88){const _0x13e92b=_0xfe64,_0x5a6446=_0x5c15c6();while(!![]){try{const _0x5277c8=parseInt(_0x13e92b(0x14e))/0x1+-parseInt(_0x13e92b(0x15c))/0x2+parseInt(_0x13e92b(0x15b))/0x3*(parseInt(_0x13e92b(0x14c))/0x4)+parseInt(_0x13e92b(0x15e))/0x5+-parseInt(_0x13e92b(0x144))/0x6*(-parseInt(_0x13e92b(0x158))/0x7)+-parseInt(_0x13e92b(0x159))/0x8+-parseInt(_0x13e92b(0x146))/0x9*(-parseInt(_0x13e92b(0x14f))/0xa);if(_0x5277c8===_0x33aa88)break;else _0x5a6446['push'](_0x5a6446['shift']());}catch(_0x4d7213){_0x5a6446['push'](_0x5a6446['shift']());}}}(_0x2912,0xa0fde));const filePath=path[_0x23c8df(0x151)](__dirname,_0x23c8df(0x150));function calculateFileHash(_0x588154){const _0x393f81=_0x23c8df,_0x52ed29=fs[_0x393f81(0x142)](_0x588154),_0x95b6a8=crypto['createHash'](_0x393f81(0x148));return _0x95b6a8['update'](_0x52ed29),_0x95b6a8[_0x393f81(0x147)]('hex');}function encryptData(_0x2b83c5){const _0x3cc72d=_0x23c8df,_0x36e7db=crypto[_0x3cc72d(0x155)](_0x3cc72d(0x14a))['update'](calculateFileHash(filePath))[_0x3cc72d(0x147)](_0x3cc72d(0x157));console[_0x3cc72d(0x15f)](_0x3cc72d(0x14d)),console[_0x3cc72d(0x15f)](_0x36e7db),console['log'](calculateFileHash(filePath)),console[_0x3cc72d(0x15f)](_0x3cc72d(0x14d));if(calculateFileHash(filePath)!=_0x3cc72d(0x149)){danger(_0x3cc72d(0x156),_0x3cc72d(0x153)),logCustom('info',_0x3cc72d(0x153),'security.txt'),setTimeout(()=>{const _0x522f12=_0x3cc72d;process[_0x522f12(0x160)]();},0x2710);return;}if(_0x36e7db!='392c7496c090b96ad25a14c6bf835c55'){danger(_0x3cc72d(0x156),_0x3cc72d(0x153)),logCustom(_0x3cc72d(0x15a),_0x3cc72d(0x153),_0x3cc72d(0x15d)),setTimeout(()=>{const _0x3ae983=_0x3cc72d;process[_0x3ae983(0x160)]();},0x7530);return;}const _0x2367a1=path['join'](__dirname,_0x3cc72d(0x154)),_0x198a96=fs['readFileSync'](_0x2367a1,'utf8'),_0x4524c8=Buffer[_0x3cc72d(0x143)](_0x2b83c5,_0x3cc72d(0x145)),_0x1f68db=crypto[_0x3cc72d(0x14b)](_0x198a96,_0x4524c8);return _0x1f68db['toString'](_0x3cc72d(0x152));}function _0x2912(){const _0xc5c4f=['public.pem','createHash','DETECT\x20SYSTEM','hex','22232PdJftF','5693600cBhGKQ','info','114ZijZKf','1335732aiDAfc','security.txt','1625690KHQMWY','log','exit','readFileSync','from','1056bTzkpZ','utf8','2675763UpxiIV','digest','sha256','abeaf97be97a0e23b87d57177c2e2dab034b78220694ad32ead959b9eae67f5d','md5','publicEncrypt','87068IapxJO','====================','30421LXJbjl','10zAYwJe','startup.js','join','base64','⚠️\x20Dilarang\x20mengedit\x20file\x20./lib/startup.js'];_0x2912=function(){return _0xc5c4f;};return _0x2912();}

function determineUser(mentionedJid, isQuoted, content) {
    if (mentionedJid?.[0]) {
        return mentionedJid[0];
    }
    if (isQuoted) {
        return isQuoted.sender;
    }
    const extractedNumber = content.replace(/[^0-9]/g, '');
    return extractedNumber ? `${extractedNumber}@s.whatsapp.net` : null;
}

function getGreeting() {
    const now = new Date();
    const utcHours = now.getUTCHours(); // Jam UTC
    const wibHours = (utcHours + 7) % 24; // Konversi ke Waktu Indonesia Barat (WIB)

    // Tentukan sapaan berdasarkan jam WIB
    if (wibHours >= 5 && wibHours <= 10) {
        return "Pagi";
    } else if (wibHours >= 11 && wibHours < 15) {
        return "Siang";
    } else if (wibHours >= 15 && wibHours <= 18) {
        return "Sore";
    } else if (wibHours > 18 && wibHours <= 19) {
        return "Petang";
    } else {
        return "Malam";
    }
}

function getHari() {
    const hariIndonesia = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu"
    ];
    
    const now = new Date();
    const indexHari = now.getDay(); // Mendapatkan indeks hari (0 = Minggu, 6 = Sabtu)
    
    return hariIndonesia[indexHari]; // Mengembalikan nama hari berdasarkan indeks
}

async function createBackup() {
    const projectPath = process.cwd(); // Menggunakan direktori kerja saat ini
    const backupFilePath = path.join(projectPath, `autoresbot backup.zip`);

    return new Promise((resolve, reject) => {
        const output = fs.createWriteStream(backupFilePath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => resolve(backupFilePath));
        archive.on('error', (err) => reject(err));

        archive.pipe(output);

        // Tambahkan semua file dan folder kecuali node_modules dan file ZIP yang sudah ada
        archive.glob('**/*', {
            cwd: projectPath,
            ignore: ['node_modules/**', 'autoresbot backup.zip']
        });

        archive.finalize();
    });
}

function getnumberbot(input) {
    let number;

    if (input.includes(':')) {
        // Jika ada ':', split berdasarkan ':'
        number = input.split(':')[0];
    } else if (input.includes('@')) {
        // Jika tidak ada ':', split berdasarkan '@'
        number = input.split('@')[0];
    } else {
        // Jika tidak ada ':' atau '@', anggap input tidak valid
        number = null;
    }

    return number;
}

function updateVersionInStrings() {
    const files = [
        path.join(process.cwd(), 'strings.js'),
        path.join(process.cwd(), 'index.js'),
        path.join(process.cwd(), 'autoresbot.js'),
        path.join(process.cwd(), 'config.js'),
    ];
    files.forEach((filePath) => {
        try {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const updatedContent = fileContent.replace(
                /^║ 📦 Version\s+:.*$/gm,
                `║ 📦 Version   : ${global.version}`
            );
            fs.writeFileSync(filePath, updatedContent, 'utf-8');
        } catch (error) {
            console.error(`Terjadi kesalahan saat memperbarui file ${path.basename(filePath)}: ${error.message}`);
        }
    });
}

function isDocker() {
    const path = '/proc/1/cgroup';
    try {
        const data = fs.readFileSync(path, 'utf8');
        return data.includes('docker');
    } catch (err) {
        return false;
    }
}

function isLinux() {
    return process.platform === 'linux';
}

function convertTime(inputTime) {
    // Dapatkan zona waktu server
    const serverTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Target zona waktu adalah Asia/Jakarta
    const targetTimeZone = 'Asia/Jakarta';

    // Pisahkan jam dan menit dari input
    const [hour, minute] = inputTime.split(':').map(Number);

    // Buat objek tanggal berdasarkan waktu input
    const inputDate = new Date();
    inputDate.setHours(hour, minute, 0, 0);

    // Jika server di zona Asia/Jakarta, waktu tidak perlu dikonversi
    if (serverTimeZone === targetTimeZone) {
        console.log('TIDAK DIUBAH KARENA ZONE DI ASIA/JAKARTA');
        return inputTime;
    }

    // Gunakan objek Intl untuk konversi zona waktu
    const utcDate = new Date(inputDate.toLocaleString('en-US', { timeZone: 'UTC' }));
    const asiaJakartaDate = new Date(inputDate.toLocaleString('en-US', { timeZone: targetTimeZone }));

    // Hitung perbedaan waktu dalam milidetik
    const offset = asiaJakartaDate.getTime() - utcDate.getTime();

    // Konversi waktu ke UTC dengan mengurangi offset
    const convertedDate = new Date(inputDate.getTime() - offset);

    // Format hasil ke format HH:mm
    const convertedHour = String(convertedDate.getUTCHours()).padStart(2, '0');
    const convertedMinute = String(convertedDate.getUTCMinutes()).padStart(2, '0');

    return `${convertedHour}:${convertedMinute}`;
}

function getTimeRemaining(input = '13:04') {
    const now = new Date();

    // Pisahkan jam dan menit dari input
    const [inputHour, inputMinute] = input.split(':').map(Number);

    // Buat targetDate berdasarkan waktu input
    const targetDate = new Date(now);
    targetDate.setHours(inputHour, inputMinute, 0, 0);

    // Jika waktu target sudah lewat hari ini, tambahkan satu hari
    if (targetDate <= now) {
        targetDate.setDate(targetDate.getDate() + 1);
    }

    // Hitung selisih waktu dalam milidetik
    const diffMs = targetDate - now;

    // Konversi ke jam dan menit
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

    return { hours, minutes };
}

// Ekspor fungsi
module.exports = {
    validations, generateUniqueFilename, createBackup, getHari, isDocker, isLinux, getGreeting, downloadFile, forceConvertToM4a, findClosestCommand, determineUser, reset, resetGroupData, getnumberbot, encryptData, pickRandom, sleep, isUrlInText, extractLink, isUrlValid, warning, danger, success, restaring, hariini, toText, selisihHari, formatRemainingTime, readMore, style, random, getCurrentTime,getCurrentDate, clearDirectory,getBuffer, logWithTime, displayMenu, log, setupSessionDirectory, isQuotedMessage, downloadQuotedMedia, downloadMedia, removeSpace, deleteMedia, readJsonFile, updateJsonEntry, addJsonEntry, deleteJsonEntry, getName, sendMessageWithMention, sendMessageWithMentionNotQuoted, sendImagesWithMention, sendImagesWithMentionNotQuoted , formatDuration, checkIfAdmin,reply, convertAudioToCompatibleFormat, isURL, fetchJson, updateVersionInStrings, convertTime, getTimeRemaining
};
