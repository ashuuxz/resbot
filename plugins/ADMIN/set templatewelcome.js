const _0x10efaf=_0x5bc0;function _0x1af2(){const _0x5e7569=['22ibEWzu','51851840ZxYOjw','@mess','trim','participants','5643891LokbiG','some','gmUAt','isAdmin','@lib/participants','364616paNPdk','✅\x20_Template\x20Welcome\x20Berhasil\x20Diatur_','197874OaISwv','jAPeF','1104904mcFmYA','⚠️\x20_Input\x20tidak\x20valid!_\x0a\x0a_Hanya\x20diperbolehkan\x20angka\x20dari\x20*1*\x20sampai\x20*5*._','text','56zNjbRb','7260606bsCPYs','settemplatewelcome','templatewelcome','ZvXJv','sendMessage','1154770mIKCjg','admin','\x202_\x0a\x0a_Hanya\x20tersedia\x20*1\x20sampai\x205*_\x0a_atau\x20*text*_\x0a\x0a_Untuk\x20melihat\x20gambar\x20welcome\x20silakan\x20ketik\x20*.teswelcome*_','test','nPmcf','@lib/cache','8AJluPC','exports'];_0x1af2=function(){return _0x5e7569;};return _0x1af2();}(function(_0x210a69,_0x269b2a){const _0x16b0cf=_0x5bc0,_0x5d1b0b=_0x210a69();while(!![]){try{const _0x32fae5=-parseInt(_0x16b0cf(0x110))/0x1+parseInt(_0x16b0cf(0x121))/0x2*(-parseInt(_0x16b0cf(0x10e))/0x3)+parseInt(_0x16b0cf(0x11f))/0x4*(-parseInt(_0x16b0cf(0x119))/0x5)+-parseInt(_0x16b0cf(0x114))/0x6+-parseInt(_0x16b0cf(0x10c))/0x7*(parseInt(_0x16b0cf(0x113))/0x8)+-parseInt(_0x16b0cf(0x126))/0x9+parseInt(_0x16b0cf(0x122))/0xa;if(_0x32fae5===_0x269b2a)break;else _0x5d1b0b['push'](_0x5d1b0b['shift']());}catch(_0x57bfbb){_0x5d1b0b['push'](_0x5d1b0b['shift']());}}}(_0x1af2,0xa8b4a));const {setTemplateWelcome}=require(_0x10efaf(0x10b)),{getGroupMetadata}=require(_0x10efaf(0x11e)),mess=require(_0x10efaf(0x123));function _0x5bc0(_0x4c1dac,_0x21b3d6){const _0x1af27d=_0x1af2();return _0x5bc0=function(_0x5bc034,_0x5dd5b2){_0x5bc034=_0x5bc034-0x10a;let _0x1a67a3=_0x1af27d[_0x5bc034];return _0x1a67a3;},_0x5bc0(_0x4c1dac,_0x21b3d6);}async function handle(_0x53b278,_0x2bdd13){const _0x156fea=_0x10efaf,_0x3d34a9={'jAPeF':function(_0x31b585,_0x57c6b5,_0x5e422c){return _0x31b585(_0x57c6b5,_0x5e422c);},'ZvXJv':function(_0x308870,_0x419b68){return _0x308870==_0x419b68;},'gmUAt':_0x156fea(0x112),'nPmcf':function(_0x2a495d,_0x29274c,_0x28bdab){return _0x2a495d(_0x29274c,_0x28bdab);}},{remoteJid:_0x997372,isGroup:_0x3b9229,message:_0x5315cf,content:_0xcce15f,sender:_0x20ce97,command:_0x2df8c6,prefix:_0x2c8448}=_0x2bdd13;if(!_0x3b9229)return;const _0x1b7afb=await _0x3d34a9[_0x156fea(0x10f)](getGroupMetadata,_0x53b278,_0x997372),_0x1a864e=_0x1b7afb[_0x156fea(0x125)],_0x208217=_0x1a864e[_0x156fea(0x127)](_0x2a3346=>_0x2a3346['id']===_0x20ce97&&_0x2a3346[_0x156fea(0x11a)]);if(!_0x208217){await _0x53b278[_0x156fea(0x118)](_0x997372,{'text':mess['general'][_0x156fea(0x10a)]},{'quoted':_0x5315cf});return;}if(!_0xcce15f||!_0xcce15f[_0x156fea(0x124)]()){const _0x4f4339='⚠️\x20*Format\x20Penggunaan:*\x0a\x0a💬\x20*Contoh:*\x20\x0a_'+_0x2c8448+_0x2df8c6+_0x156fea(0x11b);await _0x53b278['sendMessage'](_0x997372,{'text':_0x4f4339},{'quoted':_0x5315cf});return;}if(_0x3d34a9[_0x156fea(0x117)](_0xcce15f,_0x3d34a9[_0x156fea(0x128)])){await _0x3d34a9[_0x156fea(0x11d)](setTemplateWelcome,_0x997372,_0xcce15f);const _0x434157=_0x156fea(0x10d);await _0x53b278['sendMessage'](_0x997372,{'text':_0x434157},{'quoted':_0x5315cf});return;}const _0x4ca7f7=/^[1-5]$/;if(!_0x4ca7f7[_0x156fea(0x11c)](_0xcce15f[_0x156fea(0x124)]())){const _0x2d0d71=_0x156fea(0x111);await _0x53b278[_0x156fea(0x118)](_0x997372,{'text':_0x2d0d71},{'quoted':_0x5315cf});return;}await setTemplateWelcome(_0x997372,_0xcce15f);const _0x24380e=_0x156fea(0x10d);await _0x53b278['sendMessage'](_0x997372,{'text':_0x24380e},{'quoted':_0x5315cf});}module[_0x10efaf(0x120)]={'handle':handle,'Commands':[_0x10efaf(0x115),_0x10efaf(0x116)],'OnlyPremium':![],'OnlyOwner':![]};