(this["webpackJsonpviewer.md"]=this["webpackJsonpviewer.md"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var s=n(2),i=n.n(s),a=n(5),c=n.n(a),r=(n(19),n(4)),d=n(6),l=n(7),j=n(9),o=n(8),h=(n.p,n(20),n(10)),u=n(13),b=n.n(u),v=n(14),p=n.n(v),O=n(0),m=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:b.a.sanitize(this.props.markdown)}})}}]),n}(i.a.Component),x=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).state={input:"# Test  \n## Test  \n`Code test`  \n* Item 1\n* Item 2\n* Item 3  \n\n```python\ndef codeblock:\n  return true\n```  \n\n[Link](https://kurtchoi.dev)  \n> Blockquote  \n\n**Bold Text**  \n\n*Italics*  \n\n![Markdown](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png)"},s.handleChange=s.handleChange.bind(Object(r.a)(s)),s}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsxs)("div",{className:"top",children:[Object(O.jsx)("span",{class:"title",children:"viewer.md"}),Object(O.jsx)("hr",{}),Object(O.jsx)("span",{class:"sub-title",children:"A simple Markdown viewer"})]}),Object(O.jsxs)("div",{className:"bottom",children:[Object(O.jsxs)("div",{class:"editor-div",children:[Object(O.jsxs)("span",{class:"div-desc",children:[Object(O.jsx)("i",{class:"fas fa-edit"}),"Editor"]}),Object(O.jsx)("textarea",{id:"editor",value:this.state.input,onChange:this.handleChange})]}),Object(O.jsxs)("div",{className:"viewer-div",id:"preview-div",children:[Object(O.jsxs)("div",{class:"div-desc",children:[Object(O.jsx)("i",{class:"far fa-eye"}),"Viewer"]}),Object(O.jsx)(m,{className:"render",markdown:p()(this.state.input,{gfm:!0,breaks:!0})})]})]}),Object(O.jsxs)("div",{className:"credit",children:["Coded and designed by ",Object(O.jsx)("a",{href:"https://kurtchoi.dev",target:"_blank",children:"Kurt Choi"})]})]})}}]),n}(i.a.Component);var k=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(h.a,{children:Object(O.jsx)("title",{children:"viewer.md"})}),Object(O.jsx)(x,{})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),f()}},[[25,1,2]]]);
//# sourceMappingURL=main.9ad7a9ad.chunk.js.map