parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=document.querySelector("thead"),c=document.querySelector("tfoot"),l=document.querySelector("tbody");function s(e){return+e.replace("$","").replace(",",".")}function d(t){var n=t.cellIndex,r=e(l.children);switch(t.innerText.toLowerCase()){case"name":case"position":case"office":r.sort(function(e,t){return e.children[n].innerText.localeCompare(t.children[n].innerText)});break;case"age":r.sort(function(e,t){return e.children[n].innerText-t.children[n].innerText});break;case"salary":r.sort(function(e,t){return s(e.children[n].innerText)-s(t.children[n].innerText)})}return r}e(i.firstElementChild.children).forEach(function(e){e.dataset.clickedTitle=!1});var u=function(t){var n=t.target.closest("th");"false"===n.dataset.clickedTitle?(l.append.apply(l,e(d(n))),n.dataset.clickedTitle=!0):(l.append.apply(l,e(d(n).reverse())),n.dataset.clickedTitle=!1)};i.addEventListener("click",u),c.addEventListener("click",u);var p,m=!1;l.addEventListener("click",function(e){var t=e.target.closest("tr");m&&(p.classList.remove("active"),m=!0),p=t,t.classList.add("active"),m=!0}),document.body.insertAdjacentHTML("beforeend",'\n  <form class="new-employee-form">\n    <label>Name:\n      <input name="name" type="text" data-qa="name" required>\n    </label>\n    <label>Position:\n      <input name="position" type="text" data-qa="position">\n    </label>\n\n    <label>Office:\n      <select name="office" data-qa="office">\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n    <label>Age:\n      <input name="age" type="number" data-qa="age" required>\n    </label>\n    <label>Salary:\n      <input name="salary" type="number" data-qa="salary" required>\n    </label>\n\n    <button type="submit">\n      Save to table\n    </button>\n  </form>\n');var f=document.querySelector("form");f.addEventListener("submit",b);var y=function(e,t,n,r,a){var o=document.createElement("div"),i=document.createElement("h3"),c=document.createElement("p");o.className="notification ".concat(n),o.style.top=r+"px",o.style.right=a+"px",o.dataset.qa="notification",i.className="title",i.innerText=e,c.innerText=t,o.append(i,c),document.body.append(o),setTimeout(function(){return o.remove()},5e3)};function b(t){t.preventDefault();var n=new FormData(f),r=n.get("name"),a=n.get("position"),o=n.get("office"),i=n.get("age"),c=n.get("salary"),s=document.querySelectorAll("input");r.length>=4&&a.length&&i>=18&&i<=90&&(l.insertAdjacentHTML("beforeend","\n    <tr>\n      <td>".concat(r,"</td>\n      <td>").concat(a,"</td>\n      <td>").concat(o,"</td>\n      <td>").concat(i,"</td>\n      <td>$").concat(Number(c).toLocaleString("en"),"</td>\n    </tr>\n  ")),y("МАЛАДЄЦ","success","success",10,10),e(s).forEach(function(e){e.value=""})),r.length<4&&y("Name value has less than 4 letters","error","error",170,10),a.length||y("Write position","error","error",10,10),(i<18||i>90)&&y("Age value is less than 18 or more than 90 show","error","error",290,10)}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.046e84e1.js.map