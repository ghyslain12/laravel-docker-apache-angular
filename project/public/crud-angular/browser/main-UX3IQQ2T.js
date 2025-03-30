import{B as se}from"./chunk-JORF2XPE.js";import{$ as N,$a as H,Aa as s,Ba as h,Ca as b,Cb as Z,Da as L,Db as J,E as w,Ea as y,Eb as X,Fa as z,Fb as ee,Gb as te,Hb as re,Ja as i,Jb as ie,K as R,Ka as c,Kb as ne,L as E,La as m,Lb as oe,Mb as ae,N as f,Nb as ce,Oa as C,Pa as B,Ra as j,S as T,Sa as p,T as I,U as P,V as A,Wa as V,Xa as $,Ya as U,ab as u,bb as k,cb as G,f as S,fa as D,ib as Q,ja as o,na as W,nb as v,ra as g,sa as F,wa as d,wb as Y,xb as q,yb as K,za as _,zb as M}from"./chunk-47BL5O6Z.js";function _e(t,n){if(t&1&&(i(0,"a",7),m(1,"i"),i(2,"span"),u(3),c()()),t&2){let e=p().$implicit;s("routerLink",e.route),o(),y("fa ",e.icon,""),o(2),k(e.label)}}function fe(t,n){if(t&1){let e=B();i(0,"a",8),j("click",function(){T(e);let a=p().$implicit,l=p();return I(l.toggleSubmenu(a))}),m(1,"i"),i(2,"span"),u(3),c(),m(4,"i",9),c()}if(t&2){let e=p().$implicit;o(),y("fa ",e.icon,""),o(2),k(e.label)}}function he(t,n){if(t&1&&(i(0,"li")(1,"a",7),u(2),c()()),t&2){let e=n.$implicit;o(),s("routerLink",e.route),o(),G(" ",e.label," ")}}function be(t,n){if(t&1&&(i(0,"ul",10),d(1,he,3,2,"li",11),c()),t&2){let e=p().$implicit;o(),s("ngForOf",e.submenu)}}function Ce(t,n){if(t&1&&(i(0,"li"),d(1,_e,4,5,"a",4)(2,fe,5,4,"a",5)(3,be,2,1,"ul",6),c()),t&2){let e=n.$implicit;b("has-submenu",e.submenu.length>0)("open",e.isOpen),o(),s("ngIf",e.route),o(),s("ngIf",!e.route),o(),s("ngIf",e.submenu.length>0)}}var O=class t{menuItems=[{label:"Home",icon:"fa-dashboard",route:"/home",isOpen:!1,submenu:[]},{label:"Provisioning",icon:"fa-gear",route:null,isOpen:!0,submenu:[{label:"sale",route:"/sale"}]},{label:"Ticketing",icon:"fa-gear",route:null,isOpen:!0,submenu:[{label:"ticket",route:"/ticket"}]},{label:"Users",icon:"fa-gear",route:null,isOpen:!0,submenu:[{label:"user",route:"/user"},{label:"client",route:"/client"}]},{label:"Materials",icon:"fa-gear",route:null,isOpen:!0,submenu:[{label:"material",route:"/material"}]}];toggleSubmenu(n){n.isOpen=!n.isOpen}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=g({type:t,selectors:[["app-sidebar"]],decls:4,vars:1,consts:[["id","hautbar"],[1,"sidebar"],[1,"menu"],[3,"has-submenu","open",4,"ngFor","ngForOf"],["routerLinkActive","active",3,"routerLink",4,"ngIf"],[3,"click",4,"ngIf"],["class","submenu",4,"ngIf"],["routerLinkActive","active",3,"routerLink"],[3,"click"],[1,"fa","fa-chevron-down","arrow"],[1,"submenu"],[4,"ngFor","ngForOf"]],template:function(e,r){e&1&&(i(0,"div",0)(1,"nav",1)(2,"ul",2),d(3,Ce,4,7,"li",3),c()()()),e&2&&(o(3),s("ngForOf",r.menuItems))},dependencies:[M,Y,q,oe,ae],styles:[".sidebar[_ngcontent-%COMP%]{width:250px;height:100vh;background:#333;color:#fff;position:fixed;left:0;top:0;padding-top:5em}.menu[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:15px 20px;display:flex;align-items:center;color:#fff;text-decoration:none;transition:background .3s}.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#888585}.menu[_ngcontent-%COMP%]   i.fa[_ngcontent-%COMP%]{margin-right:10px;width:20px}.has-submenu[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{cursor:pointer}.submenu[_ngcontent-%COMP%]{list-style:none;padding:0;max-height:0;overflow:hidden;transition:max-height .3s ease-in-out}.open[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]{max-height:200px}.submenu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding-left:50px;background:#585757}.arrow[_ngcontent-%COMP%]{position:absolute;right:20px;transition:transform .3s}.open[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{transform:rotate(180deg)}#hautbar[_ngcontent-%COMP%]{width:2em;height:200px}"]})};var ve=["determinateSpinner"];function Me(t,n){if(t&1&&(P(),i(0,"svg",11),m(1,"circle",12),c()),t&2){let e=p();_("viewBox",e._viewBox()),o(),h("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),_("r",e._circleRadius())}}var Oe=new E("mat-progress-spinner-default-options",{providedIn:"root",factory:xe});function xe(){return{diameter:le}}var le=100,Pe=10,de=(()=>{class t{_elementRef=f(N);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=f(D,{optional:!0}),r=f(Oe);this._noopAnimations=e==="NoopAnimations"&&!!r&&!r._forceAnimations,this.mode=this._elementRef.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=le;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Pe)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=g({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,a){if(r&1&&V(ve,5),r&2){let l;$(l=U())&&(a._determinateCircle=l.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,a){r&2&&(_("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",a.mode==="determinate"?a.value:null)("mode",a.mode),L("mat-"+a.color),h("width",a.diameter,"px")("height",a.diameter,"px")("--mdc-circular-progress-size",a.diameter+"px")("--mdc-circular-progress-active-indicator-width",a.diameter+"px"),b("_mat-animation-noopable",a._noopAnimations)("mdc-circular-progress--indeterminate",a.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",v],diameter:[2,"diameter","diameter",v],strokeWidth:[2,"strokeWidth","strokeWidth",v]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,a){if(r&1&&(d(0,Me,2,8,"ng-template",null,0,Q),i(2,"div",2,1),P(),i(4,"svg",3),m(5,"circle",4),c()(),A(),i(6,"div",5)(7,"div",6)(8,"div",7),C(9,8),c(),i(10,"div",9),C(11,8),c(),i(12,"div",10),C(13,8),c()()()),r&2){let l=H(1);o(4),_("viewBox",a._viewBox()),o(),h("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeDashOffset(),"px")("stroke-width",a._circleStrokeWidth(),"%"),_("r",a._circleRadius()),o(4),s("ngTemplateOutlet",l),o(2),s("ngTemplateOutlet",l),o(2),s("ngTemplateOutlet",l)}},dependencies:[K],styles:[".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],encapsulation:2,changeDetection:0})}return t})();var pe=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=F({type:t});static \u0275inj=R({imports:[se]})}return t})();function ke(t,n){t&1&&(i(0,"div",4),m(1,"mat-spinner"),c())}var x=class t{constructor(n){this.router=n;this.router.events.pipe(w(this.unsubscribe)).subscribe(e=>{this.checkRouterEvent(e)})}unsubscribe=new S;loading=!0;checkRouterEvent(n){n instanceof X&&(this.loading=!0),(n instanceof ee||n instanceof te||n instanceof re)&&(this.loading=!1)}static \u0275fac=function(e){return new(e||t)(W(ne))};static \u0275cmp=g({type:t,selectors:[["app-root"]],decls:14,vars:1,consts:[[1,"container"],[1,"header"],[1,"sidebar"],[1,"main"],[1,"spinner-container"],[1,"footer"]],template:function(e,r){e&1&&(i(0,"body")(1,"div",0)(2,"header",1)(3,"nav")(4,"h1"),u(5,"Logo"),c()()(),i(6,"aside",2),m(7,"app-sidebar"),c(),i(8,"main",3),d(9,ke,2,0,"div",4),m(10,"router-outlet"),c(),i(11,"footer",5)(12,"p"),u(13,"\xA9 2025 - footer"),c()()()()),e&2&&(o(9),z(r.loading?9:-1))},dependencies:[ie,O,M,pe,de],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;line-height:1.6}.container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"header header" "sidebar main" "footer footer";grid-template-columns:250px 1fr;grid-template-rows:auto 1fr auto;min-height:100vh}.header[_ngcontent-%COMP%]{grid-area:header;background-color:#333;color:#fff;padding:1rem;position:sticky;top:0;z-index:100}.sidebar[_ngcontent-%COMP%]{grid-area:sidebar;background-color:#f4f4f4;padding:1rem;border-right:1px solid #ddd}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:1rem 0}.sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#333}.main[_ngcontent-%COMP%]{grid-area:main;padding:2rem}.footer[_ngcontent-%COMP%]{grid-area:footer;background-color:#333;color:#fff;padding:1rem;text-align:center}@media (max-width: 768px){.container[_ngcontent-%COMP%]{grid-template-areas:"header" "main" "sidebar" "footer";grid-template-columns:1fr;grid-template-rows:auto 1fr auto auto}.sidebar[_ngcontent-%COMP%]{border-right:none;border-top:1px solid #ddd}}.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto}.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;list-style:none}.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-left:1rem}.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;text-decoration:none}@media (max-width: 480px){.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{flex-direction:column;text-align:center}.header[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:1rem}}.spinner-container[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;justify-content:center;align-items:center;min-height:200px}']})};var ue=[{path:"home",loadChildren:()=>import("./chunk-XWJZICHV.js").then(t=>t.CoreRoutingModule)},{path:"sale",loadChildren:()=>import("./chunk-QQ4LFHVS.js").then(t=>t.ProvisioningRoutingModule)},{path:"ticket",loadChildren:()=>import("./chunk-FH7YGL4G.js").then(t=>t.TicketingRoutingModule)},{path:"user",loadChildren:()=>import("./chunk-HIEVYNNN.js").then(t=>t.UsersRoutingModule)},{path:"client",loadChildren:()=>import("./chunk-I2CDGSHA.js").then(t=>t.ClientsRoutingModule)},{path:"material",loadChildren:()=>import("./chunk-CVMRFOTX.js").then(t=>t.MaterialsRoutingModule)},{path:"",redirectTo:"/home",pathMatch:"full"}];J(x,{providers:[Z(),ce(ue)]}).catch(t=>console.error(t));
