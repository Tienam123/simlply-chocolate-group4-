(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){["data-first-modal","data-second-modal","data-third-modal"].forEach(o=>{const l=o+"-open",n=o+"-close",e=document.querySelectorAll(`[${l}]`),t=document.querySelectorAll(`[${n}]`),r=document.querySelector("["+o+"]");if(r||logModalError("Can`t find Modal with attribute "+r),e.length===0&&logModalError("Can`t find Open modal button with attribute "+l),t.length===0&&logModalError("Can`t find Close modal button with attribute "+n),!r||e.length===0||t.length===0)return;e.forEach(s=>s.addEventListener("click",c)),t.forEach(s=>s.addEventListener("click",c));function c(){console.log("click"),r.classList.toggle("is-hidden")}})},!1);(()=>{const i=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),n=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),i.classList.toggle("is-open")};o.addEventListener("click",n),l.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(i.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))})})();
