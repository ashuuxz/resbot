const _0x3aa464=_0x46b6;(function(_0x945171,_0x35e04d){const _0x1528da=_0x46b6,_0x39cd32=_0x945171();while(!![]){try{const _0x27202b=parseInt(_0x1528da(0x116))/0x1*(parseInt(_0x1528da(0x110))/0x2)+parseInt(_0x1528da(0x114))/0x3+parseInt(_0x1528da(0x10e))/0x4+-parseInt(_0x1528da(0x11b))/0x5*(-parseInt(_0x1528da(0x10f))/0x6)+parseInt(_0x1528da(0x124))/0x7+parseInt(_0x1528da(0x117))/0x8*(parseInt(_0x1528da(0x125))/0x9)+-parseInt(_0x1528da(0x11e))/0xa*(parseInt(_0x1528da(0x11c))/0xb);if(_0x27202b===_0x35e04d)break;else _0x39cd32['push'](_0x39cd32['shift']());}catch(_0x4b51d9){_0x39cd32['push'](_0x39cd32['shift']());}}}(_0x231c,0x3f8b8));const {setPromote}=require(_0x3aa464(0x126)),{getGroupMetadata}=require(_0x3aa464(0x122)),mess=require(_0x3aa464(0x121));function _0x46b6(_0x15b871,_0x22bde3){const _0x231cb2=_0x231c();return _0x46b6=function(_0x46b68c,_0x225dc4){_0x46b68c=_0x46b68c-0x10c;let _0x1fb02e=_0x231cb2[_0x46b68c];return _0x1fb02e;},_0x46b6(_0x15b871,_0x22bde3);}function _0x231c(){const _0x2ca9ff=['✅\x20_Promote\x20Berhasil\x20di\x20set_\x0a\x0a_Pastikan\x20fitur\x20sudah\x20di\x20aktifkan\x20dengan\x20mengetik\x20*.on\x20promote*_','1910420ogEQbo','885690jenuEu','2CNQZeS','sendMessage','admin','\x20Selamat\x20@name\x20sekarang\x20menjadi\x20admin*_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a_*List\x20Variable*_\x0a\x0a','438522sRxjSR','exports','439165xxmCYr','8rxCOik','variable','trim','participants','5fapvGv','77xVKNps','some','1733470AaELqI','group','general','@mess','@lib/cache','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','808269KBRmNR','1329147swUGZu','@lib/participants','FtCBH'];_0x231c=function(){return _0x2ca9ff;};return _0x231c();}async function handle(_0x32621b,_0x1defed){const _0x395c4b=_0x3aa464,_0x1f743a={'FtCBH':function(_0x4a19cf,_0x1d91a8,_0x58e10c){return _0x4a19cf(_0x1d91a8,_0x58e10c);}},{remoteJid:_0x41f547,isGroup:_0x2cfbb2,message:_0x5bedc6,content:_0x21bfd6,sender:_0x1e4d83,command:_0x411197,prefix:_0x2554f2}=_0x1defed;if(!_0x2cfbb2)return;const _0x42863a=await getGroupMetadata(_0x32621b,_0x41f547),_0x302d05=_0x42863a[_0x395c4b(0x11a)],_0x479ce8=_0x302d05[_0x395c4b(0x11d)](_0x4fd428=>_0x4fd428['id']===_0x1e4d83&&_0x4fd428[_0x395c4b(0x112)]);if(!_0x479ce8){await _0x32621b[_0x395c4b(0x111)](_0x41f547,{'text':mess[_0x395c4b(0x120)]['isAdmin']},{'quoted':_0x5bedc6});return;}if(!_0x21bfd6||!_0x21bfd6[_0x395c4b(0x119)]()){const _0x31251e=_0x395c4b(0x123)+(_0x2554f2+_0x411197)+_0x395c4b(0x113)+global[_0x395c4b(0x11f)][_0x395c4b(0x118)];return await _0x32621b[_0x395c4b(0x111)](_0x41f547,{'text':_0x31251e},{'quoted':_0x5bedc6});}return await _0x1f743a[_0x395c4b(0x10c)](setPromote,_0x41f547,_0x21bfd6),await _0x32621b[_0x395c4b(0x111)](_0x41f547,{'text':_0x395c4b(0x10d)},{'quoted':_0x5bedc6});}module[_0x3aa464(0x115)]={'handle':handle,'Commands':['setpromote'],'OnlyPremium':![],'OnlyOwner':![]};