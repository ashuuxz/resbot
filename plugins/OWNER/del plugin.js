const _0x4bd645=_0x6ad1;function _0x5dae(){const _0x47a675=['80LzFMwk','25qIBVEx','path','163728kYHDpc','join','903485FsSWAz','DgxCq','4SkDqwI','kswfG','_❌\x20Plugin\x20dengan\x20nama\x20*','readdirSync','135150WjidEI','delplugin','459897KMJqMQ','451400nVeiXq','sendMessage','\x20qc.js*_','eJrqv','182832lPtQXO','SpkWg','get','7FkSXLH','./plugins/','statSync','*\x20tidak\x20ditemukan!_\x0a\x0a🔍\x20_Apakah\x20maksud\x20Anda:\x20*','isDirectory','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','unlinkSync','exports','delplugins','2385592lYexHk','trim','basename'];_0x5dae=function(){return _0x47a675;};return _0x5dae();}(function(_0x28ff39,_0x32b566){const _0x3fff30=_0x6ad1,_0x7cd1c4=_0x28ff39();while(!![]){try{const _0x531528=parseInt(_0x3fff30(0x156))/0x1+-parseInt(_0x3fff30(0x14b))/0x2*(parseInt(_0x3fff30(0x151))/0x3)+parseInt(_0x3fff30(0x152))/0x4+-parseInt(_0x3fff30(0x145))/0x5*(parseInt(_0x3fff30(0x14f))/0x6)+parseInt(_0x3fff30(0x159))/0x7*(-parseInt(_0x3fff30(0x162))/0x8)+-parseInt(_0x3fff30(0x147))/0x9+-parseInt(_0x3fff30(0x144))/0xa*(-parseInt(_0x3fff30(0x149))/0xb);if(_0x531528===_0x32b566)break;else _0x7cd1c4['push'](_0x7cd1c4['shift']());}catch(_0x43a9d5){_0x7cd1c4['push'](_0x7cd1c4['shift']());}}}(_0x5dae,0x3503c));const fs=require('fs'),path=require(_0x4bd645(0x146)),levenshtein=require('fast-levenshtein');async function handle(_0x5509f9,_0x497bc1){const _0x50e4ee=_0x4bd645,_0x504095={'DgxCq':function(_0x5502f0,_0xeef64){return _0x5502f0<_0xeef64;},'kswfG':function(_0x5a7dba,_0x4a995f){return _0x5a7dba+_0x4a995f;}},{m:_0x36192e,prefix:_0x139384,command:_0x4319e3,content:_0x582c18,remoteJid:_0x27d7c8,message:_0x82bdb2}=_0x497bc1;if(!_0x582c18['trim']())return await _0x5509f9['sendMessage'](_0x27d7c8,{'text':_0x50e4ee(0x15e)+_0x504095[_0x50e4ee(0x14c)](_0x139384,_0x4319e3)+_0x50e4ee(0x154)},{'quoted':_0x82bdb2});const _0x4cb294=_0x582c18[_0x50e4ee(0x163)](),_0x2bc92c=path[_0x50e4ee(0x148)](process['cwd'](),_0x50e4ee(0x15a));function _0xc7ead6(_0x2ff82a,_0x3f89e3){const _0x459c4f={'SpkWg':function(_0x5c7322,_0xdc661e){return _0x5c7322===_0xdc661e;},'eJrqv':function(_0xa54db3,_0x2ecbb3){const _0x48e260=_0x6ad1;return _0x504095[_0x48e260(0x14a)](_0xa54db3,_0x2ecbb3);}};let _0x47b1c7=null,_0x2d17a6=null,_0x7c2b35=Infinity;function _0x5c6f28(_0xfaf792){const _0x4fa251=_0x6ad1,_0xe589bb=fs[_0x4fa251(0x14e)](_0xfaf792);for(const _0x318120 of _0xe589bb){const _0x294d47=path[_0x4fa251(0x148)](_0xfaf792,_0x318120),_0x555384=fs[_0x4fa251(0x15b)](_0x294d47);if(_0x555384[_0x4fa251(0x15d)]())_0x5c6f28(_0x294d47);else{_0x459c4f[_0x4fa251(0x157)](_0x318120,_0x3f89e3)&&(_0x47b1c7=_0x294d47);const _0x43d5d5=levenshtein[_0x4fa251(0x158)](_0x318120,_0x3f89e3);_0x459c4f[_0x4fa251(0x155)](_0x43d5d5,_0x7c2b35)&&(_0x7c2b35=_0x43d5d5,_0x2d17a6=_0x294d47);}}}return _0x5c6f28(_0x2ff82a),{'foundFile':_0x47b1c7,'closestMatch':_0x2d17a6};}const {foundFile:_0x2b597e,closestMatch:_0x22deae}=_0xc7ead6(_0x2bc92c,_0x4cb294);if(_0x2b597e)return fs[_0x50e4ee(0x15f)](_0x2b597e),await _0x5509f9[_0x50e4ee(0x153)](_0x27d7c8,{'text':'_✅\x20Plugin\x20dengan\x20nama\x20*'+_0x4cb294+'*\x20berhasil\x20dihapus!_\x20\x0a\x0a_Restart\x20server\x20untuk\x20menerapkan\x20perubahan_'},{'quoted':_0x82bdb2});else return _0x22deae?await _0x5509f9['sendMessage'](_0x27d7c8,{'text':_0x50e4ee(0x14d)+_0x4cb294+_0x50e4ee(0x15c)+path[_0x50e4ee(0x164)](_0x22deae)+'*?_'},{'quoted':_0x82bdb2}):await _0x5509f9[_0x50e4ee(0x153)](_0x27d7c8,{'text':_0x50e4ee(0x14d)+_0x4cb294+'*\x20tidak\x20ditemukan\x20dan\x20tidak\x20ada\x20file\x20yang\x20mirip._'},{'quoted':_0x82bdb2});}function _0x6ad1(_0x10cc33,_0x5f5904){const _0x5dae92=_0x5dae();return _0x6ad1=function(_0x6ad174,_0x5a515e){_0x6ad174=_0x6ad174-0x144;let _0x652427=_0x5dae92[_0x6ad174];return _0x652427;},_0x6ad1(_0x10cc33,_0x5f5904);}module[_0x4bd645(0x160)]={'handle':handle,'Commands':[_0x4bd645(0x150),_0x4bd645(0x161)],'OnlyPremium':![],'OnlyOwner':!![]};