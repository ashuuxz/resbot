const _0x489f01=_0x27d6;(function(_0x49808f,_0xf8f192){const _0x5d2289=_0x27d6,_0x22c0f9=_0x49808f();while(!![]){try{const _0x27a2cb=-parseInt(_0x5d2289(0x1ad))/0x1*(-parseInt(_0x5d2289(0x199))/0x2)+parseInt(_0x5d2289(0x1a5))/0x3*(parseInt(_0x5d2289(0x1ab))/0x4)+-parseInt(_0x5d2289(0x19a))/0x5*(-parseInt(_0x5d2289(0x198))/0x6)+-parseInt(_0x5d2289(0x185))/0x7+-parseInt(_0x5d2289(0x182))/0x8*(parseInt(_0x5d2289(0x19d))/0x9)+-parseInt(_0x5d2289(0x1a0))/0xa*(-parseInt(_0x5d2289(0x180))/0xb)+-parseInt(_0x5d2289(0x18e))/0xc*(parseInt(_0x5d2289(0x191))/0xd);if(_0x27a2cb===_0xf8f192)break;else _0x22c0f9['push'](_0x22c0f9['shift']());}catch(_0x4d453e){_0x22c0f9['push'](_0x22c0f9['shift']());}}}(_0x4477,0xd56d4));const fs=require(_0x489f01(0x190)),path=require(_0x489f01(0x19f)),glob=require(_0x489f01(0x1a9)),JavaScriptObfuscator=require(_0x489f01(0x1a3)),pluginsDir=path['join'](process[_0x489f01(0x1aa)](),'plugins'),backupDir=path[_0x489f01(0x195)](process['cwd'](),'plugins_backup');async function encryptFilesInPlugins(){const _0x2815b=_0x489f01,_0x1abed1={'hogfS':_0x2815b(0x18f),'GJJDy':_0x2815b(0x19c)};!fs['existsSync'](backupDir)&&(await fs[_0x2815b(0x189)](pluginsDir,backupDir),console[_0x2815b(0x188)](_0x1abed1[_0x2815b(0x194)]));const _0x284e77=glob[_0x2815b(0x192)](pluginsDir+_0x2815b(0x181));for(const _0x527a09 of _0x284e77){try{const _0x5e7c22=await fs[_0x2815b(0x18c)](_0x527a09,_0x1abed1[_0x2815b(0x193)]),_0x37f387=JavaScriptObfuscator[_0x2815b(0x197)](_0x5e7c22,{'compact':!![],'controlFlowFlattening':!![]})[_0x2815b(0x1a7)]();await fs['writeFile'](_0x527a09,_0x37f387,_0x1abed1[_0x2815b(0x193)]),console[_0x2815b(0x188)](_0x2815b(0x18a)+_0x527a09);}catch(_0x5bbbb5){console[_0x2815b(0x1a2)](_0x2815b(0x183)+_0x527a09,_0x5bbbb5);}}}async function decryptFilesInPlugins(){const _0x1c5f78=_0x489f01,_0xc2d66c={'RNnzu':_0x1c5f78(0x184),'FSBgh':_0x1c5f78(0x1ac),'cUzgw':_0x1c5f78(0x1a6)};if(!fs[_0x1c5f78(0x1a8)](backupDir))return console[_0x1c5f78(0x188)](_0xc2d66c[_0x1c5f78(0x1a1)]),_0xc2d66c['FSBgh'];return await fs[_0x1c5f78(0x189)](backupDir,pluginsDir,{'overwrite':!![]}),console[_0x1c5f78(0x188)](_0x1c5f78(0x18b)),_0xc2d66c['cUzgw'];}function _0x27d6(_0x5c7f9c,_0x4f5156){const _0x44774e=_0x4477();return _0x27d6=function(_0x27d6b4,_0x5b105a){_0x27d6b4=_0x27d6b4-0x180;let _0x323782=_0x44774e[_0x27d6b4];return _0x323782;},_0x27d6(_0x5c7f9c,_0x4f5156);}async function handle(_0x130f97,_0x34ea77){const _0x554a54=_0x489f01,_0x356cab={'KSguZ':function(_0x398329,_0x3970db){return _0x398329===_0x3970db;},'omlPz':function(_0x4f7933){return _0x4f7933();},'fMYXE':_0x554a54(0x186)},{remoteJid:_0x32044c,message:_0x40c6ee,command:_0xe0ddc}=_0x34ea77;if(_0x356cab[_0x554a54(0x187)](_0xe0ddc,_0x554a54(0x19b)))await _0x356cab[_0x554a54(0x18d)](encryptFilesInPlugins),await _0x130f97['sendMessage'](_0x32044c,{'text':_0x356cab['fMYXE']},{'quoted':_0x40c6ee});else{if(_0x356cab[_0x554a54(0x187)](_0xe0ddc,'dec')){const _0x243224=await decryptFilesInPlugins();await _0x130f97[_0x554a54(0x196)](_0x32044c,{'text':_0x243224},{'quoted':_0x40c6ee});}}}module[_0x489f01(0x19e)]={'handle':handle,'Commands':[_0x489f01(0x19b),_0x489f01(0x1a4)],'OnlyPremium':![],'OnlyOwner':!![]};function _0x4477(){const _0x1eb448=['dec','543EEEzLa','✅\x20_Semua\x20file\x20.js\x20di\x20folder\x20plugins\x20telah\x20dikembalikan\x20dari\x20backup._','getObfuscatedCode','existsSync','glob','cwd','24968GyFrWj','❌\x20_Gagal\x20mengembalikan\x20file,\x20backup\x20tidak\x20ditemukan._','6685VfUDfI','11871365jgKrwA','/**/*.js','296112wmiDOu','Failed\x20to\x20encrypt:\x20','Backup\x20tidak\x20ditemukan,\x20tidak\x20bisa\x20mengembalikan\x20file.','2647652lsKOkp','✅\x20_Semua\x20file\x20.js\x20di\x20folder\x20plugins\x20telah\x20dienkripsi.\x20Backup\x20tersimpan\x20di\x20plugins_backup._','KSguZ','log','copy','Encrypted:\x20','File\x20asli\x20telah\x20dikembalikan\x20dari\x20backup.','readFile','omlPz','1068180wWRAhq','Backup\x20dibuat\x20sebelum\x20enkripsi.','fs-extra','65PwQqIm','sync','GJJDy','hogfS','join','sendMessage','obfuscate','39480jPckDy','112KNHBPu','30LkghjI','enc','utf8','225AKVbaz','exports','path','10znxpEP','RNnzu','error','javascript-obfuscator'];_0x4477=function(){return _0x1eb448;};return _0x4477();}