(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){["data-first-modal","data-second-modal","data-third-modal"].forEach(n=>{const l=n+"-open",r=n+"-close",e=document.querySelectorAll(`[${l}]`),t=document.querySelectorAll(`[${r}]`),o=document.querySelector("["+n+"]");if(o||logModalError("Can`t find Modal with attribute "+o),e.length===0&&logModalError("Can`t find Open modal button with attribute "+l),t.length===0&&logModalError("Can`t find Close modal button with attribute "+r),!o||e.length===0||t.length===0)return;e.forEach(i=>i.addEventListener("click",d)),t.forEach(i=>i.addEventListener("click",d));function d(){console.log("click"),o.classList.toggle("is-hidden")}})},!1);