╔═════════════════════════════════╗
║ 🛠️ Informasi Script
╠═════════════════════════════════╣
║ 📦 Version : 4.0
║ 👨‍💻 Developer : Azhari Creative  
║ 🌐 Website : autoresbot.com  
╚═════════════════════════════════╝

⚠️ Peringatan: SCRIPT INI TIDAK BOLEH DIPERJUALBELIKAN
📌 Pembelian resmi hanya dapat dilakukan di website resmi: https://autoresbot.com

# API USE from api.autoresbot.com

Dokumentasi penggunaan API dari **api.autoresbot.com** untuk integrasi ke dalam proyek Anda.

## Instalasi

Pastikan Anda sudah menginstal package `api-autoresbot` melalui npm:

```bash
npm install api-autoresbot
```

const ApiAutoresbot = require('api-autoresbot');
const api = new ApiAutoresbot('YOUR_APIKEY');

## Menggunakan API

const response = await api.get('/api/random/zikir');

## Menggunakan API dengan Parameter

const response = await api.get('/api/gemini', { text: content });

## Menggunakan API dengan response buffer

const response = await api.getBuffer('/api/maker/attp2', { text: content });

## Menggunakan API untuk upload media sementara

const response = await api.tmpUpload(mediaPath);

# =======================

## Mengirim pesan teks

await sock.sendMessage(remoteJid, { text: 'Example' });
await sock.sendMessage(remoteJid, { text: 'Example' }, { quoted: message });

## Mengirim gambar dari URL dan buffer

await sock.sendMessage(remoteJid, { image: { url: 'https://example.com/tes.jpg' }, caption: `Caption` });
await sock.sendMessage(remoteJid, { image: { url: 'https://example.com/tes.jpg' }, caption: `Caption` }, { quoted: message });

await sock.sendMessage(remoteJid, { image: buffer, caption: `Caption` });
await sock.sendMessage(remoteJid, { image: buffer, caption: `Caption` }, { quoted: message });

## Mengirim audio dari URL dan buffer

await sock.sendMessage(remoteJid, { audio: { url: '' }, mimetype: 'audio/mp4' }, { quoted: message });
await sock.sendMessage(remoteJid, { audio: bufferAudio}, { quoted: message });

## Menambahkan reaction pada pesan

await sock.sendMessage(remoteJid, { react: { text: "⏰", key: message.key } });

## Mengirim pesan terusan

sock.sendMessage(remoteJid, { text : `Ini adalah contoh pesan terusan`, contextInfo:{
forwardingScore: 7,
isForwarded: true,
mentionedJid:[remoteJid]
}}, { quoted: message });

## Menggunakan cache untuk metadata grup

const { getGroupMetadata, getProfilePictureUrl, groupFetchAllParticipating } = require("@lib/cache");
getGroupMetadata(sock, remoteJid);

## Handler untuk proses handle (folder handle)

return false; // Menghentikan proses handler tanpa lanjut ke plugin
return true; // Menghentikan proses handler dan lanjut ke plugin
return; // Lanjut ke handler lain dan plugin
