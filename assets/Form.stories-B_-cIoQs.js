import{j as e}from"./jsx-runtime-DEdD30eg.js";/* empty css             */import"./index-RYns6xqu.js";const h=({theme:g,passwordError:u})=>e.jsxs("div",{className:`form-container ${g}`,children:[e.jsx("img",{className:"logo",src:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",alt:"Your Company"}),e.jsx("h2",{children:"Sign in to your account"}),e.jsxs("form",{action:"#",method:"POST",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{htmlFor:"email",children:"Email address"}),e.jsx("input",{id:"email",name:"email",type:"email",autoComplete:"email",required:!0})]}),e.jsxs("div",{className:"form-group",children:[e.jsxs("div",{className:"password-group",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("a",{href:"#",className:"forgot-password",children:"Forgot password?"})]}),e.jsx("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0}),u&&e.jsx("p",{className:"error-message",children:"Incorrect password. Please try again."})]}),e.jsx("button",{type:"submit",children:"Sign in"})]}),e.jsxs("p",{className:"register-text",children:["Not a member?",e.jsxs("a",{href:"#",className:"link",children:[" ","Register for free"]})]})]});h.__docgenInfo={description:"",methods:[],displayName:"Form",props:{theme:{required:!0,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""},passwordError:{required:!1,tsType:{name:"boolean"},description:""}}};const f={title:"Example/Form",component:h,parameters:{layout:"centered",docs:{description:{component:"Form component for user authentication with light and dark themes, and error handling for incorrect passwords."}}},tags:["autodocs"],argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the form, either light or dark."},passwordError:{control:"boolean",description:"Boolean to indicate if there is a password error."}}},r={args:{theme:"light"},parameters:{docs:{description:{story:"Form component displayed in light mode."}}}},o={args:{theme:"dark"},parameters:{docs:{description:{story:"Form component displayed in dark mode."}}}},s={args:{theme:"light",passwordError:!0},parameters:{docs:{description:{story:"Form component displayed in light mode with an incorrect password error message."}}}};var a,t,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    theme: 'light'
  },
  parameters: {
    docs: {
      description: {
        story: 'Form component displayed in light mode.'
      }
    }
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,d,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    theme: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'Form component displayed in dark mode.'
      }
    }
  }
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var c,p,l;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    passwordError: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Form component displayed in light mode with an incorrect password error message.'
      }
    }
  }
}`,...(l=(p=s.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const j=["LightMode","DarkMode","PasswordIncorrect"];export{o as DarkMode,r as LightMode,s as PasswordIncorrect,j as __namedExportsOrder,f as default};
