(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{197:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("dc756000",content,!0,{sourceMap:!1})},205:function(t,e,n){"use strict";var o=n(197);n.n(o).a},206:function(t,e,n){var o=n(26),r=n(207),d=n(208);e=o(!1);var l=r(d);e.push([t.i,".loader{background:url("+l+');position:fixed;width:100%;height:100vh;background-size:contain;z-index:2;background-position-x:center;-webkit-animation:hidden 6s both;animation:hidden 6s both}.projects__detail.detail{position:absolute;height:100vh;top:10%;max-height:100vh;background-size:cover!important;background-blend-mode:overlay;background-color:#f1f1f1!important;color:#fff;flex-wrap:wrap;content:attr(text)}.projects__detail.detail,h1{display:flex;justify-content:center;width:100%}h1{margin-top:0;font-size:30px;padding:45px;margin-bottom:-60px}.detail__img{border-radius:10px;max-height:65%;overflow:hidden;padding:20px;background:#fff;box-shadow:7px 7px 43px 2px rgba(0,0,0,.45);margin-left:-300px;-webkit-animation:left 2s both;animation:left 2s both;-webkit-animation-delay:2s;animation-delay:2s}.detail__img img{width:280px}.detail__discription{width:100%;font-weight:bolder;font-family:"Amatic SC",bold}.detail__box{width:50%;text-align:center;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;background:#fff;padding:40px;color:#000;border-radius:10px;margin:-150px 30px 30px;-webkit-animation:right 2s both;animation:right 2s both;-webkit-animation-delay:4s;animation-delay:4s;box-shadow:7px 7px 43px 2px rgba(0,0,0,.45)}.detail__box a{margin-top:30px;position:relative;display:inline-block;color:#777674;font-weight:700;text-decoration:none;text-shadow:hsla(0,0%,100%,.5) 1px 1px,hsla(0,0%,39.2%,.3) 3px 7px 3px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:5px;outline:none;border-radius:3px/100%;background-image:linear-gradient(45deg,hsla(0,0%,100%,0) 30%,hsla(0,0%,100%,.8),hsla(0,0%,100%,0) 70%),linear-gradient(90deg,#fff,hsla(0,0%,100%,0) 20%,hsla(0,0%,100%,0) 90%,hsla(0,0%,100%,.3)),linear-gradient(90deg,#7d7d7d,hsla(0,0%,100%,.9) 45%,hsla(0,0%,49%,.5)),linear-gradient(90deg,#7d7d7d,hsla(0,0%,100%,.9) 45%,hsla(0,0%,49%,.5)),linear-gradient(90deg,#dfbeaa,hsla(0,0%,100%,.9) 45%,rgba(223,190,170,.5)),linear-gradient(90deg,#dfbeaa,hsla(0,0%,100%,.9) 45%,rgba(223,190,170,.5));background-repeat:no-repeat;background-size:200% 100%,auto,100% 2px,100% 2px,100% 1px,100% 1px;background-position:200% 0,0 0,0 0,0 100%,0 4px,0 calc(100% - 4px);box-shadow:3px 10px 10px -10px rgba(0,0,0,.5);font-size:16px}.detail__box a:hover{transition:.5s linear;background-position:-200% 0,0 0,0 0,0 100%,0 4px,0 calc(100% - 4px)}@-webkit-keyframes hidden{0%{margin-top:0}to{margin-top:-100%}}@keyframes hidden{0%{margin-top:0}to{margin-top:-100%}}@-webkit-keyframes left{0%{opacity:0}to{margin-left:0;opacity:1}}@keyframes left{0%{opacity:0}to{margin-left:0;opacity:1}}@-webkit-keyframes right{0%{opacity:0;margin-left:50px}to{opacity:1;margin-top:0}}@keyframes right{0%{opacity:0;margin-left:50px}to{opacity:1;margin-top:0}}@-webkit-keyframes background{0%{background-blend-mode:color-burn}to{background-blend-mode:overlay}}@keyframes background{0%{background-blend-mode:color-burn}to{background-blend-mode:overlay}}',""]),t.exports=e},207:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},208:function(t,e,n){t.exports=n.p+"img/planetloading.a12beff.gif"},213:function(t,e,n){"use strict";n.r(e);n(67),n(28),n(29),n(14),n(47),n(84);var o=n(30),r=n(25);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{item:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)(["featuredProjects"])),mounted:function(){var component=this;this.$store.getters.featuredProjects((function(data){var t=window.location.href.split("/")[4];data.filter((function(e){JSON.parse(e)._id==t&&(component.item=JSON.parse(e))}))}))}},c=(n(205),n(9)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects__detail detail",style:"background: url(http://www.alexweber.ru/img/"+this.item.imageFull+");",attrs:{id:this.item._id}},[n("div",{staticClass:"loader"}),t._v(" "),n("h1",[t._v(t._s(this.item.name))]),t._v(" "),n("div",{staticClass:"detail__img"},[n("img",{attrs:{src:"http://www.alexweber.ru/img/"+this.item.imageFull}})]),t._v(" "),n("div",{staticClass:"detail__box"},[n("div",{staticClass:"detail__discription"},[t._v("\n      "+t._s(this.item.discription)+"\n    ")]),t._v(" "),n("a",{attrs:{target:"_blank",rel:"nofollow",href:this.item.link}},[t._v("\n      Перейти\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);