/*
╔═════════════════════════════════╗
║     🛠️ Informasi Script
╠═════════════════════════════════╣
║ 📦 Version   : 4.0
║ 👨‍💻 Developer : Azhari Creative    
║ 🌐 Website   : autoresbot.com   
╚═════════════════════════════════╝

⚠️ Peringatan: SCRIPT INI TIDAK BOLEH DIPERJUALBELIKAN
📌 Pembelian resmi hanya dapat dilakukan di website resmi: https://autoresbot.com
*/

const moment       = require('moment-timezone');

const CONNECTION   = 'pairing'; // qr atau pairing
const OWNER_NAME   = 'Autoresbot';
const NOMOR_BOT    = '917024324777'; // 6282287634350
const DESTINATION  = 'both'; // group , private, both
const APIKEY       = 'APIKEY_GRATIS'; // apikey dari autoresbot.com
const RATE_LIMIT   = 3000; // 3 detik/chat
const SIMILARITY   = true; // Pencarian kemiripan command (true, false)
const MODE         = 'production'; // [production, development] (jangan di ubah kecuali anda developer)
const VERSION      = global.version; // don't edit

const EMAIL        = 'autoresbot@gmail.com';
const REGION       = 'Indonesia';
const WEBSITE      = 'autoresbot.com';
const DATA_OWNER   = ['917024324777','917024324777']; // bisa juga edit di database/owner.json

// Konfiqurasi Chat
const ANTI_CALL          = true; // jika true (setiap yang nelpon pribadi akan di block)
const AUTO_READ          = true; // jika true (setiap chat akan di baca/centang 2 biru)
const AUTO_BACKUP        = true; // jika true (setiap restart server, data backup di kirimkan ke wa owner);
const MIDNIGHT_RESTART   = true; // Restart setiap jam 12 malam
const PRESENCE_UPDATE    = 'available'; // unavailable, available, composing, recording, paused
const TYPE_WELCOME       = '1'; // 1, 2, 3, 4, 5, text dan random
const BG_WELCOME2        = 'https://api.autoresbot.com/api/maker/bg-default';

// Konfiqurasi Panel
const PANEL_URL          = '';
const PANEL_PLTA         = '';
const PANEL_DESCRIPTION  = 'Butuh Bantuan Hubungi 628xxxxx'
const PANEL_ID_EGG       = 15;
const PANEL_ID_LOCATION  = 1;
const PANEL_DEFAULT_DISK = 5120; // 5GB atau 0 (unlimited)
const PANEL_DEFAULT_CPU  = 90;

// antibadword di grub
const BADWORD_WARNING   = 3; // Jumlah maksimum peringatan sebelum tindakan diambil
const BADWORD_ACTION    = 'both'; // tindakan setelah warning terpenuhi (kick, block, both)

// antispam di grub
const SPAM_LIMIT        = 3; // Batas pesan dianggap spam
const SPAM_COULDOWN     = 10; // Waktu cooldown dalam detik (10 detik)
const SPAM_WARNING      = 3; // Jumlah maksimum peringatan sebelum tindakan diambil
const SPAM_ACTION       = 'both'; // tindakan setelah warning terpenuhi (kick, block, both)

const config = {
    APIKEY,
    phone_number_bot    : NOMOR_BOT,
    type_connection     : CONNECTION, 
    bot_destination     : DESTINATION,
    owner_name          : OWNER_NAME,
    owner_number        : DATA_OWNER,
    owner_website       : WEBSITE,
    owner_email         : EMAIL,
    region              : REGION,
    version             : VERSION,
    rate_limit          : RATE_LIMIT, 
    status_prefix       : true, // wajib prefix : atau false tanpa prefix
    prefix              : ['.','!','#'],
    sticker_packname    : OWNER_NAME,
    sticker_author      : `Date: ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}\nYouTube: Azhari Creative\nOwner: 0852-4615-4386`,
    mode                : MODE,
    commandSimilarity   : SIMILARITY,
    anticall            : ANTI_CALL,
    autoread            : AUTO_READ,
    autobackup          : AUTO_BACKUP,
    PresenceUpdate      : PRESENCE_UPDATE,
    typewelcome         : TYPE_WELCOME,
    bgwelcome2          : BG_WELCOME2,
    midnight_restart    : MIDNIGHT_RESTART,
    PANEL: {
        URL             : PANEL_URL,
        KEY_APPLICATION : PANEL_PLTA,
        description     : PANEL_DESCRIPTION,
        SERVER_EGG      : PANEL_ID_EGG,
        id_location     : PANEL_ID_LOCATION,
        default_disk    : PANEL_DEFAULT_DISK,
        cpu_default     : PANEL_DEFAULT_CPU
    },
    SPAM : {
        limit           : SPAM_LIMIT,
        couldown        : SPAM_COULDOWN,
        warning         : SPAM_WARNING,
        action          : SPAM_ACTION
    },
    BADWORD : {
        warning : BADWORD_WARNING,
        action  : BADWORD_ACTION
    }
}; 

module.exports = config;
