import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";/* empty css             */const C=({theme:F,emailError:k})=>{const[R,i]=s.useState(""),[E,n]=s.useState(""),[S,l]=s.useState(""),[d,m]=s.useState(""),[c,p]=s.useState(""),[h,g]=s.useState(null),P=r=>{if(r.preventDefault(),d!==c){g("Passwords do not match.");return}console.log("User registered successfully"),i(""),n(""),l(""),m(""),p(""),g(null)};return e.jsxs("div",{className:`form-container ${F}`,children:[e.jsx("img",{className:"logo",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),e.jsx("h2",{children:"Create your account"}),e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"firstName",children:"First Name"}),e.jsx("input",{id:"firstName",name:"firstName",type:"text",value:R,onChange:r=>i(r.target.value),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"lastName",children:"Last Name"}),e.jsx("input",{id:"lastName",name:"lastName",type:"text",value:E,onChange:r=>n(r.target.value),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsx("input",{id:"email",name:"email",type:"email",value:S,onChange:r=>l(r.target.value),required:!0}),k&&e.jsx("p",{className:"error-message",children:"This email is already registered."})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{id:"password",name:"password",type:"password",value:d,onChange:r=>m(r.target.value),required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),e.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:c,onChange:r=>p(r.target.value),required:!0})]}),h&&e.jsx("p",{className:"error-message",children:h}),e.jsx("button",{type:"submit",children:"Register"})]}),e.jsxs("p",{className:"login-text",children:["Already have an account?",e.jsx("a",{href:"/login",className:"link",children:" Sign in"})]}),e.jsx("div",{className:"separator",children:"or"}),e.jsxs("div",{className:"social-login",children:[e.jsx("p",{children:"Sign up with:"}),e.jsxs("div",{className:"social-buttons",children:[e.jsxs("button",{type:"button",className:"social-button google",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon",children:[e.jsx("title",{children:"Google"}),e.jsx("path",{d:"M21.35 11.1h-9.4v2.8h5.5c-.3 1.5-1.2 2.7-2.5 3.5v2.9h4c2.3-2.1 3.6-5.2 3.6-8.7 0-.6-.1-1.2-.2-1.8zM12 22c2.7 0 5-1 6.7-2.7l-3.2-2.7c-.9.6-2 1-3.5 1-2.7 0-5-1.8-5.8-4.3H3.1v2.7C4.8 19.7 8.1 22 12 22zM6.2 13.3c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2L3.1 6.6C2.4 8 2 9.5 2 11s.4 3 1.1 4.4l3.1-2.1zM12 4.5c1.5 0 2.8.5 3.8 1.4l2.8-2.8C16.9 1.5 14.5 0 12 0 8.1 0 4.8 2.3 3.1 5.6l3.1 2.1c.8-2.5 3.1-4.2 5.8-4.2z"})]}),"Google"]}),e.jsxs("button",{type:"button",className:"social-button facebook",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon",children:[e.jsx("title",{children:"Facebook"}),e.jsx("path",{d:"M22.675 0h-21.35C.6 0 0 .6 0 1.325v21.351C0 23.4.6 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.675V1.325C24 .6 23.4 0 22.675 0z"})]}),"Facebook"]}),e.jsxs("button",{type:"button",className:"social-button twitter",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon",children:[e.jsx("title",{children:"Twitter"}),e.jsx("path",{d:"M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.158-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z"})]}),"Twitter"]})]})]})]})};C.__docgenInfo={description:"",methods:[],displayName:"RegisterForm",props:{theme:{required:!0,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""},emailError:{required:!1,tsType:{name:"boolean"},description:""}}};const z={title:"Example/RegisterForm",component:C,parameters:{layout:"centered",docs:{description:{component:"RegisterForm component for user registration with light and dark themes, and error handling for existing email addresses."}}},tags:["autodocs"],argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the form, either light or dark."},emailError:{control:"boolean",description:"Boolean to indicate if there is an email error (already registered)."}}},t={args:{theme:"light"},parameters:{docs:{description:{story:"RegisterForm component displayed in light mode."}}}},a={args:{theme:"dark"},parameters:{docs:{description:{story:"RegisterForm component displayed in dark mode."}}}},o={args:{theme:"light",emailError:!0},parameters:{docs:{description:{story:"RegisterForm component displayed in light mode with an email already registered error message."}}}};var u,x,j;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    theme: 'light'
  },
  parameters: {
    docs: {
      description: {
        story: 'RegisterForm component displayed in light mode.'
      }
    }
  }
}`,...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var v,w,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    theme: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'RegisterForm component displayed in dark mode.'
      }
    }
  }
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var y,N,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    emailError: true
  },
  parameters: {
    docs: {
      description: {
        story: 'RegisterForm component displayed in light mode with an email already registered error message.'
      }
    }
  }
}`,...(b=(N=o.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const D=["Default","DarkMode","EmailAlreadyRegistered"];export{a as DarkMode,t as Default,o as EmailAlreadyRegistered,D as __namedExportsOrder,z as default};
