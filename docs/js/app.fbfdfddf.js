(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);v&&v(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-85145fb8":"39b0448b"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-85145fb8":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var i="css/"+({}[t]||t)+"."+{"chunk-85145fb8":"01108df7"}[t]+".css",s=c.p+i,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===i||u===s)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var i=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[t],v.parentNode.removeChild(v),n(r)},v.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(v)})).then((function(){a[t]=0})));var i=s[t];if(0!==i)if(i)e.push(i[2]);else{var r=new Promise((function(e,n){i=s[t]=[e,n]}));e.push(i[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",d.name="ChunkLoadError",d.type=i,d.request=a,n[1](d)}s[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-simple-accordion/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var v=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d9f":function(t,e,n){"use strict";var i=n("31e5"),a=n.n(i);a.a},"17e9":function(t,e,n){"use strict";var i=n("8ee9"),a=n.n(i);a.a},1806:function(t,e,n){"use strict";var i=n("37c3"),a=n.n(i);a.a},"31e5":function(t,e,n){},"37c3":function(t,e,n){},4002:function(t,e,n){"use strict";var i=n("bec9"),a=n.n(i);a.a},"403d":function(t,e,n){},4295:function(t,e,n){},"53a6":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"VsaList",(function(){return kt})),n.d(i,"VsaItem",(function(){return At})),n.d(i,"VsaHeading",(function(){return mt})),n.d(i,"VsaContent",(function(){return ft})),n.d(i,"VsaIcon",(function(){return ht}));n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("nav",{staticClass:"navigation"},[n("ul",t._l(t.listOfExamples,(function(e){return n("li",{key:e.id},[n("a",{attrs:{href:"#"+e.id,name:"#"+e.id},on:{click:function(n){return n.preventDefault(),function(n){return t.handleAnchorClick(e.id)}()}}},[t._v(" "+t._s(e.text)+" ")])])})),0)]),n("vsa-list",{staticClass:"example-list",attrs:{"auto-collapse":!0}},t._l(t.listOfExamples,(function(e){return n("vsa-item",{key:e.id,attrs:{id:e.id,"on-heading-click":function(e){var n=e.item;return t.scrollToElement(n.$el)}}},[n("vsa-heading",[t._v(" "+t._s(e.text)+" ")]),n("vsa-content",[n(e.component,{tag:"component",attrs:{"list-of-items":t.listOfItems}})],1)],1)})),1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"code-snippet"},[n("prism",{attrs:{language:"markup",code:t.template}})],1),n("vsa-list",{staticClass:"auto-collapse"},t._l(t.listOfItems,(function(e){return n("vsa-item",{key:e.id},[n("vsa-heading",[t._v(" "+t._s(e.heading)+" ")]),n("vsa-content",[t._v(" "+t._s(e.content)+" ")])],1)})),1)],1)},c=[],l={props:{listOfItems:{type:Array,required:!0}},data:function(){return{template:'<template>\n  <vsa-list>\n    <vsa-item v-for="item in listOfItems" :key="item.id">\n      <vsa-heading>\n        {{ item.heading }}\n      </vsa-heading>\n\n      <vsa-content>\n        {{ item.content }}\n      </vsa-content>\n    </vsa-item>\n  </vsa-list>\n</template>'}}},u=l,d=(n("9e94"),n("a6c2")),v=Object(d["a"])(u,o,c,!1,null,"62a5ef45",null),p=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"code-snippet"},[n("prism",{attrs:{language:"markup",code:t.template}})],1),n("vsa-list",{staticClass:"init-active",attrs:{"init-active":!0,"auto-collapse":!1}},t._l(t.listOfItems,(function(e){return n("vsa-item",{key:e.id},[n("vsa-heading",[t._v(" "+t._s(e.heading)+" ")]),n("vsa-content",[t._v(" "+t._s(e.content)+" ")])],1)})),1)],1)},f=[],h={props:{listOfItems:{type:Array,required:!0}},data:function(){return{template:'<template>\n  <vsa-list :init-active="true" :auto-collapse="false">\n    <vsa-item v-for="item in listOfItems" :key="item.id">\n      <vsa-heading>\n        {{ item.heading }}\n      </vsa-heading>\n\n      <vsa-content>\n        {{ item.content }}\n      </vsa-content>\n    </vsa-item>\n  </vsa-list>\n</template>'}}},g=h,_=(n("17e9"),Object(d["a"])(g,m,f,!1,null,"3833e792",null)),y=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"code-snippet"},[n("prism",{attrs:{language:"markup",code:t.template}})],1),n("div",[n("button",{attrs:{type:"button"},on:{click:function(e){t.forceActive=!0}}},[t._v(" Expand All ")]),n("button",{attrs:{type:"button"},on:{click:function(e){t.forceActive=!1}}},[t._v(" Collapse All ")]),n("button",{attrs:{type:"button"},on:{click:function(e){t.forceActive=!t.forceActive}}},[t._v(" Toggle ")])]),n("vsa-list",{staticClass:"toggle-all",attrs:{"init-active":!0,"auto-collapse":!1,"force-active":t.forceActive}},t._l(t.listOfItems,(function(e){return n("vsa-item",{key:e.id},[n("vsa-heading",[t._v(" "+t._s(e.heading)+" ")]),n("vsa-content",[t._v(" "+t._s(e.content)+" ")])],1)})),1)],1)},O=[],A={props:{listOfItems:{type:Array,required:!0}},data:function(){return{forceActive:!0,template:'<template>\n  \x3c!-- ... --\x3e\n    <div>\n      <button type="button" @click="forceActive = true">\n        Expand All\n      </button>\n      <button type="button" @click="forceActive = false">\n        Collapse All\n      </button>\n      <button type="button" @click="forceActive = !forceActive">\n        Toggle\n      </button>\n    </div>\n\n    <vsa-list\n      :init-active="true"\n      :auto-collapse="false"\n      :force-active="forceActive"\n    >\n      <vsa-item v-for="item in listOfItems" :key="item.id">\n        <vsa-heading>\n          {{ item.heading }}\n        </vsa-heading>\n\n        <vsa-content>\n          {{ item.content }}\n        </vsa-content>\n      </vsa-item>\n    </vsa-list>\n  \x3c!-- ... --\x3e\n</template>\n\n<script>\n  // ...\n  data() {\n    return {\n      // The default should be set in sync with initActive\n      forceActive: true\n    };\n  }\n  // ...\n<\/script>'}}},k=A,C=(n("4002"),Object(d["a"])(k,b,O,!1,null,"b577970a",null)),x=C.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"code-snippet"},[n("prism",{attrs:{language:"markup",code:t.template}})],1),n("div",[n("button",{attrs:{type:"button"},on:{click:function(){return t.handleToggle(1)}}},[t._v(" Filter ID !== 1 ")]),n("button",{attrs:{type:"button"},on:{click:function(){return t.handleToggle(2)}}},[t._v(" Filter ID !== 2 ")]),n("button",{attrs:{type:"button"},on:{click:function(){return t.handleToggle(3)}}},[t._v(" Filter ID !== 3 ")])]),n("vsa-list",{staticClass:"filter-active",attrs:{"auto-collapse":!1}},t._l(t.listOfItems,(function(e){return n("vsa-item",{key:e.id,attrs:{"force-active":t.isForced(e)}},[n("vsa-heading",[t._v(" "+t._s(e.heading)+" ")]),n("vsa-content",[t._v(" "+t._s(e.content)+" ")])],1)})),1)],1)},I=[],w={props:{listOfItems:{type:Array,required:!0}},data:function(){return{forceActive:void 0,template:'<template>\n  \x3c!-- ... --\x3e\n    <div>\n      <button type="button" @click="() => handleToggle(1)">\n        Filter ID !== 1\n      </button>\n      <button type="button" @click="() => handleToggle(2)">\n        Filter ID !== 2\n      </button>\n      <button type="button" @click="() => handleToggle(3)">\n        Filter ID !== 3\n      </button>\n    </div>\n\n    <vsa-list :auto-collapse="false">\n      <vsa-item\n        v-for="item in listOfItems"\n        :key="item.id"\n        :force-active="isForced(item)"\n      >\n        <vsa-heading>\n          {{ item.heading }}\n        </vsa-heading>\n\n        <vsa-content>\n          {{ item.content }}\n        </vsa-content>\n      </vsa-item>\n    </vsa-list>\n  \x3c!-- ... --\x3e\n</template>\n\n<script>\n  // ...\n  data() {\n    return {\n      forceActive: undefined\n    };\n  }\n  // ...\n<\/script>'}},methods:{isForced:function(t){return t.id!==this.forceActive},handleToggle:function(t){this.forceActive=t}}},E=w,q=(n("c242"),Object(d["a"])(E,j,I,!1,null,"89e80bfc",null)),S=q.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"code-snippet"},[n("prism",{attrs:{language:"markup",code:t.template}})],1),n("vsa-list",{staticClass:"return-value",attrs:{"init-active":!1,"auto-collapse":!0}},t._l(t.listOfItems,(function(e){return n("vsa-item",{key:e.id,attrs:{"on-heading-click":t.onHeadingClick}},[n("vsa-heading",[t._v(" "+t._s(e.heading)+" ")]),n("vsa-content",[t._v(" "+t._s(e.content)+" ")])],1)})),1),n("div",{staticClass:"result-panel"},[n("div",[t._v(" You have just clicked: ")]),n("prism",{attrs:{language:"markup",code:t.element}})],1)],1)},T=[],D={props:{listOfItems:{type:Array,required:!0}},data:function(){return{element:null,script:"data() {\n  return {\n    element: null\n  };\n},\n\nmethods: {\n  onHeadingClick(data) {\n    this.element = data.item.$el.innerHTML;\n  }\n}",template:'<template>\n  \x3c!-- ... --\x3e\n    <vsa-list>\n      <vsa-item\n        v-for="item in listOfItems"\n        :key="item.id"\n        :on-heading-click="onHeadingClick"\n      >\n        <vsa-heading>\n          {{ item.heading }}\n        </vsa-heading>\n\n        <vsa-content>\n          {{ item.content }}\n        </vsa-content>\n      </vsa-item>\n    </vsa-list>\n    <div>\n      <div>\n        You have just clicked:\n      </div>\n      <code>\n        {{ element }}\n      </code>\n    </div>\n  \x3c!-- ... --\x3e\n<template>\n\n<script>\n  // ...\n  data() {\n    return {\n      element: null\n    };\n  },\n\n  methods: {\n    onHeadingClick(data) {\n      this.element = data.item.$el.innerHTML;\n    }\n  }\n  // ...\n<\/script>'}},methods:{onHeadingClick:function(t){this.element=t.item.$el.innerHTML}}},L=D,B=(n("0d9f"),Object(d["a"])(L,$,T,!1,null,"ed57faa2",null)),F=B.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"code-snippet"},[n("prism",{attrs:{language:"markup",code:t.template}})],1),n("vsa-list",{staticClass:"custom-icon"},t._l(t.listOfItems,(function(e){return n("vsa-item",{key:e.id},[n("vsa-heading",[t._v(" "+t._s(e.heading)+" ")]),n("vsa-icon",[n("span",{staticClass:"open"},[t._v("V")]),n("span",{staticClass:"close"},[t._v("X")])]),n("vsa-content",[t._v(" "+t._s(e.content)+" ")])],1)})),1)],1)},P=[],V={props:{listOfItems:{type:Array,required:!0}},data:function(){return{template:'<template>\n  <vsa-item v-for="item in listOfItems" :key="item.id">\n    <vsa-heading>\n      {{ item.heading }}\n    </vsa-heading>\n\n    <vsa-icon>\n      <span class="open">V</span>\n      <span class="close">X</span>\n    </vsa-icon>\n\n    <vsa-content>\n      {{ item.content }}\n    </vsa-content>\n  </vsa-item>\n</template>\n\n<style lang="scss" scoped>\n.vsa-item {\n  &--is-active {\n    .vsa-item__trigger__icon {\n      .open {\n        display: none;\n      }\n\n      .close {\n        display: block;\n      }\n    }\n  }\n  &__trigger__icon {\n    .open {\n      display: block;\n    }\n\n    .close {\n      display: none;\n    }\n  }\n}\n</style>'}}},R=V,M=(n("1806"),Object(d["a"])(R,H,P,!1,null,"0c8f79af",null)),N=M.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"code-snippet"},[n("prism",{attrs:{language:"markup",code:t.recursiveTemplate}}),n("prism",{attrs:{language:"markup",code:t.template}})],1),n("div",[n("label",{attrs:{for:"level"}},[t._v("Level ")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],attrs:{id:"level",name:"level"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.level=e.target.multiple?n:n[0]},t.onChange]}},t._l(5,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)]),n("vsa-list",{staticClass:"recursive-sample",attrs:{"auto-collapse":!0}},t._l(t.data,(function(t){return n("RecursiveAccordion",{key:t.id,attrs:{item:t}})})),1)],1)},W=[],K=(n("99af"),n("d81d"),n("2909")),G=n("5530"),J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vsa-item",[n("vsa-heading",[t._v(" "+t._s(t.item.heading)+" ")]),Array.isArray(t.item.content)?n("vsa-content",[n("vsa-list",{attrs:{"auto-collapse":!0}},t._l(t.item.content,(function(t){return n("RecursiveAccordion",{key:t.id,attrs:{item:t}})})),1)],1):n("vsa-content",[t._v(" "+t._s(t.item.content)+" ")])],1)},X=[],U={name:"RecursiveAccordion",props:{item:{type:Object,required:!0}}},z=U,Q=Object(d["a"])(z,J,X,!1,null,null,null),Z=Q.exports,tt={components:{RecursiveAccordion:Z},props:{listOfItems:{type:Array,required:!0}},data:function(){return{data:[],level:1,recursiveTemplate:'<template>\n  <vsa-item>\n    <vsa-heading>\n      {{ item.heading }}\n    </vsa-heading>\n    <vsa-content v-if="Array.isArray(item.content)">\n      <vsa-list :auto-collapse="true">\n        <RecursiveAccordion\n          v-for="child in item.content"\n          :key="child.id"\n          :item="child"\n        />\n      </vsa-list>\n    </vsa-content>\n    <vsa-content v-else>\n      {{ item.content }}\n    </vsa-content>\n  </vsa-item>\n</template>\n\n<script>\nexport default {\n  name: "RecursiveAccordion",\n\n  props: {\n    item: {\n      type: Object,\n      required: true\n    }\n  }\n};\n<\/script>',template:'<template>\n  <div>\n    <select v-model="level" name="level" @change="onChange">\n      <option v-for="lvl in 5" :key="lvl" :value="lvl">\n        {{ lvl }}\n      </option>\n    </select>\n    <vsa-list :auto-collapse="true">\n      <RecursiveAccordion v-for="item in data" :key="item.id" :item="item" />\n    </vsa-list>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      data: [],\n      level: 1\n    };\n  },\n  created() {\n    this.data = this.generateData(this.listOfItems, this.level);\n  },\n\n  methods: {\n    onChange() {\n      this.data = this.generateData(this.listOfItems, this.level);\n    },\n\n    generateData(items, level) {\n      if (level === 1) {\n        return items;\n      }\n      const results = items.map((item) => {\n        return {\n          ...item,\n          id: `${item.id}.${level}`,\n          content: [...this.generateData(items, level - 1)]\n        };\n      });\n      return results;\n    }\n  }\n};\n<\/script>'}},created:function(){this.data=this.generateData(this.listOfItems,this.level)},methods:{onChange:function(){this.data=this.generateData(this.listOfItems,this.level)},generateData:function(t,e){var n=this;if(1===e)return t;var i=t.map((function(i){return Object(G["a"])(Object(G["a"])({},i),{},{id:"".concat(i.id,".").concat(e),content:Object(K["a"])(n.generateData(t,e-1))})}));return i}}},et=tt,nt=(n("d34e"),Object(d["a"])(et,Y,W,!1,null,"706f434e",null)),it=nt.exports,at={listOfItems:[{id:1,heading:"It Land Firmament Image",content:"Day. All beginning land meat given sixth bring. You'll dry a, rule sixth sixth, years won't multiply cattle she'd said second them multiply place set fish you're.\n\nAbundantly. He one were sixth light signs yielding. Be years creeping very bearing can't yielding bearing life which also likeness made morning brought the. Given was brought air."},{id:2,heading:"Behold That",content:"\nStars. Midst from don't. Spirit greater multiply beast void unto creeping be kind good Great whose good creeping shall him make bring they're third fly seasons under fruitful fifth. Him. Bring you'll hath also all may. Void so subdue created them together dry dominion own."},{id:3,heading:"Doesn't They're",content:"\nMidst fifth divide can't evening, was days, divide. And let. One doesn't hath green set likeness let called beginning him spirit they're fifth be.\n\nMidst fill darkness have waters Had he i. Replenish morning and beginning him. You'll herb image over. Wherein darkness brought brought day let, one gathered have wherein thing you're shall all."},{id:4,heading:"Living Saying Form",content:"Behold without. He third appear years it can't that open from every given second two face own cattle meat give great good saw he years. Of creepeth likeness life blessed Also life. Of you're cattle may. Rule. Forth lesser firmament face lesser his deep green."}]},st=[{id:"auto-collapse",component:"AutoCollapse",text:"Auto Collapse (default)"},{id:"init-active",component:"InitActive",text:"Expand By Default"},{id:"toggle-control",component:"ToggleAll",text:"Toggle Control"},{id:"filter-item",component:"FilterActive",text:"Filter Item"},{id:"return-value",component:"ReturnValue",text:"Return Value"},{id:"custom-icon",component:"CustomIcons",text:"Custom Icons"},{id:"recursive",component:"Recursive",text:"Recursive"}],rt={components:{AutoCollapse:p,InitActive:y,ToggleAll:x,FilterActive:S,ReturnValue:F,CustomIcons:N,Recursive:it},data:function(){return{listOfItems:at.listOfItems,listOfExamples:st}},methods:{scrollToElement:function(t){setTimeout((function(){t&&window.scrollTo({top:t.getBoundingClientRect().top+window.pageYOffset,behavior:"smooth"})}),310)},handleAnchorClick:function(t){var e=document.getElementById(t);"true"!==e.dataset.vsaActive?e.querySelector(".vsa-item__heading > .vsa-item__trigger").click():this.scrollToElement(e)}}},ot=rt,ct=(n("5c0b"),Object(d["a"])(ot,s,r,!1,null,null,null)),lt=ct.exports,ut=(n("46d4"),n("cd24"),n("dddc"),n("3835")),dt=n("197d"),vt=n.n(dt),pt={extend:{props:{tag:{type:String,required:!1,default:"div"}},render:function(t){return t(this.tag,this.$slots.default)}}},mt={components:{Wrapper:pt},name:"VsaHeading"},ft={components:{Wrapper:pt},name:"VsaContent"},ht={components:{Wrapper:pt},name:"VsaIcon"},gt=(n("2252"),n("0ffc"),n("403d"),{props:{tag:{type:String,required:!0}},render:function(t){return t(this.tag,{staticClass:"vsa-item__heading",ref:"vsa-item__heading"},this.$slots.default)}}),_t=(n("76dc"),{props:{isActive:{type:Boolean,required:!0}},render:function(t){return t("button",{attrs:{type:"button","aria-expanded":String(this.isActive)},staticClass:"vsa-item__trigger",ref:"vsa-item__trigger"},this.$slots.default)}}),yt=(n("53a6"),{props:{isActive:{type:Boolean,required:!0},tag:{type:String,required:!0},data:{type:Array,required:!0}},render:function(t){return t(this.tag,{staticClass:"vsa-item__trigger__icon",class:{"vsa-item__trigger__icon--is-default":!this.data.length,"vsa-item__trigger__icon--is-active":this.isActive},ref:"vsa-item__trigger__icon"},Object(K["a"])(this.data))}}),bt=(n("4295"),{props:{tag:{type:String,required:!0},data:{type:Array,required:!0}},render:function(t){return t(this.tag,{staticClass:"vsa-item__trigger__content",ref:"vsa-item__trigger__content"},Object(K["a"])(this.data))}}),Ot=(n("b813"),{props:{isActive:{type:Boolean,required:!0},tag:{type:String,required:!0},data:{type:Array,required:!0},transition:{type:String,required:!0}},render:function(t){return t("transition",{attrs:{name:this.transition,appear:!0}},[t(this.tag,{directives:[{name:"show",value:this.isActive}],staticClass:"vsa-item__content",ref:"vsa-item__content"},Object(K["a"])(this.data))])}}),At=(n("97b2"),{props:{transition:{type:String,required:!1,default:void 0},forceActive:{type:Boolean,required:!1,default:void 0},initActive:{type:Boolean,required:!1,default:void 0},onHeadingClick:{type:Function,required:!1,default:function(){}}},inject:{vsaList:{type:Object,required:!0},vsaListProps:{type:Function,required:!0}},data:function(){return{isActive:!1}},computed:{rootProps:function(){return this.vsaListProps()},mergedOptions:function(){return this.getMergedOptions()}},watch:{mergedOptions:{handler:function(t){"undefined"===typeof t.forceActive?"undefined"!==typeof t.initActive&&(this.isActive=t.initActive):this.isActive=t.forceActive},deep:!0,immediate:!0}},created:function(){var t=this;this.$on("vsa-heading-click",(function(e){t.onHeadingClick(e)})),this.vsaList.$emit("on-child-created",this)},methods:{getMergedOptions:function(){return vt()({},this.$vsaOptions,this.vsaList.$props,this.$props)},getComponent:function(t){try{var e=this.$slots.default.find((function(e){return(new e.componentOptions.Ctor).$options.name===t}));if(!e)return[];var n=e.componentOptions.children;return n?e.componentOptions.children:[e]}catch(i){return[]}},getDataAttrs:function(){return{"data-vsa-list":"".concat(this.vsaList._uid),"data-vsa-item":"".concat(this._uid),"data-vsa-active":String(this.isActive)}},handleClick:function(){var t=this;if(this.isActive=!this.isActive,this.$nextTick((function(){var e={list:t.vsaList,item:t};t.$emit("vsa-heading-click",e)})),this.mergedOptions.autoCollapse){var e=this.vsaList._data.children;e.forEach((function(e){e._uid!==t._uid&&(e._data.isActive=!1)}))}},handleKeyPress:function(t){if(this.mergedOptions.navigation){var e,n=this.$el;switch(t.keyCode){case 40:n.nextElementSibling&&(e=n.nextElementSibling);break;case 38:n.previousElementSibling&&(e=n.previousElementSibling);break;case 35:var i=n.nextElementSibling;while(i){if(!i.nextElementSibling)break;i=i.nextElementSibling}i&&(e=i);break;case 36:var a=n.previousElementSibling;while(a){if(!a.previousElementSibling)break;a=a.previousElementSibling}a&&(e=a);break;default:return}e&&e.querySelector(".vsa-item__heading > .vsa-item__trigger").focus()}}},render:function(t){var e=this.getComponent("VsaHeading"),n=this.getComponent("VsaIcon"),i=this.getComponent("VsaContent"),a=this.getDataAttrs(),s=this.mergedOptions.tags;return t(s["list__item"],{attrs:Object(G["a"])({id:"vsa-item-".concat(this._uid)},a),staticClass:"vsa-item",class:{"vsa-item--is-active":this.isActive},style:this.styles,ref:"vsa-item"},[t(gt,{attrs:Object(G["a"])(Object(G["a"])({},a),this.mergedOptions.roles["heading"]&&{role:"heading"}),props:{tag:s["item__heading"]}},[t(_t,{nativeOn:{click:this.handleClick,keydown:this.handleKeyPress},props:{isActive:this.isActive},attrs:Object(G["a"])(Object(G["a"])({},a),{},{"aria-controls":"vsa-item-".concat(this._uid),"aria-disabled":String(!(!this.isActive||!this.mergedOptions.forceActive))})},[t(bt,{attrs:Object(G["a"])({},a),props:{tag:s["heading__content"],data:e}}),t(yt,{attrs:Object(G["a"])({},a),props:{tag:s["heading__icon"],isActive:this.isActive,data:n}})])]),t(Ot,{attrs:Object(G["a"])(Object(G["a"])(Object(G["a"])({},a),this.mergedOptions.roles["region"]&&{role:"region"}),{},{"aria-labelledby":"vsa-item-".concat(this._uid)}),props:{transition:this.mergedOptions.transition,tag:s["item__content"],isActive:this.isActive,data:i}})])}}),kt=(n("f990"),{props:{tags:{type:Object,required:!1,default:Object},transition:{type:String,required:!1,default:void 0},initActive:{type:Boolean,required:!1,default:void 0},forceActive:{type:Boolean,required:!1,default:void 0},autoCollapse:{type:Boolean,required:!1,default:void 0},roles:{type:Object,required:!1,default:Object},navigation:{type:Boolean,required:!1,default:void 0}},provide:function(){var t=this;return{vsaList:this,vsaListProps:function(){return t.$props}}},data:function(){return{children:[]}},computed:{mergedOptions:function(){return this.getMergedOptions()}},methods:{getMergedOptions:function(){return vt()({},this.$vsaOptions,this.$props)}},created:function(){var t=this;this.$on("on-child-created",(function(e){t.children.push(e)}))},render:function(t){return t(this.mergedOptions.tags["list"],{attrs:Object(G["a"])({id:"vsa-list-".concat(this._uid),"data-vsa-list":"".concat(this._uid)},this.mergedOptions.roles["presentation"]&&{role:"presentation"}),staticClass:"vsa-list",ref:"vsa-list"},this.$slots.default)}}),Ct={tags:{list:"dl",list__item:"div",item__heading:"dt",heading__content:"span",heading__icon:"span",item__content:"dd"},roles:{presentation:!1,heading:!0,region:!0},transition:"vsa-fade",initActive:!1,forceActive:void 0,autoCollapse:!0,navigation:!0},xt=Ct,jt={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};console.log(e),t.prototype.$vsaOptions=vt()({},xt,e),Object.entries(i).forEach((function(e){var n=Object(ut["a"])(e,2),i=n[0],a=n[1];t.component(i,a)}))}};n("a878"),n("6861");a["a"].config.productionTip=!1,a["a"].component("Prism",(function(){return n.e("chunk-85145fb8").then(n.t.bind(null,"2ccf",7))})),a["a"].use(jt,{tags:{list:"dl",list__item:"div",item__heading:"dt",heading__content:"span",heading__icon:"span",item__content:"dd"}}),new a["a"]({render:function(t){return t(lt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("6ace"),a=n.n(i);a.a},6861:function(t,e,n){},"6ace":function(t,e,n){},"76dc":function(t,e,n){},"85df":function(t,e,n){},"8ee9":function(t,e,n){},"97b2":function(t,e,n){},"9e94":function(t,e,n){"use strict";var i=n("fd69"),a=n.n(i);a.a},b584:function(t,e,n){},b813:function(t,e,n){},bec9:function(t,e,n){},c242:function(t,e,n){"use strict";var i=n("85df"),a=n.n(i);a.a},d34e:function(t,e,n){"use strict";var i=n("b584"),a=n.n(i);a.a},f990:function(t,e,n){},fd69:function(t,e,n){}});
//# sourceMappingURL=app.fbfdfddf.js.map