const _0x26d376=_0x4d60;(function(_0x3d7087,_0x498292){const _0x1dddef=_0x4d60,_0x48dfc3=_0x3d7087();while(!![]){try{const _0x3a7ce1=parseInt(_0x1dddef(0x174))/0x1*(parseInt(_0x1dddef(0x16d))/0x2)+parseInt(_0x1dddef(0x14f))/0x3+parseInt(_0x1dddef(0x169))/0x4+-parseInt(_0x1dddef(0x162))/0x5+-parseInt(_0x1dddef(0x153))/0x6*(parseInt(_0x1dddef(0x152))/0x7)+parseInt(_0x1dddef(0x16a))/0x8*(-parseInt(_0x1dddef(0x16c))/0x9)+parseInt(_0x1dddef(0x163))/0xa*(-parseInt(_0x1dddef(0x166))/0xb);if(_0x3a7ce1===_0x498292)break;else _0x48dfc3['push'](_0x48dfc3['shift']());}catch(_0x3d04fd){_0x48dfc3['push'](_0x48dfc3['shift']());}}}(_0x5b7f,0x5e332));function _0x5b7f(){const _0x3b0404=['Error:\x20Tidak\x20ada\x20URL\x20musik\x20yang\x20ditemukan\x20dalam\x20response.','Gagal\x20mengambil\x20audio\x20dari\x20TikTok.\x20Coba\x20lagi\x20nanti.','sendMessage','Kesalahan\x20saat\x20memproses\x20perintah\x20TikTok:','audio/mp4','aLzHK','620250pqroDN','70RIbZPG','URL\x20yang\x20Anda\x20masukkan\x20tidak\x20valid.\x20Pastikan\x20URL\x20berasal\x20dari\x20TikTok.','music','3135yqDxFh','tiktok.mp3','rJVTf','2582940pbVcJz','1062512qbtBeA','iuAbK','36cTEPnU','65806NDhgdf','ttmp3','ERROR-COMMAND-','message','exports','@lib/utils','@scrape/tiktok','7MLFQuX','1699989PznLAk','WFeoS','Pjzag','168FTUFDp','99894NiuWhl','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Mohon\x20coba\x20lagi\x20nanti.\x0a\x0a*Detail\x20Kesalahan:*\x20','jKxwV','key','IomVb','MdzRs','trim','lrDfS','test'];_0x5b7f=function(){return _0x3b0404;};return _0x5b7f();}const {tiktok}=require(_0x26d376(0x173)),{forceConvertToM4a}=require(_0x26d376(0x172)),{extractLink}=require(_0x26d376(0x172)),{logCustom}=require('@lib/logger');async function sendMessageWithQuote(_0x41f4e7,_0x4aa8e8,_0x1baace,_0x4da794){const _0x5e4a9b=_0x26d376;await _0x41f4e7[_0x5e4a9b(0x15e)](_0x4aa8e8,{'text':_0x4da794},{'quoted':_0x1baace});}function isTikTokUrl(_0x55b014){const _0x2fb0a9=_0x26d376;return/tiktok\.com/i[_0x2fb0a9(0x15b)](_0x55b014);}function _0x4d60(_0x2e984d,_0x4efcfb){const _0x5b7f30=_0x5b7f();return _0x4d60=function(_0x4d60bf,_0x336228){_0x4d60bf=_0x4d60bf-0x14f;let _0x1e392f=_0x5b7f30[_0x4d60bf];return _0x1e392f;},_0x4d60(_0x2e984d,_0x4efcfb);}async function handle(_0x15764c,_0x55049a){const _0x4e32bc=_0x26d376,_0x1c1698={'aLzHK':function(_0x5cbe2e,_0x3de30e){return _0x5cbe2e(_0x3de30e);},'MdzRs':function(_0x1b4cfe,_0x47da23,_0x9b1be4,_0x74f796,_0x51cc2c){return _0x1b4cfe(_0x47da23,_0x9b1be4,_0x74f796,_0x51cc2c);},'WFeoS':_0x4e32bc(0x15c),'iuAbK':function(_0x56e1a8,_0x3306ac,_0x2e10d2,_0x314f8f){return _0x56e1a8(_0x3306ac,_0x2e10d2,_0x314f8f);},'Pjzag':'info','jKxwV':_0x4e32bc(0x15d),'rJVTf':function(_0xa66c3b,_0x176e37){return _0xa66c3b(_0x176e37);},'lrDfS':_0x4e32bc(0x160),'IomVb':_0x4e32bc(0x15f)},{remoteJid:_0x256810,message:_0x5614c3,content:_0x56f714,prefix:_0xf00607,command:_0x3cba77}=_0x55049a;try{const _0x406172=_0x1c1698[_0x4e32bc(0x161)](extractLink,_0x56f714);if(!_0x56f714[_0x4e32bc(0x159)]())return _0x1c1698[_0x4e32bc(0x158)](sendMessageWithQuote,_0x15764c,_0x256810,_0x5614c3,'_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*'+(_0xf00607+_0x3cba77)+'\x20linknya*_');if(!_0x1c1698[_0x4e32bc(0x161)](isTikTokUrl,_0x56f714))return _0x1c1698['MdzRs'](sendMessageWithQuote,_0x15764c,_0x256810,_0x5614c3,_0x4e32bc(0x164));await _0x15764c[_0x4e32bc(0x15e)](_0x256810,{'react':{'text':'⏰','key':_0x5614c3[_0x4e32bc(0x156)]}});const _0x35ca6a=await tiktok(_0x406172);if(!_0x35ca6a||!_0x35ca6a[_0x4e32bc(0x165)])return console['error'](_0x1c1698[_0x4e32bc(0x150)]),_0x1c1698[_0x4e32bc(0x16b)](logCustom,_0x1c1698[_0x4e32bc(0x151)],_0x56f714,_0x4e32bc(0x16f)+_0x3cba77+'.txt'),await _0x15764c[_0x4e32bc(0x15e)](_0x256810,{'text':_0x1c1698[_0x4e32bc(0x155)]},{'quoted':_0x5614c3});let _0x3a8428=_0x35ca6a[_0x4e32bc(0x165)];try{_0x3a8428=await _0x1c1698[_0x4e32bc(0x168)](forceConvertToM4a,{'url':_0x35ca6a[_0x4e32bc(0x165)]});}catch(_0x182159){}await _0x15764c['sendMessage'](_0x256810,{'audio':{'url':_0x3a8428},'fileName':_0x4e32bc(0x167),'mimetype':_0x1c1698[_0x4e32bc(0x15a)]},{'quoted':_0x5614c3});}catch(_0xe22900){console['error'](_0x1c1698[_0x4e32bc(0x157)],_0xe22900),logCustom(_0x1c1698[_0x4e32bc(0x151)],_0x56f714,_0x4e32bc(0x16f)+_0x3cba77+'.txt');const _0x4be775=_0x4e32bc(0x154)+(_0xe22900[_0x4e32bc(0x170)]||_0xe22900);await _0x1c1698[_0x4e32bc(0x158)](sendMessageWithQuote,_0x15764c,_0x256810,_0x5614c3,_0x4be775);}}module[_0x26d376(0x171)]={'handle':handle,'Commands':['tiktokmp3',_0x26d376(0x16e)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};