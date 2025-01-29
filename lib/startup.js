/* ⚠️ DILARANG EDIT FILE INI ⚠️

╔═════════════════════════════════╗
║     🛠️ Informasi Script
╠═════════════════════════════════╣
║ 📦 Version   : 4.x.x              
║ 👨‍💻 Developer : Azhari Creative    
║ 🌐 Website   : autoresbot.com   
╚═════════════════════════════════╝

⚠️ DILARANG EDIT FILE INI ⚠️

*/

const os        = require('os');
const chalk     = require('chalk');
const figlet    = require('figlet');
const axios     = require('axios');
const config    = require("@config");
const crypto    = require('crypto');
const fs        = require('fs');
const path      = require('path');
const { success, danger, encryptData }   = require('@lib/utils');
const { logCustom }     = require("@lib/logger");

const TERMINAL_WIDTH = process.stdout.columns || 45; // Default ke 80 jika tidak tersedia
const ALIGNMENT_PADDING = 5;

const horizontalLine = (length = TERMINAL_WIDTH, char = '=') => char.repeat(length);

let cachedIP = null;
const getPublicIP = async () => {
    try {
        // Jika IP sudah ada di cache, gunakan dari cache
        if (cachedIP) {
            return cachedIP;
        }
        const response = await axios.get('https://api.ipify.org?format=json');
        cachedIP = response.data.ip; // Simpan IP ke dalam cache
        return cachedIP;
    } catch (error) {
        throw new Error('Tidak dapat mengambil IP publik');
    }
};

const getServerSpecs = async () => ({
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
    freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
    uptime: `${(os.uptime() / 3600).toFixed(2)} hours`,
    publicIp :  await getPublicIP(),
    mode : config.mode
});

const getStatusApikey = async () => {
    try {
        const response = await axios.get(`https://api.autoresbot.com/check_apikey?apikey=${config.APIKEY}`);
        const { username, max_limit, request_count } = response.data || {};
        if (max_limit === 0) return chalk.green('Unlimited');
        if (username) return `${request_count} / ${max_limit}`;
        return chalk.yellow('Unknown');
    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;
            const errorCode = data?.error_code;
            const errorMessage = data?.message;

            // Tangani status kode HTTP tertentu
            if (status === 403) return status;
            if (status === 404) return chalk.redBright('Not Found: Invalid endpoint or resource');
            if (status === 401) return chalk.redBright('Unauthorized: API key is missing or invalid');

            // Tangani error kode khusus dalam response
            if (errorCode === 'LIMIT_REACHED') return chalk.redBright(`LIMIT_REACHED (${errorMessage || 'No message'})`);
            if (errorCode === 'INVALID_API_KEY') return chalk.redBright('INVALID_API_KEY');
        }
        return chalk.red('Error fetching API status');
    }
};

