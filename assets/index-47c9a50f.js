(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const r=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),i=document.querySelector(".js-close-menu"),n=document.querySelectorAll(".nav-menu-link"),e=()=>{const t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),r.classList.toggle("is-open")};o.addEventListener("click",e),i.addEventListener("click",e),n.forEach(t=>t.addEventListener("click",e)),window.matchMedia("(min-width: 1200px)").addEventListener("change",t=>{t.matches&&(r.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))})})();new Swiper(".swiper-product",{slidesPerView:1,loop:!0,speed:600,spaceBetween:18,grabCursor:!0,simulateTouch:!0,touchRatio:2,mousewheel:{sensitivity:1},pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2.5},1200:{slidesPerView:4}}});new Swiper(".slider",{direction:"horizontal",slidesPerView:"1",spaceBetween:16,grabCursor:!0,simulateTouch:!0,touchRatio:2,pagination:{el:".swiper-pagination",clickable:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{spaceBetween:28,slidesPerView:2},1200:{slidesPerView:3}}});document.addEventListener("DOMContentLoaded",function(){["data-first-modal","data-second-modal","data-third-modal"].forEach(o=>{const i=o+"-open",n=o+"-close",e=document.querySelectorAll(`[${i}]`),t=document.querySelectorAll(`[${n}]`),s=document.querySelector("["+o+"]");if(s||logModalError("Can`t find Modal with attribute "+s),e.length===0&&logModalError("Can`t find Open modal button with attribute "+i),t.length===0&&logModalError("Can`t find Close modal button with attribute "+n),!s||e.length===0||t.length===0)return;e.forEach(l=>l.addEventListener("click",c)),t.forEach(l=>l.addEventListener("click",c));function c(){console.log("click"),s.classList.toggle("is-hidden")}})},!1);document.addEventListener("click",a);function a(r){r.target.closest(".modal-scroll")&&document.documentElement.classList.toggle("is-active")}(()=>{const r=document.querySelector("[data-modal]"),o=document.querySelector("[data-modal-open]"),i=document.querySelector("[data-modal-close]"),n=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),r.classList.toggle("is-hidden")};o.addEventListener("click",n),i.addEventListener("click",n)})();
