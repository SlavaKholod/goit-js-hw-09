const t={body:document.body,start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e="#ffffff",o=null;t.stop.disabled=!0,t.start.addEventListener("click",(()=>{t.start.disabled=!0,null===o&&(o=setInterval((()=>{e=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.body.style.backgroundColor=e,console.log(e)}),1e3),t.stop.disabled=!1)})),t.stop.addEventListener("click",(function(){clearInterval(o),o=null,t.start.disabled=!1,t.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.ae17db72.js.map
