!function(){var t={body:document.body,start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},o="#ffffff",a=null;t.stop.disabled=!0,t.start.addEventListener("click",(function(){t.start.disabled=!0,null===a&&(a=setInterval((function(){o="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),t.body.style.backgroundColor=o,console.log(o)}),1e3),t.stop.disabled=!1)})),t.stop.addEventListener("click",(function(){clearInterval(a),a=null,t.start.disabled=!1,t.stop.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.472cf022.js.map
