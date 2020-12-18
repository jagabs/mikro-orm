(window.webpackJsonp=window.webpackJsonp||[]).push([[680],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var b=c.a.createContext({}),p=function(e){var t=c.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},l=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),m=p(r),l=n,d=m["".concat(o,".").concat(l)]||m[l]||s[l]||a;return r?c.a.createElement(d,i(i({ref:t},b),{},{components:r})):c.a.createElement(d,i({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=l;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<a;b++)o[b]=r[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},749:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),c=r(7),a=(r(0),r(1086)),o={id:"querytype",title:"Enumeration: QueryType",sidebar_label:"QueryType"},i={unversionedId:"api/enums/querytype",id:"api/enums/querytype",isDocsHomePage:!1,title:"Enumeration: QueryType",description:"Enumeration members",source:"@site/docs/api/enums/querytype.md",slug:"/api/enums/querytype",permalink:"/docs/next/api/enums/querytype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/enums/querytype.md",version:"current",sidebar_label:"QueryType",sidebar:"API",previous:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/next/api/enums/queryordernumeric"},next:{title:"Enumeration: ReferenceType",permalink:"/docs/next/api/enums/referencetype"}},u=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"COUNT",id:"count",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"INSERT",id:"insert",children:[]},{value:"SELECT",id:"select",children:[]},{value:"TRUNCATE",id:"truncate",children:[]},{value:"UPDATE",id:"update",children:[]}]}],b={rightToc:u};function p(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(a.b)("h3",{id:"count"},"COUNT"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"COUNT"),':  = "COUNT"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/knex/src/query/enums.ts#L4"}),"packages/knex/src/query/enums.ts:4"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"delete"},"DELETE"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"DELETE"),':  = "DELETE"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/knex/src/query/enums.ts#L7"}),"packages/knex/src/query/enums.ts:7"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"insert"},"INSERT"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"INSERT"),':  = "INSERT"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/knex/src/query/enums.ts#L5"}),"packages/knex/src/query/enums.ts:5"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"select"},"SELECT"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"SELECT"),':  = "SELECT"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/knex/src/query/enums.ts#L3"}),"packages/knex/src/query/enums.ts:3"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"truncate"},"TRUNCATE"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"TRUNCATE"),':  = "TRUNCATE"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/knex/src/query/enums.ts#L2"}),"packages/knex/src/query/enums.ts:2"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"update"},"UPDATE"),Object(a.b)("p",null,"\u2022  ",Object(a.b)("strong",{parentName:"p"},"UPDATE"),':  = "UPDATE"'),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/knex/src/query/enums.ts#L6"}),"packages/knex/src/query/enums.ts:6"))))}p.isMDXComponent=!0}}]);