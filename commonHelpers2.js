import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const m=document.querySelector('input[name="delay"]'),o=document.querySelector(".form");o.addEventListener("submit",a);function a(r){r.preventDefault();const t=o.delay.value,i=o.state.value;new Promise((e,n)=>{setTimeout(()=>{i==="fulfilled"?e(t):i==="rejected"&&n(t)},t)}).then(e=>s.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})).catch(e=>s.error({message:`❌ Rejected promise in ${e}ms`,position:"topRight"})),m.value=""}
//# sourceMappingURL=commonHelpers2.js.map
