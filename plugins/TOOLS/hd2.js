const _0x51a595=_0x3c30;(function(_0x22a4af,_0x452de8){const _0x409d96=_0x3c30,_0x18e1d7=_0x22a4af();while(!![]){try{const _0x3f2fc0=parseInt(_0x409d96(0x207))/0x1*(parseInt(_0x409d96(0x206))/0x2)+parseInt(_0x409d96(0x1f8))/0x3+-parseInt(_0x409d96(0x201))/0x4+-parseInt(_0x409d96(0x1f7))/0x5*(-parseInt(_0x409d96(0x20a))/0x6)+parseInt(_0x409d96(0x202))/0x7*(parseInt(_0x409d96(0x1fd))/0x8)+parseInt(_0x409d96(0x200))/0x9+-parseInt(_0x409d96(0x1f6))/0xa;if(_0x3f2fc0===_0x452de8)break;else _0x18e1d7['push'](_0x18e1d7['shift']());}catch(_0x18e198){_0x18e1d7['push'](_0x18e1d7['shift']());}}}(_0x2c0b,0x5e966));function _0x3c30(_0x5d2d9a,_0x126483){const _0x2c0b98=_0x2c0b();return _0x3c30=function(_0x3c30bc,_0x8d6b71){_0x3c30bc=_0x3c30bc-0x1ed;let _0x26bae2=_0x2c0b98[_0x3c30bc];return _0x26bae2;},_0x3c30(_0x5d2d9a,_0x126483);}const {ReminiV2}=require(_0x51a595(0x1fc)),{downloadQuotedMedia,downloadMedia,reply}=require(_0x51a595(0x1f3)),fs=require('fs'),path=require(_0x51a595(0x204)),mess=require('@mess');async function handle(_0x28f463,_0xd54f32){const _0x5902e7=_0x51a595,_0x4bcc7f={'VETqp':function(_0x229e65,_0x155233){return _0x229e65!==_0x155233;},'gpfNl':'image','KKuBg':function(_0x152d83,_0xecea2c,_0x299d39){return _0x152d83(_0xecea2c,_0x299d39);},'uCemj':function(_0x269529,_0x5c667e){return _0x269529(_0x5c667e);},'EXPKQ':_0x5902e7(0x1f0),'CKYag':function(_0x173523,_0x1642eb,_0x3ca3fb){return _0x173523(_0x1642eb,_0x3ca3fb);}},{m:_0x509072,remoteJid:_0x41e372,message:_0x215014,content:_0x58ee83,prefix:_0x126d63,command:_0x2491a9,type:_0x404d80,isQuoted:_0x345a28}=_0xd54f32;try{const _0x387130=_0x345a28?_0x345a28['type']:_0x404d80;if(_0x4bcc7f[_0x5902e7(0x1fa)](_0x387130,_0x4bcc7f[_0x5902e7(0x1f9)]))return await _0x4bcc7f[_0x5902e7(0x1fb)](reply,_0x509072,'⚠️\x20_Kirim/Balas\x20gambar\x20dengan\x20caption\x20*'+(_0x126d63+_0x2491a9)+'*_');await _0x28f463['sendMessage'](_0x41e372,{'react':{'text':'⏰','key':_0x215014[_0x5902e7(0x1ff)]}});const _0x411234=_0x345a28?await downloadQuotedMedia(_0x215014):await _0x4bcc7f[_0x5902e7(0x1ee)](downloadMedia,_0x215014),_0x2d9a2b=path[_0x5902e7(0x203)](_0x4bcc7f['EXPKQ'],_0x411234);if(!fs['existsSync'](_0x2d9a2b))throw new Error('File\x20media\x20tidak\x20ditemukan\x20setelah\x20diunduh.');const _0x1e4075=fs[_0x5902e7(0x208)](_0x2d9a2b),_0x230f9c=await _0x4bcc7f[_0x5902e7(0x1ee)](ReminiV2,_0x1e4075);await _0x28f463[_0x5902e7(0x1fe)](_0x41e372,{'image':_0x230f9c,'caption':mess['general'][_0x5902e7(0x1f4)]},{'quoted':_0x215014});}catch(_0x5e05a6){console[_0x5902e7(0x205)](_0x5902e7(0x209),_0x5e05a6);const _0x40e76a=_0x5902e7(0x1ef);await _0x4bcc7f[_0x5902e7(0x1f1)](reply,_0x509072,_0x40e76a);}}module[_0x51a595(0x1f2)]={'handle':handle,'Commands':[_0x51a595(0x1f5),_0x51a595(0x1ed)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};function _0x2c0b(){const _0x3ea144=['tmp','CKYag','exports','@lib/utils','success','hd2','14337080UlKnSn','1240KRgubB','738993oIutss','gpfNl','VETqp','KKuBg','@scrape/remini','1066792SIBprs','sendMessage','key','3185910QGNEsv','1103180cbsoEX','7hXmXat','join','path','error','2BDhseX','622487JMTNGA','readFileSync','Kesalahan\x20saat\x20memproses\x20perintah\x20Hd:','17922yobCYJ','remini2','uCemj','_Terjadi\x20kesalahan\x20saat\x20memproses\x20gambar._\x0a\x0aCoba\x20gunakan\x20*.hd3*'];_0x2c0b=function(){return _0x3ea144;};return _0x2c0b();}