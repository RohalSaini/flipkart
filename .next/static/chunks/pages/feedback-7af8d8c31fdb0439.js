(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[862],{8409:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feedback",function(){return t(6396)}])},6844:function(n,e,t){"use strict";var c=t(5893),r=t(1664),i=t(4649),o=t.n(i);e.Z=function(n){return n.link?(0,c.jsx)(r.default,{href:n.link,children:(0,c.jsx)("a",{className:o().btn,children:n.children})}):(0,c.jsx)("button",{className:o().btn,onClick:n.onClick,children:n.children})}},6396:function(n,e,t){"use strict";t.r(e);var c=t(5666),r=t.n(c),i=t(5893),o=t(7294),l=t(6844);function s(n,e,t,c,r,i,o){try{var l=n[i](o),s=l.value}catch(a){return void t(a)}l.done?e(s):Promise.resolve(s).then(c,r)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(c,r){var i=n.apply(e,t);function o(n){s(i,c,r,o,l,"next",n)}function l(n){s(i,c,r,o,l,"throw",n)}o(void 0)}))}}e.default=function(){var n=(0,o.useRef)(),e=(0,o.useRef)(),t=(0,o.useState)(),c=t[0],s=t[1],u=(0,o.useState)([]),d=u[0],f=u[1];function h(n){return b.apply(this,arguments)}function b(){return(b=a(r().mark((function n(e){return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:fetch("/api/".concat(e)).then((function(n){return n.json()})).then((function(n){console.log(n),s(n.feedback)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,i.jsx)(o.Fragment,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Feedback form"}),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={email:n.current.value,feedback:e.current.value};fetch("/api/feedback",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, PATCH, DELETE","Access-Control-Allow-Headers":"X-Requested-With,content-type","Access-Control-Allow-Credentials":!0}}).then((function(n){return n.json()})).then((function(n){var e=n.feedback;f(e)})).catch((function(n){console.log(n)}))},children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"email",children:"Email"}),(0,i.jsx)("input",{htmlFor:"email",id:"emial",ref:n})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{htmlFor:"feedback",children:"FeedBAck"}),(0,i.jsx)("textarea",{row:"5",id:"feedback",ref:e})]}),(0,i.jsx)(l.Z,{onSubmit:!0,children:"Add Feedback"})]}),(0,i.jsx)("hr",{}),(0,i.jsx)("button",{onClick:function(){fetch("/api/feedback").then((function(n){return n.json()})).then((function(n){console.log(n.feedback),f(n.feedback)})).catch((function(n){console.log(n)}))},children:" Load Feedbacks"}),(0,i.jsx)("ul",{children:d.map((function(n){return(0,i.jsxs)("li",{children:[n.text,(0,i.jsx)(l.Z,{onClick:h.bind(null,n.id),children:"Show Detail"})," "]},n.id)}))}),(0,i.jsx)("div",{children:c&&(0,i.jsx)("p",{children:c.email})})]})})}},4649:function(n){n.exports={btn:"button_btn__O_wkr"}}},function(n){n.O(0,[774,888,179],(function(){return e=8409,n(n.s=e);var e}));var e=n.O();_N_E=e}]);