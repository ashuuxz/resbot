const _0x4bb812=_0x548b;(function(_0x5d7837,_0x3ed4e2){const _0x1d1d76=_0x548b,_0xcc97ba=_0x5d7837();while(!![]){try{const _0x5a6409=parseInt(_0x1d1d76(0x189))/0x1+-parseInt(_0x1d1d76(0x177))/0x2*(parseInt(_0x1d1d76(0x172))/0x3)+-parseInt(_0x1d1d76(0x178))/0x4+-parseInt(_0x1d1d76(0x171))/0x5+parseInt(_0x1d1d76(0x16c))/0x6*(parseInt(_0x1d1d76(0x173))/0x7)+parseInt(_0x1d1d76(0x185))/0x8*(parseInt(_0x1d1d76(0x184))/0x9)+-parseInt(_0x1d1d76(0x182))/0xa;if(_0x5a6409===_0x3ed4e2)break;else _0xcc97ba['push'](_0xcc97ba['shift']());}catch(_0x5336bb){_0xcc97ba['push'](_0xcc97ba['shift']());}}}(_0x33d4,0x90651));function _0x33d4(){const _0x540a50=['APIKEY','6heWgqZ','710284nyleVv','api-autoresbot','tebakbendera','url_download','toLowerCase','data','@tmpDB/tebak\x20bendera','Kesalahan\x20tidak\x20diketahui','includes','MQKxL','159540KYPIUB','get','8505927VbrjEo','8tJVRaV','XelhR','/api/game/bendera','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Mohon\x20coba\x20lagi\x20nanti.\x0a\x0a','45081bxSrRv','654DTXleC','@mess','@lib/utils','HNrzl','⏳\x20Waktu\x20habis!\x20Jawabannya\x20:\x20','696930ydbuFi','470331AyWles','25977YEGpNZ','bendera','sendMessage'];_0x33d4=function(){return _0x540a50;};return _0x33d4();}const ApiAutoresbot=require(_0x4bb812(0x179)),config=require('@config'),api=new ApiAutoresbot(config[_0x4bb812(0x176)]),mess=require(_0x4bb812(0x16d)),{logWithTime}=require(_0x4bb812(0x16e)),{addUser,removeUser,getUser,isUserPlaying}=require(_0x4bb812(0x17e));function _0x548b(_0x3cc5c8,_0x5c1465){const _0x33d421=_0x33d4();return _0x548b=function(_0x548b2c,_0x1be736){_0x548b2c=_0x548b2c-0x16c;let _0x2f9cb2=_0x33d421[_0x548b2c];return _0x2f9cb2;},_0x548b(_0x3cc5c8,_0x5c1465);}async function handle(_0x231abb,_0x163013){const _0x88046=_0x4bb812,_0x134490={'XelhR':function(_0x1740f1,_0x101b93,_0x7d3e35){return _0x1740f1(_0x101b93,_0x7d3e35);},'HNrzl':'Tebak\x20Bendera','FtDpY':function(_0x51dbc4,_0x41095d){return _0x51dbc4||_0x41095d;},'MQKxL':_0x88046(0x17f)},{remoteJid:_0x1395e9,message:_0x3f6b5a,content:_0x5331f3,fullText:_0x57528a}=_0x163013;if(!_0x57528a[_0x88046(0x180)](_0x88046(0x174)))return!![];try{const _0x2b4080=await api[_0x88046(0x183)](_0x88046(0x187)),_0x491188=_0x2b4080['data'][_0x88046(0x17b)],_0x43661b=_0x2b4080[_0x88046(0x17d)]['name'];if(isUserPlaying(_0x1395e9))return await _0x231abb[_0x88046(0x175)](_0x1395e9,{'text':mess['game']['isPlaying']},{'quoted':_0x3f6b5a});addUser(_0x1395e9,{'answer':_0x43661b[_0x88046(0x17c)](),'hadiah':0xa}),await _0x231abb[_0x88046(0x175)](_0x1395e9,{'image':{'url':_0x491188},'caption':'Sebutkan\x20Nama\x20Negara\x20Di\x20Atas\x20Ini\x0a\x0aWaktu\x20:\x2060s'},{'quoted':_0x3f6b5a}),_0x134490[_0x88046(0x186)](logWithTime,_0x134490[_0x88046(0x16f)],'Jawaban\x20:\x20'+_0x43661b),_0x134490[_0x88046(0x186)](setTimeout,async()=>{const _0x4fda02=_0x88046;isUserPlaying(_0x1395e9)&&(removeUser(_0x1395e9),await _0x231abb[_0x4fda02(0x175)](_0x1395e9,{'text':_0x4fda02(0x170)+_0x43661b},{'quoted':_0x3f6b5a}));},0xea60);}catch(_0x2fe04e){const _0x3334c1=_0x88046(0x188)+_0x134490['FtDpY'](_0x2fe04e,_0x134490[_0x88046(0x181)]);await _0x231abb[_0x88046(0x175)](_0x1395e9,{'text':_0x3334c1},{'quoted':_0x3f6b5a});}}module['exports']={'handle':handle,'Commands':['tebak',_0x4bb812(0x17a)],'OnlyPremium':![],'OnlyOwner':![]};