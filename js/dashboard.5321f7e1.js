(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"0e8b":function(t,e,r){"use strict";r("1f0b")},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var s in o){var l=n[s],c=l&&l.prototype;if(c&&c.forEach!==i)try{a(c,"forEach",i)}catch(d){c.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f0b":function(t,e,r){},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),s=r("50c4"),l=r("8418"),c=r("35a1");t.exports=function(t){var e,r,d,u,f,b,p=o(t),v="function"==typeof this?this:Array,h=arguments.length,m=h>1?arguments[1]:void 0,g=void 0!==m,y=c(p),w=0;if(g&&(m=n(m,h>2?arguments[2]:void 0,2)),void 0==y||v==Array&&a(y))for(e=s(p.length),r=new v(e);e>w;w++)b=g?m(p[w],w):p[w],l(r,w,b);else for(u=y.call(p),f=u.next,r=new v;!(d=f.call(u)).done;w++)b=g?i(u,m,[d.value,w],!0):d.value,l(r,w,b);return r.length=w,r}},6062:function(t,e,r){"use strict";var n=r("6d61"),o=r("6566");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},6566:function(t,e,r){"use strict";var n=r("9bf2").f,o=r("7c73"),i=r("e2cc"),a=r("0366"),s=r("19aa"),l=r("2266"),c=r("7dd0"),d=r("2626"),u=r("83ab"),f=r("f183").fastKey,b=r("69f3"),p=b.set,v=b.getterFor;t.exports={getConstructor:function(t,e,r,c){var d=t((function(t,n){s(t,d,e),p(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),u||(t.size=0),void 0!=n&&l(n,t[c],{that:t,AS_ENTRIES:r})})),b=v(e),h=function(t,e,r){var n,o,i=b(t),a=m(t,e);return a?a.value=r:(i.last=a={index:o=f(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=a),n&&(n.next=a),u?i.size++:t.size++,"F"!==o&&(i.index[o]=a)),t},m=function(t,e){var r,n=b(t),o=f(e);if("F"!==o)return n.index[o];for(r=n.first;r;r=r.next)if(r.key==e)return r};return i(d.prototype,{clear:function(){var t=this,e=b(t),r=e.index,n=e.first;while(n)n.removed=!0,n.previous&&(n.previous=n.previous.next=void 0),delete r[n.index],n=n.next;e.first=e.last=void 0,u?e.size=0:t.size=0},delete:function(t){var e=this,r=b(e),n=m(e,t);if(n){var o=n.next,i=n.previous;delete r.index[n.index],n.removed=!0,i&&(i.next=o),o&&(o.previous=i),r.first==n&&(r.first=o),r.last==n&&(r.last=i),u?r.size--:e.size--}return!!n},forEach:function(t){var e,r=b(this),n=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:r.first){n(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),i(d.prototype,r?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),u&&n(d.prototype,"size",{get:function(){return b(this).size}}),d},setStrong:function(t,e,r){var n=e+" Iterator",o=v(e),i=v(n);c(t,e,(function(t,e){p(this,{type:n,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=i(this),e=t.kind,r=t.last;while(r&&r.removed)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),d(e)}}},"6d61":function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("94ca"),a=r("6eeb"),s=r("f183"),l=r("2266"),c=r("19aa"),d=r("861d"),u=r("d039"),f=r("1c7e"),b=r("d44e"),p=r("7156");t.exports=function(t,e,r){var v=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),m=v?"set":"add",g=o[t],y=g&&g.prototype,w=g,x={},_=function(t){var e=y[t];a(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!d(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!d(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})},k=i(t,"function"!=typeof g||!(h||y.forEach&&!u((function(){(new g).entries().next()}))));if(k)w=r.getConstructor(e,t,v,m),s.REQUIRED=!0;else if(i(t,!0)){var C=new w,S=C[m](h?{}:-0,1)!=C,E=u((function(){C.has(1)})),z=f((function(t){new g(t)})),I=!h&&u((function(){var t=new g,e=5;while(e--)t[m](e,e);return!t.has(-0)}));z||(w=e((function(e,r){c(e,w,t);var n=p(new g,e,w);return void 0!=r&&l(r,n[m],{that:n,AS_ENTRIES:v}),n})),w.prototype=y,y.constructor=w),(E||I)&&(_("delete"),_("has"),v&&_("get")),(I||S)&&_(m),h&&y.clear&&delete y.clear}return x[t]=w,n({global:!0,forced:w!=g},x),b(w,t),h||r.setStrong(w,t,v),w}},7156:function(t,e,r){var n=r("861d"),o=r("d2bb");t.exports=function(t,e,r){var i,a;return o&&"function"==typeof(i=e.constructor)&&i!==r&&n(a=i.prototype)&&a!==r.prototype&&o(t,a),t}},7277:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",[r("b-col",[r("h1",[t._v("Dashboard")])])],1),r("b-row",t._l(t.widgets.data,(function(t){return r("b-col",{key:t.id,attrs:{cols:"12",lg:"6"}},[r("Widget",{attrs:{widget:t}})],1)})),1)],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{class:{expanded:t.isExpanded},attrs:{"header-tag":"header"},scopedSlots:t._u([{key:"header",fn:function(){return[r("div",{staticClass:"card-header-left"},[r("h6",{staticClass:"mb-0"},[r("b-link",{attrs:{to:t.widget.url}},[r("b-icon",{attrs:{icon:t.widget.icon}}),t._v(" "+t._s(t.widget.name)+" ")],1)],1)]),r("div",{staticClass:"card-header-right"},[r("b-button",{attrs:{variant:"light"}},[r("b-icon",{attrs:{icon:"arrow-repeat","aria-label":"Refresh"}})],1),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"widget-body-"+t.widget.id,expression:"'widget-body-' + widget.id"}],attrs:{variant:"light"},on:{click:function(e){t.isCollapsed=!t.isCollapsed}}},[r("b-icon",{attrs:{icon:t.isCollapsed?"chevron-down":"chevron-up","aria-label":"Help"}})],1),r("b-button",{attrs:{variant:"light"},on:{click:function(e){t.isExpanded=!t.isExpanded}}},[r("b-icon",{attrs:{icon:t.isExpanded?"arrows-angle-contract":"arrows-angle-expand","aria-label":"Expand"}})],1)],1)]},proxy:!0}])},[r("b-collapse",{staticClass:"widget-card-body",attrs:{id:"widget-body-"+t.widget.id}},[r("div",{staticClass:"widget-card-body-top"},[r("h6",{staticClass:"widget-card-body-top_heading"},[r("b-icon",{attrs:{icon:t.widget.icon}}),t._v(" "+t._s(t.widgetContent.name)+" ")],1),r("b-button",{attrs:{variant:"success"}},[r("b-icon",{attrs:{icon:"plus","aria-hidden":"true"}}),t._v(" New ")],1)],1),r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"Overview",active:""}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.filteredItems,expression:"filteredItems"}],staticClass:"table-filters"},[r("b-form-row",{attrs:{"cols-sm":"2","cols-md":"3","cols-lg":"5"}},[r("b-col",[r("b-form-group",{staticClass:"mb-10",attrs:{label:"To","label-for":"to","label-cols":"12","label-size":"md","label-align":"left"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"to",type:"text",placeholder:"zz.ll.aaaa"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)],1),r("b-col",[r("b-form-group",{staticClass:"mb-10",attrs:{label:"Until","label-for":"until","label-cols":"12","label-size":"md","label-align":"left"}},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"until",type:"text",placeholder:"zz.ll.aaaa"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)],1),r("b-col",[r("b-form-group",{staticClass:"mb-10",attrs:{label:"Manager","label-for":"manager","label-cols":"12","label-size":"md","label-align":"left"}},[r("b-form-select",{attrs:{id:"manager",size:"sm"},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:void 0}},[t._v(" Select Manager ")]),t._l(t.options["Manager"],(function(e){return r("b-form-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])}))]},proxy:!0}]),model:{value:t.filters["Manager"],callback:function(e){t.$set(t.filters,"Manager",e)},expression:"filters['Manager']"}})],1)],1),r("b-col",[r("b-form-group",{staticClass:"mb-10",attrs:{label:"Client","label-for":"client","label-cols":"12","label-size":"md","label-align":"left"}},[r("b-form-select",{attrs:{id:"client",size:"sm"},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:void 0}},[t._v(" Select Client ")]),t._l(t.options["Client"],(function(e){return r("b-form-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])}))]},proxy:!0}]),model:{value:t.filters["Client"],callback:function(e){t.$set(t.filters,"Client",e)},expression:"filters['Client']"}})],1)],1),r("b-col",[r("b-form-group",{staticClass:"mb-10",attrs:{label:"Type","label-for":"type","label-cols":"12","label-size":"md","label-align":"left"}},[r("b-form-select",{attrs:{id:"type",size:"sm"},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:void 0}},[t._v(" Select Type ")]),t._l(t.options["Type"],(function(e){return r("b-form-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])}))]},proxy:!0}]),model:{value:t.filters["Type"],callback:function(e){t.$set(t.filters,"Type",e)},expression:"filters['Type']"}})],1)],1)],1),r("b-form-row",[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{staticClass:"mb-20",attrs:{label:"Status","label-for":"status","label-cols":"12","label-size":"md","label-align":"left"}},[r("b-form-select",{attrs:{id:"status",size:"sm"},scopedSlots:t._u([{key:"first",fn:function(){return[r("b-form-select-option",{attrs:{value:void 0}},[t._v(" Select Status ")]),t._l(t.options["Status"],(function(e){return r("b-form-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])}))]},proxy:!0}]),model:{value:t.filters["Status"],callback:function(e){t.$set(t.filters,"Status",e)},expression:"filters['Status']"}})],1)],1)],1),r("b-row",[r("b-col",{attrs:{sm:"6",md:"5",lg:"4"}},[r("b-button-group",[r("b-button",{attrs:{variant:"outline-dark"}},[r("b-icon",{attrs:{icon:"arrow-repeat","aria-label":"Refresh"}})],1),r("b-button",{attrs:{variant:"outline-dark"}},[t._v("Copy")]),r("download-excel",{attrs:{data:t.filteredItems,name:t.widget.name+".xls"}},[r("b-button",{attrs:{variant:"outline-dark"}},[t._v("Excel")])],1),r("b-button",{attrs:{variant:"outline-dark"}},[t._v("PDF")])],1)],1),r("b-col",{attrs:{sm:"6",md:"5",lg:"4"}},[r("b-form-group",{staticClass:"mb-0",attrs:{label:"Show","label-for":"per-page-select","label-cols-sm":"6","label-cols-md":"4","label-cols-lg":"3","label-align-sm":"right","label-size":"sm"}},[r("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions,size:"sm"},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1),r("b-col",{attrs:{sm:"6",md:"5",lg:"4"}},[r("b-form-group",{staticClass:"mb-10"},[r("b-input-group",{attrs:{size:"sm"}},[r("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Search Process"},model:{value:t.filters["Search"],callback:function(e){t.$set(t.filters,"Search",e)},expression:"filters['Search']"}}),r("b-input-group-append",[r("b-button",{attrs:{disabled:!t.filters["Search"]},on:{click:function(e){t.filters["Search"]=void 0}}},[t._v("Clear")])],1)],1)],1)],1)],1)],1),r("b-table",{ref:"table",attrs:{items:t.filteredItems,fields:t.widgetContent.table.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"filter-included-fields":t.filterOn,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection,responsive:"true",striped:"",hover:"","show-empty":"",small:""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"cell()",fn:function(e){return[r("span",{domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(action)",fn:function(e){return[r("b-button-group",[r("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(r){return t.info(e.item,e.index,r.target)}}},[r("b-icon",{attrs:{icon:"eye-fill","aria-hidden":"true"}}),t._v(" View ")],1),r("b-dropdown",{attrs:{variant:"primary"},scopedSlots:t._u([{key:"button-content",fn:function(){return[r("b-icon",{attrs:{icon:"gear-fill","aria-hidden":"true"}})]},proxy:!0}],null,!0)},[r("b-dropdown-item-button",[r("b-icon",{attrs:{icon:"lock-fill","aria-hidden":"true"}}),t._v(" Locked "),r("span",{staticClass:"sr-only"},[t._v("(Click to unlock)")])],1),r("b-dropdown-divider"),r("b-dropdown-group",{staticClass:"small",attrs:{header:"Choose options"}},[r("b-dropdown-item-button",[r("b-icon",{attrs:{icon:"blank","aria-hidden":"true"}}),t._v(" Option A "),r("span",{staticClass:"sr-only"},[t._v("(Not selected)")])],1),r("b-dropdown-item-button",[r("b-icon",{attrs:{icon:"check","aria-hidden":"true"}}),t._v(" Option B "),r("span",{staticClass:"sr-only"},[t._v("(Selected)")])],1),r("b-dropdown-item-button",[r("b-icon",{attrs:{icon:"blank","aria-hidden":"true"}}),t._v(" Option C "),r("span",{staticClass:"sr-only"},[t._v("(Not selected)")])],1)],1),r("b-dropdown-divider"),r("b-dropdown-item-button",[t._v("Some action")]),r("b-dropdown-item-button",[t._v("Some other action")]),r("b-dropdown-divider"),r("b-dropdown-item-button",{attrs:{variant:"danger"}},[r("b-icon",{attrs:{icon:"trash-fill","aria-hidden":"true"}}),t._v(" Delete ")],1)],1)],1)]}}])}),r("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[r("pre",[t._v(t._s(t.infoModal.content))])]),r("b-row",{directives:[{name:"show",rawName:"v-show",value:t.filteredItems,expression:"filteredItems"}]},[r("b-col",{attrs:{cols:"6"}},[r("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),r("b-col",{attrs:{cols:"6"}},[r("p",{staticClass:"mt-3"},[t._v("Current Page: "+t._s(t.currentPage))])])],1)],1),r("b-tab",{attrs:{title:"Client Forms"}},[r("p",[t._v("I'm the Client Forms tab")])]),r("b-tab",{attrs:{title:"Analytics"}},[r("p",[t._v("I'm the Analytics tab!")])])],1)],1)],1)],1)},a=[],s=(r("4de4"),r("159b"),r("b64b"),r("d81d"),r("a630"),r("3ca3"),r("d3b7"),r("6062"),r("ddb0"),{name:"Widget",props:{widget:{type:Object,required:!0}},data:function(){return{isCollapsed:!0,isExpanded:!1,totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15,{value:100,text:"Show a lot"}],sortBy:"",sortDesc:!1,sortDirection:"asc",filter:null,filters:{search:void 0,manager:void 0,client:void 0,type:void 0,status:void 0},filterOn:[],infoModal:{id:"info-modal",title:"",content:""}}},computed:{widgetContent:function(){return this.$store.getters.WidgetContentById(this.widget.id)},tableContent:function(){return this.$store.getters.TableContentById(this.widget.table)},filteredItems:function(){var t=this,e=this.tableContent.data;return"undefined"!==e?e.filter((function(e){var r=!0;return t.fieldKeys.forEach((function(n){r=r&&(void 0===t.filters[n]||e[n]===t.filters[n])})),r})):null},fieldKeys:function(){return"undefined"!==this.tableContent.data?Object.keys(this.tableContent.data[0]):null},options:function(){var t=this,e={};return this.fieldKeys.forEach((function(r){var n=t.tableContent.data.map((function(t){return t[r]}));e[r]=Array.from(new Set(n))})),e}},created:function(){this.$store.dispatch("getWidgetsContent"),this.$store.dispatch("getWidgetTables")},mounted:function(){this.totalRows=this.filteredItems?this.filteredItems.length:this.tableContent.data.length},methods:{info:function(t,e,r){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=JSON.stringify(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,r)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}}),l=s,c=(r("0e8b"),r("2877")),d=Object(c["a"])(l,i,a,!1,null,"57114bd3",null),u=d.exports,f={name:"Dashboard",components:{Widget:u},computed:{widgets:function(){return this.$store.getters.allWidgets}},mounted:function(){this.$store.dispatch("getWidgets")}},b=f,p=Object(c["a"])(b,n,o,!1,null,null,null);e["default"]=p.exports},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),s=a((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(o(t))}})},bb2f:function(t,e,r){var n=r("d039");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),a=i("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},f183:function(t,e,r){var n=r("d012"),o=r("861d"),i=r("5135"),a=r("9bf2").f,s=r("90e3"),l=r("bb2f"),c=s("meta"),d=0,u=Object.isExtensible||function(){return!0},f=function(t){a(t,c,{value:{objectID:"O"+ ++d,weakData:{}}})},b=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,c)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[c].objectID},p=function(t,e){if(!i(t,c)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[c].weakData},v=function(t){return l&&h.REQUIRED&&u(t)&&!i(t,c)&&f(t),t},h=t.exports={REQUIRED:!1,fastKey:b,getWeakData:p,onFreeze:v};n[c]=!0}}]);
//# sourceMappingURL=dashboard.5321f7e1.js.map