const _0xbd293c=_0x4993;(function(_0x8375ef,_0x27aad1){const _0x512757=_0x4993,_0x4054ce=_0x8375ef();while(!![]){try{const _0x9ff273=-parseInt(_0x512757(0x111))/0x1*(-parseInt(_0x512757(0x105))/0x2)+parseInt(_0x512757(0x119))/0x3+parseInt(_0x512757(0x102))/0x4+-parseInt(_0x512757(0x11b))/0x5*(-parseInt(_0x512757(0x10c))/0x6)+-parseInt(_0x512757(0x10d))/0x7*(-parseInt(_0x512757(0x118))/0x8)+parseInt(_0x512757(0x103))/0x9*(parseInt(_0x512757(0x10b))/0xa)+-parseInt(_0x512757(0x10e))/0xb;if(_0x9ff273===_0x27aad1)break;else _0x4054ce['push'](_0x4054ce['shift']());}catch(_0x56566f){_0x4054ce['push'](_0x4054ce['shift']());}}}(_0x50f8,0xaf2fc));function _0x4993(_0x5afa37,_0x48514b){const _0x50f871=_0x50f8();return _0x4993=function(_0x49936b,_0x19cc04){_0x49936b=_0x49936b-0x101;let _0x2e22d6=_0x50f871[_0x49936b];return _0x2e22d6;},_0x4993(_0x5afa37,_0x48514b);}function _0x50f8(){const _0x1e1ae2=['resettotalchat','4189196nXRuTt','63WBxgve','@mess','23546CrLwas','error','participants','admin','some','@lib/utils','1663780JBGVxn','341970hASlOa','732368rNzOxa','43566171szLceE','Error\x20handling\x20reset\x20total\x20chat\x20command:','@lib/cache','59CcetJO','@lib/totalchat','Terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.','exports','_Total\x20Chat\x20di\x20grub\x20ini\x20berhasil\x20direset_','sendMessage','bwuJs','24VykJNw','3518178CAloqn','general','25xXyFjU'];_0x50f8=function(){return _0x1e1ae2;};return _0x50f8();}const mess=require(_0xbd293c(0x104)),{resetTotalChatPerGroup}=require(_0xbd293c(0x112)),{sendMessageWithMention}=require(_0xbd293c(0x10a)),{getGroupMetadata}=require(_0xbd293c(0x110));async function handle(_0x3385a0,_0x47f362){const _0x48cd72=_0xbd293c,_0x474d1c={'gNGHG':function(_0x3b9fa2,_0x5af7df,_0x2c402d){return _0x3b9fa2(_0x5af7df,_0x2c402d);},'bwuJs':_0x48cd72(0x113)},{remoteJid:_0x552f73,isGroup:_0x22e856,message:_0x5cba92,sender:_0x3c446f}=_0x47f362;if(!_0x22e856)return;try{const _0x2f5499=await _0x474d1c['gNGHG'](getGroupMetadata,_0x3385a0,_0x552f73),_0x35a36b=_0x2f5499[_0x48cd72(0x107)],_0x439a66=_0x35a36b[_0x48cd72(0x109)](_0x548a09=>_0x548a09['id']===_0x3c446f&&_0x548a09[_0x48cd72(0x108)]);if(!_0x439a66){await _0x3385a0[_0x48cd72(0x116)](_0x552f73,{'text':mess[_0x48cd72(0x11a)]['isAdmin']},{'quoted':_0x5cba92});return;}await resetTotalChatPerGroup(_0x552f73),await sendMessageWithMention(_0x3385a0,_0x552f73,_0x48cd72(0x115),_0x5cba92);}catch(_0x481daa){return console[_0x48cd72(0x106)](_0x48cd72(0x10f),_0x481daa),await _0x3385a0[_0x48cd72(0x116)](_0x552f73,{'text':_0x474d1c[_0x48cd72(0x117)]},{'quoted':_0x5cba92});}}module[_0xbd293c(0x114)]={'handle':handle,'Commands':[_0xbd293c(0x101)],'OnlyPremium':![],'OnlyOwner':![]};