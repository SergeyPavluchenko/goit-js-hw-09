var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},e.parcelRequired7c6=t);var n=t("iQIUW");function i(e,o){return new Promise(((r,t)=>{const n=Math.random()>.3;setTimeout((()=>{n?r({position:e,delay:o}):t({position:e,delay:o})}),o)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();let{elements:{delay:o,amount:r,step:t}}=e.currentTarget,l=Number(o.value),s=Number(t.value),u=Number(r.value);for(let e=1;e<=u;e+=1)i(e,l).then((({position:e,delay:o})=>{console.log("success"),n.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log("error"),n.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)})),l+=s;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.cb93de60.js.map