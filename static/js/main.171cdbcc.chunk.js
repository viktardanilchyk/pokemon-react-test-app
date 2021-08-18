(this["webpackJsonppokemon-redux-app"]=this["webpackJsonppokemon-redux-app"]||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(86),n(155)),s=n(171),l=n(158),u=n(160),d=n(161),x=n(66),b=n.n(x),j=n.p+"static/media/logo.b15175de.png",p=n(9),h=Object(i.a)((function(){return Object(s.a)({root:{flexGrow:1},logo:{maxWidth:160}})})),m=function(e){var t=h();return Object(p.jsx)("div",{className:t.root,children:Object(p.jsx)(l.a,{position:"static",children:Object(p.jsxs)(u.a,{children:[Object(p.jsx)(d.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(p.jsx)(b.a,{})}),Object(p.jsx)("img",{src:j,alt:"Pokemon React App",className:t.logo})]})})})},O=n(168),g=n(24),f=n(47),v=n(172),k=Object(v.a)("GET_POKEMON_LIST_REQUEST"),w=Object(v.a)("GET_POKEMON_LIST_SUCCESS"),P=Object(v.a)("GET_POKEMON_LIST_FAILED"),W=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},y=n(163),E=n(167),R=n(166),S=n(162),T=n(164),I=n(165),_=n(169),L=n(119),N=[{id:"id",label:"Pokemon Id",minWidth:100},{id:"name",label:"Pokemon Name",minWidth:170},{id:"frontImage",label:"Front Image",minWidth:170},{id:"height",label:"Height",minWidth:170},{id:"weight",label:"Weight",minWidth:170}],M=[],C=Object(i.a)({root:{width:"100%"}}),G=function(e){var t=C(),n=r.a.useState(0),a=Object(g.a)(n,2),c=a[0],o=a[1],i=r.a.useState(25),s=Object(g.a)(i,2),l=s[0],u=s[1],d=Object(f.b)(),x=Object(f.c)((function(e){return{pokemons:e.pokemonListReducer.pokemonTableReducer.pokemons,loading:e.pokemonListReducer.pokemonTableReducer.loading}})),b=x.pokemons,j=x.loading;return r.a.useEffect((function(){d(k())}),[d]),console.log(b),M=b&&0!==b.length?b.map((function(e){return{id:e.id,name:e.name,frontImage:e.sprites.front_default,height:e.height,weight:e.weight}})):[],j?Object(p.jsx)("div",{children:"Loading..."}):Object(p.jsxs)(L.a,{className:t.root,children:[Object(p.jsx)(S.a,{className:t.container,children:Object(p.jsxs)(y.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(p.jsx)(T.a,{children:Object(p.jsx)(I.a,{children:N.map((function(e){return Object(p.jsx)(R.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},W())}))})}),Object(p.jsx)(E.a,{children:M.slice(c*l,c*l+l).map((function(e){return Object(p.jsx)(I.a,{hover:!0,role:"checkbox",tabIndex:-1,children:N.map((function(t){var n=e[t.id];return Object(p.jsx)(R.a,{align:t.align,children:"frontImage"===t.id?Object(p.jsx)("img",{src:n}):n},W())}))},W())}))})]})}),Object(p.jsx)(_.a,{rowsPerPageOptions:[10,25,100],component:"div",count:M.length,rowsPerPage:l,page:c,onPageChange:function(e,t){o(t)},onRowsPerPageChange:function(e){u(+e.target.value),o(0)}})]})};var F,K=function(){return Object(p.jsxs)(r.a.Fragment,{children:[Object(p.jsx)(m,{}),Object(p.jsx)(O.a,{maxWidth:"lg",children:Object(p.jsx)(G,{})})]})},U=n(21),A=n(71),B=n(68),D=n(14),H=n(41),J=n(170),Q={pokemons:[],loading:!0,error:null},$=Object(J.a)((F={},Object(D.a)(F,k,(function(e,t){return Q})),Object(D.a)(F,w,(function(e,t){var n=t.payload;return Object(H.a)(Object(H.a)({},e),{},{pokemons:n,loading:!1})})),F),Q),q=Object(U.combineReducers)({pokemonTableReducer:$}),z=Object(U.combineReducers)({pokemonListReducer:q}),V=n(22),X=n.n(V),Y=n(33),Z=n(69),ee=n(70),te=n.n(ee).a.create({baseURL:"https://pokeapi.co/api/v2",responseType:"json"}),ne=X.a.mark(ce),ae=X.a.mark(oe),re=X.a.mark(ie);function ce(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.d)(k,ie);case 2:case"end":return e.stop()}}),ne)}function oe(){var e,t,n,a,r,c,o,i;return X.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e=[],s.next=3,te.get("/pokemon");case 3:t=s.sent,n=t.data.results,a=Object(Z.a)(n),s.prev=6,a.s();case 8:if((r=a.n()).done){s.next=17;break}return c=r.value,s.next=12,te.get(c.url);case 12:o=s.sent,i=o.data,e.push(i);case 15:s.next=8;break;case 17:s.next=22;break;case 19:s.prev=19,s.t0=s.catch(6),a.e(s.t0);case 22:return s.prev=22,a.f(),s.finish(22);case 25:return s.abrupt("return",e);case 26:case"end":return s.stop()}}),ae,null,[[6,19,22,25]])}function ie(){var e,t;return X.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(Y.b)(oe);case 3:return e=n.sent,t=e,n.next=7,Object(Y.c)(w(t));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(Y.c)(P(n.t0));case 13:case"end":return n.stop()}}),re,null,[[0,9]])}var se=X.a.mark(le);function le(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([ce()]);case 2:case"end":return e.stop()}}),se)}var ue=le;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=function(e){var t=Object(A.a)(),n=[t],a=[U.applyMiddleware.apply(void 0,n)],r=B.composeWithDevTools.apply(void 0,a),c=Object(U.createStore)(z,e,r);return t.run(ue),c}();o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(f.a,{store:de,children:Object(p.jsx)(K,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.171cdbcc.chunk.js.map