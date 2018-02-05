/*! oplus-uaa 0.1.0 built at 2018-02-05T14:26:39.404Z*/
!function(){"use strict";angular.module("oplus.uaa",[])}(),function(){"use strict";function i(i,n){function e(){t({}),window.localStorage.removeItem(u),i.setPermissions([])}function s(n,e){var s=Date.now()+60*e*1e3;t(n),r(s),i.setPermissions(n.permissions||[])}function r(i){var n=o();n._expires=i,window.localStorage.setItem(u,JSON.stringify(n))}function t(i){a.loginId=i.loginId,a.displayName=i.displayName,a.apiKey=i.apiKey,a.avatar=i.avatar,a.isAuthenticated=!!a.loginId,l=i.roles||[],c=i.permissions||[]}function o(){return{loginId:a.loginId,displayName:a.displayName,avatar:a.avatar,apiKey:a.apiKey,roles:l,permissions:c}}var a=this,u="oplus.uaa",l=[],c=[];this.hasPermission=function(n){return i.hasPermission(n)},this.setUserInfo=s,this.clearUserInfo=e,this.isSameUser=function(i){return this.loginId&&this.loginId===i},n.isDisabled()?s({permissions:["*"],loginId:"anon"}):function(){var n=window.localStorage.getItem(u)||"{}",s=JSON.parse(n);Date.now()>(s._expires||0)?(console.log("User session is expired"),e()):(t(s),i.setPermissions(s.permissions||[]))}()}angular.module("oplus.uaa").service("currentUser",i),i.$inject=["permissionResolver","uaaService"]}(),function(){"use strict";function i(){function i(i){n.length=0;for(var e=0;e<i.length;++e){var r=new s(i[e]);n.push(r)}}var n=[];this.hasPermission=function(i){for(var e=new s(i),r=0;r<n.length;++r)if(n[r].implies(e))return!0;return!1},this.setPermissions=function(n){i(n)}}function n(i){for(var n=[],e=i.split(":"),s=0;s<e.length;++s)n.push(e[s].split(","));return n}function e(i,n){for(var e=0;e<n.length;++e)if(-1===i.indexOf(n[e]))return!1;return!0}function s(i){var s=n(i);this.asParts=function(){return s},this.implies=function(i){var n;for(n=0;n<i.asParts().length;++n){if(s.length-1<n)return!0;if(-1===s[n].indexOf("*")&&!e(s[n],i.asParts()[n]))return!1}for(;n<s.length;++n)if(-1===s[n].indexOf("*"))return!1;return!0}}angular.module("oplus.uaa").service("permissionResolver",i),i.$inject=[]}(),function(){"use strict";angular.module("oplus.uaa").provider("uaaService",function(){var i=!1;this.disableUaa=function(){i=!0},this.$get=[function(){return{isDisabled:function(){return i}}}]})}();