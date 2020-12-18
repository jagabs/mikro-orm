(window.webpackJsonp=window.webpackJsonp||[]).push([[781],{1086:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var b=i.a.createContext({}),s=function(e){var t=i.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),u=n,d=l["".concat(o,".").concat(u)]||l[u]||m[u]||c;return r?i.a.createElement(d,a(a({ref:t},b),{},{components:r})):i.a.createElement(d,a({ref:t},b))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var b=2;b<c;b++)o[b]=r[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},851:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return a})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),i=r(7),c=(r(0),r(1086)),o={id:"factoryoptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions"},a={unversionedId:"api/interfaces/factoryoptions",id:"api/interfaces/factoryoptions",isDocsHomePage:!1,title:"Interface: FactoryOptions",description:"Hierarchy",source:"@site/docs/api/interfaces/factoryoptions.md",slug:"/api/interfaces/factoryoptions",permalink:"/docs/next/api/interfaces/factoryoptions",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/api/interfaces/factoryoptions.md",version:"current",sidebar_label:"FactoryOptions",sidebar:"API",previous:{title:"Interface: EventSubscriber<T>",permalink:"/docs/next/api/interfaces/eventsubscriber"},next:{title:"Interface: FindOneOptions<T, P>",permalink:"/docs/next/api/interfaces/findoneoptions"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[]},{value:"initialized",id:"initialized",children:[]},{value:"merge",id:"merge",children:[]},{value:"newEntity",id:"newentity",children:[]},{value:"refresh",id:"refresh",children:[]}]}],b={rightToc:p};function s(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"FactoryOptions"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"convertCustomTypes"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/core/src/entity/EntityFactory.ts#L12"}),"packages/core/src/entity/EntityFactory.ts:12"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"initialized"},"initialized"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"initialized"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/core/src/entity/EntityFactory.ts#L8"}),"packages/core/src/entity/EntityFactory.ts:8"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"merge"},"merge"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"merge"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/core/src/entity/EntityFactory.ts#L10"}),"packages/core/src/entity/EntityFactory.ts:10"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"newentity"},"newEntity"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"newEntity"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/core/src/entity/EntityFactory.ts#L9"}),"packages/core/src/entity/EntityFactory.ts:9"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"refresh"},"refresh"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"refresh"),": boolean"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/6dcbd0c/packages/core/src/entity/EntityFactory.ts#L11"}),"packages/core/src/entity/EntityFactory.ts:11"))))}s.isMDXComponent=!0}}]);