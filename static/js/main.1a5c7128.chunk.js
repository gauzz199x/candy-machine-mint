(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{133:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(64),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),d=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),b=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,d,b=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=b.length>3&&void 0!==b[3]?b[3]:"recent",o=b.length>4&&void 0!==b[4]&&b[4],s=!1,u={slot:0,confirmations:0,err:null},d=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(b,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);try{d=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),l(u)):(console.log("Resolved via websocket",e),b(u))}),i)}catch(f){s=!0,console.error("WS error in setup",t,f)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,l(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,h(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[d]&&r.removeSignatureListener(d),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,d,b,l,f,p,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),d={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return b=e.sent,l=b.data.itemsAvailable.toNumber(),f=b.itemsRedeemed.toNumber(),p=l-f,j=b.data.goLiveDate.toNumber(),j=new Date(1e3*j),console.log({itemsAvailable:l,itemsRedeemed:f,itemsRemaining:p,goLiveDate:j}),e.abrupt("return",{candyMachine:d,itemsAvailable:l,itemsRedeemed:f,itemsRemaining:p,goLiveDate:j});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer(),e.from("edition")],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),d.toBuffer(),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,b,f,O,g,h;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,m(r,s.publicKey);case 3:return u=e.sent,b=t.connection,f=t.program,e.next=7,j(s.publicKey);case 7:return O=e.sent,e.next=10,p(s.publicKey);case 10:return g=e.sent,e.next=13,b.getMinimumBalanceForRentExemption(o.a.span);case 13:return h=e.sent,e.next=16,f.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:O,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:d,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:h,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),l(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},h=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(7).Buffer)},353:function(e,t,n){},354:function(e,t,n){},357:function(e,t){},359:function(e,t){},375:function(e,t){},376:function(e,t){},407:function(e,t){},463:function(e,t){},465:function(e,t){},479:function(e,t){},483:function(e,t){},485:function(e,t){},495:function(e,t){},497:function(e,t){},524:function(e,t){},526:function(e,t){},531:function(e,t){},533:function(e,t){},539:function(e,t){},541:function(e,t){},553:function(e,t){},556:function(e,t){},568:function(e,t){},569:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(29),d=n.n(u),b=(n(353),n(354),n(12)),l=n(1),f=n.n(l),p=n(4),j=n(13),m=n(132),O=n(134),g=n(313),h=n(596),x=n(601),v=n(605),y=n(604),S=n(15),w=n(52),k=n(175),P=n(133),R=n(26),T=Object(O.a)(k.a)(r||(r=Object(m.a)([""]))),B=O.a.span(c||(c=Object(m.a)([""]))),A=O.a.div(a||(a=Object(m.a)([""]))),E=Object(O.a)(h.a)(i||(i=Object(m.a)(['\n  background-color: darkgoldenrod;\n  border-size: 10px;\n  border-color: black;\n  background-image: url("resources/button.png");\n  background-size(contain);\n\n']))),K=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(R.jsxs)(B,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},M=function(e){var t=Object(o.useState)(),n=Object(j.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(j.a)(a,2),s=i[0],u=i[1],d=Object(o.useState)(!1),l=Object(j.a)(d,2),m=l[0],O=l[1],h=Object(o.useState)(!1),k=Object(j.a)(h,2),B=k[0],M=k[1],L=Object(o.useState)(0),I=Object(j.a)(L,2),C=I[0],D=I[1],N=Object(o.useState)(0),W=Object(j.a)(N,2),_=W[0],U=W[1],Y=Object(o.useState)(0),G=Object(j.a)(Y,2),H=G[0],V=G[1],J=Object(o.useState)({open:!1,message:"",severity:void 0}),Z=Object(j.a)(J,2),z=Z[0],F=Z[1],q=Object(o.useState)(new Date(e.startDate)),Q=Object(j.a)(q,2),X=Q[0],$=Q[1],ee=Object(w.c)(),te=Object(o.useState)(),ne=Object(j.a)(te,2),re=ne[0],ce=ne[1],ae=function(){Object(p.a)(f.a.mark((function t(){var n,r,c,a,i,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(ee){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(ee,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,D(a),V(i),U(o),O(0===i),$(c),ce(r);case 16:case"end":return t.stop()}}),t)})))()},ie=function(){var t=Object(p.a)(f.a.mark((function t(){var n,r,a,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,M(!0),!ee||!(null===re||void 0===re?void 0:re.program)){t.next=10;break}return t.next=5,Object(P.c)(re,e.config,ee.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?F({open:!0,message:"Mint failed! Please try again!",severity:"error"}):F({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",O(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),F({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!ee){t.next=23;break}return t.next=21,e.connection.getBalance(ee.publicKey);case 21:i=t.sent,c(i/S.LAMPORTS_PER_SOL);case 23:return M(!1),ae(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(f.a.mark((function t(){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!ee){t.next=5;break}return t.next=3,e.connection.getBalance(ee.publicKey);case 3:n=t.sent,c(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[ee,e.connection]),Object(o.useEffect)(ae,[ee,e.candyMachineId,e.connection]),Object(R.jsxs)("main",{children:[Object(R.jsxs)("div",{className:"name-banner",children:[Object(R.jsx)("h2",{children:"Vampire Ape Gang"}),Object(R.jsx)("h4",{children:"presents"}),Object(R.jsx)("h2",{children:"SUPER SECRET STEALTH MINT"})]}),Object(R.jsxs)("div",{className:"parent-container",children:[Object(R.jsxs)("div",{className:"info-container",children:[Object(R.jsx)("p",{children:"WHAT A TERRIBLE NIGHT TO BE HUMAN. As darkness falls on this cursed night, 1111 bloodthirsy apes are awakening from their centuries long slumber in the crypts beneath the Solana Citadel..."}),ee&&Object(R.jsxs)("p",{children:["Wallet ",Object(P.d)(ee.publicKey.toBase58()||"")]}),ee&&Object(R.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),Object(R.jsx)("p",{children:"Price: 1 SOL"}),ee&&Object(R.jsxs)("p",{children:["id: ",e.candyMachineId.toBase58()]}),ee&&Object(R.jsxs)("p",{children:["conf: ",e.config.toBase58()]}),ee&&Object(R.jsxs)("p",{children:["Total Available: ",C]}),ee&&Object(R.jsxs)("p",{children:["Redeemed: ",_]}),ee&&Object(R.jsxs)("p",{children:["Remaining: ",H]})]}),Object(R.jsx)(A,{children:Object(R.jsx)("div",{className:"mint-container",children:ee?Object(R.jsx)(E,{disabled:m||B||!s,onClick:ie,variant:"contained",children:m?"SOLD OUT":s?B?Object(R.jsx)(x.a,{}):"MINT":Object(R.jsx)(g.a,{date:X,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:K})}):Object(R.jsx)(T,{children:"Connect Wallet"})})}),Object(R.jsx)(v.a,{open:z.open,autoHideDuration:6e3,onClose:function(){return F(Object(b.a)(Object(b.a)({},z),{},{open:!1}))},children:Object(R.jsx)(y.a,{onClose:function(){return F(Object(b.a)(Object(b.a)({},z),{},{open:!1}))},severity:z.severity,children:z.message})})]})]})},L=n(32),I=n(116),C=n(340),D=n(602),N=new L.d.PublicKey("5jEuKjdeZaV6iP7n24ThZ9CooyeDnBdsJaEYJpiRLcis"),W=new L.d.PublicKey("EKeBmw9BRXG2aZhru8SYA128u7T1GyB3S3V3WgE8ZgwJ"),_=new L.d.PublicKey("2zj3YtGTpCfwBQoE2jSu5QMH3MfvvnXDcy6nfnAwESxc"),U="devnet",Y=new L.d.Connection("https://api.devnet.solana.com"),G=parseInt("1639514822.193",10),H=Object(C.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),V=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(U)}),[]),t=Object(o.useMemo)((function(){return[Object(I.a)(),Object(I.b)(),Object(I.c)(),Object(I.e)({network:U}),Object(I.d)({network:U})]}),[]);return Object(R.jsx)(D.a,{theme:H,children:Object(R.jsx)(w.a,{endpoint:e,children:Object(R.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(R.jsx)(k.b,{children:Object(R.jsx)(M,{candyMachineId:_,config:W,connection:Y,startDate:G,treasury:N,txTimeout:3e4})})})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,606)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};d.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(V,{})}),document.getElementById("root")),J()}},[[569,1,2]]]);
//# sourceMappingURL=main.1a5c7128.chunk.js.map