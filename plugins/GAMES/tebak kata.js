const _0x438e02=_0x5deb;(function(_0x41c0af,_0x5b3d78){const _0x9ab829=_0x5deb,_0x4c1e20=_0x41c0af();while(!![]){try{const _0xef2b9f=-parseInt(_0x9ab829(0xd5))/0x1+-parseInt(_0x9ab829(0xd9))/0x2+-parseInt(_0x9ab829(0xe0))/0x3*(-parseInt(_0x9ab829(0xd1))/0x4)+parseInt(_0x9ab829(0xee))/0x5+parseInt(_0x9ab829(0xcc))/0x6*(parseInt(_0x9ab829(0xcb))/0x7)+parseInt(_0x9ab829(0xd3))/0x8+-parseInt(_0x9ab829(0xcd))/0x9*(parseInt(_0x9ab829(0xd0))/0xa);if(_0xef2b9f===_0x5b3d78)break;else _0x4c1e20['push'](_0x4c1e20['shift']());}catch(_0x59d989){_0x4c1e20['push'](_0x4c1e20['shift']());}}}(_0x5d83,0x1dc80));function _0x5deb(_0x946232,_0x2ec4b3){const _0x5d83ab=_0x5d83();return _0x5deb=function(_0x5deb42,_0x282021){_0x5deb42=_0x5deb42-0xcb;let _0x2c20fd=_0x5d83ab[_0x5deb42];return _0x2c20fd;},_0x5deb(_0x946232,_0x2ec4b3);}const ApiAutoresbot=require(_0x438e02(0xce)),config=require(_0x438e02(0xed)),api=new ApiAutoresbot(config[_0x438e02(0xdf)]),mess=require(_0x438e02(0xe7)),{logWithTime}=require(_0x438e02(0xd7)),{addUser,removeUser,getUser,isUserPlaying}=require(_0x438e02(0xe8));function _0x5d83(){const _0xc1f125=['toLowerCase','@config','958050EVXzfg','486906fQhjkB','6Qbeyoh','8181tmiOlL','api-autoresbot','Silahkan\x20Jawab\x20Pertanyaan\x20Berikut\x0a\x0a','1780iBMRGe','148fUKmup','YZgKg','866272NwdlMh','⏳\x20Waktu\x20habis!\x20Jawabannya\x20:\x20','131761gBxDDi','tebak','@lib/utils','Tebak\x20kata','140170lrmKpH','Jawaban\x20:\x20','isPlaying','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Mohon\x20coba\x20lagi\x20nanti.\x0a\x0a','XcRvl','ClbpM','APIKEY','9420gNrtYv','includes','Kesalahan\x20tidak\x20diketahui','/api/game/tebakkata','data','get','\x0aWaktu\x20:\x2060s','@mess','@tmpDB/tebak\x20kata','tebakkata','exports','kata'];_0x5d83=function(){return _0xc1f125;};return _0x5d83();}async function handle(_0x349649,_0x54072b){const _0x188643=_0x438e02,_0x2746d7={'YZgKg':function(_0xe79e25,_0x4f9502){return _0xe79e25(_0x4f9502);},'ClbpM':_0x188643(0xeb),'eQjQP':function(_0x351016,_0x49e22d){return _0x351016(_0x49e22d);},'XcRvl':function(_0x171fcc,_0x1c1c56,_0x4dce02){return _0x171fcc(_0x1c1c56,_0x4dce02);},'tDUqG':_0x188643(0xd8),'xXkwY':function(_0x5cb110,_0x36f4e9,_0x586597){return _0x5cb110(_0x36f4e9,_0x586597);}},{remoteJid:_0x4c8a3c,message:_0x4b231b,content:_0x473ab6}=_0x54072b;if(!_0x473ab6[_0x188643(0xe1)](_0x2746d7[_0x188643(0xde)]))return!![];try{const _0x421214=await api[_0x188643(0xe5)](_0x188643(0xe3)),_0x2481c6=_0x421214[_0x188643(0xe4)]['soal'],_0xaaebff=_0x421214[_0x188643(0xe4)]['jawaban'];if(_0x2746d7['eQjQP'](isUserPlaying,_0x4c8a3c))return await _0x349649['sendMessage'](_0x4c8a3c,{'text':mess['game'][_0x188643(0xdb)]},{'quoted':_0x4b231b});addUser(_0x4c8a3c,{'answer':_0xaaebff[_0x188643(0xec)](),'hadiah':0xa}),_0x2746d7[_0x188643(0xdd)](logWithTime,_0x2746d7['tDUqG'],_0x188643(0xda)+_0xaaebff),await _0x349649['sendMessage'](_0x4c8a3c,{'text':_0x188643(0xcf)+_0x2481c6+_0x188643(0xe6)},{'quoted':_0x4b231b}),_0x2746d7['xXkwY'](setTimeout,async()=>{const _0x1b2732=_0x188643;_0x2746d7[_0x1b2732(0xd2)](isUserPlaying,_0x4c8a3c)&&(removeUser(_0x4c8a3c),await _0x349649['sendMessage'](_0x4c8a3c,{'text':_0x1b2732(0xd4)+_0xaaebff},{'quoted':_0x4b231b}));},0xea60);}catch(_0x578f1a){const _0x1e922e=_0x188643(0xdc)+(_0x578f1a||_0x188643(0xe2));await _0x349649['sendMessage'](_0x4c8a3c,{'text':_0x1e922e},{'quoted':_0x4b231b});}}module[_0x438e02(0xea)]={'handle':handle,'Commands':[_0x438e02(0xd6),_0x438e02(0xe9)],'OnlyPremium':![],'OnlyOwner':![]};