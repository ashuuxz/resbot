const _0x5b67e3=_0x4097;(function(_0x19a29a,_0x1d4d93){const _0x47aa94=_0x4097,_0x340e1d=_0x19a29a();while(!![]){try{const _0x14decc=parseInt(_0x47aa94(0x1c9))/0x1+parseInt(_0x47aa94(0x1d5))/0x2*(-parseInt(_0x47aa94(0x1d9))/0x3)+-parseInt(_0x47aa94(0x1d2))/0x4*(-parseInt(_0x47aa94(0x1d1))/0x5)+-parseInt(_0x47aa94(0x1df))/0x6+-parseInt(_0x47aa94(0x1e0))/0x7*(parseInt(_0x47aa94(0x1d8))/0x8)+-parseInt(_0x47aa94(0x1de))/0x9+parseInt(_0x47aa94(0x1d3))/0xa;if(_0x14decc===_0x1d4d93)break;else _0x340e1d['push'](_0x340e1d['shift']());}catch(_0x16e92f){_0x340e1d['push'](_0x340e1d['shift']());}}}(_0x1db8,0x327c5));function _0x4097(_0x10c22a,_0x102af7){const _0x1db8b1=_0x1db8();return _0x4097=function(_0x409793,_0x50f8d8){_0x409793=_0x409793-0x1c7;let _0x3928fe=_0x1db8b1[_0x409793];return _0x3928fe;},_0x4097(_0x10c22a,_0x102af7);}function _0x1db8(){const _0x499426=['35MwXAwy','24764GfPWqc','11118870sKXzFc','promote','2SbXGbn','exports','isAdmin','1808mBbVGk','1152261ewmcUQ','admin','@lib/cache','sendMessage','TuPnY','3262833GFUSdT','1175820DeXZBq','6181hDknls','split','participants','193717PNaoyS','zzRog','error','groupParticipantsUpdate','⚠️\x20Terjadi\x20kesalahan\x20saat\x20mencoba\x20menaikkan\x20menjadi\x20admin.','Error\x20in\x20promote\x20command:','@lib/utils','_⚠️\x20Format\x20Penggunaan:_\x20\x0a\x0a_💬\x20Contoh:_\x20_*'];_0x1db8=function(){return _0x499426;};return _0x1db8();}const mess=require('@mess'),{sendMessageWithMention,determineUser}=require(_0x5b67e3(0x1cf)),{getGroupMetadata}=require(_0x5b67e3(0x1db));async function handle(_0xd2e7d7,_0x2360d3){const _0x401bd3=_0x5b67e3,_0x490cca={'TuPnY':function(_0x2d1fb2,_0x1c8104,_0x300b7e,_0x3b9bf5){return _0x2d1fb2(_0x1c8104,_0x300b7e,_0x3b9bf5);},'Xjilw':_0x401bd3(0x1ce),'zzRog':_0x401bd3(0x1cd)},{remoteJid:_0x31617c,isGroup:_0xb8851b,message:_0x244ac1,sender:_0x42afd0,mentionedJid:_0x26e034,content:_0x56d88e,isQuoted:_0x1ac2df,prefix:_0x2fbb4b,command:_0x57b4b6}=_0x2360d3;if(!_0xb8851b)return;try{const _0x32b218=await getGroupMetadata(_0xd2e7d7,_0x31617c),_0x56e8b6=_0x32b218[_0x401bd3(0x1c8)],_0x322517=_0x56e8b6['some'](_0xc15539=>_0xc15539['id']===_0x42afd0&&_0xc15539[_0x401bd3(0x1da)]);if(!_0x322517){await _0xd2e7d7[_0x401bd3(0x1dc)](_0x31617c,{'text':mess['general'][_0x401bd3(0x1d7)]},{'quoted':_0x244ac1});return;}const _0x5f5dc1=_0x490cca[_0x401bd3(0x1dd)](determineUser,_0x26e034,_0x1ac2df,_0x56d88e);if(!_0x5f5dc1)return await _0xd2e7d7[_0x401bd3(0x1dc)](_0x31617c,{'text':_0x401bd3(0x1d0)+(_0x2fbb4b+_0x57b4b6)+'\x20@NAME*_'},{'quoted':_0x244ac1});await _0xd2e7d7[_0x401bd3(0x1cc)](_0x31617c,[_0x5f5dc1],_0x401bd3(0x1d4)),await sendMessageWithMention(_0xd2e7d7,_0x31617c,'@'+_0x5f5dc1[_0x401bd3(0x1c7)]('@')[0x0]+'\x20Telah\x20Menjadi\x20admin\x20grub',_0x244ac1);}catch(_0x83664e){console[_0x401bd3(0x1cb)](_0x490cca['Xjilw'],_0x83664e),await _0xd2e7d7[_0x401bd3(0x1dc)](_0x31617c,{'text':_0x490cca[_0x401bd3(0x1ca)]},{'quoted':_0x244ac1});}}module[_0x5b67e3(0x1d6)]={'handle':handle,'Commands':[_0x5b67e3(0x1d4)],'OnlyPremium':![],'OnlyOwner':![]};