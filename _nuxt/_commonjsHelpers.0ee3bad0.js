const a=/\d/,c=["-","_","/","."];function d(e=""){if(!a.test(e))return e.toUpperCase()===e}function h(e,p){const i=p??c,o=[];if(!e||typeof e!="string")return o;let t="",n,r;for(const s of e){const u=i.includes(s);if(u===!0){o.push(t),t="",n=void 0;continue}const l=d(s);if(r===!1){if(n===!1&&l===!0){o.push(t),t=s,n=l;continue}if(n===!0&&l===!1&&t.length>1){const f=t[t.length-1];o.push(t.slice(0,Math.max(0,t.length-1))),t=f+s,n=l;continue}}t+=s,n=l,r=u}return o.push(t),o}function y(e){return e?e[0].toUpperCase()+e.slice(1):""}function b(e){return e?(Array.isArray(e)?e:h(e)).map(p=>y(p)).join(""):""}var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function U(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}export{C as c,U as g,b as p};
