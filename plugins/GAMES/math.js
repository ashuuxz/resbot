const _0xad4677=_0x52cd;(function(_0x3bb5a5,_0x30265e){const _0x15c092=_0x52cd,_0x49a17b=_0x3bb5a5();while(!![]){try{const _0x1d7f7a=parseInt(_0x15c092(0x1d5))/0x1+parseInt(_0x15c092(0x1c6))/0x2+parseInt(_0x15c092(0x1cb))/0x3+-parseInt(_0x15c092(0x1d1))/0x4*(parseInt(_0x15c092(0x1c9))/0x5)+-parseInt(_0x15c092(0x1c3))/0x6+parseInt(_0x15c092(0x1d0))/0x7*(-parseInt(_0x15c092(0x1e3))/0x8)+-parseInt(_0x15c092(0x1d3))/0x9*(-parseInt(_0x15c092(0x1cf))/0xa);if(_0x1d7f7a===_0x30265e)break;else _0x49a17b['push'](_0x49a17b['shift']());}catch(_0x2e6b7e){_0x49a17b['push'](_0x49a17b['shift']());}}}(_0x5b51,0xdb4cb));const mess=require(_0xad4677(0x1cd)),{addUser,removeUser,isUserPlaying}=require(_0xad4677(0x1e7));function _0x5b51(){const _0x173d7c=['1674182MqzLjg','game','isPlaying','1376495DiBbav','Mode\x20tidak\x20valid!\x20\x0a\x0aMode\x20yang\x20tersedia:\x20','2248314wVkFlY','Jawaban\x20:\x20','@mess','trim','10SvLmQr','9695YpZvJn','20WVYzRY','BoKFm','3235923UOQCsr','jawaban','782399kqyJJp','toLowerCase','RHEvD','*Berapa\x20hasil\x20dari:\x20','join','sendMessage','Math','\x20|\x20','KaaEm','KjTvU','waktu','Contoh\x20penggunaan:\x20*math\x20medium*\x0a\x0aMode\x20yang\x20tersedia:\x20','*?\x0a\x0aWaktu:\x20','@lib/utils','1272XzZiwL','Waktu\x20habis!\x20Jawabannya\x20:\x20','soal','keys','@tmpDB/math','1401084tcVxqU','exports','toFixed'];_0x5b51=function(){return _0x173d7c;};return _0x5b51();}let {genMath,modes}=require('@games/math');function _0x52cd(_0x51af21,_0x4817ad){const _0x5b5187=_0x5b51();return _0x52cd=function(_0x52cdb8,_0x4f85b7){_0x52cdb8=_0x52cdb8-0x1c3;let _0x18260c=_0x5b5187[_0x52cdb8];return _0x18260c;},_0x52cd(_0x51af21,_0x4817ad);}const {logWithTime}=require(_0xad4677(0x1e2));async function handle(_0x24cd21,_0x2e8941){const _0x278f2e=_0xad4677,_0x502f87={'BoKFm':function(_0x887450,_0x174b4c){return _0x887450(_0x174b4c);},'KaaEm':function(_0x39e180,_0x4aedc4){return _0x39e180(_0x4aedc4);},'KjTvU':function(_0x4793ce,_0x1bb2a5){return _0x4793ce(_0x1bb2a5);},'RHEvD':'Terjadi\x20kesalahan\x20saat\x20memulai\x20permainan.\x20Silakan\x20coba\x20lagi\x20nanti.'},{remoteJid:_0x12f607,message:_0x287468,sender:_0x56d238,isGroup:_0x43cf7a,command:_0x3f3878,content:_0x5846a3}=_0x2e8941,_0x238989=_0x502f87[_0x278f2e(0x1dd)](isUserPlaying,_0x12f607);if(_0x238989)return _0x24cd21[_0x278f2e(0x1da)](_0x12f607,{'text':mess[_0x278f2e(0x1c7)][_0x278f2e(0x1c8)]},{'quoted':_0x287468});if(!_0x5846a3||_0x5846a3[_0x278f2e(0x1ce)]()==='')return _0x24cd21[_0x278f2e(0x1da)](_0x12f607,{'text':_0x278f2e(0x1e0)+Object[_0x278f2e(0x1e6)](modes)[_0x278f2e(0x1d9)](_0x278f2e(0x1dc))},{'quoted':_0x287468});const _0x27920f=_0x5846a3[_0x278f2e(0x1ce)]()[_0x278f2e(0x1d6)]();if(!modes[_0x27920f])return _0x24cd21[_0x278f2e(0x1da)](_0x12f607,{'text':_0x278f2e(0x1ca)+Object['keys'](modes)[_0x278f2e(0x1d9)](_0x278f2e(0x1dc))},{'quoted':_0x287468});let _0x5da053;try{_0x5da053=await _0x502f87[_0x278f2e(0x1de)](genMath,_0x27920f);}catch(_0x24cda2){return _0x24cd21[_0x278f2e(0x1da)](_0x12f607,{'text':_0x502f87[_0x278f2e(0x1d7)]},{'quoted':_0x287468});}addUser(_0x12f607,_0x5da053);const _0x3d63dc=(_0x5da053['waktu']/0x3e8)[_0x278f2e(0x1c5)](0x2);await _0x24cd21[_0x278f2e(0x1da)](_0x12f607,{'text':_0x278f2e(0x1d8)+_0x5da053[_0x278f2e(0x1e5)][_0x278f2e(0x1d6)]()+_0x278f2e(0x1e1)+_0x3d63dc+'\x20detik'},{'quoted':_0x287468}),logWithTime(_0x278f2e(0x1db),_0x278f2e(0x1cc)+_0x5da053[_0x278f2e(0x1d4)]),setTimeout(async()=>{const _0xf006a2=_0x278f2e;_0x502f87[_0xf006a2(0x1d2)](isUserPlaying,_0x12f607)&&(_0x502f87['BoKFm'](removeUser,_0x12f607),await _0x24cd21['sendMessage'](_0x12f607,{'text':_0xf006a2(0x1e4)+_0x5da053[_0xf006a2(0x1d4)]},{'quoted':_0x287468}));},_0x5da053[_0x278f2e(0x1df)]);}module[_0xad4677(0x1c4)]={'handle':handle,'Commands':['kuismath','math'],'OnlyPremium':![],'OnlyOwner':![]};