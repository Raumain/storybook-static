import{j as r}from"./jsx-runtime-DEdD30eg.js";/* empty css             */const u=({theme:i,id:o,name:m,type:c,autoComplete:h,required:y,label:g})=>r.jsx("div",{className:`wrapper ${i}`,children:r.jsxs("div",{className:`form-group ${i}`,children:[r.jsx("label",{htmlFor:o,children:g}),r.jsx("input",{id:o,name:m,type:c,autoComplete:h,required:y})]})});u.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{theme:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"string"},description:""},autoComplete:{required:!0,tsType:{name:"string"},description:""},required:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const b={title:"Components/InputField",component:u,argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the input field, either light or dark."},id:{control:"text",description:"The id attribute of the input field."},name:{control:"text",description:"The name attribute of the input field."},type:{control:"text",description:"The type attribute of the input field."},autoComplete:{control:"text",description:"The autoComplete attribute of the input field."},required:{control:"boolean",description:"Boolean to indicate if the input field is required."},label:{control:"text",description:"The label for the input field."}},parameters:{docs:{description:{component:"InputField component allows users to input data with various attributes like id, name, type, autoComplete, required, and label."}}}},e={args:{theme:"dark",id:"email",name:"email",type:"email",autoComplete:"email",required:!0,label:"Email address"},parameters:{docs:{description:{story:"InputField component displayed in dark mode with email attributes."}}}},t={args:{theme:"light",id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,label:"Password"},parameters:{docs:{description:{story:"InputField component displayed in light mode with password attributes."}}}};var s,a,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    theme: "dark",
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    required: true,
    label: 'Email address'
  },
  parameters: {
    docs: {
      description: {
        story: 'InputField component displayed in dark mode with email attributes.'
      }
    }
  }
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var n,p,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    theme: "light",
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    required: true,
    label: 'Password'
  },
  parameters: {
    docs: {
      description: {
        story: 'InputField component displayed in light mode with password attributes.'
      }
    }
  }
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const f=["Default","LightMode"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,LightMode:t,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{T as I};
