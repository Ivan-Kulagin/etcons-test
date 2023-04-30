"use strict";(self["webpackChunketcons_it_test"]=self["webpackChunketcons_it_test"]||[]).push([[368],{959:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(1937),n={name:"BaseIcon",props:{label:{type:String,value:void 0},spin:{type:Boolean,value:!1}},methods:{pti(){const t=s.gb.isEmpty(this.label);return{class:["p-icon",{"p-icon-spin":this.spin}],role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t}}}};function o(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!==typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var l="\n.p-icon {\n    display: inline-block;\n}\n.p-icon-spin {\n    -webkit-animation: p-icon-spin 2s infinite linear;\n    animation: p-icon-spin 2s infinite linear;\n}\n@-webkit-keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n@keyframes p-icon-spin {\n0% {\n        -webkit-transform: rotate(0deg);\n        transform: rotate(0deg);\n}\n100% {\n        -webkit-transform: rotate(359deg);\n        transform: rotate(359deg);\n}\n}\n";o(l)},1826:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(57),n=i(5030),o=i(3396),l=i(7139),a={name:"Button",props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},computed:{buttonClass(){return["p-button p-component",{"p-button-icon-only":this.hasIcon&&!this.label,"p-button-vertical":("top"===this.iconPos||"bottom"===this.iconPos)&&this.label,"p-disabled":this.$attrs.disabled||this.loading,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.hasIcon&&this.label,"p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text,"p-button-outlined":this.outlined,"p-button-sm":"small"===this.size,"p-button-lg":"large"===this.size,"p-button-plain":this.plain}]},iconStyleClass(){return["p-button-icon",this.iconClass,{"p-button-icon-left":"left"===this.iconPos&&this.label,"p-button-icon-right":"right"===this.iconPos&&this.label,"p-button-icon-top":"top"===this.iconPos&&this.label,"p-button-icon-bottom":"bottom"===this.iconPos&&this.label}]},loadingIconStyleClass(){return["p-button-loading-icon pi-spin",this.iconStyleClass]},badgeStyleClass(){return["p-badge p-component",this.badgeClass,{"p-badge-no-gutter":this.badge&&1===String(this.badge).length}]},disabled(){return this.$attrs.disabled||this.loading},defaultAriaLabel(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:s.Z},directives:{ripple:n.Z}};const r=["aria-label","disabled"],h={class:"p-button-label"};function d(t,e,i,s,n,a){const d=(0,o.up)("SpinnerIcon"),c=(0,o.Q2)("ripple");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("button",{class:(0,l.C_)(a.buttonClass),type:"button","aria-label":a.defaultAriaLabel,disabled:a.disabled},[(0,o.WI)(t.$slots,"default"),t.$slots.default?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[i.loading?(0,o.WI)(t.$slots,"loadingicon",{key:0,class:(0,l.C_)(a.loadingIconStyleClass)},(()=>[i.loadingIcon?((0,o.wg)(),(0,o.iD)("span",{key:0,class:(0,l.C_)([a.loadingIconStyleClass,i.loadingIcon])},null,2)):((0,o.wg)(),(0,o.j4)(d,{key:1,class:(0,l.C_)(a.loadingIconStyleClass),spin:""},null,8,["class"]))])):(0,o.WI)(t.$slots,"icon",{key:1,class:(0,l.C_)(a.iconStyleClass)},(()=>[i.icon?((0,o.wg)(),(0,o.iD)("span",{key:0,class:(0,l.C_)([a.iconStyleClass,i.icon])},null,2)):(0,o.kq)("",!0)])),(0,o._)("span",h,(0,l.zw)(i.label||" "),1),i.badge?((0,o.wg)(),(0,o.iD)("span",{key:2,class:(0,l.C_)(a.badgeStyleClass)},(0,l.zw)(i.badge),3)):(0,o.kq)("",!0)],64))],10,r)),[[c]])}a.render=d},1168:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(959),n=i(3396),o={name:"CheckIcon",extends:s.Z};const l=(0,n._)("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1),a=[l];function r(t,e,i,s,o,l){return(0,n.wg)(),(0,n.iD)("svg",(0,n.dG)({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),a,16)}o.render=r},7573:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(959),n=i(3396),o={name:"ChevronDownIcon",extends:s.Z};const l=(0,n._)("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1),a=[l];function r(t,e,i,s,o,l){return(0,n.wg)(),(0,n.iD)("svg",(0,n.dG)({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),a,16)}o.render=r},57:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(959),n=i(3396),o={name:"SpinnerIcon",extends:s.Z};const l=(0,n._)("g",{"clip-path":"url(#clip0_417_21408)"},[(0,n._)("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"})],-1),a=(0,n._)("defs",null,[(0,n._)("clipPath",{id:"clip0_417_21408"},[(0,n._)("rect",{width:"14",height:"14",fill:"white"})])],-1),r=[l,a];function h(t,e,i,s,o,l){return(0,n.wg)(),(0,n.iD)("svg",(0,n.dG)({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),r,16)}o.render=h},5810:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(959),n=i(3396),o={name:"TimesIcon",extends:s.Z};const l=(0,n._)("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1),a=[l];function r(t,e,i,s,o,l){return(0,n.wg)(),(0,n.iD)("svg",(0,n.dG)({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.pti()),a,16)}o.render=r},2151:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(1937),n=(0,s.Nd)()},3059:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(1937),n=i(3396),o={name:"Portal",props:{appendTo:{type:String,default:"body"},disabled:{type:Boolean,default:!1}},data(){return{mounted:!1}},mounted(){this.mounted=s.p7.isClient()},computed:{inline(){return this.disabled||"self"===this.appendTo}}};function l(t,e,i,s,o,l){return l.inline?(0,n.WI)(t.$slots,"default",{key:0}):o.mounted?((0,n.wg)(),(0,n.j4)(n.lR,{key:1,to:i.appendTo},[(0,n.WI)(t.$slots,"default")],8,["to"])):(0,n.kq)("",!0)}o.render=l},7199:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(57),n=i(1937),o=i(3396),l=i(7139),a={name:"VirtualScroller",emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},data(){return{first:this.isBoth()?{rows:0,cols:0}:0,last:this.isBoth()?{rows:0,cols:0}:0,page:this.isBoth()?{rows:0,cols:0}:0,numItemsInViewport:this.isBoth()?{rows:0,cols:0}:0,lastScrollPos:this.isBoth()?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,initialized:!1,watch:{numToleratedItems(t){this.d_numToleratedItems=t},loading(t){this.d_loading=t},items(t,e){e&&e.length===(t||[]).length||(this.init(),this.calculateAutoSize())},itemSize(){this.init(),this.calculateAutoSize()},orientation(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight(){this.init(),this.calculateAutoSize()},scrollWidth(){this.init(),this.calculateAutoSize()}},mounted(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated(){!this.initialized&&this.viewInit()},unmounted(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit(){n.p7.isVisible(this.element)&&(this.setContentEl(this.content),this.init(),this.bindResizeListener(),this.defaultWidth=n.p7.getWidth(this.element),this.defaultHeight=n.p7.getHeight(this.element),this.defaultContentWidth=n.p7.getWidth(this.content),this.defaultContentHeight=n.p7.getHeight(this.content),this.initialized=!0)},init(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical(){return"vertical"===this.orientation},isHorizontal(){return"horizontal"===this.orientation},isBoth(){return"both"===this.orientation},scrollTo(t){this.lastScrollPos=this.both?{top:0,left:0}:0,this.element&&this.element.scrollTo(t)},scrollToIndex(t,e="auto"){const i=this.isBoth(),s=this.isHorizontal(),n=this.first,{numToleratedItems:o}=this.calculateNumItems(),l=this.getContentPosition(),a=this.itemSize,r=(t=0,e)=>t<=e?0:t,h=(t,e,i)=>t*e+i,d=(t=0,i=0)=>this.scrollTo({left:t,top:i,behavior:e});let c=i?{rows:0,cols:0}:0,u=!1;i?(c={rows:r(t[0],o[0]),cols:r(t[1],o[1])},d(h(c.cols,a[1],l.left),h(c.rows,a[0],l.top)),u=c.rows!==n.rows||c.cols!==n.cols):(c=r(t,o),s?d(h(c,a,l.left),0):d(0,h(c,a,l.top)),u=c!==n),this.isRangeChanged=u,this.first=c},scrollInView(t,e,i="auto"){if(e){const s=this.isBoth(),n=this.isHorizontal(),{first:o,viewport:l}=this.getRenderedRange(),a=(t=0,e=0)=>this.scrollTo({left:t,top:e,behavior:i}),r="to-start"===e,h="to-end"===e;if(r){if(s)l.first.rows-o.rows>t[0]?a(l.first.cols*this.itemSize[1],(l.first.rows-1)*this.itemSize[0]):l.first.cols-o.cols>t[1]&&a((l.first.cols-1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.first-o>t){const t=(l.first-1)*this.itemSize;n?a(t,0):a(0,t)}}else if(h)if(s)l.last.rows-o.rows<=t[0]+1?a(l.first.cols*this.itemSize[1],(l.first.rows+1)*this.itemSize[0]):l.last.cols-o.cols<=t[1]+1&&a((l.first.cols+1)*this.itemSize[1],l.first.rows*this.itemSize[0]);else if(l.last-o<=t+1){const t=(l.first+1)*this.itemSize;n?a(t,0):a(0,t)}}else this.scrollToIndex(t,i)},getRenderedRange(){const t=(t,e)=>Math.floor(t/(e||t));let e=this.first,i=0;if(this.element){const s=this.isBoth(),n=this.isHorizontal(),{scrollTop:o,scrollLeft:l}=this.element.scrollTop;if(s)e={rows:t(o,this.itemSize[0]),cols:t(l,this.itemSize[1])},i={rows:e.rows+this.numItemsInViewport.rows,cols:e.cols+this.numItemsInViewport.cols};else{const s=n?l:o;e=t(s,this.itemSize),i=e+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:e,last:i}}},calculateNumItems(){const t=this.isBoth(),e=this.isHorizontal(),i=this.itemSize,s=this.getContentPosition(),n=this.element?this.element.offsetWidth-s.left:0,o=this.element?this.element.offsetHeight-s.top:0,l=(t,e)=>Math.ceil(t/(e||t)),a=t=>Math.ceil(t/2),r=t?{rows:l(o,i[0]),cols:l(n,i[1])}:l(e?n:o,i),h=this.d_numToleratedItems||(t?[a(r.rows),a(r.cols)]:a(r));return{numItemsInViewport:r,numToleratedItems:h}},calculateOptions(){const t=this.isBoth(),e=this.first,{numItemsInViewport:i,numToleratedItems:s}=this.calculateNumItems(),n=(t,e,i,s=!1)=>this.getLast(t+e+(t<i?2:3)*i,s),o=t?{rows:n(e.rows,i.rows,s[0]),cols:n(e.cols,i.cols,s[1],!0)}:n(e,i,s);this.last=o,this.numItemsInViewport=i,this.d_numToleratedItems=s,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=t?Array.from({length:i.rows}).map((()=>Array.from({length:i.cols}))):Array.from({length:i})),this.lazy&&Promise.resolve().then((()=>{this.lazyLoadState={first:this.step?t?{rows:0,cols:e.cols}:0:e,last:Math.min(this.step?this.step:o,this.items.length)},this.$emit("lazy-load",this.lazyLoadState)}))},calculateAutoSize(){this.autoSize&&!this.d_loading&&Promise.resolve().then((()=>{if(this.content){const t=this.isBoth(),e=this.isHorizontal(),i=this.isVertical();this.content.style.minHeight=this.content.style.minWidth="auto",this.content.style.position="relative",this.element.style.contain="none";const[s,o]=[n.p7.getWidth(this.content),n.p7.getHeight(this.content)];s!==this.defaultContentWidth&&(this.element.style.width=""),o!==this.defaultContentHeight&&(this.element.style.height="");const[l,a]=[n.p7.getWidth(this.element),n.p7.getHeight(this.element)];(t||e)&&(this.element.style.width=l<this.defaultWidth?l+"px":this.scrollWidth||this.defaultWidth+"px"),(t||i)&&(this.element.style.height=a<this.defaultHeight?a+"px":this.scrollHeight||this.defaultHeight+"px"),this.content.style.minHeight=this.content.style.minWidth="",this.content.style.position="",this.element.style.contain=""}}))},getLast(t=0,e){return this.items?Math.min(e?(this.columns||this.items[0]).length:this.items.length,t):0},getContentPosition(){if(this.content){const t=getComputedStyle(this.content),e=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),i=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),s=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),n=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:e,right:i,top:s,bottom:n,x:e+i,y:s+n}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize(){if(this.element){const t=this.isBoth(),e=this.isHorizontal(),i=this.element.parentElement,s=this.scrollWidth||`${this.element.offsetWidth||i.offsetWidth}px`,n=this.scrollHeight||`${this.element.offsetHeight||i.offsetHeight}px`,o=(t,e)=>this.element.style[t]=e;t||e?(o("height",n),o("width",s)):o("height",n)}},setSpacerSize(){const t=this.items;if(t){const e=this.isBoth(),i=this.isHorizontal(),s=this.getContentPosition(),n=(t,e,i,s=0)=>this.spacerStyle={...this.spacerStyle,[`${t}`]:(e||[]).length*i+s+"px"};e?(n("height",t,this.itemSize[0],s.y),n("width",this.columns||t[1],this.itemSize[1],s.x)):i?n("width",this.columns||t,this.itemSize,s.x):n("height",t,this.itemSize,s.y)}},setContentPosition(t){if(this.content&&!this.appendOnly){const e=this.isBoth(),i=this.isHorizontal(),s=t?t.first:this.first,n=(t,e)=>t*e,o=(t=0,e=0)=>this.contentStyle={...this.contentStyle,transform:`translate3d(${t}px, ${e}px, 0)`};if(e)o(n(s.cols,this.itemSize[1]),n(s.rows,this.itemSize[0]));else{const t=n(s,this.itemSize);i?o(t,0):o(0,t)}}},onScrollPositionChange(t){const e=t.target,i=this.isBoth(),s=this.isHorizontal(),n=this.getContentPosition(),o=(t,e)=>t?t>e?t-e:t:0,l=(t,e)=>Math.floor(t/(e||t)),a=(t,e,i,s,n,o)=>t<=n?n:o?i-s-n:e+n-1,r=(t,e,i,s,n,o,l)=>t<=o?0:Math.max(0,l?t<e?i:t-o:t>e?i:t-2*o),h=(t,e,i,s,n,o)=>{let l=e+s+2*n;return t>=n&&(l+=n+1),this.getLast(l,o)},d=o(e.scrollTop,n.top),c=o(e.scrollLeft,n.left);let u=i?{rows:0,cols:0}:0,p=this.last,m=!1,f=this.lastScrollPos;if(i){const t=this.lastScrollPos.top<=d,e=this.lastScrollPos.left<=c;if(!this.appendOnly||this.appendOnly&&(t||e)){const i={rows:l(d,this.itemSize[0]),cols:l(c,this.itemSize[1])},s={rows:a(i.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],t),cols:a(i.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],e)};u={rows:r(i.rows,s.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],t),cols:r(i.cols,s.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],e)},p={rows:h(i.rows,u.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:h(i.cols,u.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},m=u.rows!==this.first.rows||p.rows!==this.last.rows||u.cols!==this.first.cols||p.cols!==this.last.cols||this.isRangeChanged,f={top:d,left:c}}}else{const t=s?c:d,e=this.lastScrollPos<=t;if(!this.appendOnly||this.appendOnly&&e){const i=l(t,this.itemSize),s=a(i,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,e);u=r(i,s,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,e),p=h(i,u,this.last,this.numItemsInViewport,this.d_numToleratedItems),m=u!==this.first||p!==this.last||this.isRangeChanged,f=t}}return{first:u,last:p,isRangeChanged:m,scrollPos:f}},onScrollChange(t){const{first:e,last:i,isRangeChanged:s,scrollPos:n}=this.onScrollPositionChange(t);if(s){const t={first:e,last:i};if(this.setContentPosition(t),this.first=e,this.last=i,this.lastScrollPos=n,this.$emit("scroll-index-change",t),this.lazy&&this.isPageChanged(e)){const t={first:this.step?Math.min(this.getPageByFirst(e)*this.step,this.items.length-this.step):e,last:Math.min(this.step?(this.getPageByFirst(e)+1)*this.step:i,this.items.length)},s=this.lazyLoadState.first!==t.first||this.lazyLoadState.last!==t.last;s&&this.$emit("lazy-load",t),this.lazyLoadState=t}}},onScroll(t){if(this.$emit("scroll",t),this.delay&&this.isPageChanged()){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this.showLoader){const{isRangeChanged:e}=this.onScrollPositionChange(t),i=e||!!this.step&&this.isPageChanged();i&&(this.d_loading=!0)}this.scrollTimeout=setTimeout((()=>{this.onScrollChange(t),!this.d_loading||!this.showLoader||this.lazy&&void 0!==this.loading||(this.d_loading=!1,this.page=this.getPageByFirst())}),this.delay)}else this.onScrollChange(t)},onResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout((()=>{if(n.p7.isVisible(this.element)){const t=this.isBoth(),e=this.isVertical(),i=this.isHorizontal(),[s,o]=[n.p7.getWidth(this.element),n.p7.getHeight(this.element)],[l,a]=[s!==this.defaultWidth,o!==this.defaultHeight],r=t?l||a:i?l:!!e&&a;r&&(this.d_numToleratedItems=this.numToleratedItems,this.defaultWidth=s,this.defaultHeight=o,this.defaultContentWidth=n.p7.getWidth(this.content),this.defaultContentHeight=n.p7.getHeight(this.content),this.init())}}),this.resizeDelay)},bindResizeListener(){this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null)},getOptions(t){const e=(this.items||[]).length,i=this.isBoth()?this.first.rows+t:this.first+t;return{index:i,count:e,first:0===i,last:i===e-1,even:i%2===0,odd:i%2!==0}},getLoaderOptions(t,e){let i=this.loaderArr.length;return{index:t,count:i,first:0===t,last:t===i-1,even:t%2===0,odd:t%2!==0,...e}},getPageByFirst(t){return Math.floor(((t??this.first)+4*this.d_numToleratedItems)/(this.step||1))},isPageChanged(t){return!this.step||this.page!==this.getPageByFirst(t??this.first)},setContentEl(t){this.content=t||this.content||n.p7.findSingle(this.element,".p-virtualscroller-content")},elementRef(t){this.element=t},contentRef(t){this.content=t}},computed:{containerClass(){return["p-virtualscroller",{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()},this.class]},contentClass(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass(){return["p-virtualscroller-loader",{"p-component-overlay":!this.$slots.loader}]},loadedItems(){return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map((t=>this.columns?t:t.slice(this.appendOnly?0:this.first.cols,this.last.cols))):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns(){if(this.columns){const t=this.isBoth(),e=this.isHorizontal();if(t||e)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:s.Z}};const r=["tabindex"];function h(t,e,i,s,n,a){const h=(0,o.up)("SpinnerIcon");return i.disabled?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.WI)(t.$slots,"default"),(0,o.WI)(t.$slots,"content",{items:i.items,rows:i.items,columns:a.loadedColumns})],64)):((0,o.wg)(),(0,o.iD)("div",{key:0,ref:a.elementRef,class:(0,l.C_)(a.containerClass),tabindex:i.tabindex,style:(0,l.j5)(i.style),onScroll:e[0]||(e[0]=(...t)=>a.onScroll&&a.onScroll(...t))},[(0,o.WI)(t.$slots,"content",{styleClass:a.contentClass,items:a.loadedItems,getItemOptions:a.getOptions,loading:n.d_loading,getLoaderOptions:a.getLoaderOptions,itemSize:i.itemSize,rows:a.loadedRows,columns:a.loadedColumns,contentRef:a.contentRef,spacerStyle:n.spacerStyle,contentStyle:n.contentStyle,vertical:a.isVertical(),horizontal:a.isHorizontal(),both:a.isBoth()},(()=>[(0,o._)("div",{ref:a.contentRef,class:(0,l.C_)(a.contentClass),style:(0,l.j5)(n.contentStyle)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.loadedItems,((e,i)=>(0,o.WI)(t.$slots,"item",{key:i,item:e,options:a.getOptions(i)}))),128))],6)])),i.showSpacer?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"p-virtualscroller-spacer",style:(0,l.j5)(n.spacerStyle)},null,4)):(0,o.kq)("",!0),!i.loaderDisabled&&i.showLoader&&n.d_loading?((0,o.wg)(),(0,o.iD)("div",{key:1,class:(0,l.C_)(a.loaderClass)},[t.$slots&&t.$slots.loader?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:0},(0,o.Ko)(n.loaderArr,((e,i)=>(0,o.WI)(t.$slots,"loader",{key:i,options:a.getLoaderOptions(i,a.isBoth()&&{numCols:t.d_numItemsInViewport.cols})}))),128)):(0,o.kq)("",!0),(0,o.WI)(t.$slots,"loadingicon",{},(()=>[(0,o.Wm)(h,{spin:"",class:"p-virtualscroller-loading-icon"})]))],2)):(0,o.kq)("",!0)],46,r))}function d(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!==typeof document){var s=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&s.firstChild?s.insertBefore(n,s.firstChild):s.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}var c="\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    /* contain: content; */\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n.p-virtualscroller .p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.p-virtualscroller-loader.p-component-overlay {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.p-virtualscroller-loading-icon {\n    font-size: 2rem;\n}\n.p-virtualscroller-loading-icon.p-icon {\n    width: 2rem;\n    height: 2rem;\n}\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n/* Inline */\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";d(c),a.render=h}}]);
//# sourceMappingURL=368.0094a8a5.js.map