import{a as Ee,b as Oe,c as we,d as Ae}from"./chunk-5FP6APKS.js";import"./chunk-5DEQHUYL.js";import{H as $,R as xe,S as O,Z as qe,da as ye,ea as Te,mb as ke,nb as Se,q as Ce,r as be,s as Z,u as ze}from"./chunk-SSKMMGJE.js";import{$b as r,Ba as S,Bc as E,Ca as ee,Cb as N,Cc as me,Dc as F,Fc as d,Gc as f,Hc as y,Ib as ce,Jc as ue,L as G,Lb as h,Ma as te,Na as ie,Oa as ne,Pb as _,Rb as z,Uc as de,Va as A,Vb as g,Wa as oe,Xc as j,Yc as he,Zc as Q,_a as ae,_b as o,ac as u,ec as le,fd as fe,hc as I,ja as J,jc as T,kc as B,lc as H,ma as X,mc as x,n as K,nd as ve,oc as pe,od as _e,pc as R,pd as V,qc as M,ra as Y,rb as re,rc as P,sc as U,sd as ge,tc as p,uc as b,vb as n,vc as q,w as k,wa as w,wb as v,yb as se}from"./chunk-TANJPCFI.js";var He=["ink"],Pe=["*"],Re=e=>({"ant-anchor-wrapper-horizontal":e}),Ue=e=>({"ant-anchor-fixed":e});function Fe(e,i){}function je(e,i){if(e&1&&(o(0,"nz-affix",2),h(1,Fe,0,0,"ng-template",3),r()),e&2){let l=T(),t=U(3);_("nzOffsetTop",l.nzOffsetTop)("nzTarget",l.container),n(),_("ngTemplateOutlet",t)}}function Qe(e,i){}function Ve(e,i){if(e&1&&h(0,Qe,0,0,"ng-template",3),e&2){T();let l=U(3);_("ngTemplateOutlet",l)}}function Ze(e,i){if(e&1&&(o(0,"div",4)(1,"div",5)(2,"div",6),u(3,"div",7,1),r(),H(5),r()()),e&2){let l=T();_("ngClass",F(3,Re,l.nzDirection==="horizontal"))("ngStyle",l.wrapperStyle),n(),_("ngClass",F(5,Ue,!l.nzAffix&&!l.nzShowInkInFixed))}}var $e=["nzTemplate"],We=["linkTitle"];function Ke(e,i){if(e&1&&(o(0,"span"),p(1),r()),e&2){let l=T();n(),b(l.titleStr)}}function Ge(e,i){}function Je(e,i){if(e&1&&h(0,Ge,0,0,"ng-template",2),e&2){let l=T();_("ngTemplateOutlet",l.titleTpl||l.nzTemplate)}}function Xe(e,i){e&1&&H(0)}function Ie(e,i){if(!e||!e.getClientRects().length)return 0;let l=e.getBoundingClientRect();if(l.width||l.height){if(i===window){let t=e.ownerDocument.documentElement;return l.top-t.clientTop}return l.top-i.getBoundingClientRect().top}return l.top}var Me="ant-anchor-ink-ball-visible",Ye="anchor",et=/#([^#]+)$/,tt=ze({passive:!0}),L=(()=>{let i=class i{constructor(t,a,s,c,m,C){this.nzConfigService=t,this.scrollSrv=a,this.cdr=s,this.platform=c,this.zone=m,this.renderer=C,this._nzModuleName=Ye,this.nzAffix=!0,this.nzShowInkInFixed=!1,this.nzBounds=5,this.nzOffsetTop=void 0,this.nzTargetOffset=void 0,this.nzDirection="vertical",this.nzClick=new A,this.nzChange=new A,this.nzScroll=new A,this.visible=!1,this.wrapperStyle={"max-height":"100vh"},this.links=[],this.animating=!1,this.destroy$=new K,this.doc=w(fe)}registerLink(t){this.links.push(t)}unregisterLink(t){this.links.splice(this.links.indexOf(t),1)}getContainer(){return this.container||window}ngAfterViewInit(){this.registerScrollEvent()}ngOnDestroy(){clearTimeout(this.handleScrollTimeoutID),this.destroy$.next(!0),this.destroy$.complete()}registerScrollEvent(){this.platform.isBrowser&&(this.destroy$.next(!0),this.zone.runOutsideAngular(()=>{G(this.getContainer(),"scroll",tt).pipe(X(50),J(this.destroy$)).subscribe(()=>this.handleScroll())}),this.handleScrollTimeoutID=setTimeout(()=>this.handleScroll()))}handleScroll(){if(typeof document>"u"||this.animating)return;let t=[],s=(this.nzTargetOffset?this.nzTargetOffset:this.nzOffsetTop||0)+this.nzBounds;if(this.links.forEach(c=>{let m=et.exec(c.nzHref.toString());if(!m)return;let C=this.doc.getElementById(m[1]);if(C){let W=Ie(C,this.getContainer());W<s&&t.push({top:W,comp:c})}}),this.visible=!!t.length,!this.visible)this.clearActive(),this.cdr.detectChanges();else{let c=t.reduce((m,C)=>C.top>m.top?C:m);this.handleActive(c.comp)}this.setVisible()}clearActive(){this.links.forEach(t=>{t.unsetActive()})}setActive(t){let a=this.activeLink,s=this.nzCurrentAnchor&&this.links.find(m=>m.nzHref===this.nzCurrentAnchor)||t;if(!s)return;s.setActive();let c=s.getLinkTitleElement();this.nzDirection==="vertical"?this.ink.nativeElement.style.top=`${c.offsetTop+c.clientHeight/2-4.5}px`:this.ink.nativeElement.style.left=`${c.offsetLeft+c.clientWidth/2}px`,this.activeLink=(t||s).nzHref,a!==this.activeLink&&this.nzChange.emit(this.activeLink)}handleActive(t){this.clearActive(),this.setActive(t),this.visible=!0,this.setVisible(),this.nzScroll.emit(t)}setVisible(){this.ink&&(this.visible?this.renderer.addClass(this.ink.nativeElement,Me):this.renderer.removeClass(this.ink.nativeElement,Me))}handleScrollTo(t){let a=this.doc.querySelector(t.nzHref);if(!a)return;this.animating=!0;let s=this.scrollSrv.getScroll(this.getContainer()),c=Ie(a,this.getContainer()),m=s+c;m-=this.nzTargetOffset!==void 0?this.nzTargetOffset:this.nzOffsetTop||0,this.scrollSrv.scrollTo(this.getContainer(),m,{callback:()=>{this.animating=!1,this.handleActive(t)}}),this.nzClick.emit(t.nzHref)}ngOnChanges(t){let{nzOffsetTop:a,nzContainer:s,nzCurrentAnchor:c}=t;if(a&&(this.wrapperStyle={"max-height":`calc(100vh - ${this.nzOffsetTop}px)`}),s){let m=this.nzContainer;this.container=typeof m=="string"?this.doc.querySelector(m):m,this.registerScrollEvent()}c&&this.setActive()}};i.\u0275fac=function(a){return new(a||i)(v(xe),v(qe),v(de),v(Z),v(oe),v(N))},i.\u0275cmp=S({type:i,selectors:[["nz-anchor"]],viewQuery:function(a,s){if(a&1&&R(He,5),a&2){let c;M(c=P())&&(s.ink=c.first)}},inputs:{nzAffix:[2,"nzAffix","nzAffix",j],nzShowInkInFixed:[2,"nzShowInkInFixed","nzShowInkInFixed",j],nzBounds:[2,"nzBounds","nzBounds",he],nzOffsetTop:[2,"nzOffsetTop","nzOffsetTop",$],nzTargetOffset:[2,"nzTargetOffset","nzTargetOffset",$],nzContainer:"nzContainer",nzCurrentAnchor:"nzCurrentAnchor",nzDirection:"nzDirection"},outputs:{nzClick:"nzClick",nzChange:"nzChange",nzScroll:"nzScroll"},exportAs:["nzAnchor"],standalone:!0,features:[ce,te,E],ngContentSelectors:Pe,decls:4,vars:1,consts:[["content",""],["ink",""],[3,"nzOffsetTop","nzTarget"],[3,"ngTemplateOutlet"],[1,"ant-anchor-wrapper",3,"ngClass","ngStyle"],[1,"ant-anchor",3,"ngClass"],[1,"ant-anchor-ink"],[1,"ant-anchor-ink-ball"]],template:function(a,s){a&1&&(B(),h(0,je,2,3,"nz-affix",2)(1,Ve,1,1,null,3)(2,Ze,6,7,"ng-template",null,0,ue)),a&2&&g(s.nzAffix?0:1)},dependencies:[ve,_e,V,Te,ye],encapsulation:2,changeDetection:0});let e=i;return k([O()],e.prototype,"nzShowInkInFixed",void 0),k([O()],e.prototype,"nzBounds",void 0),k([O()],e.prototype,"nzOffsetTop",void 0),k([O()],e.prototype,"nzTargetOffset",void 0),e})(),Le=(()=>{let i=class i{set nzTitle(t){t instanceof se?(this.titleStr=null,this.titleTpl=t):this.titleStr=t}constructor(t,a,s,c){this.elementRef=t,this.anchorComp=a,this.platform=s,this.renderer=c,this.nzHref="#",this.titleStr="",this.nzDirection="vertical"}ngOnInit(){this.anchorComp.registerLink(this),this.nzDirection=this.anchorComp.nzDirection}getLinkTitleElement(){return this.linkTitle.nativeElement}setActive(){this.renderer.addClass(this.elementRef.nativeElement,"ant-anchor-link-active")}unsetActive(){this.renderer.removeClass(this.elementRef.nativeElement,"ant-anchor-link-active")}goToClick(t){t.preventDefault(),t.stopPropagation(),this.platform.isBrowser&&this.anchorComp.handleScrollTo(this)}ngOnDestroy(){this.anchorComp.unregisterLink(this)}};i.\u0275fac=function(a){return new(a||i)(v(ae),v(L),v(Z),v(N))},i.\u0275cmp=S({type:i,selectors:[["nz-link"]],contentQueries:function(a,s,c){if(a&1&&pe(c,$e,5),a&2){let m;M(m=P())&&(s.nzTemplate=m.first)}},viewQuery:function(a,s){if(a&1&&R(We,5),a&2){let c;M(c=P())&&(s.linkTitle=c.first)}},hostAttrs:[1,"ant-anchor-link"],inputs:{nzHref:"nzHref",nzTarget:"nzTarget",nzTitle:"nzTitle"},exportAs:["nzLink"],standalone:!0,features:[E],ngContentSelectors:Pe,decls:5,vars:5,consts:[["linkTitle",""],[1,"ant-anchor-link-title",3,"click","href","title","target"],[3,"ngTemplateOutlet"]],template:function(a,s){if(a&1){let c=le();B(),o(0,"a",1,0),I("click",function(C){return ie(c),ne(s.goToClick(C))}),h(2,Ke,2,1,"span")(3,Je,1,1,null,2),r(),h(4,Xe,1,0)}a&2&&(_("href",s.nzHref,re)("title",s.titleStr)("target",s.nzTarget),n(2),g(s.titleStr?2:3),n(2),g(s.nzDirection==="vertical"?4:-1))},dependencies:[V],encapsulation:2,changeDetection:0});let e=i;return e})(),De=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=ee({type:i}),i.\u0275inj=Y({imports:[L]});let e=i;return e})();var Ne={en:{section1:`
    <p>When and how did the history of Lviv and the ECoC begin?</p>
    <p>
    Obviously, many people may have heard about this status at various stages, because the European Capital of Culture program as an annual competition among EU cities was launched forty years ago, in 1985. Since then, the conditions and features of the competition have changed, but the essence remains the same: the goal is to strengthen intercultural dialogue and bring Europeans closer together, to present the cultural diversity and heritage of the EU countries, and to promote awareness of their common history and values. For example, Zenoviy Mazuryk, a museum historian and cultural critic, once shared with us that when he learned about the ECoC competition, he dreamed of such a status for Lviv.
    </p>
    <p>
    More holistically, the idea of Lviv as a potential ECoC emerged from the environment of the Dzyga artistic association of the 2010s and Ukrainian-Polish cooperation in the field of culture, particularly between Lviv and Lublin. In 2011, this Polish city was preparing an application for the title of ECoC and planned to transfer this status to Lviv as a partner for one month. But then another Polish city, Wroclaw, won the competition. And the Lviv Culture Month was held as part of Wroclaw\u2019s 2016 ECoC program: in April, it hosted concerts by Ukrainian artists, book presentations, film screenings and discussions, and the Third Triennial of Contemporary Ukrainian Art \xABUkrainian Cross-Section\xBB. 
    </p>
    <p>
    Over the years, the programs of the ECoC cities have also included Ukrainian events and events with the participation of Ukrainian cultural figures. Among them is our project UKRAINE! UNMUTED project in Kaunas at the 2022 ECoC (Lithuania): an exhibition of contemporary Ukrainian art, discussions, a performance block, and a presentation of a collection of essays about Ukraine and Ukrainian culture. This project, with a new discussion and presentation program, was also presented in Tartu at the 2024 ECoC (Estonia). Over the years, the IWC has also established contacts and cooperation with other ECoC cities: Matera, Bad Ischl, Chemnitz, Molenbeek, Lublin \u2014 already as the 2029 ECoC, which has a separate program with Lviv under the supervision of the CSI.
    </p>
    <p>
    In 2022, after Ukraine became a candidate for membership in the European Union, Ukrainian cities were given the opportunity to apply for the ECoC competition (in a separate round, for cities of candidate or potential candidates for EU membership, countries of the European Free Trade Association/European Economic Area). Lviv decided to try (despite the current situation in the country, or even more likely because of it) and apply for the 2030 ECoC call, which was announced in November 2023.
    </p>
    `},ua:{section1:`
    <p>\u041A\u043E\u043B\u0438 \u0456 \u044F\u043A \u043F\u043E\u0447\u0430\u043B\u0430\u0441\u044F \u0456\u0441\u0442\u043E\u0440\u0456\u044F \u041B\u044C\u0432\u043E\u0432\u0430 \u0442\u0430 \u0404\u0421\u041A? </p>
    <p>
    \u041E\u0447\u0435\u0432\u0438\u0434\u043D\u043E, \u043F\u0440\u043E \u0446\u0435\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u043D\u0430 \u0440\u0456\u0437\u043D\u0438\u0445 \u0435\u0442\u0430\u043F\u0430\u0445 \u0431\u0430\u0433\u0430\u0442\u043E \u0445\u0442\u043E \u043C\u0456\u0433 \u0447\u0443\u0442\u0438, \u0430\u0434\u0436\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \xAB\u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u0430 \u0441\u0442\u043E\u043B\u0438\u0446\u044F \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438\xBB \u044F\u043A \u0449\u043E\u0440\u0456\u0447\u043D\u0438\u0439 \u043A\u043E\u043D\u043A\u0443\u0440\u0441 \u0441\u0435\u0440\u0435\u0434 \u043C\u0456\u0441\u0442 \u0404\u0432\u0440\u043E\u0441\u043E\u044E\u0437\u0443 \u0431\u0443\u043B\u0430 \u0437\u0430\u043F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0430\u043D\u0430 \u0441\u043E\u0440\u043E\u043A \u0440\u043E\u043A\u0456\u0432 \u0442\u043E\u043C\u0443, 1985-\u0433\u043E. \u0412\u0456\u0434\u0442\u043E\u0434\u0456 \u0443\u043C\u043E\u0432\u0438 \u0439 \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E\u0441\u0442\u0456 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0443 \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u043B\u0438\u0441\u044F, \u0442\u0430 \u0441\u0443\u0442\u044C \u043D\u0435\u0437\u043C\u0456\u043D\u043D\u0430: \u043C\u0435\u0442\u043E\u044E \u0454 \u043F\u0456\u0434\u0441\u0438\u043B\u0435\u043D\u043D\u044F \u043C\u0456\u0436\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u0434\u0456\u0430\u043B\u043E\u0433\u0443 \u0442\u0430 \u0437\u0431\u043B\u0438\u0436\u0435\u043D\u043D\u044F \u0454\u0432\u0440\u043E\u043F\u0435\u0439\u0446\u0456\u0432, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044F \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E\u0433\u043E \u0440\u043E\u0437\u043C\u0430\u0457\u0442\u0442\u044F \u0442\u0430 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0438 \u043A\u0440\u0430\u0457\u043D \u0404\u0421, \u0441\u043F\u0440\u0438\u044F\u043D\u043D\u044F \u043E\u0431\u0456\u0437\u043D\u0430\u043D\u043E\u0441\u0442\u0456 \u043F\u0440\u043E \u0457\u0445\u043D\u044E \u0441\u043F\u0456\u043B\u044C\u043D\u0443 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u0442\u0430 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456. \u0422\u0430\u043A, \u0441\u043A\u0430\u0436\u0456\u043C\u043E, \u043C\u0443\u0437\u0435\u0454\u0437\u043D\u0430\u0432\u0435\u0446\u044C, \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043E\u043B\u043E\u0433 \u0417\u0435\u043D\u043E\u0432\u0456\u0439 \u041C\u0430\u0437\u0443\u0440\u0438\u043A \u044F\u043A\u043E\u0441\u044C \u043F\u043E\u0434\u0456\u043B\u0438\u0432\u0441\u044F \u0437 \u043D\u0430\u043C\u0438: \u0434\u0456\u0437\u043D\u0430\u0432\u0448\u0438\u0441\u044C \u0441\u0432\u043E\u0433\u043E \u0447\u0430\u0441\u0443 \u043F\u0440\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0441 \u0404\u0421\u041A, \u043C\u0440\u0456\u044F\u0432 \u043F\u0440\u043E \u0442\u0430\u043A\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0456 \u0434\u043B\u044F \u041B\u044C\u0432\u043E\u0432\u0430.
    </p>
    <p>
    \u0411\u0456\u043B\u044C\u0448 \u0446\u0456\u043B\u0456\u0441\u043D\u043E \u0456\u0434\u0435\u044F \u041B\u044C\u0432\u043E\u0432\u0430 \u044F\u043A \u043F\u043E\u0442\u0435\u043D\u0446\u0456\u0439\u043D\u043E\u0457 \u0404\u0421\u041A \u043F\u0440\u043E\u0440\u043E\u0441\u0442\u0430\u0454 \u0456\u0437 \u0441\u0435\u0440\u0435\u0434\u043E\u0432\u0438\u0449\u0430 \u043C\u0438\u0441\u0442\u0435\u0446\u044C\u043A\u043E\u0433\u043E \u043E\u0431\u2019\u0454\u0434\u043D\u0430\u043D\u043D\u044F \xAB\u0414\u0437\u0438\u0491\u0430\xBB 2010-\u0445 \u0442\u0430 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E-\u043F\u043E\u043B\u044C\u0441\u044C\u043A\u043E\u0457 \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u0456 \u0443 \u0441\u0444\u0435\u0440\u0456 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438, \u0437\u043E\u043A\u0440\u0435\u043C\u0430 \u043C\u0456\u0436 \u041B\u044C\u0432\u043E\u0432\u043E\u043C \u0442\u0430 \u041B\u044E\u0431\u043B\u0456\u043D\u043E\u043C. \u0423 2011 \u0440\u043E\u0446\u0456 \u0446\u0435 \u043F\u043E\u043B\u044C\u0441\u044C\u043A\u0435 \u043C\u0456\u0441\u0442\u043E \u0433\u043E\u0442\u0443\u0432\u0430\u043B\u043E \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0442\u0438\u0442\u0443\u043B\u0443 \u0404\u0421\u041A \u0439 \u043C\u0430\u043B\u043E \u0437\u0430\u0434\u0443\u043C \u043D\u0430 \u043E\u0434\u0438\u043D \u043C\u0456\u0441\u044F\u0446\u044C \u043F\u0435\u0440\u0435\u0434\u0430\u0442\u0438 \u0446\u0435\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u041B\u044C\u0432\u043E\u0432\u0443 \u044F\u043A \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u0443. \u0410\u043B\u0435 \u0442\u043E\u0434\u0456 \u0443 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0456 \u043F\u0435\u0440\u0435\u043C\u043E\u0433\u043B\u043E \u0456\u043D\u0448\u0435 \u043C\u0456\u0441\u0442\u043E \u0443 \u041F\u043E\u043B\u044C\u0449\u0456 \u2014 \u0412\u0440\u043E\u0446\u043B\u0430\u0432. \u0406 \xAB\u041B\u044C\u0432\u0456\u0432\u0441\u044C\u043A\u0438\u0439 \u043C\u0456\u0441\u044F\u0446\u044C \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438\xBB \u043F\u0440\u043E\u0432\u0435\u043B\u0438 \u0432 \u043C\u0435\u0436\u0430\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u0412\u0440\u043E\u0446\u043B\u0430\u0432\u0430 \u0404\u0421\u041A 2016: \u0442\u043E\u0434\u0456, \u0432\u043F\u0440\u043E\u0434\u043E\u0432\u0436 \u043A\u0432\u0456\u0442\u043D\u044F, \u0442\u0430\u043C \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u043B\u0438\u0441\u044C \u043A\u043E\u043D\u0446\u0435\u0440\u0442\u0438 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0445 \u0432\u0438\u043A\u043E\u043D\u0430\u0432\u0446\u0456\u0432, \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0457 \u043A\u043D\u0438\u0436\u043E\u043A, \u043A\u0456\u043D\u043E\u043F\u043E\u043A\u0430\u0437\u0438 \u0442\u0430 \u0434\u0438\u0441\u043A\u0443\u0441\u0456\u0457, \u0406\u0406\u0406 \u0442\u0440\u0438\u0454\u043D\u0430\u043B\u0435 \u0441\u0443\u0447\u0430\u0441\u043D\u043E\u0433\u043E \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430 \xAB\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0439 \u0417\u0440\u0456\u0437\xBB.
    </p>
    <p>
    \u0423 \u0440\u0456\u0437\u043D\u0456 \u0440\u043E\u043A\u0438 \u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438 \u043C\u0456\u0441\u0442-\u0404\u0421\u041A \u0442\u0435\u0436 \u0431\u0443\u043B\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0456 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0456 \u0437\u0430\u0445\u043E\u0434\u0438 \u0442\u0430 \u043F\u043E\u0434\u0456\u0457 \u0437\u0430 \u0443\u0447\u0430\u0441\u0442\u044E \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0438\u0445 \u0434\u0456\u0454\u0432\u0446\u0456\u0432 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0438. \u0421\u0435\u0440\u0435\u0434 \u043D\u0438\u0445 \u0456 \u043D\u0430\u0448 \u043F\u0440\u043E\u0454\u043A\u0442 UKRAINE! UNMUTED \u0443 \u041A\u0430\u0443\u043D\u0430\u0441\u0456 \u0404\u0421\u041A 2022 (\u041B\u0438\u0442\u0432\u0430): \u0435\u043A\u0441\u043F\u043E\u0437\u0438\u0446\u0456\u044F \u0441\u0443\u0447\u0430\u0441\u043D\u043E\u0433\u043E \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u0433\u043E \u043C\u0438\u0441\u0442\u0435\u0446\u0442\u0432\u0430, \u0434\u0438\u0441\u043A\u0443\u0441\u0456\u0457, \u043F\u0435\u0440\u0444\u043E\u043C\u0430\u043D\u0441-\u0431\u043B\u043E\u043A, \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u044F \u0437\u0431\u0456\u0440\u043A\u0438 \u0435\u0441\u0435\u0457\u0432 \u043F\u0440\u043E \u0423\u043A\u0440\u0430\u0457\u043D\u0443 \u0442\u0430 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0443 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u0443. \u0422\u0430\u043A\u043E\u0436 \u0446\u0435\u0439 \u043F\u0440\u043E\u0454\u043A\u0442 \u0456\u0437 \u043D\u043E\u0432\u043E\u044E \u0434\u0438\u0441\u043A\u0443\u0441\u0456\u0439\u043D\u043E\u044E \u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0456\u0439\u043D\u043E\u044E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043E\u044E \u0431\u0443\u0432 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0443 \u0422\u0430\u0440\u0442\u0443 \u0404\u0421\u041A 2024 (\u0415\u0441\u0442\u043E\u043D\u0456\u044F). \u0412 \u0440\u0456\u0437\u043D\u0456 \u0440\u043E\u043A\u0438 \u0406\u0421\u041A \u043D\u0430\u043B\u0430\u0433\u043E\u0434\u0438\u0432 \u0456 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438 \u0442\u0430 \u0432\u0437\u0430\u0454\u043C\u043E\u0434\u0456\u044E \u0437 \u0456\u043D\u0448\u0438\u043C\u0438 \u043C\u0456\u0441\u0442\u0430\u043C\u0438 \u0404\u0421\u041A: \u041C\u0430\u0442\u0435\u0440\u0430, \u0411\u0430\u0434-\u0406\u0448\u043B\u044C, \u0425\u0435\u043C\u043D\u0456\u0446, \u041C\u043E\u043B\u0435\u043D\u0431\u0435\u043A, \u041B\u044E\u0431\u043B\u0456\u043D \u2014 \u0443\u0436\u0435 \u044F\u043A \u0404\u0421\u041A 2029, \u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0456 \u044F\u043A\u043E\u0433\u043E \u0437\u0456 \u041B\u044C\u0432\u043E\u0432\u043E\u043C \u043F\u0435\u0440\u0435\u0434\u0431\u0430\u0447\u0435\u043D\u0430 \u043E\u043A\u0440\u0435\u043C\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0430 \u043F\u0456\u0434 \u043A\u0443\u0440\u0430\u0442\u043E\u0440\u0441\u0442\u0432\u043E\u043C \u0406\u0421\u041A.
    </p>
    <p>
    2022 \u0440\u043E\u043A\u0443 \u043F\u0456\u0441\u043B\u044F \u043D\u0430\u0431\u0443\u0442\u0442\u044F \u0423\u043A\u0440\u0430\u0457\u043D\u043E\u044E \u0441\u0442\u0430\u0442\u0443\u0441\u0443 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0430 \u0443 \u0447\u043B\u0435\u043D\u0438 \u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u0421\u043E\u044E\u0437\u0443 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0456 \u043C\u0456\u0441\u0442\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0430\u043F\u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441 \u0404\u0421\u041A (\u0432 \u043E\u043A\u0440\u0435\u043C\u043E\u043C\u0443 \u043A\u043E\u043B\u0456, \u0434\u043B\u044F \u043C\u0456\u0441\u0442 \u043A\u0440\u0430\u0457\u043D-\u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0456\u0432 \u0430\u0431\u043E \u043F\u043E\u0442\u0435\u043D\u0446\u0456\u0439\u043D\u0438\u0445 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u0456\u0432 \u043D\u0430 \u0447\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0432 \u0404\u0432\u0440\u043E\u0441\u043E\u044E\u0437\u0456, \u043A\u0440\u0430\u0457\u043D \u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u043E\u0457 \u0430\u0441\u043E\u0446\u0456\u0430\u0446\u0456\u0457 \u0432\u0456\u043B\u044C\u043D\u043E\u0457 \u0442\u043E\u0440\u0433\u0456\u0432\u043B\u0456 / \u0404\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u044C\u043A\u043E\u0433\u043E \u0435\u043A\u043E\u043D\u043E\u043C\u0456\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u0443). \u041B\u044C\u0432\u0456\u0432 \u0432\u0438\u0440\u0456\u0448\u0438\u0432 \u0441\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 (\u043F\u043E\u043F\u0440\u0438 \u0430\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0443 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044E \u0432 \u043A\u0440\u0430\u0457\u043D\u0456, \u0430 \u043D\u0430\u0432\u0456\u0442\u044C \u0440\u0430\u0434\u0448\u0435 \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0457) \u2014 \u0439 \u043F\u043E\u0434\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u043A\u043E\u043D\u043A\u0443\u0440\u0441 \u0404\u0421\u041A 2030, \u0449\u043E \u0431\u0443\u0432 \u043E\u0433\u043E\u043B\u043E\u0448\u0435\u043D\u0438\u0439 \u0443 \u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0456 2023-\u0433\u043E.
    </p>
    `}};var nt=()=>({title:"title.ecoc"});function ot(e,i){e&1&&(o(0,"h2"),p(1),d(2,"translate"),r()),e&2&&(n(),b(f(2,1,"home.anchor.ecoc_2016")))}function at(e,i){e&1&&(o(0,"h2"),p(1),d(2,"translate"),r()),e&2&&(n(),b(f(2,1,"home.anchor.lvivs_intention")))}function rt(e,i){e&1&&(o(0,"h2"),p(1),d(2,"translate"),r()),e&2&&(n(),b(f(2,1,"home.anchor.ecoc_2022")))}function st(e,i){e&1&&(o(0,"h2"),p(1),d(2,"translate"),r()),e&2&&(n(),b(f(2,1,"home.anchor.ecoc_2029")))}function ct(e,i){e&1&&(o(0,"h2"),p(1),d(2,"translate"),r()),e&2&&(n(),b(f(2,1,"home.anchor.ecoc_2024")))}function lt(e,i){e&1&&(o(0,"h2"),p(1),d(2,"translate"),r()),e&2&&(n(),b(f(2,1,"home.anchor.applying_lviv")))}var D=class e{_langDetector=w(ke);prehistory=Ne;activeAnchor="";isMobile=window.innerWidth<767;lang=Q(()=>this._langDetector.lang());section1=Q(()=>this.prehistory[this.lang()].section1);handleChange(i){this.activeAnchor=i}static \u0275fac=function(l){return new(l||e)};static \u0275cmp=S({type:e,selectors:[["app-home"]],standalone:!0,features:[E],decls:80,vars:65,consts:[[1,"home"],["id","ecoc_section",1,"home__content","home__ecoc","container"],[3,"content"],["id","prehistory_section",1,"home__content","home__prehistory"],[1,"triangle__down"],["src","/images/icons/down.svg","alt","down image"],[1,"container","home__prehistory-content"],[1,"home__anchor"],["nzBounds","50",1,"home__anchor-menu",3,"nzChange","nzOffsetTop","nzAffix","nzShowInkInFixed"],["nzHref","#anchor_ecoc_2016",1,"home__anchor-link",3,"nzTitle"],["nzHref","#anchor_lvivs_intention",1,"home__anchor-link",3,"nzTitle"],["nzHref","#anchor_ecoc_2022",1,"home__anchor-link",3,"nzTitle"],["nzHref","#anchor_ecoc_2029",1,"home__anchor-link",3,"nzTitle"],["nzHref","#anchor_ecoc_2024",1,"home__anchor-link",3,"nzTitle"],["nzHref","#anchor_applying_lviv",1,"home__anchor-link",3,"nzTitle"],[1,"home__anchor-desc"],[1,"home__anchor-list"],["id","anchor_ecoc_2016"],[1,"home__anchor-date"],["id","anchor_lvivs_intention"],["id","anchor_ecoc_2022"],["id","anchor_ecoc_2029"],["id","anchor_ecoc_2024"],["id","anchor_applying_lviv"],["id","news_list_section",1,"home__content","home__news"],["id","partners_section",1,"home__content","home__contacts"],["id","contacts_section",1,"home__content","home__contacts"]],template:function(l,t){l&1&&(u(0,"app-header"),o(1,"main",0)(2,"section",1),u(3,"app-ecoc",2),r(),u(4,"hr"),o(5,"section",3)(6,"div",4),u(7,"img",5),r(),o(8,"div",6)(9,"aside",7)(10,"nz-anchor",8),I("nzChange",function(s){return t.handleChange(s)}),u(11,"nz-link",9),d(12,"translate"),u(13,"nz-link",10),d(14,"translate"),u(15,"nz-link",11),d(16,"translate"),u(17,"nz-link",12),d(18,"translate"),u(19,"nz-link",13),d(20,"translate"),u(21,"nz-link",14),d(22,"translate"),r()(),o(23,"aside",15)(24,"ul",16)(25,"li",17),h(26,ot,3,3,"h2"),o(27,"div",18),p(28),d(29,"date"),r(),o(30,"p"),p(31," ecoc_2016 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vero a tempora culpa veritatis nemo, corporis itaque id, maxime accusamus expedita saepe, voluptatibus excepturi voluptate praesentium harum hic ullam explicabo quidem! Ex ipsam, voluptas omnis architecto sapiente beatae maxime suscipit. Reprehenderit optio sapiente ullam omnis ex praesentium magnam recusandae quaerat, distinctio ipsum ut eligendi repudiandae, est, rerum eaque consequatur soluta perspiciatis dignissimos. Velit esse magni laborum eaque odio accusamus voluptatibus asperiores dignissimos assumenda nisi quidem incidunt optio similique veritatis dolor nostrum quia suscipit laboriosam temporibus quis ducimus repellendus, maxime natus nesciunt. Nostrum porro asperiores et in impedit reiciendis quidem quisquam. "),r(),o(32,"p"),p(33," Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequuntur ducimus nesciunt iste, vero quaerat saepe? Odio aperiam commodi omnis distinctio eos eius in consequuntur maiores minima at atque quas, tenetur natus dolor nihil reiciendis rerum quo facilis, voluptates accusamus, obcaecati explicabo. Hic, quis autem repudiandae in obcaecati sapiente dolore? "),r()(),o(34,"li",19),h(35,at,3,3,"h2"),o(36,"div",18),p(37),d(38,"date"),r(),o(39,"p"),p(40," lvivs_intention Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis quam sunt natus optio dolorem at rerum sapiente nesciunt libero necessitatibus temporibus quaerat atque unde quod incidunt mollitia consequatur animi, eius, ducimus voluptatibus autem ab ipsam veniam architecto. Voluptate facere vero dolorum saepe quis sed omnis consectetur assumenda amet et possimus incidunt voluptas autem ab, tempore nihil ipsam esse sint quibusdam! Laboriosam, perspiciatis eius! Sint assumenda vel delectus. Molestiae reprehenderit quibusdam autem eius voluptates dolorem adipisci modi excepturi id, earum velit cupiditate quae doloribus aliquam recusandae. Quis totam dolor distinctio, consequatur beatae aliquid quidem a, repellat numquam in repellendus voluptatem nulla exercitationem libero corrupti cum dolorem alias cupiditate explicabo. Repellat blanditiis necessitatibus quia perferendis ipsa ducimus pariatur ut dolorum ullam mollitia dolores maxime fugit suscipit odio laudantium veniam voluptatibus aliquid perspiciatis rerum error dolore, beatae asperiores. Vero necessitatibus explicabo facere assumenda error voluptate in neque porro, aliquid eaque provident quasi est! "),r()(),o(41,"li",20),h(42,rt,3,3,"h2"),o(43,"div",18),p(44),d(45,"date"),r(),o(46,"p"),p(47," ecoc_2022 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sapiente earum ipsam exercitationem similique magni tenetur placeat nisi, sint accusamus dolores explicabo neque quae est assumenda iste deserunt ut dolor fugit ex vel? Deserunt cupiditate dolor architecto suscipit nesciunt repudiandae, voluptatem, maxime consectetur corrupti perferendis quae rem illum aspernatur. Esse at quam inventore minima sequi officiis. Eveniet, sapiente rem dolorem reiciendis optio numquam maiores unde iure ut eius dignissimos magni cumque iste tempora excepturi dolor soluta totam, laudantium ipsam. Cumque placeat vero aspernatur molestiae excepturi explicabo eos nihil, temporibus adipisci. Impedit, ea. Aspernatur corporis et atque iste delectus esse, commodi error. Aut minus inventore quod consequatur necessitatibus earum laborum distinctio beatae, at dolore cum fuga repellendus iste facere molestias voluptatem tempora iure voluptates vel tenetur ipsam. Tempore inventore harum provident numquam cumque voluptatibus aut quia nam necessitatibus temporibus minus, dolores velit soluta molestiae deleniti magnam, eius esse alias ducimus sint sit non doloribus! Possimus quis ex velit repellat officia, tenetur omnis recusandae sed voluptatibus laboriosam repudiandae accusamus necessitatibus fugiat aperiam harum suscipit laborum consequatur illo. Necessitatibus deleniti nemo vero sunt eaque cupiditate repellat tenetur enim, assumenda dolorem reprehenderit at magnam perspiciatis veniam temporibus numquam est consectetur sequi soluta. Vitae, odio. "),r()(),o(48,"li",21),h(49,st,3,3,"h2"),o(50,"div",18),p(51),d(52,"date"),r(),o(53,"p"),p(54," ecoc_2029 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam exercitationem similique perspiciatis adipisci voluptatibus sapiente laudantium neque, cupiditate libero iste voluptates minus hic natus blanditiis nisi ratione fugit, accusamus explicabo consequatur consectetur? Incidunt ea dicta nihil nisi id rem et perferendis, neque nobis accusantium ad minus inventore ipsa. Placeat, itaque, repellendus aperiam ad facere illo ab hic iure ullam aut necessitatibus praesentium sunt. Iure natus, in molestiae, odit iusto hic similique sit, nobis deleniti vel praesentium harum. Officiis itaque eveniet error sequi delectus id quo illo quam, vitae assumenda, unde quisquam alias adipisci architecto eius perspiciatis commodi cupiditate reprehenderit placeat? "),r()(),o(55,"li",22),h(56,ct,3,3,"h2"),o(57,"div",18),p(58),d(59,"date"),r(),o(60,"p"),p(61," ecoc_2024 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur voluptate officia laboriosam? Quas, iure laborum ullam dolorum sapiente alias corrupti nisi adipisci eum dolore praesentium nulla in eaque aut ab nesciunt totam enim? Hic, ab amet. Id dicta explicabo quas nostrum odio. Totam quia dolorem eum qui corporis perspiciatis dolore ut ratione assumenda quasi provident sed commodi dolor, voluptatem aperiam dignissimos possimus, ducimus impedit, laudantium perferendis facilis tenetur molestiae velit. Ad vel reiciendis culpa voluptatum voluptate sit deleniti laboriosam natus illo optio. Ratione minus esse ipsa sint neque perferendis totam fugiat eveniet iure aut laborum suscipit officiis vero officia soluta, illum, est natus cupiditate modi libero illo temporibus. Quos magni atque pariatur ratione recusandae ab optio eius placeat voluptates quis, similique officiis dignissimos quaerat id, modi ullam laboriosam, sit nostrum corrupti quas ex. Quasi atque veniam debitis quae deleniti animi alias similique commodi aliquid tempora rem explicabo aperiam voluptatem obcaecati veritatis, maiores ipsum unde perspiciatis inventore ad maxime, dolores voluptatibus eos fuga! Quas omnis libero officiis adipisci iste, illo quia, dolorem perferendis reiciendis sequi quidem magni quibusdam vero. Tenetur! "),r()(),o(62,"li",23),h(63,lt,3,3,"h2"),o(64,"div",18),p(65),d(66,"date"),r(),o(67,"p"),p(68," applying_lviv Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio excepturi quas enim reprehenderit? Ratione eos odit doloribus explicabo aperiam. Amet eveniet quasi esse fugiat hic laudantium vel earum sunt cumque iure, debitis atque impedit eius rem libero ad similique excepturi officiis, quis fuga facere. Sint mollitia sequi officiis consequuntur enim error vitae, ullam quos quaerat sapiente similique quam, cum, quae dolorem fugiat soluta blanditiis suscipit molestiae laborum nam necessitatibus ad! Corporis rem provident dolore sit? Ad commodi porro assumenda enim corrupti minus, facilis modi. At omnis illo corporis eius quam autem eveniet voluptatum numquam delectus modi saepe maxime vero quos nulla explicabo repellat quo exercitationem sapiente asperiores vitae architecto, ut minus molestias. Repudiandae aperiam quaerat molestiae, incidunt animi, commodi quia voluptatibus laboriosam et pariatur saepe numquam minus aspernatur, maiores enim eum quo modi cum illum alias magnam. Dolorem aspernatur amet enim recusandae, perferendis voluptates eaque repellendus necessitatibus? Ea temporibus sapiente ut, recusandae cumque eos nisi mollitia reprehenderit at quisquam dignissimos accusantium officia suscipit ipsum tempora quia molestias officiis minus aliquam deserunt neque. Quisquam nulla commodi optio neque repellat quod tenetur dicta sunt! Sit atque consequatur, eum cum quidem quae vel doloremque, aperiam dignissimos accusantium velit placeat minus possimus sunt natus cumque quia eius ipsum corporis? Illum repellat ratione unde porro, impedit cupiditate magni in reprehenderit aliquam provident saepe aperiam neque vel itaque eligendi maxime quibusdam. "),r()()()()()(),u(69,"hr"),o(70,"section",24),u(71,"app-news-list"),r(),u(72,"hr"),o(73,"section",25)(74,"div",4),u(75,"img",5),r(),u(76,"app-partners"),r(),u(77,"hr"),o(78,"section",26),u(79,"app-contacts"),r()()),l&2&&(n(3),_("content",me(64,nt)),n(7),_("nzOffsetTop",t.isMobile?350:110)("nzAffix",!1)("nzShowInkInFixed",!0),n(),x("nzTitle",f(12,34,"home.anchor.ecoc_2016")),n(2),x("nzTitle",f(14,36,"home.anchor.lvivs_intention")),n(2),x("nzTitle",f(16,38,"home.anchor.ecoc_2022")),n(2),x("nzTitle",f(18,40,"home.anchor.ecoc_2029")),n(2),x("nzTitle",f(20,42,"home.anchor.ecoc_2024")),n(2),x("nzTitle",f(22,44,"home.anchor.applying_lviv")),n(4),z("active",t.activeAnchor==="#anchor_ecoc_2016"),n(),g(t.isMobile?26:-1),n(2),q(" ",y(29,46,"2024-11-13T19:54:04.660Z","fullDate")," "),n(6),z("active",t.activeAnchor==="#anchor_lvivs_intention"),n(),g(t.isMobile?35:-1),n(2),q(" ",y(38,49,"2024-11-13T19:54:04.660Z","fullDate")," "),n(4),z("active",t.activeAnchor==="#anchor_ecoc_2022"),n(),g(t.isMobile?42:-1),n(2),q(" ",y(45,52,"2024-11-13T19:54:04.660Z","fullDate")," "),n(4),z("active",t.activeAnchor==="#anchor_ecoc_2029"),n(),g(t.isMobile?49:-1),n(2),q(" ",y(52,55,"2024-11-13T19:54:04.660Z","fullDate")," "),n(4),z("active",t.activeAnchor==="#anchor_ecoc_2024"),n(),g(t.isMobile?56:-1),n(2),q(" ",y(59,58,"2024-11-13T19:54:04.660Z","fullDate")," "),n(4),z("active",t.activeAnchor==="#anchor_applying_lviv"),n(),g(t.isMobile?63:-1),n(2),q(" ",y(66,61,"2024-11-13T19:54:04.660Z","fullDate")," "))},dependencies:[be,Ce,Se,Ee,De,L,Le,Ae,Oe,we,ge],styles:['.home[_ngcontent-%COMP%]{position:relative}.home__content[_ngcontent-%COMP%]{position:relative;padding-top:6rem;padding-bottom:6rem}.home__prehistory-content[_ngcontent-%COMP%]{display:flex;gap:7%}.home__anchor[_ngcontent-%COMP%]{width:28%}.home__anchor-menu[_ngcontent-%COMP%]{position:sticky;top:110px}.home__anchor-link[_ngcontent-%COMP%]{font-weight:500}.home__anchor-list[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;gap:50px}.home__anchor-list[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-50px;height:100%;width:3px;background-color:#000}.home__anchor-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"";position:absolute;left:-62px;width:28px;height:28px;border:5px solid #fff;border-radius:50%;background-color:#000;transition:border .25s ease-in-out,box-shadow .25s ease-in-out}.home__anchor-list[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]:before{border:5px solid var(--primary-yellow);box-shadow:0 0 10px 2px var(--primary-yellow)}.home__anchor-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}.home__anchor-date[_ngcontent-%COMP%]{margin-bottom:1rem}.home__anchor-link[_ngcontent-%COMP%]{text-transform:uppercase}.home__anchor-desc[_ngcontent-%COMP%]{width:65%}.home__ecoc[_ngcontent-%COMP%]{position:relative}.home[_ngcontent-%COMP%]     .ant-anchor-ink:before{display:none}.home[_ngcontent-%COMP%]     .ant-anchor-link-active>.ant-anchor-link-title, .home[_ngcontent-%COMP%]     .ant-anchor-link>.ant-anchor-link-title:hover{color:#000000d9;font-weight:700}.home[_ngcontent-%COMP%]     .ant-anchor-ink-ball{border:2px solid var(--primary-yellow)}@media (max-width: 767px){.home__content[_ngcontent-%COMP%]{padding-top:3rem;padding-bottom:3rem}.home__prehistory[_ngcontent-%COMP%]{padding:6rem 0 0}.home__anchor[_ngcontent-%COMP%]{display:none}.home__anchor-list[_ngcontent-%COMP%]{padding-left:25px}.home__anchor-list[_ngcontent-%COMP%]:before{height:99%;left:0}.home__anchor-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{position:relative;top:-85px}.home__anchor-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{left:-36.5px;top:58px}.home__anchor-desc[_ngcontent-%COMP%]{width:auto}}hr[_ngcontent-%COMP%]{margin:0}']})};var Zt=[{path:"",component:D}];export{Zt as HOME_ROUTES};
