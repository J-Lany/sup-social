"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[726],{2726:function(e,n,t){t.r(n),t.d(n,{default:function(){return X}});var o=t(5671),r=t(3144),s=t(136),i=t(516),u=t(8687),a=t(2791),l=t(5987),c=t(9439),f="Users_userPhoto__wCV7+",p="Users_userBlock__KdI+p",d="Users_userLeft__Stnn6",g="Users_name__85yu-",h="Users_status__2SZCL",v="Users_selectedPage__PbAMG",m="Users_pages__R6hxo",y="Users_buttonFollow__Yk2FG",w="Users_buttonUnollow__v0XTj",P="Users_arrow__6bVeM",j=t(184),C=function(e){for(var n=e.totalUserCount,t=e.pageSize,o=e.currentPage,r=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(n/t),l=[],f=1;f<=u;f++)l.push(f);var p=Math.ceil(u/i),d=(0,a.useState)(1),g=(0,c.Z)(d,2),h=g[0],y=g[1],w=(h-1)*i+1,C=h*i;return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:m,children:[h>1&&(0,j.jsx)("button",{onClick:function(){y(h-1)},className:P,children:"\u2190"}),l.filter((function(e){return e>=w&&e<=C})).map((function(e){return(0,j.jsx)("span",{className:o===e&&v,onClick:function(){r(e)},children:e},e)})),p>h&&(0,j.jsx)("button",{className:P,onClick:function(){y(h+1)},children:"\u2192"})]})})},x=t(601),_=t(1087),U=function(e){var n=e.user,t=e.followingInProgress,o=e.follow,r=e.unfollow;return(0,j.jsxs)("div",{className:p,children:[(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("div",{children:(0,j.jsx)(_.OL,{to:"/profile/"+n.id,children:(0,j.jsx)("img",{className:f,src:null!=n.photos.small?n.photos.small:x,alt:"avka"})})}),(0,j.jsx)("div",{children:n.followed?(0,j.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){r(n.id)},className:y,children:"Unfollow"}):(0,j.jsx)("button",{disabled:t.some((function(e){return e===n.id})),onClick:function(){o(n.id)},className:w,children:"Follow"})})]}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{className:g,children:n.name}),(0,j.jsx)("div",{className:h,children:n.status})]}),(0,j.jsxs)("span",{children:[(0,j.jsx)("div",{className:h,children:"user.location.country"}),(0,j.jsx)("div",{className:h,children:"user.location.city"})]})]})]})},b=["currentPage","totalUserCount","pageSize","onPageChanged"],z=function(e){for(var n=e.currentPage,t=e.totalUserCount,o=e.pageSize,r=e.onPageChanged,s=(0,l.Z)(e,b),i=Math.ceil(s.totalUserCount/s.pageSize),u=[],a=1;a<=i;a++)u.push(a);return(0,j.jsxs)("div",{children:[(0,j.jsx)(C,{currentPage:n,pageSize:o,totalUserCount:t,onPageChanged:r}),s.users.map((function(e){return(0,j.jsx)(U,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow},e.id)}))]})},k=t(9986),S=t(2338),Z=(t(4942),t(1413)),N=t(3433);function M(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received ".concat(typeof e);if("function"!==typeof e)throw new TypeError(n)}var R=function(e){return Array.isArray(e)?e:[e]};function F(e){var n=Array.isArray(e[0])?e[0]:e;return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((function(e){return"function"===typeof e}))){var t=e.map((function(e){return"function"===typeof e?"function ".concat(e.name||"unnamed","()"):typeof e})).join(", ");throw new TypeError("".concat(n,"[").concat(t,"]"))}}(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}Symbol(),Object.getPrototypeOf({});var A="undefined"!==typeof WeakRef?WeakRef:function(){function e(n){(0,o.Z)(this,e),this.value=n}return(0,r.Z)(e,[{key:"deref",value:function(){return this.value}}]),e}(),I=0,O=1;function D(){return{s:I,v:void 0,o:null,p:null}}function E(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=D(),r=t.resultEqualityCheck,s=0;function i(){for(var t=o,i=0,u=arguments.length;i<u;i++){var a=arguments[i];if("function"===typeof a||"object"===typeof a&&null!==a){var l=t.o;null===l&&(t.o=l=new WeakMap);var c=l.get(a);void 0===c?(t=D(),l.set(a,t)):t=c}else{var f=t.p;null===f&&(t.p=f=new Map);var p=f.get(a);void 0===p?(t=D(),f.set(a,t)):t=p}}var d,g=t;if(t.s===O?d=t.v:(d=e.apply(null,arguments),s++),g.s=O,r){var h,v,m=null!==(h=null===(v=n)||void 0===v?void 0:v.deref())&&void 0!==h?h:n;null!=m&&r(m,d)&&(d=m,0!==s&&s--),n="object"===typeof d&&null!==d||"function"===typeof d?new A(d):d}return g.v=d,d}return i.clearCache=function(){o=D(),i.resetResultsCount()},i.resultsCount=function(){return s},i.resetResultsCount=function(){s=0},i}function L(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r="function"===typeof e?{memoize:e,memoizeOptions:t}:e;return function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o,s=0,i=0,u={},a=n.pop();"object"===typeof a&&(u=a,a=n.pop()),M(a,"createSelector expects an output function after the inputs, but received: [".concat(typeof a,"]"));var l=(0,Z.Z)((0,Z.Z)({},r),u),c=l.memoize,f=l.memoizeOptions,p=void 0===f?[]:f,d=l.argsMemoize,g=void 0===d?E:d,h=l.argsMemoizeOptions,v=void 0===h?[]:h,m=(l.devModeChecks,R(p)),y=R(v),w=F(n),P=c.apply(void 0,[function(){return s++,a.apply(null,arguments)}].concat((0,N.Z)(m))),j=g.apply(void 0,[function(){i++;var e=function(e,n){for(var t=[],o=e.length,r=0;r<o;r++)t.push(e[r].apply(null,n));return t}(w,arguments);return o=P.apply(null,e)}].concat((0,N.Z)(y)));return Object.assign(j,{resultFunc:a,memoizedResultFunc:P,dependencies:w,dependencyRecomputations:function(){return i},resetDependencyRecomputations:function(){i=0},lastResult:function(){return o},recomputations:function(){return s},resetRecomputations:function(){s=0},memoize:c,argsMemoize:g})}}var T=L(E),W=function(e){return e.usersPage.users},G=(T(W,(function(e){return e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSize}),V=function(e){return e.usersPage.totalUserCount},q=function(e){return e.usersPage.currentPage},B=function(e){return e.usersPage.isFetching},H=function(e){return e.usersPage.followingInProgress},K=function(e){(0,s.Z)(t,e);var n=(0,i.Z)(t);function t(){var e;(0,o.Z)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=n.call.apply(n,[this].concat(s))).onPageChanged=function(n){e.props.setCurrentPage(n),e.props.getUsers(n,e.props.pageSize)},e}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,j.jsxs)(j.Fragment,{children:[this.props.isFetching?(0,j.jsx)(k.Z,{}):null,(0,j.jsx)(z,{totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress})]})}}]),t}(a.Component),X=(0,u.$j)((function(e){return{users:W(e),pageSize:G(e),totalUserCount:V(e),currentPage:q(e),isFetching:B(e),followingInProgress:H(e)}}),{follow:S.ZN,unfollow:S.fv,setCurrentPage:S.D4,toggleFollowingProgress:S.ZH,getUsers:S.Rf})(K)},601:function(e,n,t){e.exports=t.p+"static/media/defaultUserPhoto.522848a0c16bc532e056.jpg"}}]);
//# sourceMappingURL=726.0a36f500.chunk.js.map