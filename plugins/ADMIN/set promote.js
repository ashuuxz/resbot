function _0x5717(_0x1def90,_0x1d1278){const _0x1d090e=_0x1d09();return _0x5717=function(_0x571702,_0x5a83b4){_0x571702=_0x571702-0x153;let _0x3980fd=_0x1d090e[_0x571702];return _0x3980fd;},_0x5717(_0x1def90,_0x1d1278);}const _0x4b9ee1=_0x5717;(function(_0x435cf2,_0x4e08f0){const _0x19d65f=_0x5717,_0x3b8388=_0x435cf2();while(!![]){try{const _0x412dd3=parseInt(_0x19d65f(0x154))/0x1*(parseInt(_0x19d65f(0x159))/0x2)+-parseInt(_0x19d65f(0x165))/0x3*(parseInt(_0x19d65f(0x162))/0x4)+-parseInt(_0x19d65f(0x160))/0x5*(parseInt(_0x19d65f(0x155))/0x6)+-parseInt(_0x19d65f(0x161))/0x7+parseInt(_0x19d65f(0x153))/0x8*(-parseInt(_0x19d65f(0x15a))/0x9)+parseInt(_0x19d65f(0x164))/0xa+-parseInt(_0x19d65f(0x167))/0xb*(-parseInt(_0x19d65f(0x15b))/0xc);if(_0x412dd3===_0x4e08f0)break;else _0x3b8388['push'](_0x3b8388['shift']());}catch(_0x5600d8){_0x3b8388['push'](_0x3b8388['shift']());}}}(_0x1d09,0x51293));function _0x1d09(){const _0x31ed44=['sendMessage','1945425WFfwdM','2589188QDPyXs','292jkJJyv','general','6533600MGcoWX','7053jiDfWk','\x20Selamat\x20@name\x20sekarang\x20menjadi\x20admin*_\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a_*List\x20Variable*_\x0a\x0a','44iuYUjS','@mess','setpromote','isAdmin','exports','@lib/participants','7600mwLmsw','552917toCTzn','6cAFDqz','@lib/cache','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*','✅\x20_Promote\x20Berhasil\x20di\x20set_\x0a\x0a_Pastikan\x20fitur\x20sudah\x20di\x20aktifkan\x20dengan\x20mengetik\x20*.on\x20promote*_','2cqVmjY','945weMOuX','469500efQVLR','kQSzc','participants','group'];_0x1d09=function(){return _0x31ed44;};return _0x1d09();}const {setPromote}=require(_0x4b9ee1(0x16c)),{getGroupMetadata}=require(_0x4b9ee1(0x156)),mess=require(_0x4b9ee1(0x168));async function handle(_0x10a900,_0x2713bf){const _0x4bd994=_0x4b9ee1,_0x24907c={'kQSzc':function(_0x3d91aa,_0x261c3f,_0x41d1a1){return _0x3d91aa(_0x261c3f,_0x41d1a1);},'vqQCn':function(_0x5974ca,_0x13a53a){return _0x5974ca+_0x13a53a;}},{remoteJid:_0xc09122,isGroup:_0x2f662a,message:_0x5f8d49,content:_0x3e79b4,sender:_0x269393,command:_0x5aba03,prefix:_0x265690}=_0x2713bf;if(!_0x2f662a)return;const _0x356b06=await _0x24907c[_0x4bd994(0x15c)](getGroupMetadata,_0x10a900,_0xc09122),_0x3ff860=_0x356b06[_0x4bd994(0x15d)],_0x4bf116=_0x3ff860['some'](_0x4ce2ff=>_0x4ce2ff['id']===_0x269393&&_0x4ce2ff['admin']);if(!_0x4bf116){await _0x10a900[_0x4bd994(0x15f)](_0xc09122,{'text':mess[_0x4bd994(0x163)][_0x4bd994(0x16a)]},{'quoted':_0x5f8d49});return;}if(!_0x3e79b4||!_0x3e79b4['trim']()){const _0x49ff47=_0x4bd994(0x157)+_0x24907c['vqQCn'](_0x265690,_0x5aba03)+_0x4bd994(0x166)+global[_0x4bd994(0x15e)]['variable'];return await _0x10a900[_0x4bd994(0x15f)](_0xc09122,{'text':_0x49ff47},{'quoted':_0x5f8d49});}return await _0x24907c[_0x4bd994(0x15c)](setPromote,_0xc09122,_0x3e79b4),await _0x10a900['sendMessage'](_0xc09122,{'text':_0x4bd994(0x158)},{'quoted':_0x5f8d49});}module[_0x4b9ee1(0x16b)]={'handle':handle,'Commands':[_0x4b9ee1(0x169)],'OnlyPremium':![],'OnlyOwner':![]};