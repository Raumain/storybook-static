import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";/* empty css             */const j=({theme:v,passwordError:F})=>{const[N,t]=s.useState(""),[d,i]=s.useState(""),[c,m]=s.useState(""),[l,p]=s.useState(null),b=e=>{if(e.preventDefault(),d!==c){p("Passwords do not match.");return}t(""),i(""),m(""),p(null)};return r.jsxs("div",{className:`form-container ${v}`,children:[r.jsx("h2",{children:"Change Password"}),r.jsxs("form",{onSubmit:b,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"currentPassword",children:"Current Password"}),r.jsx("input",{id:"currentPassword",name:"currentPassword",type:"password",value:N,onChange:e=>t(e.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"newPassword",children:"New Password"}),r.jsx("input",{id:"newPassword",name:"newPassword",type:"password",value:d,onChange:e=>i(e.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),r.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:c,onChange:e=>m(e.target.value),required:!0})]}),l&&r.jsx("p",{className:"error-message",children:l}),F&&r.jsx("p",{className:"error-message",children:"Incorrect password. Please try again."}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"2rem"},children:[r.jsx("button",{type:"reset",className:"secondary",children:"Cancel"}),r.jsx("button",{type:"submit",children:"Change Password"})]})]})]})};j.__docgenInfo={description:"",methods:[],displayName:"ChangePasswordForm",props:{theme:{required:!0,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""},passwordError:{required:!1,tsType:{name:"boolean"},description:""}}};const q={title:"Example/ChangePasswordForm",component:j,parameters:{layout:"centered",docs:{description:{component:"ChangePasswordForm component allows users to change their password with validation and error handling."}}},tags:["autodocs"],argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the form, either light or dark."},passwordError:{control:"boolean",description:"Boolean to indicate if there is a password error."}}},o={args:{theme:"light"},parameters:{docs:{description:{story:"ChangePasswordForm component displayed in light mode."}}}},a={args:{theme:"dark"},parameters:{docs:{description:{story:"ChangePasswordForm component displayed in dark mode."}}}},n={args:{theme:"light",passwordError:!0},parameters:{docs:{description:{story:"ChangePasswordForm component displayed in light mode with an incorrect password error message."}}}};var h,u,w;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    theme: 'light'
  },
  parameters: {
    docs: {
      description: {
        story: 'ChangePasswordForm component displayed in light mode.'
      }
    }
  }
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,P,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    theme: 'dark'
  },
  parameters: {
    docs: {
      description: {
        story: 'ChangePasswordForm component displayed in dark mode.'
      }
    }
  }
}`,...(y=(P=a.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var f,x,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    passwordError: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ChangePasswordForm component displayed in light mode with an incorrect password error message.'
      }
    }
  }
}`,...(C=(x=n.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const D=["Default","DarkMode","PasswordIncorrect"];export{a as DarkMode,o as Default,n as PasswordIncorrect,D as __namedExportsOrder,q as default};
