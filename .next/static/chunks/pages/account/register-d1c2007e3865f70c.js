(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{2812:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/register",function(){return a(3823)}])},1487:function(e,s,a){"use strict";a.d(s,{A:function(){return c}});var r=a(5893),i=a(7294),n=a(1163),l=a(6677);function c(e){let{children:s}=e,a=(0,n.useRouter)();return(0,i.useEffect)(()=>{l.W.userValue&&a.push("/")},[]),(0,r.jsx)("div",{className:"col-md-6 offset-md-3 mt-5",children:s})}},3823:function(e,s,a){"use strict";a.r(s);var r=a(5893),i=a(1163),n=a(1664),l=a.n(n),c=a(7536),t=a(7533),d=a(6310),m=a(1487),o=a(6677);s.default=function(){var e,s,a,n;let u=(0,i.useRouter)(),N=d.Ry().shape({firstName:d.Z_().required("First Name is required"),lastName:d.Z_().required("Last Name is required"),username:d.Z_().required("Username is required"),password:d.Z_().required("Password is required").min(6,"Password must be at least 6 characters")}),f={resolver:(0,t.X)(N)},{register:h,handleSubmit:b,formState:v}=(0,c.cI)(f),{errors:x}=v;return(0,r.jsx)(m.A,{children:(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h4",{className:"card-header",children:"Register"}),(0,r.jsx)("div",{className:"card-body",children:(0,r.jsxs)("form",{onSubmit:b(function(e){return o.W.register(e).then(()=>{o.A.success("Registration successful",!0),u.push("login")}).catch(o.A.error)}),children:[(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{className:"form-label",children:"First Name"}),(0,r.jsx)("input",{name:"firstName",type:"text",...h("firstName"),className:"form-control ".concat(x.firstName?"is-invalid":"")}),(0,r.jsx)("div",{className:"invalid-feedback",children:null===(e=x.firstName)||void 0===e?void 0:e.message})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{className:"form-label",children:"Last Name"}),(0,r.jsx)("input",{name:"lastName",type:"text",...h("lastName"),className:"form-control ".concat(x.lastName?"is-invalid":"")}),(0,r.jsx)("div",{className:"invalid-feedback",children:null===(s=x.lastName)||void 0===s?void 0:s.message})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{className:"form-label",children:"Username"}),(0,r.jsx)("input",{name:"username",type:"text",...h("username"),className:"form-control ".concat(x.username?"is-invalid":"")}),(0,r.jsx)("div",{className:"invalid-feedback",children:null===(a=x.username)||void 0===a?void 0:a.message})]}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{className:"form-label",children:"Password"}),(0,r.jsx)("input",{name:"password",type:"password",...h("password"),className:"form-control ".concat(x.password?"is-invalid":"")}),(0,r.jsx)("div",{className:"invalid-feedback",children:null===(n=x.password)||void 0===n?void 0:n.message})]}),(0,r.jsxs)("button",{disabled:v.isSubmitting,className:"btn btn-primary",children:[v.isSubmitting&&(0,r.jsx)("span",{className:"spinner-border spinner-border-sm me-1"}),"Register"]}),(0,r.jsx)(l(),{href:"/account/login",className:"btn btn-link",children:"Cancel"})]})})]})})}}},function(e){e.O(0,[216,774,888,179],function(){return e(e.s=2812)}),_N_E=e.O()}]);