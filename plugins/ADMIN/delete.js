const _0x4a7586=_0x2b58;(function(_0x5830f6,_0x3c10ca){const _0x27fc11=_0x2b58,_0x1f9145=_0x5830f6();while(!![]){try{const _0x2b1c2c=parseInt(_0x27fc11(0xc6))/0x1*(parseInt(_0x27fc11(0xc1))/0x2)+parseInt(_0x27fc11(0xc4))/0x3+-parseInt(_0x27fc11(0xce))/0x4*(-parseInt(_0x27fc11(0xc9))/0x5)+-parseInt(_0x27fc11(0xc7))/0x6+parseInt(_0x27fc11(0xc8))/0x7*(parseInt(_0x27fc11(0xcc))/0x8)+parseInt(_0x27fc11(0xbf))/0x9+-parseInt(_0x27fc11(0xcb))/0xa*(parseInt(_0x27fc11(0xbe))/0xb);if(_0x2b1c2c===_0x3c10ca)break;else _0x1f9145['push'](_0x1f9145['shift']());}catch(_0x453377){_0x1f9145['push'](_0x1f9145['shift']());}}}(_0x169b,0x9eaa7));function _0x2b58(_0x55d13e,_0x6be5cd){const _0x169bed=_0x169b();return _0x2b58=function(_0x2b586d,_0x242172){_0x2b586d=_0x2b586d-0xbe;let _0x49b48f=_0x169bed[_0x2b586d];return _0x49b48f;},_0x2b58(_0x55d13e,_0x6be5cd);}const mess=require(_0x4a7586(0xd2)),{getGroupMetadata}=require('@lib/cache');function _0x169b(){const _0x5dad41=['Terjadi\x20kesalahan.\x20Silakan\x20coba\x20lagi.','Error\x20handling\x20command:','21641367OfOuTn','7026714SYuidy','admin','176138ynxjBk','sendMessage','delete','1551006UOxzlo','general','5OGEuHc','675102AwShHY','587069vVOSgA','410155ierysY','exports','10CCXyvx','32jhyNjg','error','32lJvveh','isAdmin','del','hsINB','@mess'];_0x169b=function(){return _0x5dad41;};return _0x169b();}async function handle(_0x421610,_0x5f382e){const _0x2ddaf9=_0x4a7586,_0x479078={'qPTmK':function(_0x4d76d0,_0x305ab5,_0x150888){return _0x4d76d0(_0x305ab5,_0x150888);},'hsINB':'⚠️\x20_Balas\x20pesan\x20yang\x20mau\x20di\x20hapus_','dgHaz':_0x2ddaf9(0xd4),'kchmg':_0x2ddaf9(0xd3)},{remoteJid:_0x3979a9,isGroup:_0x52f0a3,message:_0x2fcd14,isQuoted:_0x31fb74,sender:_0x159de5}=_0x5f382e;if(!_0x52f0a3)return;try{const _0x1e6edc=await _0x479078['qPTmK'](getGroupMetadata,_0x421610,_0x3979a9),_0x106e8d=_0x1e6edc['participants'],_0x2ca6c7=_0x106e8d['some'](_0x4c6c9b=>_0x4c6c9b['id']===_0x159de5&&_0x4c6c9b[_0x2ddaf9(0xc0)]);if(!_0x2ca6c7){await _0x421610[_0x2ddaf9(0xc2)](_0x3979a9,{'text':mess[_0x2ddaf9(0xc5)][_0x2ddaf9(0xcf)]},{'quoted':_0x2fcd14});return;}_0x31fb74?await _0x421610['sendMessage'](_0x3979a9,{'delete':{'remoteJid':_0x3979a9,'id':_0x31fb74['id'],'participant':_0x31fb74['sender']}}):await _0x421610[_0x2ddaf9(0xc2)](_0x3979a9,{'text':_0x479078[_0x2ddaf9(0xd1)]},{'quoted':_0x2fcd14});}catch(_0x37b19e){console[_0x2ddaf9(0xcd)](_0x479078['dgHaz'],_0x37b19e),await _0x421610[_0x2ddaf9(0xc2)](_0x3979a9,{'text':_0x479078['kchmg']});}}module[_0x4a7586(0xca)]={'handle':handle,'Commands':[_0x4a7586(0xd0),_0x4a7586(0xc3)],'OnlyPremium':![],'OnlyOwner':![]};