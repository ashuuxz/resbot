function _0x3add(){const _0x49302d=['662904GhpuPi','133208wkKDYn','isArray','UIonB','\x0a-\x20Username:\x20','12TbfOmm','430508EaqljK','652220OxJVJT','@lib/panel','WgtNG','includes','kQoFb','wmYpr','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','_Format\x20email\x20tidak\x20valid.\x20Contoh:\x20xxx@gmail.com_','@config','5ihLYRT','Error\x20sending\x20error\x20message:','59560zTguBM','5269704tXKQIW','❌\x20Terjadi\x20kesalahan\x20saat\x20membuat\x20pengguna.\x0a','split','trim','key','401049SXslHp','\x20xxx@gmail.com\x20pass123*_','yvOsc','133JOUNTx','createadminpanel','error','110gvvykt','sendMessage','RemoteJid\x20tidak\x20tersedia\x20untuk\x20mengirim\x20pesan\x20error','Error\x20in\x20handle\x20function:','errors'];_0x3add=function(){return _0x49302d;};return _0x3add();}function _0x3a3b(_0xaceed8,_0x286eb3){const _0x3addc8=_0x3add();return _0x3a3b=function(_0x3a3be2,_0x4b9c0c){_0x3a3be2=_0x3a3be2-0x1e3;let _0x4e00b0=_0x3addc8[_0x3a3be2];return _0x4e00b0;},_0x3a3b(_0xaceed8,_0x286eb3);}const _0x39b300=_0x3a3b;(function(_0x58a53c,_0x2a9a07){const _0x396acd=_0x3a3b,_0x36b810=_0x58a53c();while(!![]){try{const _0x34f17f=parseInt(_0x396acd(0x1ef))/0x1+parseInt(_0x396acd(0x1ea))/0x2*(-parseInt(_0x396acd(0x1ee))/0x3)+-parseInt(_0x396acd(0x1f0))/0x4*(parseInt(_0x396acd(0x1f9))/0x5)+parseInt(_0x396acd(0x1e9))/0x6+-parseInt(_0x396acd(0x204))/0x7*(-parseInt(_0x396acd(0x1fb))/0x8)+parseInt(_0x396acd(0x201))/0x9*(parseInt(_0x396acd(0x1e4))/0xa)+-parseInt(_0x396acd(0x1fc))/0xb;if(_0x34f17f===_0x2a9a07)break;else _0x36b810['push'](_0x36b810['shift']());}catch(_0x45a3fe){_0x36b810['push'](_0x36b810['shift']());}}}(_0x3add,0x40793));const config=require(_0x39b300(0x1f8)),{createUser,saveUser}=require(_0x39b300(0x1f1));async function handle(_0x19584c,_0x4234fd){const _0x512257=_0x39b300,_0x3464ca={'yvOsc':function(_0x2b6843,_0x43ae01){return _0x2b6843+_0x43ae01;},'wmYpr':_0x512257(0x1f7),'WgtNG':function(_0x576957,_0x47ec0c,_0xf294b3,_0x332639,_0x731e04){return _0x576957(_0x47ec0c,_0xf294b3,_0x332639,_0x731e04);},'kQoFb':function(_0x264483){return _0x264483();},'UIonB':_0x512257(0x1fd),'LWRrC':_0x512257(0x1fa)},{remoteJid:_0x1ef6c5,message:_0x4af1e2,content:_0x43a57b,prefix:_0x2db84f,command:_0x266880}=_0x4234fd;try{if(!_0x43a57b||!_0x43a57b[_0x512257(0x1f3)]('\x20')){await _0x19584c['sendMessage'](_0x1ef6c5,{'text':_0x512257(0x1f6)+_0x3464ca[_0x512257(0x203)](_0x2db84f,_0x266880)+_0x512257(0x202)},{'quoted':_0x4af1e2});return;}const [_0x2f2a78,_0x79cdbe]=_0x43a57b[_0x512257(0x1fe)]('\x20'),_0x20428e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!_0x20428e['test'](_0x2f2a78)){await _0x19584c[_0x512257(0x1e5)](_0x1ef6c5,{'text':_0x3464ca[_0x512257(0x1f5)]},{'quoted':_0x4af1e2});return;}const _0x187130=_0x2f2a78['split']('@')[0x0];await _0x19584c['sendMessage'](_0x1ef6c5,{'react':{'text':'⏰','key':_0x4af1e2[_0x512257(0x200)]}});const _0x2d8abe=await _0x3464ca[_0x512257(0x1f2)](createUser,_0x2f2a78,_0x187130,_0x79cdbe,!![]);_0x2d8abe&&await _0x3464ca[_0x512257(0x1f4)](saveUser),await _0x19584c[_0x512257(0x1e5)](_0x1ef6c5,{'text':'✅\x20_Pengguna\x20Admin\x20Panel\x20berhasil\x20dibuat_\x0a\x0a-\x20Email:\x20'+_0x2f2a78+_0x512257(0x1ed)+_0x187130+'\x0a-\x20Password:\x20'+_0x79cdbe},{'quoted':_0x4af1e2});}catch(_0x13d498){console[_0x512257(0x1e3)](_0x512257(0x1e7),_0x13d498);let _0x583eb4=_0x3464ca[_0x512257(0x1ec)];_0x13d498[_0x512257(0x1e8)]&&Array[_0x512257(0x1eb)](_0x13d498['errors'])&&(_0x583eb4+='\x0a',_0x13d498[_0x512257(0x1e8)]['forEach'](_0x1f77e6=>{_0x583eb4+='-\x20'+_0x1f77e6['detail']+'\x0a';}));try{_0x1ef6c5?await _0x19584c['sendMessage'](_0x1ef6c5,{'text':_0x583eb4[_0x512257(0x1ff)]()},{'quoted':_0x4234fd?.['message']}):console[_0x512257(0x1e3)](_0x512257(0x1e6));}catch(_0x8b8968){console[_0x512257(0x1e3)](_0x3464ca['LWRrC'],_0x8b8968);}}}module['exports']={'handle':handle,'Commands':[_0x39b300(0x205)],'OnlyPremium':![],'OnlyOwner':!![]};