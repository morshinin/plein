"use strict";function watchIframeHeight(t){var i=document.getElementById("iframe-content"),n=i.scrollHeight;updateIframeHeight(t,n),listenIframeMessage("postmessages.initialized",function(){updateIframeHeight(t,n)}),setInterval(function(){var e=i.scrollHeight;e!==n&&(updateIframeHeight(t,e),n=e)},100)}function updateIframeHeight(e,t){parent.postMessage({eventType:"resizeiframe",selector:e,height:t},protocol+window.location.hostname)}function listenIframeMessage(i,n){function e(e){var t="https://"+window.location.hostname;(e.origin||e.originalEvent.origin)==t&&e.data.eventType&&e.data.eventType==i&&n()}window.addEventListener?window.addEventListener("message",e):window.attachEvent("onmessage",e)}function init(){watchIframeHeight(document.body.getAttribute("data-iframe-selector")||"#iframe-page")}init();