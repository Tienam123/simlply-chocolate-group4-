(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const i=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".nav-menu-link"),e=()=>{const t=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!t),i.classList.toggle("is-open")};n.addEventListener("click",e),s.addEventListener("click",e),r.forEach(t=>t.addEventListener("click",e)),window.matchMedia("(min-width: 1200px)").addEventListener("change",t=>{t.matches&&(i.classList.remove("is-open"),n.setAttribute("aria-expanded",!1))})})();new Swiper(".swiper-product",{slidesPerView:1,loop:!0,speed:600,spaceBetween:18,grabCursor:!0,simulateTouch:!0,touchRatio:2,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2.5},1200:{slidesPerView:4}}});new Swiper(".slider",{direction:"horizontal",slidesPerView:"1",spaceBetween:16,grabCursor:!0,simulateTouch:!0,touchRatio:2,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{spaceBetween:28,slidesPerView:2},1200:{slidesPerView:3}}});document.addEventListener("DOMContentLoaded",function(){["data-first-modal","data-second-modal","data-third-modal"].forEach(n=>{const s=n+"-open",r=n+"-close",e=document.querySelectorAll(`[${s}]`),t=document.querySelectorAll(`[${r}]`),l=document.querySelector("["+n+"]");if(l||logModalError("Can`t find Modal with attribute "+l),e.length===0&&logModalError("Can`t find Open modal button with attribute "+s),t.length===0&&logModalError("Can`t find Close modal button with attribute "+r),!l||e.length===0||t.length===0)return;e.forEach(a=>a.addEventListener("click",m)),t.forEach(a=>a.addEventListener("click",m));function m(){console.log("click"),l.classList.toggle("is-hidden")}})},!1);const o=document.getElementById("howtomade-video-id"),c=document.getElementById("howtomade-video-button-id"),u=document.getElementById("howtomade-image");function d(i,n){i.style.zIndex=n}function p(){o.paused?c.style.zIndex=11:c.style.zIndex=0}c.addEventListener("click",function(){o.play()});u.addEventListener("click",function(){o.play()});o.addEventListener("click",function(){o.play()});o.addEventListener("play",function(){d(c,0),d(u,0)});o.addEventListener("pause",function(){p(),d(c,11)});o.addEventListener("click",function(){o.paused?o.play():o.pause()});o.addEventListener("ended",function(){c.style.display="block",d(c,11),d(u,11)});p();document.addEventListener("click",f);function f(i){i.target.closest(".modal-scroll")&&document.documentElement.classList.toggle("is-active")}(()=>{const i=document.querySelector("[data-modal]"),n=document.querySelector("[data-modal-open]"),s=document.querySelector("[data-modal-close]"),r=()=>{const e=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!e),i.classList.toggle("is-hidden")};n.addEventListener("click",r),s.addEventListener("click",r)})();
