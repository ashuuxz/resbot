const _0x3a9be8=_0x4e27;function _0x36a2(){const _0x4dae35=['@mess','bMpfZ','949845hExZqg','⚠️\x20_Kirim/Balas\x20gambar\x20dengan\x20caption\x20*','.jpg','sharp','bpWTU','toFile','iAWZS','error','_File\x20gambar\x20tidak\x20ditemukan._','sharpen','9334728jMWIVx','type','_Terjadi\x20kesalahan\x20saat\x20memproses\x20gambar._','RAIpt','PuuVF','tajam','Message','Error\x20saat\x20memproses\x20gambar:','2046288nAmCPt','imageMessage','RXqWe','existsSync','success','UYpms','key','oQaYr','2438744VBzTdx','exports','1753070pIAixQ','JFFDe','677101vmHUbq','File\x20hasil\x20mempertajam\x20tidak\x20ditemukan.','now','eGtjv','sendMessage','4Ivzcoa','general','5955579XNakOX','tmp/tmp_sharpen_','12qMrkks'];_0x36a2=function(){return _0x4dae35;};return _0x36a2();}(function(_0x16b166,_0x1d4fd2){const _0x31778b=_0x4e27,_0x4d1814=_0x16b166();while(!![]){try{const _0x42e318=parseInt(_0x31778b(0xfb))/0x1+parseInt(_0x31778b(0x119))/0x2+parseInt(_0x31778b(0x107))/0x3*(parseInt(_0x31778b(0x100))/0x4)+-parseInt(_0x31778b(0xf9))/0x5*(-parseInt(_0x31778b(0x104))/0x6)+-parseInt(_0x31778b(0x102))/0x7+-parseInt(_0x31778b(0xf7))/0x8+-parseInt(_0x31778b(0x111))/0x9;if(_0x42e318===_0x1d4fd2)break;else _0x4d1814['push'](_0x4d1814['shift']());}catch(_0x1e8d99){_0x4d1814['push'](_0x4d1814['shift']());}}}(_0x36a2,0x803c8));const fs=require('fs'),sharp=require(_0x3a9be8(0x10a)),mess=require(_0x3a9be8(0x105)),{downloadQuotedMedia,downloadMedia}=require('@lib/utils');function _0x4e27(_0x4c9512,_0x5ac49b){const _0x36a27e=_0x36a2();return _0x4e27=function(_0x4e2716,_0x562f28){_0x4e2716=_0x4e2716-0xf0;let _0xa24e5=_0x36a27e[_0x4e2716];return _0xa24e5;},_0x4e27(_0x4c9512,_0x5ac49b);}async function handle(_0x439f33,_0x1fa44c){const _0x310f36=_0x3a9be8,_0x5474bf={'JFFDe':function(_0x316f31,_0x1799ec){return _0x316f31!==_0x1799ec;},'eEaWs':_0x310f36(0xf0),'UYpms':function(_0x4662fa,_0x1f603b){return _0x4662fa+_0x1f603b;},'oQaYr':function(_0x297f6b,_0xa975a0){return _0x297f6b(_0xa975a0);},'bMpfZ':function(_0x145d88,_0x470246){return _0x145d88<_0x470246;},'iAWZS':'⚠️\x20_Masukkan\x20nilai\x20ketajaman\x20antara\x201\x20-\x20100_','eGtjv':function(_0x85a4c5,_0x50617e){return _0x85a4c5*_0x50617e;},'UyuQR':function(_0x1fa877,_0x58806d){return _0x1fa877/_0x58806d;},'bpWTU':function(_0x4e0f0e,_0x32d0ef){return _0x4e0f0e(_0x32d0ef);},'RXqWe':_0x310f36(0x10f),'TXFGY':function(_0xfef70,_0x2f3d56){return _0xfef70(_0x2f3d56);},'RAIpt':_0x310f36(0xfc),'PuuVF':_0x310f36(0x118)},{remoteJid:_0x547181,message:_0x43922d,content:_0x17882e,isQuoted:_0x1e872d,type:_0x5827ee,prefix:_0x3774a7,command:_0x44ced6}=_0x1fa44c,_0x1e8ff8=_0x1e872d?_0x1e872d[_0x310f36(0x112)]+'Message':_0x5827ee+_0x310f36(0x117);if(_0x5474bf[_0x310f36(0xfa)](_0x1e8ff8,_0x5474bf['eEaWs'])){await _0x439f33[_0x310f36(0xff)](_0x547181,{'text':_0x310f36(0x108)+_0x5474bf[_0x310f36(0xf4)](_0x3774a7,_0x44ced6)+'*_'},{'quoted':_0x43922d});return;}const _0x1ad0e3=_0x5474bf[_0x310f36(0xf6)](parseFloat,_0x17882e);if(_0x5474bf[_0x310f36(0xf6)](isNaN,_0x1ad0e3)||_0x5474bf[_0x310f36(0x106)](_0x1ad0e3,0x1)||_0x1ad0e3>0x64){await _0x439f33[_0x310f36(0xff)](_0x547181,{'text':_0x5474bf[_0x310f36(0x10d)]},{'quoted':_0x43922d});return;}const _0x33d64e=_0x5474bf[_0x310f36(0xf4)](_0x5474bf[_0x310f36(0xfe)](_0x5474bf['UyuQR'](_0x1ad0e3,0x64),9.9),0.1);try{const _0xcecc0c=_0x1e872d?await _0x5474bf[_0x310f36(0x10b)](downloadQuotedMedia,_0x43922d):await _0x5474bf[_0x310f36(0x10b)](downloadMedia,_0x43922d),_0x2ae270='tmp/'+_0xcecc0c;if(!fs[_0x310f36(0xf2)](_0x2ae270)){await _0x439f33['sendMessage'](_0x547181,{'text':_0x5474bf[_0x310f36(0xf1)]},{'quoted':_0x43922d});return;}await _0x439f33[_0x310f36(0xff)](_0x547181,{'react':{'text':'⏰','key':_0x43922d[_0x310f36(0xf5)]}});const _0x4cf704=_0x310f36(0x103)+Date[_0x310f36(0xfd)]()+_0x310f36(0x109);await _0x5474bf['TXFGY'](sharp,_0x2ae270)[_0x310f36(0x110)]({'sigma':_0x33d64e})[_0x310f36(0x10c)](_0x4cf704);if(fs[_0x310f36(0xf2)](_0x4cf704))await _0x439f33[_0x310f36(0xff)](_0x547181,{'image':{'url':_0x4cf704},'caption':mess[_0x310f36(0x101)][_0x310f36(0xf3)]},{'quoted':_0x43922d});else throw new Error(_0x5474bf[_0x310f36(0x114)]);}catch(_0x35d6eb){console[_0x310f36(0x10e)](_0x5474bf[_0x310f36(0x115)],_0x35d6eb),await _0x439f33['sendMessage'](_0x547181,{'text':_0x310f36(0x113)},{'quoted':_0x43922d});}}module[_0x3a9be8(0xf8)]={'handle':handle,'Commands':[_0x3a9be8(0x116)],'OnlyPremium':![],'OnlyOwner':![],'limitDeduction':0x1};