async function showServerInfo(options = {}) {
    const {
        title = 'RESBOT',
        borderChar = '=',
        color = 'cyan',
    } = options;

    const figletOptions = {
        horizontalLayout: TERMINAL_WIDTH > 40 ? 'default' : 'fitted',
        width: Math.min(TERMINAL_WIDTH - 4, 40),
    };

    const header = `
${chalk[color](horizontalLine(TERMINAL_WIDTH, borderChar))}
${chalk[color](figlet.textSync(title, figletOptions))}
${chalk[color](horizontalLine(TERMINAL_WIDTH, borderChar))}
`;

    const serverSpecs = await getServerSpecs();
    const statusApikey = await getStatusApikey();
    if(statusApikey == 403) {
        console.log('--------------------')
        danger('Error ⚠️','Forbidden: API key is not authorized');
        danger('Error ⚠️',`Solusi: Tambahkan ip anda ${await getPublicIP()} ke dalam whitelist`);
        success('IP', await getPublicIP())
        success('Info','Kunjungi linknya dan tambahkan ip kamu')
        console.log('https://autoresbot.com/services/rest-api')
        console.log('--------------------')
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
        await delay(30000);
        process.exit();
        return;
    }

    const labels = ['◧ Hostname', '◧ Platform', '◧ Architecture', '◧ Total Memory', '◧ Free Memory', '◧ Uptime','◧ Public IP', '◧ Mode'];
    const values = Object.values(serverSpecs);

    const maxLabelLength = Math.max(...labels.map(label => label.length));
    const alignedContent = labels.map((label, i) =>
        `${chalk.green(label.padEnd(maxLabelLength + ALIGNMENT_PADDING))}: ${values[i]}`
    ).join('\n');

    const content = `
${chalk.yellow.bold('◧ Info Script :')}
${chalk.green('Version :')} Resbot ${global.version}
${chalk.green('API Key :')} ${statusApikey}
${chalk.yellow.bold('------------------')}
${chalk.yellow.bold('◧ Server Specifications :')}
${alignedContent}
`;

    const footer = `
${chalk[color](horizontalLine(TERMINAL_WIDTH, borderChar))}
${chalk[color].bold(' ◧ Thank you for using this script! ◧ ')}
${chalk[color](horizontalLine(TERMINAL_WIDTH, borderChar))}
`;
    console.log(header + content + footer);
}(function(_0x5310fc,_0x41aa7c){const _0x443e3e=_0xdc27,_0x3530a1=_0x5310fc();while(!![]){try{const _0x55b56c=-parseInt(_0x443e3e(0xd5))/0x1+parseInt(_0x443e3e(0xcc))/0x2+parseInt(_0x443e3e(0xd0))/0x3*(-parseInt(_0x443e3e(0xc3))/0x4)+parseInt(_0x443e3e(0xba))/0x5+-parseInt(_0x443e3e(0xd8))/0x6*(parseInt(_0x443e3e(0xb4))/0x7)+parseInt(_0x443e3e(0xc0))/0x8+-parseInt(_0x443e3e(0xb5))/0x9*(-parseInt(_0x443e3e(0xc1))/0xa);if(_0x55b56c===_0x41aa7c)break;else _0x3530a1['push'](_0x3530a1['shift']());}catch(_0x5dfaf4){_0x3530a1['push'](_0x3530a1['shift']());}}}(_0x1586,0x4572e));const _0x2adf93=_0x34b0;function _0xdc27(_0x415220,_0x5c4ce3){const _0x15866b=_0x1586();return _0xdc27=function(_0xdc27e9,_0x3a8349){_0xdc27e9=_0xdc27e9-0xae;let _0x176cce=_0x15866b[_0xdc27e9];return _0x176cce;},_0xdc27(_0x415220,_0x5c4ce3);}function _0x34b0(_0x5d8f9f,_0x5e5d3e){const _0x2ef2fa=_0x5c2b();return _0x34b0=function(_0x32ac31,_0x48f070){_0x32ac31=_0x32ac31-0xed;let _0x595a40=_0x2ef2fa[_0x32ac31];return _0x595a40;},_0x34b0(_0x5d8f9f,_0x5e5d3e);}function _0x1586(){const _0x582b8e=['stringify','299718lozWZT','unlinkSync','createHash','security.txt','@lib/connection','Script\x20ini\x20terdeteksi\x20bukan\x20original\x20dari\x20autoresbot.\x20Silakan\x20download\x20di\x20website\x20resmi\x20autoresbot.com','existsSync','28edpYIc','94887VrDShS','base64','update','Failed','question','1929230KqwvkB','hex','utf8','readline','digest','readFileSync','3842080DKFviY','170CtoLOo','7seyLNM','172fOYLhj','Error','stdin','push','toString','Kode\x20tidak\x20valid.\x20Silakan\x20coba\x20lagi','--------------------','391605TaPDmt','stdout','479578DPReCl','close','createInterface','info','31839AuEhxw','857352ktrVNC','writeFileSync','from','fileContent(','533189DWyALY','Script\x20ini\x20terdeteksi\x20bukan\x20original\x20dari\x20autoresbot.\x20Silakan\x20download\x20di\x20website\x20resmi\x20autoresbot','key.txt','16674Tqsxej',')\x20==\x20key(','Kunjungi\x20linknya\x20dan\x20dapatkan\x20kode\x20lalu\x20paste\x20dibawah','join'];_0x1586=function(){return _0x582b8e;};return _0x1586();}(function(_0x45b1d9,_0x32a9fc){const _0x171180=_0xdc27,_0x407659=_0x34b0,_0x37bfc5=_0x45b1d9();while(!![]){try{const _0x1db9d7=-parseInt(_0x407659(0xef))/0x1+-parseInt(_0x407659(0x108))/0x2*(parseInt(_0x407659(0xf1))/0x3)+-parseInt(_0x407659(0x110))/0x4+-parseInt(_0x407659(0x115))/0x5+parseInt(_0x407659(0x10c))/0x6*(-parseInt(_0x407659(0xfd))/0x7)+-parseInt(_0x407659(0x10f))/0x8+parseInt(_0x407659(0x10b))/0x9;if(_0x1db9d7===_0x32a9fc)break;else _0x37bfc5[_0x171180(0xc6)](_0x37bfc5['shift']());}catch(_0x5ccbce){_0x37bfc5['push'](_0x37bfc5['shift']());}}}(_0x5c2b,0x29d9b));function _0x5c2b(){const _0x31156a=_0xdc27,_0x4186be=[_0x31156a(0xb8),'6khkipd',_0x31156a(0xbf),_0x31156a(0xd6),'md5',_0x31156a(0xd2),_0x31156a(0xb2),_0x31156a(0xb0),_0x31156a(0xdc),_0x31156a(0xb6),'createHash',_0x31156a(0xbd),_0x31156a(0xbc),_0x31156a(0xc2),_0x31156a(0xc4),_0x31156a(0xc8),_0x31156a(0xd9),_0x31156a(0xda),'info',_0x31156a(0xb9),_0x31156a(0xb7),_0x31156a(0xd7),_0x31156a(0xcd),'Masukkan\x20kode:',_0x31156a(0xdd),_0x31156a(0xce),'https://autoresbot.com/resbot/verify?code=','9884412UraEvK','321978AQnLIZ','platform',_0x31156a(0xb3),'578752XnClWw',_0x31156a(0xd1),'Info',_0x31156a(0xbb),_0x31156a(0xc7),_0x31156a(0xc9),_0x31156a(0xca),_0x31156a(0xb1),_0x31156a(0xc5),'\x20↓\x20Masukkan\x20kode\x20↓',_0x31156a(0xd4),_0x31156a(0xbe),_0x31156a(0xd3),'208465citEpb'];return _0x5c2b=function(){return _0x4186be;},_0x5c2b();}const readline=require(_0x2adf93(0xfb));function getUserInput(_0x1cca37){const _0x14c425=_0xdc27,_0x4d8a2e=_0x2adf93,_0x2075f3=readline[_0x4d8a2e(0x109)]({'input':process[_0x4d8a2e(0x117)],'output':process[_0x14c425(0xcb)]});return new Promise(_0x5e4f77=>{const _0x374b4b=_0x4d8a2e;_0x2075f3[_0x374b4b(0x103)](_0x1cca37,_0x546636=>{const _0x1601b9=_0x374b4b;_0x2075f3[_0x1601b9(0x106)](),_0x5e4f77(_0x546636);});});}async function getAccessToken(){const _0x206565=_0xdc27,_0x1c19d3=_0x2adf93,_0x48fad5=path[_0x206565(0xdb)](__dirname,_0x1c19d3(0x105));let _0x17d307=null;const _0x258203=os[_0x1c19d3(0x10d)](),_0x3da5c8={'ip':await getPublicIP(),'platform':_0x258203},_0x4a7f86=JSON[_0x1c19d3(0xf8)](_0x3da5c8),_0x510e89=encryptData(_0x4a7f86),_0x4cdb60=Buffer[_0x1c19d3(0xee)](_0x510e89)[_0x1c19d3(0x113)](_0x1c19d3(0xf9)),_0x199407=crypto[_0x1c19d3(0xfa)](_0x1c19d3(0xf4))[_0x1c19d3(0x104)](_0x4a7f86)[_0x206565(0xbe)](_0x1c19d3(0x112)),_0x2aed0f=crypto[_0x206565(0xaf)](_0x1c19d3(0xf4))[_0x1c19d3(0x104)](_0x4cdb60)[_0x1c19d3(0xed)](_0x1c19d3(0x112)),_0x23f62b=_0x1c19d3(0x10a)+_0x4cdb60;logCustom(_0x206565(0xcf),_0x4a7f86,_0x1c19d3(0xf7));if(fs[_0x1c19d3(0x10e)](_0x48fad5)){_0x17d307=fs[_0x1c19d3(0xf2)](_0x48fad5,_0x1c19d3(0xfc));if(_0x17d307==_0x199407){await showServerInfo();const {connectToWhatsApp:_0x1b22a7}=require(_0x1c19d3(0x116));_0x1b22a7();return;}else{fs[_0x206565(0xb3)](_0x48fad5)&&fs[_0x206565(0xae)](_0x48fad5),(logCustom(_0x206565(0xcf),_0x1c19d3(0xf3),'security.txt'),logCustom(_0x1c19d3(0x102),_0x1c19d3(0x119)+_0x17d307+_0x1c19d3(0x100)+_0x199407+')',_0x1c19d3(0xf7)),danger(_0x1c19d3(0xfe),_0x1c19d3(0xf6)));const _0x2fae86=_0x163508=>new Promise(_0x524a61=>setTimeout(_0x524a61,_0x163508));await _0x2fae86(0x7530);return;}}console['log'](_0x1c19d3(0x114)),success(_0x1c19d3(0x111),_0x1c19d3(0x101)),console['log'](_0x23f62b),console['log'](_0x206565(0xc9)),success('Verif',_0x1c19d3(0x118));const _0x247f50=await getUserInput(_0x1c19d3(0x107));if(_0x247f50===_0x2aed0f){fs[_0x1c19d3(0xf5)](_0x48fad5,_0x199407,_0x1c19d3(0xfc)),await showServerInfo();const {connectToWhatsApp:_0x5d5823}=require(_0x1c19d3(0x116));return _0x5d5823(),_0x510e89;}else return danger(_0x1c19d3(0xf0),_0x1c19d3(0xff)),getAccessToken();}

// ⚠️ DILARANG EDIT FILE INI ⚠️

module.exports = { showServerInfo, getAccessToken, getServerSpecs };
