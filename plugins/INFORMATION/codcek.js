const _0x151acb=_0x573b;function _0x573b(_0x2a3b9a,_0x1df5b7){const _0x1e0226=_0x1e02();return _0x573b=function(_0x573bdb,_0x14a8f0){_0x573bdb=_0x573bdb-0x1d2;let _0xdef20f=_0x1e0226[_0x573bdb];return _0xdef20f;},_0x573b(_0x2a3b9a,_0x1df5b7);}(function(_0x46195c,_0x2e6aa8){const _0xf8a4d1=_0x573b,_0x595fd3=_0x46195c();while(!![]){try{const _0x52d04e=-parseInt(_0xf8a4d1(0x1f2))/0x1*(-parseInt(_0xf8a4d1(0x1e8))/0x2)+-parseInt(_0xf8a4d1(0x1d3))/0x3+parseInt(_0xf8a4d1(0x1df))/0x4*(-parseInt(_0xf8a4d1(0x1d6))/0x5)+parseInt(_0xf8a4d1(0x1e1))/0x6*(parseInt(_0xf8a4d1(0x1ec))/0x7)+parseInt(_0xf8a4d1(0x1e5))/0x8+parseInt(_0xf8a4d1(0x1ef))/0x9*(parseInt(_0xf8a4d1(0x1d7))/0xa)+parseInt(_0xf8a4d1(0x1db))/0xb*(-parseInt(_0xf8a4d1(0x1e9))/0xc);if(_0x52d04e===_0x2e6aa8)break;else _0x595fd3['push'](_0x595fd3['shift']());}catch(_0x2e1116){_0x595fd3['push'](_0x595fd3['shift']());}}}(_0x1e02,0x84ff1));const ApiAutoresbot=require('api-autoresbot'),config=require(_0x151acb(0x1ea)),{logCustom}=require(_0x151acb(0x1e6));function _0x1e02(){const _0x1d2634=['27444nXITgz','@config','Error:','161tbxELO','⚠️\x20_Format\x20salah.\x20Gunakan:_\x0a\x0a','Maaf,\x20tidak\x20ada\x20respons\x20dari\x20server.','3773736BelJhu','codcek','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Coba\x20lagi\x20nanti.\x0a\x0aDetail:\x20','831821iwRrtR','key','.txt','_Masukkan\x20ID\x20GAME_\x0a\x0a','info','VIBnY','ydstk','1640235bpjiSP','ERROR-COMMAND-','message','40hxMVst','20cmIrTp','UESrf','Tidak\x20diketahui','exports','7293pQnDrf','tjYmF','YJGwb','sendMessage','185644KpkstC','error','93396JFmdqz','APIKEY','WPOob','KuJFk','7604960sBhJSY','@lib/logger','\x20<user_id>','2SZnmUP'];_0x1e02=function(){return _0x1d2634;};return _0x1e02();}async function handle(_0x582824,_0x52c232){const _0x339428=_0x151acb,_0x36a509={'WPOob':function(_0x5d81f2,_0x5200f5){return _0x5d81f2+_0x5200f5;},'tjYmF':function(_0x29baf4,_0x2ff9b6){return _0x29baf4+_0x2ff9b6;},'ydstk':'/api/checker/cod-mobile','VIBnY':_0x339428(0x1d9),'rzsFn':function(_0x54a819,_0x3ba769,_0x1b55c9,_0x532ea8){return _0x54a819(_0x3ba769,_0x1b55c9,_0x532ea8);},'YJGwb':_0x339428(0x1ee),'UESrf':_0x339428(0x1eb),'KuJFk':'info'},{remoteJid:_0x383602,message:_0x1696a8,prefix:_0x3c013d,command:_0x1b6812,content:_0x36da51}=_0x52c232;try{const _0x4a9c46=_0x36da51['trim']();if(!_0x4a9c46)return await _0x582824['sendMessage'](_0x383602,{'text':_0x339428(0x1f5)+_0x36a509[_0x339428(0x1e3)](_0x3c013d,_0x1b6812)+'\x208370310025568788107'},{'quoted':_0x1696a8});const _0x4f825b=_0x4a9c46;if(!_0x4f825b)return await _0x582824[_0x339428(0x1de)](_0x383602,{'text':_0x339428(0x1ed)+_0x36a509[_0x339428(0x1dc)](_0x3c013d,_0x1b6812)+_0x339428(0x1e7)},{'quoted':_0x1696a8});await _0x582824['sendMessage'](_0x383602,{'react':{'text':'⏰','key':_0x1696a8[_0x339428(0x1f3)]}});const _0x338d1f=new ApiAutoresbot(config[_0x339428(0x1e2)]),_0x15b1ae=await _0x338d1f['get'](_0x36a509[_0x339428(0x1d2)],{'user_id':_0x4f825b});if(_0x15b1ae?.['data']){const {username:_0x5b95bf}=_0x15b1ae['data'],_0x1b9acd='🎮\x20|\x20*Call\x20OF\x20Duty*\x0a\x0a◧\x20User\x20ID\x20:\x20'+_0x4f825b+'\x0a◧\x20Username\x20:\x20'+(_0x5b95bf||_0x36a509[_0x339428(0x1f7)]);await _0x582824['sendMessage'](_0x383602,{'text':_0x1b9acd},{'quoted':_0x1696a8});}else _0x36a509['rzsFn'](logCustom,_0x339428(0x1f6),_0x36da51,_0x339428(0x1d4)+_0x1b6812+_0x339428(0x1f4)),await _0x582824['sendMessage'](_0x383602,{'text':_0x36a509[_0x339428(0x1dd)]},{'quoted':_0x1696a8});}catch(_0x2648cb){console[_0x339428(0x1e0)](_0x36a509[_0x339428(0x1d8)],_0x2648cb),logCustom(_0x36a509[_0x339428(0x1e4)],_0x36da51,_0x339428(0x1d4)+_0x1b6812+_0x339428(0x1f4)),await _0x582824[_0x339428(0x1de)](_0x383602,{'text':_0x339428(0x1f1)+(_0x2648cb[_0x339428(0x1d5)]||_0x2648cb)},{'quoted':_0x1696a8});}}module[_0x151acb(0x1da)]={'handle':handle,'Commands':[_0x151acb(0x1f0)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};