const _0x292ad7=_0x2d74;(function(_0x1351fb,_0x301389){const _0x791f64=_0x2d74,_0x480dca=_0x1351fb();while(!![]){try{const _0x6b66b=parseInt(_0x791f64(0xb0))/0x1+parseInt(_0x791f64(0xa5))/0x2*(parseInt(_0x791f64(0x9f))/0x3)+parseInt(_0x791f64(0x9b))/0x4*(parseInt(_0x791f64(0x95))/0x5)+-parseInt(_0x791f64(0x8f))/0x6+-parseInt(_0x791f64(0xb2))/0x7*(-parseInt(_0x791f64(0xa7))/0x8)+parseInt(_0x791f64(0xa1))/0x9+parseInt(_0x791f64(0xb7))/0xa*(-parseInt(_0x791f64(0xa3))/0xb);if(_0x6b66b===_0x301389)break;else _0x480dca['push'](_0x480dca['shift']());}catch(_0x4a12b4){_0x480dca['push'](_0x480dca['shift']());}}}(_0x2f3c,0xc1b15));function _0x2d74(_0x3c246e,_0x181ab7){const _0x2f3c0e=_0x2f3c();return _0x2d74=function(_0x2d744e,_0x576d82){_0x2d744e=_0x2d744e-0x8e;let _0x1150f3=_0x2f3c0e[_0x2d744e];return _0x1150f3;},_0x2d74(_0x3c246e,_0x181ab7);}function _0x2f3c(){const _0x3f8893=['yRojt','unlink','error','uuid','⚠️\x20_Kirim/Balas\x20video\x20dengan\x20caption\x20*','613817BznMhS','sendMessage','63YjuPvF','exports','tmp','sijjm','join','23230CrDtFe','.mp3','ahdGh','3821622onCgxK','.mp4','Error\x20in\x20handler:','mAvhF','audio/mp4','type','41970PBNFNc','lGdos','readFileSync','existsSync','zQoAi','tomp3','424eAPxtt','qqZwU','CfhOS','fluent-ffmpeg','285ZFDesL','Maaf,\x20terjadi\x20kesalahan.\x20Coba\x20lagi\x20nanti!','13888971XlfzPL','save','15103HLxKlB','key','17502gYFybT','writeFile','659232TrLwVN','readFile','File\x20media\x20tidak\x20ditemukan\x20setelah\x20diunduh.','path'];_0x2f3c=function(){return _0x3f8893;};return _0x2f3c();}const {downloadQuotedMedia,downloadMedia,reply}=require('@lib/utils'),fs=require('fs-extra'),path=require(_0x292ad7(0xaa)),ffmpeg=require(_0x292ad7(0x9e)),{v4:uuidv4}=require(_0x292ad7(0xae));async function handle(_0x14e9da,_0x5ac2a7){const _0x1b54f1=_0x292ad7,_0x5cf6e7={'qqZwU':function(_0x3fc215,_0x3d3db5){return _0x3fc215(_0x3d3db5);},'wDtdp':'mp3','CfhOS':'end','Cvoen':_0x1b54f1(0xad),'ahdGh':function(_0x279ddc,_0x16faf8){return _0x279ddc!==_0x16faf8;},'WzkaS':'video','mAvhF':function(_0x3d9dbb,_0x14d2a5,_0x57ad58){return _0x3d9dbb(_0x14d2a5,_0x57ad58);},'sijjm':function(_0x23e2e0,_0x4cc09b){return _0x23e2e0+_0x4cc09b;},'zQoAi':_0x1b54f1(0xb4),'hQxzB':function(_0x3e4d7a){return _0x3e4d7a();},'lGdos':_0x1b54f1(0x91),'yRojt':_0x1b54f1(0xa0)},{m:_0xaf099,remoteJid:_0x3075b0,message:_0x29a93a,isQuoted:_0x44e99b,type:_0x2c936d,content:_0xf0a680,prefix:_0x3d606f,command:_0x3a4190}=_0x5ac2a7;try{const _0xea6774=_0x44e99b?_0x44e99b[_0x1b54f1(0x94)]:_0x2c936d;if(_0x5cf6e7[_0x1b54f1(0x8e)](_0xea6774,_0x5cf6e7['WzkaS']))return await _0x5cf6e7[_0x1b54f1(0x92)](reply,_0xaf099,_0x1b54f1(0xaf)+_0x5cf6e7[_0x1b54f1(0xb5)](_0x3d606f,_0x3a4190)+'*_');await _0x14e9da[_0x1b54f1(0xb1)](_0x3075b0,{'react':{'text':'⏰','key':_0x29a93a[_0x1b54f1(0xa4)]}});const _0x4a47e0=_0x44e99b?await _0x5cf6e7[_0x1b54f1(0x9c)](downloadQuotedMedia,_0x29a93a):await downloadMedia(_0x29a93a),_0x26886e=path[_0x1b54f1(0xb6)](_0x5cf6e7[_0x1b54f1(0x99)],_0x4a47e0);if(!fs[_0x1b54f1(0x98)](_0x26886e))throw new Error(_0x1b54f1(0xa9));const _0x5c73a7=path[_0x1b54f1(0xb6)](__dirname,uuidv4()+_0x1b54f1(0x90)),_0x58e653=path[_0x1b54f1(0xb6)](__dirname,_0x5cf6e7['hQxzB'](uuidv4)+_0x1b54f1(0xb8)),_0x38fe5e=fs[_0x1b54f1(0x97)](_0x26886e);await fs[_0x1b54f1(0xa6)](_0x5c73a7,_0x38fe5e),await new Promise((_0x17fa5b,_0x4a6263)=>{const _0x122381=_0x1b54f1;_0x5cf6e7['qqZwU'](ffmpeg,_0x5c73a7)['toFormat'](_0x5cf6e7['wDtdp'])['on'](_0x5cf6e7[_0x122381(0x9d)],_0x17fa5b)['on'](_0x5cf6e7['Cvoen'],_0x4a6263)[_0x122381(0xa2)](_0x58e653);});const _0x3fbe9e=await fs[_0x1b54f1(0xa8)](_0x58e653);await _0x14e9da[_0x1b54f1(0xb1)](_0x3075b0,{'audio':{'url':_0x58e653},'mimetype':_0x1b54f1(0x93)},{'quoted':_0x29a93a}),await fs[_0x1b54f1(0xac)](_0x5c73a7),await fs[_0x1b54f1(0xac)](_0x58e653);}catch(_0x3988a9){console[_0x1b54f1(0xad)](_0x5cf6e7[_0x1b54f1(0x96)],_0x3988a9),await _0x14e9da[_0x1b54f1(0xb1)](_0x3075b0,{'text':_0x5cf6e7[_0x1b54f1(0xab)]},{'quoted':_0x29a93a});}}module[_0x292ad7(0xb3)]={'handle':handle,'Commands':[_0x292ad7(0x9a)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};