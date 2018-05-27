/* Lazy Load XT 1.1.0 | MIT License */
!function(a,b,c,d){function e(a){if(a){for(var b=0,c=a.length;c>b;b++)this[b]=a[b];this.length=c}}function f(c){return c instanceof e?c:new e("string"==typeof c?b.querySelectorAll(c):c&&(c===a||c.nodeType)?[c]:c)}function g(a,b,c){for(var d,e,f,g,h,i,j=(b||"").match(/\S+/g)||[],k=0,l=a.length;l>k;)if(d=a[k++],1===d.nodeType){for(h=d.className,e=h?(" "+h+" ").replace(/[\t\r\n\f]/g," "):" ",g=0;f=j[g++];)e=c(e,f,e.indexOf(" "+f+" ")>=0);i=e.slice(1,-1),h!==i&&(d.className=i)}return a}function h(a,b,c){for(var d=c.target;d&&d!==this;){if(k.call(d,a))return b.call(d,c);d=d.parentElement}}var i=a.$,j="__jqlight_data__",k=c.matches||c.matchesSelector||c.mozMatchesSelector||c.msMatchesSelector||c.oMatchesSelector||c.webkitMatchesSelector;e.prototype=f.fn={constructor:e,length:0},f.fn.extend=f.extend=function(){var a,b,c,e=this,f=0,g=arguments.length;for(g>1&&(e=arguments[f++]);g>f;f++){a=arguments[f];for(b in a)c=a[b],c!==d&&c!==e&&(e[b]=c)}return e},f.extend({noConflict:function(){return a.$=i,f},isFunction:function(a){return"function"==typeof a},contains:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},each:function(a,b){for(var c=0,d=a.length;d>c;c++)if(b(c,a[c])===!1)return!1;return!0},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(f,a[f]),d!==h&&e.push(a[f]);return e},map:function(a,b){for(var c,d=0,e=a.length,f=[];e>d;d++)c=b(a[d],d),null!=c&&f.push(c);return f}}),f.fn.extend({each:function(a){return f.each(this,function(b,c){return a.call(c,b,c)}),this},map:function(a){return f(f.map(this,function(b,c){return a.call(b,c,b)}))},filter:function(a){return f(f.grep(this,function(b,c){return a.call(c,b,c)}))},ready:function(a){return/complete|loaded|interactive/.test(b.readyState)&&b.body?a():f(b).on("DOMContentLoaded",a),this},addClass:function(a){return g(this,a,function(a,b,c){return c?a:a+b+" "})},removeClass:function(a){return g(this,a,function(a,b,c){return c?a.replace(" "+b+" "," "):a})},on:function(a,b,c){return null==c&&(c=b,b=d),a=a.split(" "),this.each(function(d,e){var g=b?h.bind(e,b,c):c;f.each(a,function(a,b){b&&e.addEventListener(b,g)})})},off:function(a,b,c){return(b===!1||f.isFunction(b))&&(c=b),a=a.split(" "),this.each(function(b,d){f.each(a,function(a,b){b&&d.removeEventListener(b,c)})})},trigger:function(c,d){return this.each(function(){var e;a.CustomEvent?e=new CustomEvent(c,{detail:d}):(e=b.createEvent("CustomEvent"),e.initCustomEvent(c,!0,!0,d)),this.dispatchEvent(e)})},data:function(a,b){if("string"==typeof a&&b===d){var c=this[0];return c&&c[j]?c[j][a]:d}return this.each(function(c,d){d[j]=d[j]||{},d[j][a]=b}),this},attr:function(a,b){return b===d?this.length?this[0].getAttribute(a):d:(this.each(function(){this.setAttribute(a,b+"")}),this)}}),a.$=f}(window,document,Element.prototype);
