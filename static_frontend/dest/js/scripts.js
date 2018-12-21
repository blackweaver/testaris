(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function($){
	"use strict";

	let responsive = false;

	const btn_ham = document.querySelector("#ham");
	const menu = document.querySelector("nav");
	btn_ham.addEventListener('click', switchMenu);

	function switchMenu(e){
		if(!responsive){
			menu.classList.add("open");
			menu.classList.remove("close");
			responsive = true;
		}else{
			menu.classList.add("close");
			menu.classList.remove("open");
			responsive = false;
		}
		e.preventDefault();
	}

})();
},{}],2:[function(require,module,exports){
let interactions = require('./_interactions');
},{"./_interactions":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9faW50ZXJhY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvc2NyaXB0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uKCQpe1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHRsZXQgcmVzcG9uc2l2ZSA9IGZhbHNlO1xuXG5cdGNvbnN0IGJ0bl9oYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hhbVwiKTtcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XG5cdGJ0bl9oYW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hNZW51KTtcblxuXHRmdW5jdGlvbiBzd2l0Y2hNZW51KGUpe1xuXHRcdGlmKCFyZXNwb25zaXZlKXtcblx0XHRcdG1lbnUuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJjbG9zZVwiKTtcblx0XHRcdHJlc3BvbnNpdmUgPSB0cnVlO1xuXHRcdH1lbHNle1xuXHRcdFx0bWVudS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG5cdFx0XHRtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdFx0cmVzcG9uc2l2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxufSkoKTsiLCJsZXQgaW50ZXJhY3Rpb25zID0gcmVxdWlyZSgnLi9faW50ZXJhY3Rpb25zJyk7Il19
