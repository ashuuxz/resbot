const _0x55acdd=_0x3a6a;(function(_0x13538c,_0x21f5f0){const _0x46db03=_0x3a6a,_0x3f0514=_0x13538c();while(!![]){try{const _0x492274=parseInt(_0x46db03(0x1f3))/0x1+-parseInt(_0x46db03(0x202))/0x2*(parseInt(_0x46db03(0x203))/0x3)+parseInt(_0x46db03(0x1ef))/0x4*(-parseInt(_0x46db03(0x1e9))/0x5)+-parseInt(_0x46db03(0x1eb))/0x6*(-parseInt(_0x46db03(0x1f1))/0x7)+parseInt(_0x46db03(0x1fb))/0x8*(parseInt(_0x46db03(0x205))/0x9)+-parseInt(_0x46db03(0x204))/0xa+parseInt(_0x46db03(0x1ee))/0xb;if(_0x492274===_0x21f5f0)break;else _0x3f0514['push'](_0x3f0514['shift']());}catch(_0x3efafd){_0x3f0514['push'](_0x3f0514['shift']());}}}(_0x55e6,0xa9239));const ApiAutoresbot=require(_0x55acdd(0x1fd)),config=require('@config');function _0x55e6(){const _0x16e17a=['hadits','Maaf,\x20terjadi\x20kesalahan\x20saat\x20memproses\x20permintaan\x20Anda.\x20Coba\x20lagi\x20nanti.\x0a\x0aDetail\x20Kesalahan:\x20','data','485Zbkxfk','🔹\x20*Arab:*\x0a','437688sHWKVf','Error\x20saat\x20memanggil\x20API\x20hadits:','Respons\x20API\x20tidak\x20sesuai:','12226896wZWoyK','31676vDSkQD','hadist','112jJteZO','judul','140465jUbrNl','NxbRA','get','indo','exports','sendMessage','arab','🔸\x20*Terjemahan:*\x0a','4269336VWJEuH','message','api-autoresbot','tJEdG','key','*\x0a\x0a','Zjtrt','105398ZEtWQe','51nlGJmW','5960170zJeRkc','9lzRVEX','Maaf,\x20tidak\x20ada\x20data\x20hadits\x20yang\x20tersedia\x20saat\x20ini.\x20Coba\x20lagi\x20nanti.'];_0x55e6=function(){return _0x16e17a;};return _0x55e6();}function _0x3a6a(_0xe83c6a,_0x53189c){const _0x55e6f6=_0x55e6();return _0x3a6a=function(_0x3a6afb,_0x3a64ce){_0x3a6afb=_0x3a6afb-0x1e9;let _0x18e0da=_0x55e6f6[_0x3a6afb];return _0x18e0da;},_0x3a6a(_0xe83c6a,_0x53189c);}async function handle(_0x3c1aac,_0x370e9c){const _0x599840=_0x55acdd,_0x1c6035={'NxbRA':function(_0x1220c4,_0x2a4715){return _0x1220c4+_0x2a4715;},'tJEdG':function(_0x33d32d,_0x96022f){return _0x33d32d+_0x96022f;},'Zjtrt':_0x599840(0x1ed),'gmOGh':_0x599840(0x206)},{remoteJid:_0x2ea40e,message:_0x3ec7a6}=_0x370e9c;try{await _0x3c1aac['sendMessage'](_0x2ea40e,{'react':{'text':'⏰','key':_0x3ec7a6[_0x599840(0x1ff)]}});const _0x49a51f=new ApiAutoresbot(config['APIKEY']),_0x554ce5=await _0x49a51f[_0x599840(0x1f5)]('/api/hadits');if(_0x554ce5?.[_0x599840(0x209)]&&_0x554ce5[_0x599840(0x209)][_0x599840(0x1f2)]&&_0x554ce5[_0x599840(0x209)][_0x599840(0x1f9)]&&_0x554ce5[_0x599840(0x209)][_0x599840(0x1f6)]){const _0x261be5=_0x1c6035[_0x599840(0x1f4)](_0x1c6035[_0x599840(0x1fe)]('📖\x20*'+_0x554ce5[_0x599840(0x209)][_0x599840(0x1f2)]+_0x599840(0x200),_0x599840(0x1ea)+_0x554ce5[_0x599840(0x209)][_0x599840(0x1f9)]+'\x0a\x0a'),_0x599840(0x1fa)+_0x554ce5[_0x599840(0x209)]['indo']);await _0x3c1aac[_0x599840(0x1f8)](_0x2ea40e,{'text':_0x261be5},{'quoted':_0x3ec7a6});}else{console['warn'](_0x1c6035[_0x599840(0x201)],_0x554ce5?.[_0x599840(0x209)]);const _0x699172=_0x1c6035['gmOGh'];await _0x3c1aac[_0x599840(0x1f8)](_0x2ea40e,{'text':_0x699172},{'quoted':_0x3ec7a6});}}catch(_0xc1e843){console['error'](_0x599840(0x1ec),_0xc1e843);const _0x25ee2e=_0x599840(0x208)+_0xc1e843[_0x599840(0x1fc)];await _0x3c1aac[_0x599840(0x1f8)](_0x2ea40e,{'text':_0x25ee2e},{'quoted':_0x3ec7a6});}}module[_0x55acdd(0x1f7)]={'handle':handle,'Commands':['hadis',_0x55acdd(0x1f0),_0x55acdd(0x207)],'OnlyPremium':![],'OnlyOwner':![]};