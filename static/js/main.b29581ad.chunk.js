(this.webpackJsonpmoment=this.webpackJsonpmoment||[]).push([[0],{157:function(n,t,e){},158:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),c=e.n(i),a=e(61),o=e.n(a),u=e(2),s=e(8),l=e(9),h=e(11),d=e(10),f=e(65),b=e(5),j=e(3),p=e(24),v=e(33),O=e.n(v),g=e(23),m=e(34),x=e.n(m);e(60);function w(){var n=Object(u.a)(["\n    padding-left: 10vw;\n    padding-right: 10vw;\n    padding-bottom: 6vh;\n    min-height: calc(88vh - 120px);\n    background: #080808;\n"]);return w=function(){return n},n}var y={inlineMath:function(n){var t=n.value;return Object(r.jsx)(g.InlineMath,{math:t})},math:function(n){var t=n.value;return Object(r.jsx)(g.BlockMath,{math:t})}},k=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).state={post:null},n}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this;document.title=this.props.title,fetch(this.props.md).then((function(n){return n.text()})).then((function(t){return n.setState((function(n){return Object(p.a)(Object(p.a)({},n),{},{post:t})}))})).catch((function(n){return console.error(n)}))}},{key:"render",value:function(){var n=this.state.post;return Object(r.jsx)(M,{children:Object(r.jsx)(O.a,{plugins:[x.a],renderers:y,source:n})})}}]),e}(i.Component),M=j.a.div(w()),z=e(32);function C(){var n=Object(u.a)(["\n  margin-top: -14px;\n  color: #f2f2f2aa;\n  font-size: 14px;\n  font-weight: 200;\n  margin-bottom: 26px;\n  border-bottom: 0px solid #00000000;\n"]);return C=function(){return n},n}function S(){var n=Object(u.a)(["\n  color: #f2f2f2;\n  font-size: 34px;\n  font-weight: 300;\n  letter-spacing: 4px;\n  border-bottom: 0px solid #00000000;\n"]);return S=function(){return n},n}function R(){var n=Object(u.a)(["\n  font-family: 'Inter', sans-serif !important;\n  font-size: 12px;\n  color: #f2f2f255;\n  animation: "," 2s linear 1;\n  margin-top: -10px;\n"]);return R=function(){return n},n}function B(){var n=Object(u.a)(["\n  display: flex;\n  height: 100%;\n  min-width: 100%;\n  background: linear-gradient(114deg, rgba(39,39,181,1) 0%, rgba(64,34,103,1) 39%, rgba(135,55,149,1) 74%, rgba(52,102,156,1) 100%);\n  color: #f2f2f2;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  scroll-snap-align: start;\n  scroll-snap-stop: always;\n"]);return B=function(){return n},n}function A(){var n=Object(u.a)(["\n  0% { color: #f2f2f200; }\n  40% { color: #f2f2f200; }\n  100% { color: #f2f2f255; }\n"]);return A=function(){return n},n}var F=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(r.jsxs)(D,{children:[Object(r.jsx)(E,{children:"Moment's Notice"}),Object(r.jsx)(H,{children:"By Francis Park and Sean Rhee"}),Object(r.jsxs)(L,{children:["Home =",">"," Blog =",">"," About"]}),Object(r.jsx)(L,{children:"(scroll right // use arrow keys)"})]})}}]),e}(c.a.Component),I=Object(j.b)(A()),D=j.a.div(B()),L=j.a.p(R(),I),E=j.a.h1(S()),H=j.a.h1(C()),N=[{id:"0",title:"Getting Started with Create React App",gist:"https://gist.githubusercontent.com/s2011r2593/7cb8ca592708e6a66ada4f0d9ba5755d/raw/294593d795659250caf9907ca378cc03e7c0f0f5/0.md"}];function P(){var n=Object(u.a)(["\n    color: white;\n    font-size: 2.2em; \n    text-decoration: none;\n"]);return P=function(){return n},n}function T(){var n=Object(u.a)(["\n    margin-left: 10vw;\n    margin-right: 10vw;\n    margin-top: calc(6vh + 23.584px);\n    width: 80vw;\n    border-bottom: 1px dotted #c4c4c4;\n"]);return T=function(){return n},n}function W(){var n=Object(u.a)(["\n    color: white;\n    :visited {\n        color: #c4c4c4;\n    }\n"]);return W=function(){return n},n}function G(){var n=Object(u.a)(["\n    width: 80vw;\n    margin-left: 10vw;\n    border-top: 1px dotted #c4c4c4;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100px;\n"]);return G=function(){return n},n}function J(){var n=Object(u.a)(["\n    min-width: 100%;\n    overflow-y: scroll;\n    scroll-snap-align: start;\n    scroll-snap-stop: always;\n    scrollbar-width: none;\n    background: #080808;\n"]);return J=function(){return n},n}var U=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){for(var n=[],t=0;t<Math.min(10,N.length);t++)n.push(Object(r.jsxs)("div",{children:[Object(r.jsx)(V,{children:Object(r.jsx)(X,{href:"https://momentsnotice.github.io/blog/#/"+N[t].id,children:N[t].title})}),Object(r.jsx)(k,{md:N[t].gist},N[t].id)]}));return Object(r.jsxs)(q,{children:[n,Object(r.jsx)(K,{children:Object(r.jsx)(Q,{href:"https://momentsnotice.github.io/blog/#/archive",children:"Go To Archives"})})]})}}]),e}(c.a.Component),q=j.a.div(J()),K=j.a.div(G()),Q=j.a.a(W()),V=j.a.div(T()),X=j.a.a(P());function Y(){var n=Object(u.a)(["\n    padding-left: 10vw;\n    padding-right: 10vw;\n    padding-top: 6vh;\n    padding-bottom: 6vh;\n    min-height: 88vh;\n    background: #080808;\n"]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n    min-width: 100%;\n    overflow-y: scroll;\n    scroll-snap-align: start;\n    scroll-snap-stop: always;\n    scrollbar-width: none;\n"]);return Z=function(){return n},n}var $={inlineMath:function(n){var t=n.value;return Object(r.jsx)(g.InlineMath,{math:t})},math:function(n){var t=n.value;return Object(r.jsx)(g.BlockMath,{math:t})}},_=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(s.a)(this,e);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=t.call.apply(t,[this].concat(i))).state={post:null},n}return Object(l.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("https://gist.githubusercontent.com/s2011r2593/72d1375e5194eaeb5ceffd87a380e494/raw/b58eba33fd1c9d1d7312c7e96381380509fecfd1/about.md").then((function(n){return n.text()})).then((function(t){return n.setState((function(n){return Object(p.a)(Object(p.a)({},n),{},{post:t})}))})).catch((function(n){return console.error(n)}))}},{key:"render",value:function(){var n=this.state.post;return Object(r.jsx)(nn,{children:Object(r.jsx)(tn,{children:Object(r.jsx)(O.a,{plugins:[x.a],renderers:$,source:n})})})}}]),e}(c.a.Component),nn=j.a.div(Z()),tn=j.a.div(Y());function en(){var n=Object(u.a)(["\n    display: flex;\n    flex-flow: row nowrap;\n    width: ",";\n    height: ","px;\n    overflow-x: scroll;\n    overflow-y: auto;\n    scroll-snap-type: x mandatory;\n    scrollbar-width: none;\n    ::-webkit-scrollbar {\n        display: none!important;\n        height: 0;\n        width: 0;\n        background-color: transparent;\n    }\n"]);return en=function(){return n},n}var rn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(n){var r;return Object(s.a)(this,e),(r=t.call(this,n)).handleResize=function(){r.setState({w:window.innerWidth}),r.setState({h:window.innerHeight})},r.state={w:window.innerWidth,h:window.innerHeight},r.handleResize=r.handleResize.bind(Object(z.a)(r)),r}return Object(l.a)(e,[{key:"componentDidMount",value:function(){document.title="Moment's Notice: a blog about stuff",window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return Object(r.jsxs)(cn,{h:this.state.h,w:this.state.w,children:[Object(r.jsx)(F,{}),Object(r.jsx)(U,{}),Object(r.jsx)(_,{})]})}}]),e}(i.Component),cn=j.a.div(en(),(function(n){return n.w}),(function(n){return n.h}));function an(){var n=Object(u.a)(["\n    margin-left: 10vw;\n    font-size: 1.8em;\n    color: white;\n    text-decoration: none;\n"]);return an=function(){return n},n}function on(){var n=Object(u.a)(["\n    width: 100%;\n    background: linear-gradient(114deg, rgba(39,39,181,1) 0%, rgba(64,34,103,1) 39%, rgba(135,55,149,1) 74%, rgba(52,102,156,1) 100%);\n    display: flex;\n    align-items: center;\n    height: 120px;\n    position: absolute;\n    top: 0;\n    left: 0;\n"]);return on=function(){return n},n}var un=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(r.jsx)(sn,{children:Object(r.jsx)(ln,{href:"https://momentsnotice.github.io/blog/#/",children:"Moment's Notice"})})}}]),e}(c.a.Component),sn=j.a.div(on()),ln=j.a.a(an());function hn(){var n=Object(u.a)(["\n    color: white;\n    :visited {\n        color: #c4c4c4;\n    }\n    margin-bottom: .4em;\n"]);return hn=function(){return n},n}function dn(){var n=Object(u.a)(["\n    min-width: 80vw;\n    min-height: calc(88vh - 120px);\n    overflow-y: scroll;\n    scroll-snap-align: start;\n    scroll-snap-stop: always;\n    scrollbar-width: none;\n    background: #080808;\n    margin-top: 120px;\n    padding-left: 10vw;\n    padding-right: 10vw;\n    padding-top: 6vh;\n    padding-bottom: 6vh;\n    display: flex;\n    flex-direction: column;\n"]);return dn=function(){return n},n}var fn=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){for(var n=[],t=0;t<Math.min(10,N.length);t++)n.push(Object(r.jsx)(jn,{href:"https://momentsnotice.github.io/blog/#/"+N[t].id,children:N[t].title},N[t].id));return Object(r.jsxs)(bn,{children:[Object(r.jsx)(un,{}),n]})}}]),e}(c.a.Component),bn=j.a.div(dn()),jn=j.a.a(hn());function pn(){var n=Object(u.a)(["\n    margin-left: 10vw;\n    width: 80vw;\n    padding-top: 23.584px;\n"]);return pn=function(){return n},n}function vn(){var n=Object(u.a)(["\n    max-height: calc(100vh - 120px);\n    padding-top: 120px;\n    background: #080808;\n"]);return vn=function(){return n},n}var On=function(n){Object(h.a)(e,n);var t=Object(d.a)(e);function e(){return Object(s.a)(this,e),t.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(r.jsx)(f.a,{children:Object(r.jsxs)(b.c,{children:[Object(r.jsx)(b.a,{exact:!0,path:"/#/",children:Object(r.jsx)(rn,{})},"home"),Object(r.jsx)(b.a,{path:"/#/archive",children:Object(r.jsx)(fn,{})},"archive"),N.map((function(n){return Object(r.jsx)(b.a,{path:"/#/"+n.id,render:function(){return Object(r.jsxs)(gn,{children:[Object(r.jsx)(un,{}),Object(r.jsx)(mn,{children:n.title}),Object(r.jsx)(k,{title:n.title,md:n.gist})]})}},n.id)}))]})})}}]),e}(i.Component),gn=j.a.div(vn()),mn=j.a.h1(pn()),xn=(e(157),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,159)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),c(n),a(n)}))});o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(On,{})}),document.getElementById("root")),xn()}},[[158,1,2]]]);
//# sourceMappingURL=main.b29581ad.chunk.js.map