!function(e,n){"function"==typeof define&&define.amd?define(["jquery"],n):n(e.jQuery)}(this,function(e){e.fn.lazyload=function(n){return this.each(function(){n=n||{};var t=e.extend({},{},n),i=e(this),o=n.srcSign||"lazy-src",a=n.errCallBack||function(){},r=n.container||e(window);if(t.cache=[],"IMG"==this.tagName){var c={obj:i,tag:"img",url:i.attr(o)};t.cache.push(c)}else{var g=i.find("img");g.each(function(n){var i=this.nodeName.toLowerCase(),a=e(this).attr(o),r={obj:g.eq(n),tag:i,url:a};t.cache.push(r)})}var f=function(){var i,c=r.height();i=e(window).get(0)===window?e(window).scrollTop():r.offset().top,e.each(t.cache,function(e,t){var r,g=t.obj,f=t.tag,s=t.url;g&&(r=g.offset().top-i,g.height(),r>=0&&r<c&&(s&&"img"===f&&function(e,t,i){if(!e.attr("src"))if(1==n.cache){console.log(e);var o,a=document.getElementById("canvas1").getContext("2d");image=new Image,image.src=e.attr(t),image.onload=function(){a.drawImage(image,0,0),o=a.getImageData(0,0,500,250),console.log(o)}}else{!function(e){e.width(),e.height(),e.offset().top,e.offset().left,e.clone().addClass("lazy-loding").insertBefore(e)[0].src="/img/img-loading.png",e.hide()}(e);var r=e.attr(t);e[0].onerror=function(n){!function(e,n,t,i){n[0].src&&(n[0].src.indexOf("img-err.png")>0||n[0].src.indexOf("img-err2.png")>0)||(n.width(),n.height(),n[0].src="/img/img-err.png",t())}(0,e,i)},e[0].onload=function(n){e.parent().find(".lazy-loding").remove(),e.show()},e[0].src=r}}(g,o,a),t.obj=null))})};f(),r.bind("scroll",f),r.bind("resize",f)})}});