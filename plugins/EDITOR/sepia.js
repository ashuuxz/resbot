const _0x127abf=_0x225c;(function(_0xd6ad47,_0x4db049){const _0x1c3dfd=_0x225c,_0x3cada7=_0xd6ad47();while(!![]){try{const _0x449186=-parseInt(_0x1c3dfd(0xdb))/0x1+parseInt(_0x1c3dfd(0xe3))/0x2*(-parseInt(_0x1c3dfd(0xd5))/0x3)+parseInt(_0x1c3dfd(0xce))/0x4*(parseInt(_0x1c3dfd(0xd7))/0x5)+-parseInt(_0x1c3dfd(0xe5))/0x6+-parseInt(_0x1c3dfd(0xe2))/0x7*(parseInt(_0x1c3dfd(0xd8))/0x8)+parseInt(_0x1c3dfd(0xed))/0x9+parseInt(_0x1c3dfd(0xec))/0xa;if(_0x449186===_0x4db049)break;else _0x3cada7['push'](_0x3cada7['shift']());}catch(_0x3fa79b){_0x3cada7['push'](_0x3cada7['shift']());}}}(_0x2533,0xdcb6f));const fs=require('fs'),sharp=require(_0x127abf(0xea)),mess=require(_0x127abf(0xd1)),{downloadQuotedMedia,downloadMedia}=require(_0x127abf(0xd3));function _0x2533(){const _0x34f3d9=['473390TSCHUu','fcZGr','1766520ybUrXT','sROmt','sendMessage','success','.jpg','sharp','exports','5898320QOpMay','9324288mOGHwv','tmp/','File\x20hasil\x20sepia\x20tidak\x20ditemukan.','tmp/tmp_sepia','yOihx','SZuwr','Message','sepia','48476fgRmFI','Error\x20saat\x20memproses\x20gambar:','tint','@mess','key','@lib/utils','⚠️\x20_File\x20gambar\x20tidak\x20ditemukan._','9HZkoWD','type','355JjOvoD','248fKhcOl','SrgyR','error','395543lbXjHD','existsSync','toFile','imageMessage','_Terjadi\x20kesalahan\x20saat\x20memproses\x20gambar._','wKNUo','now','41146RdYPyR'];_0x2533=function(){return _0x34f3d9;};return _0x2533();}function _0x225c(_0x1fb363,_0x2f4bc0){const _0x25337d=_0x2533();return _0x225c=function(_0x225c46,_0x268bbc){_0x225c46=_0x225c46-0xcd;let _0x5ebb0f=_0x25337d[_0x225c46];return _0x5ebb0f;},_0x225c(_0x1fb363,_0x2f4bc0);}async function handle(_0x478710,_0x4bb149){const _0x30dcbf=_0x127abf,_0x34f7ce={'fcZGr':function(_0x2ebf4f,_0x28bbeb){return _0x2ebf4f!==_0x28bbeb;},'tjLdY':_0x30dcbf(0xde),'SrgyR':function(_0x10f87a,_0x152e65){return _0x10f87a+_0x152e65;},'wKNUo':function(_0x30c8e5,_0x259ae4){return _0x30c8e5(_0x259ae4);},'sROmt':function(_0x7a6d9f,_0x3d1a1c){return _0x7a6d9f(_0x3d1a1c);},'ViFtZ':_0x30dcbf(0xef),'SZuwr':_0x30dcbf(0xcf),'yOihx':_0x30dcbf(0xdf)},{remoteJid:_0x2201d9,message:_0x34b55d,content:_0x583f5c,isQuoted:_0x25f7d3,type:_0x186eac,prefix:_0x1d7fb4,command:_0x593dd5}=_0x4bb149,_0x471c00=_0x25f7d3?_0x25f7d3[_0x30dcbf(0xd6)]+_0x30dcbf(0xf3):_0x186eac+_0x30dcbf(0xf3);if(_0x34f7ce[_0x30dcbf(0xe4)](_0x471c00,_0x34f7ce['tjLdY'])){await _0x478710['sendMessage'](_0x2201d9,{'text':'⚠️\x20_Kirim/Balas\x20gambar\x20dengan\x20caption\x20*'+_0x34f7ce[_0x30dcbf(0xd9)](_0x1d7fb4,_0x593dd5)+'*_'},{'quoted':_0x34b55d});return;}try{const _0x4a13a8=_0x25f7d3?await _0x34f7ce[_0x30dcbf(0xe0)](downloadQuotedMedia,_0x34b55d):await _0x34f7ce[_0x30dcbf(0xe6)](downloadMedia,_0x34b55d),_0xd4e4fc=_0x30dcbf(0xee)+_0x4a13a8;if(!fs[_0x30dcbf(0xdc)](_0xd4e4fc)){await _0x478710[_0x30dcbf(0xe7)](_0x2201d9,{'text':_0x30dcbf(0xd4)},{'quoted':_0x34b55d});return;}await _0x478710[_0x30dcbf(0xe7)](_0x2201d9,{'react':{'text':'⏰','key':_0x34b55d[_0x30dcbf(0xd2)]}});const _0xbb388f=_0x30dcbf(0xf0)+Date[_0x30dcbf(0xe1)]()+_0x30dcbf(0xe9);await sharp(_0xd4e4fc)['modulate']({'saturation':0.5})[_0x30dcbf(0xd0)]({'r':0x70,'g':0x42,'b':0x14})[_0x30dcbf(0xdd)](_0xbb388f);if(fs[_0x30dcbf(0xdc)](_0xbb388f))await _0x478710[_0x30dcbf(0xe7)](_0x2201d9,{'image':{'url':_0xbb388f},'caption':mess['general'][_0x30dcbf(0xe8)]},{'quoted':_0x34b55d});else throw new Error(_0x34f7ce['ViFtZ']);}catch(_0x30952a){console[_0x30dcbf(0xda)](_0x34f7ce[_0x30dcbf(0xf2)],_0x30952a),await _0x478710[_0x30dcbf(0xe7)](_0x2201d9,{'text':_0x34f7ce[_0x30dcbf(0xf1)]},{'quoted':_0x34b55d});}}module[_0x127abf(0xeb)]={'handle':handle,'Commands':[_0x127abf(0xcd)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};