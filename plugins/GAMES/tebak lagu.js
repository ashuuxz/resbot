const _0x3d6214=_0x5319;(function(_0x4e516b,_0x4b7b25){const _0xfbd4fb=_0x5319,_0x2a8776=_0x4e516b();while(!![]){try{const _0x5b1507=parseInt(_0xfbd4fb(0x1c7))/0x1*(-parseInt(_0xfbd4fb(0x1dd))/0x2)+parseInt(_0xfbd4fb(0x1dc))/0x3+parseInt(_0xfbd4fb(0x1bc))/0x4*(parseInt(_0xfbd4fb(0x1c8))/0x5)+parseInt(_0xfbd4fb(0x1c2))/0x6+parseInt(_0xfbd4fb(0x1cf))/0x7*(parseInt(_0xfbd4fb(0x1d4))/0x8)+parseInt(_0xfbd4fb(0x1e0))/0x9*(parseInt(_0xfbd4fb(0x1b8))/0xa)+-parseInt(_0xfbd4fb(0x1da))/0xb*(parseInt(_0xfbd4fb(0x1c0))/0xc);if(_0x5b1507===_0x4b7b25)break;else _0x2a8776['push'](_0x2a8776['shift']());}catch(_0x219f9e){_0x2a8776['push'](_0x2a8776['shift']());}}}(_0x4f61,0xa6abe));function _0x5319(_0x4781fa,_0x38af4c){const _0x4f61c6=_0x4f61();return _0x5319=function(_0x531900,_0x63732e){_0x531900=_0x531900-0x1b7;let _0x4fcd6d=_0x4f61c6[_0x531900];return _0x4fcd6d;},_0x5319(_0x4781fa,_0x38af4c);}const ApiAutoresbot=require(_0x3d6214(0x1bd)),config=require(_0x3d6214(0x1ba)),api=new ApiAutoresbot(config[_0x3d6214(0x1be)]),mess=require(_0x3d6214(0x1db)),{logWithTime}=require(_0x3d6214(0x1b7)),{addUser,removeUser,getUser,isUserPlaying}=require(_0x3d6214(0x1df));async function handle(_0x5cb6ea,_0x5cb05d){const _0x1e8d91=_0x3d6214,_0x2721ae={'IlAgb':function(_0x4b8b67,_0x3be29e){return _0x4b8b67(_0x3be29e);},'gePMq':_0x1e8d91(0x1d3),'EHyQa':function(_0x3f25be,_0x3e2246,_0x229b5a){return _0x3f25be(_0x3e2246,_0x229b5a);},'PgokJ':_0x1e8d91(0x1ca),'OAaYy':'Tebak\x20lagu','FkyWi':function(_0x4b1217,_0x3f4522){return _0x4b1217||_0x3f4522;}},{remoteJid:_0x407eb6,message:_0x470c36,content:_0x58a731}=_0x5cb05d;if(!_0x58a731[_0x1e8d91(0x1d5)](_0x2721ae[_0x1e8d91(0x1cd)]))return!![];try{const _0x4bf5dc=await api['get'](_0x1e8d91(0x1ce)),_0xfd3189=_0x4bf5dc[_0x1e8d91(0x1c3)]['link_song'],_0x43a9bc=_0x4bf5dc[_0x1e8d91(0x1c3)][_0x1e8d91(0x1bf)],_0xda6c7b=_0x4bf5dc[_0x1e8d91(0x1c3)][_0x1e8d91(0x1c9)];if(_0x2721ae[_0x1e8d91(0x1c5)](isUserPlaying,_0x407eb6))return await _0x5cb6ea[_0x1e8d91(0x1cb)](_0x407eb6,{'text':mess['game'][_0x1e8d91(0x1d9)]},{'quoted':_0x470c36});_0x2721ae[_0x1e8d91(0x1d7)](addUser,_0x407eb6,{'answer':_0x43a9bc[_0x1e8d91(0x1bb)](),'hadiah':0xa}),await _0x5cb6ea[_0x1e8d91(0x1cb)](_0x407eb6,{'audio':{'url':_0xfd3189},'mimetype':_0x2721ae[_0x1e8d91(0x1d6)]},{'quoted':_0x470c36}),await _0x5cb6ea[_0x1e8d91(0x1cb)](_0x407eb6,{'text':_0x1e8d91(0x1cc)+_0xda6c7b+_0x1e8d91(0x1d0)},{'quoted':_0x470c36}),_0x2721ae['EHyQa'](logWithTime,_0x2721ae[_0x1e8d91(0x1de)],_0x1e8d91(0x1c4)+_0x43a9bc),setTimeout(async()=>{const _0x2df8df=_0x1e8d91;_0x2721ae[_0x2df8df(0x1c5)](isUserPlaying,_0x407eb6)&&(removeUser(_0x407eb6),await _0x5cb6ea[_0x2df8df(0x1cb)](_0x407eb6,{'text':_0x2df8df(0x1c1)+_0x43a9bc},{'quoted':_0x470c36}));},0xea60);}catch(_0x58e562){const _0x5cbf05=_0x1e8d91(0x1d1)+_0x2721ae[_0x1e8d91(0x1d8)](_0x58e562,_0x1e8d91(0x1b9));await _0x5cb6ea[_0x1e8d91(0x1cb)](_0x407eb6,{'text':_0x5cbf05},{'quoted':_0x470c36});}}module[_0x3d6214(0x1c6)]={'handle':handle,'Commands':[_0x3d6214(0x1d2),'tebakbendera'],'OnlyPremium':![],'OnlyOwner':![]};function _0x4f61(){const _0x1632d5=['tebak','lagu','2513944PEuENB','includes','PgokJ','EHyQa','FkyWi','isPlaying','671uqhbOp','@mess','3429432KPZITL','2JdCxTW','OAaYy','@tmpDB/tebak\x20lagu','184887gSlyfd','@lib/utils','120zBwyGm','Kesalahan\x20tidak\x20diketahui','@config','toLowerCase','3244DkQjGH','api-autoresbot','APIKEY','jawaban','437412kNNKRP','⏳\x20Waktu\x20habis!\x20Jawabannya\x20:\x20','1239672ypFKYM','data','Jawaban\x20:\x20','IlAgb','exports','235763RSdRSa','1780UyMDrY','artist','audio/mp4','sendMessage','Lagu\x20Tersebut\x20Adalah\x20Lagu\x20dari?\x0a\x0aArtist\x20:\x20','gePMq','/api/game/tebaklagu','28vwfjpl','\x0aWaktu\x20:\x2060\x20s','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Mohon\x20coba\x20lagi\x20nanti.\x0a\x0a'];_0x4f61=function(){return _0x1632d5;};return _0x4f61();}