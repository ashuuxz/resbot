const _0x3245b4=_0x30a0;(function(_0x8b33bb,_0x352456){const _0x596b66=_0x30a0,_0xff85cd=_0x8b33bb();while(!![]){try{const _0x143584=parseInt(_0x596b66(0x87))/0x1*(-parseInt(_0x596b66(0x9c))/0x2)+-parseInt(_0x596b66(0x81))/0x3*(-parseInt(_0x596b66(0x91))/0x4)+parseInt(_0x596b66(0x7a))/0x5*(-parseInt(_0x596b66(0x7b))/0x6)+parseInt(_0x596b66(0x79))/0x7*(parseInt(_0x596b66(0x8b))/0x8)+-parseInt(_0x596b66(0x8e))/0x9+-parseInt(_0x596b66(0x89))/0xa+parseInt(_0x596b66(0x99))/0xb;if(_0x143584===_0x352456)break;else _0xff85cd['push'](_0xff85cd['shift']());}catch(_0xaf073d){_0xff85cd['push'](_0xff85cd['shift']());}}}(_0x1fd2,0x253ad));const {addBadword,updateBadword,findBadword}=require(_0x3245b4(0x72)),{getGroupMetadata}=require(_0x3245b4(0x76)),mess=require(_0x3245b4(0x98));async function handle(_0x4a5f2d,_0x156bb5){const _0x632a2b=_0x3245b4,_0x27961f={'FMcBA':function(_0x14fe9b,_0x4352a0,_0xe3adff){return _0x14fe9b(_0x4352a0,_0xe3adff);},'kjmNR':function(_0x2abeba,_0x3388bb){return _0x2abeba(_0x3388bb);},'pZvsz':function(_0x526d50,_0x2aefaf,_0x24cdb3,_0x5f1473,_0xa943c6){return _0x526d50(_0x2aefaf,_0x24cdb3,_0x5f1473,_0xa943c6);},'DfEfm':function(_0x4b693a,_0xf56f48,_0x3b47ad,_0x149ddc,_0x437aab){return _0x4b693a(_0xf56f48,_0x3b47ad,_0x149ddc,_0x437aab);},'jLtBz':_0x632a2b(0x90)},{remoteJid:_0x2c6ae6,message:_0x1e2daf,sender:_0x448545,prefix:_0x2d0e66,command:_0x4e24f7,content:_0x46d269,fullText:_0x4224ab}=_0x156bb5;try{const _0x3b3fe3=await _0x27961f[_0x632a2b(0x88)](getGroupMetadata,_0x4a5f2d,_0x2c6ae6),_0x91dc5e=_0x3b3fe3[_0x632a2b(0x75)],_0x14e40c=_0x91dc5e[_0x632a2b(0x8d)](_0xf52c9d=>_0xf52c9d['id']===_0x448545&&_0xf52c9d[_0x632a2b(0x71)]);if(!_0x14e40c){await _0x4a5f2d['sendMessage'](_0x2c6ae6,{'text':mess[_0x632a2b(0x85)][_0x632a2b(0x82)]},{'quoted':_0x1e2daf});return;}if(!_0x46d269||!_0x46d269[_0x632a2b(0x7c)]())return await _0x4a5f2d[_0x632a2b(0x9b)](_0x2c6ae6,{'text':'_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*'+(_0x2d0e66+_0x4e24f7)+_0x632a2b(0x83)},{'quoted':_0x1e2daf});const _0x2754e3=_0x4224ab[_0x632a2b(0x7c)]()[_0x632a2b(0x9a)]('\x20')[_0x632a2b(0x96)](0x1),_0x34ac46=await _0x27961f[_0x632a2b(0x7e)](ensureGroupData,_0x2c6ae6),_0x5c185f=await addBadwordToList(_0x2c6ae6,_0x34ac46,_0x2754e3);await _0x27961f[_0x632a2b(0x78)](sendResponse,_0x4a5f2d,_0x2c6ae6,_0x5c185f,_0x1e2daf);}catch(_0x4d557b){console[_0x632a2b(0x80)](_0x4d557b),await _0x27961f[_0x632a2b(0x77)](sendResponse,_0x4a5f2d,_0x2c6ae6,_0x27961f[_0x632a2b(0x95)],_0x1e2daf);}}async function ensureGroupData(_0x1ea04c){let _0x11bd81=await findBadword(_0x1ea04c);return!_0x11bd81&&(await addBadword(_0x1ea04c,{'listBadword':[]}),_0x11bd81={'listBadword':[]}),_0x11bd81;}function _0x1fd2(){const _0x441383=['Jyxza','push','jLtBz','slice','amrNR','@mess','1554509RXcoye','split','sendMessage','2vTMZcW','admin','@lib/badword','Avdge','AYqnZ','participants','@lib/cache','DfEfm','pZvsz','77izgMlX','19850JgcOOm','66AQHNYM','trim','length','kjmNR','listBadword','error','94443jJgQjw','isAdmin','\x20tolol*_','JZeDX','general','includes','224701EjIEYp','FMcBA','91790KnkjIc','⚠️\x20_Mohon\x20berikan\x20kata\x20yang\x20ingin\x20ditambahkan.\x20Contoh:\x20.addbadword\x20tolol_','172688awgdWk','addbadword','some','388485nkkKtX','⚠️\x20_Semua\x20kata\x20sudah\x20ada\x20dalam\x20daftar\x20badword._','Terjadi\x20kesalahan\x20saat\x20memproses\x20perintah.','12bYLfJW','filter'];_0x1fd2=function(){return _0x441383;};return _0x1fd2();}async function addBadwordToList(_0x30ea9d,_0x30f495,_0x466f95){const _0x1b5d2b=_0x3245b4,_0x82233e={'AYqnZ':function(_0x5b7413,_0x1f9f79){return _0x5b7413===_0x1f9f79;},'Jyxza':_0x1b5d2b(0x8a),'JZeDX':function(_0x3a115a,_0xd489e3){return _0x3a115a===_0xd489e3;},'Avdge':_0x1b5d2b(0x8f),'amrNR':function(_0x2d6078,_0x3bed5a,_0xef00ee){return _0x2d6078(_0x3bed5a,_0xef00ee);}};if(_0x82233e[_0x1b5d2b(0x74)](_0x466f95[_0x1b5d2b(0x7d)],0x0))return _0x82233e[_0x1b5d2b(0x93)];const _0x3ab907=_0x466f95[_0x1b5d2b(0x92)](_0x2d2211=>!_0x30f495['listBadword'][_0x1b5d2b(0x86)](_0x2d2211));if(_0x82233e[_0x1b5d2b(0x84)](_0x3ab907[_0x1b5d2b(0x7d)],0x0))return _0x82233e[_0x1b5d2b(0x73)];return _0x30f495['listBadword'][_0x1b5d2b(0x94)](..._0x3ab907),await _0x82233e[_0x1b5d2b(0x97)](updateBadword,_0x30ea9d,{'listBadword':_0x30f495[_0x1b5d2b(0x7f)]}),'✅\x20_Berhasil\x20menambahkan\x20kata:_\x20'+_0x3ab907['join'](',\x20');}async function sendResponse(_0x123c2c,_0x69f533,_0x3d8c95,_0x4d22cf){const _0xdd10e0=_0x3245b4;await _0x123c2c[_0xdd10e0(0x9b)](_0x69f533,{'text':_0x3d8c95},{'quoted':_0x4d22cf});}function _0x30a0(_0x5d9c6c,_0x1d5e1e){const _0x1fd229=_0x1fd2();return _0x30a0=function(_0x30a018,_0x5c012c){_0x30a018=_0x30a018-0x71;let _0x402c27=_0x1fd229[_0x30a018];return _0x402c27;},_0x30a0(_0x5d9c6c,_0x1d5e1e);}module['exports']={'handle':handle,'Commands':[_0x3245b4(0x8c)],'OnlyPremium':![],'OnlyOwner':![]};