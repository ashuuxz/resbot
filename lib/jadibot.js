const fs    = require('fs');
const path  = require('path');
const config        = require('@config');
const chalk         = require('chalk');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore } = require('@whiskeysockets/baileys');
const { Boom }                  = require("@hapi/boom");
const qrcode                    = require('qrcode-terminal');
const pino                      = require("pino");
const logger                    = pino({ level: "silent" });
const { connectToWhatsApp }      = require('@lib/connection');
const { clearDirectory, logWithTime, setupSessionDirectory, isQuotedMessage, removeSpace, restaring, success, danger, sleep, sendMessageWithMentionNotQuoted }   = require('@lib/utils');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Path folder untuk menyimpan sesi
const SESSION_PATH = './session/';

async function startNewSession(masterSessions, senderId, type_connection) {
    const sessionFolder = path.join(SESSION_PATH, senderId);

    // Pastikan folder session ada
    if (!fs.existsSync(sessionFolder)) {
        fs.mkdirSync(sessionFolder, { recursive: true });
    }

    const { state, saveCreds }  = await useMultiFileAuthState(sessionFolder);
    const { version }           = await fetchLatestBaileysVersion();

     const sock = makeWASocket({
        version,
        logger: logger,
        printQRInTerminal: false,
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });

    if (!sock.authState.creds.registered && type_connection == 'pairing') {
            const phoneNumber = senderId;
            await delay(4000);
            const code = await sock.requestPairingCode(phoneNumber.trim());
            const textResponse = `⏳ _Jadibot ${senderId}_\n
_Code Pairing :_ ${code}`;
            await masterSessions.sock.sendMessage(masterSessions.remoteJid, { text: textResponse }, { quoted: masterSessions.message });
    }

    sock.ev.on('creds.update', saveCreds);

    sock.ev.on("connection.update", async (update) => {
        const { connection, lastDisconnect, qr } = update;
        if (qr != null && type_connection == 'qr') {
            logWithTime('SYSTEM',`Menampilkan QR`);
            await masterSessions.sock.sendMessage(masterSessions.remoteJid, { text: 'Menampilkan QR'  }, { quoted: masterSessions.message });
        
            qrcode.generate(qr, { small: true }, (qrcodeStr) => {
                console.log(qrcodeStr);
            });
        }

        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
            switch (reason) {
                case DisconnectReason.badSession:
                    return danger('Jadibot',`Bad Session File, Start Again ...`); 
                    break;

                case DisconnectReason.connectionClosed:
                    return danger('Jadibot',`Connection closed, reconnecting....`)
                    break;

                case DisconnectReason.connectionLost:
                    return danger('Jadibot',`Connection Lost from Server, reconnecting...`)
                    break;

                case DisconnectReason.connectionReplaced:
                    return danger('Jadibot',`Connection Replaced, Another New Session Opened, Please Restart Bot`)
                    break;

                case DisconnectReason.loggedOut:
                    return danger('Jadibot',`Perangkat Terkeluar, Silakan Lalukan Scan/Pairing Ulang`)
                    
                    break;

                case DisconnectReason.restartRequired:
                    logWithTime('SYSTEM',`Restart Required, Restarting..`);
                    await connectToWhatsApp(`session/${senderId}`);
                    return
            
                    break;

                case DisconnectReason.timedOut:
                    return danger('Jadibot',`Connection TimedOut, Reconnecting...`)
                    break;

                default:
                    return danger('Jadibot',`Unknown DisconnectReason: ${reason}|${connection}`)
                    break;
            }
        
        } else if (connection === 'open') {
            success('SYSTEM', 'JADIBOT TERHUBUNG');
            await masterSessions.sock.sendMessage(masterSessions.remoteJid, { text: `✅ _Berhasil! Nomor *${senderId}* telah menjadi bot._`  }, { quoted: masterSessions.message });
        }

    });

    return sock;
}


module.exports = { startNewSession };
