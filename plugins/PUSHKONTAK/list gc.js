const _0x3a73cd=_0x1996;function _0x1996(_0x336335,_0x44e82e){const _0x8c8909=_0x8c89();return _0x1996=function(_0x19967f,_0x4588e3){_0x19967f=_0x19967f-0x183;let _0x50788e=_0x8c8909[_0x19967f];return _0x50788e;},_0x1996(_0x336335,_0x44e82e);}(function(_0x4dd8a3,_0x456fcb){const _0x3d87ad=_0x1996,_0xd7501=_0x4dd8a3();while(!![]){try{const _0x4ff574=parseInt(_0x3d87ad(0x199))/0x1+-parseInt(_0x3d87ad(0x185))/0x2+parseInt(_0x3d87ad(0x198))/0x3+-parseInt(_0x3d87ad(0x195))/0x4+-parseInt(_0x3d87ad(0x19b))/0x5*(parseInt(_0x3d87ad(0x18f))/0x6)+-parseInt(_0x3d87ad(0x188))/0x7+parseInt(_0x3d87ad(0x190))/0x8*(parseInt(_0x3d87ad(0x18e))/0x9);if(_0x4ff574===_0x456fcb)break;else _0xd7501['push'](_0xd7501['shift']());}catch(_0x4ad1f8){_0xd7501['push'](_0xd7501['shift']());}}}(_0x8c89,0x7affa));function _0x8c89(){const _0x2fc5e8=['*\x0a│\x20Anggota\x20:\x20','groupInviteCode','228620aGMtNq','key','listgroup','1907129RguqTg','listgc','_*Total\x20Grup:\x20','participants','map','subject','18VMtCVS','337026cgjZjg','1514728iGAeMd','all','\x20」\x20*','exports','\x0a╰────────────────────────','1473528gHkkRD','\x0a│\x20ID\x20Grup\x20:\x20','Error\x20in\x20handle\x20function:','2368827WqiYbI','146821avqMgF','sort','5AORtRa','https://chat.whatsapp.com/','listgrup','length','join','@lib/cache','╭─「\x20','*_\x20\x0a\x0a','QNuZC','sendMessage'];_0x8c89=function(){return _0x2fc5e8;};return _0x8c89();}const {groupFetchAllParticipating}=require(_0x3a73cd(0x1a0));async function formatGrup(_0x5bc133,_0x5ceb53,_0x402a91){const _0x931623=_0x3a73cd;try{const _0xeb8bdb=await _0x5bc133[_0x931623(0x184)](_0x402a91['id']),_0x5cd5ee=_0x931623(0x19c)+_0xeb8bdb;return _0x931623(0x1a1)+_0x5ceb53+_0x931623(0x192)+_0x402a91[_0x931623(0x18d)]+_0x931623(0x183)+_0x402a91[_0x931623(0x18b)][_0x931623(0x19e)]+_0x931623(0x196)+_0x402a91['id']+'\x0a│\x20Link\x20\x20\x20\x20:\x20'+_0x5cd5ee+_0x931623(0x194);}catch(_0x17a255){return _0x931623(0x1a1)+_0x5ceb53+'\x20」\x20*'+_0x402a91['subject']+_0x931623(0x183)+_0x402a91[_0x931623(0x18b)]['length']+_0x931623(0x196)+_0x402a91['id']+'\x0a╰────────────────────────';}}async function handle(_0x5d600f,_0xc69f28){const _0x76d29e=_0x3a73cd,_0x1bd693={'Sbhoq':_0x76d29e(0x197),'QNuZC':'_Terjadi\x20kesalahan\x20saat\x20memproses\x20perintah._'},{remoteJid:_0x9b28a,message:_0x27113e}=_0xc69f28;try{await _0x5d600f[_0x76d29e(0x1a4)](_0x9b28a,{'react':{'text':'⏰','key':_0x27113e[_0x76d29e(0x186)]}});const _0x17a5ef=await groupFetchAllParticipating(_0x5d600f),_0x5c19ef=Object['values'](_0x17a5ef)[_0x76d29e(0x19a)]((_0x5db263,_0x5a82a0)=>_0x5a82a0[_0x76d29e(0x18b)]['length']-_0x5db263['participants']['length']),_0x45554d=await Promise[_0x76d29e(0x191)](_0x5c19ef[_0x76d29e(0x18c)]((_0x22d855,_0x262e21)=>formatGrup(_0x5d600f,_0x262e21+0x1,_0x22d855))),_0x337bbd=_0x5c19ef[_0x76d29e(0x19e)],_0x1b5bb2=_0x76d29e(0x18a)+_0x337bbd+_0x76d29e(0x1a2)+_0x45554d[_0x76d29e(0x19f)]('\x0a\x0a');await _0x5d600f['sendMessage'](_0x9b28a,{'text':_0x1b5bb2},{'quoted':_0x27113e});}catch(_0x25b079){console['error'](_0x1bd693['Sbhoq'],_0x25b079),await _0x5d600f[_0x76d29e(0x1a4)](_0x9b28a,{'text':_0x1bd693[_0x76d29e(0x1a3)]},{'quoted':_0x27113e});}}module[_0x3a73cd(0x193)]={'handle':handle,'Commands':[_0x3a73cd(0x189),'listgrub','listgroub',_0x3a73cd(0x19d),_0x3a73cd(0x187)],'OnlyPremium':![],'OnlyOwner':!![]};