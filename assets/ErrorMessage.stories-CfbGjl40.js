import{j as s}from"./jsx-runtime-DEdD30eg.js";const i=({theme:m,message:p})=>s.jsx("div",{className:`wrapper ${m}`,children:s.jsx("p",{className:"error-message",children:p})});i.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage",props:{theme:{required:!0,tsType:{name:"string"},description:""},message:{required:!0,tsType:{name:"string"},description:""}}};const g={title:"Components/ErrorMessage",component:i,parameters:{layout:"centered",docs:{description:{component:"ErrorMessage component allows users to be aware that an error occured."}}},argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the form, either light or dark."}}},e={args:{theme:"light",message:"An error occurred."},parameters:{docs:{description:{story:"ErrorMessage component displayed in light mode."}}}},r={args:{theme:"dark",message:"An error occurred."},parameters:{docs:{description:{story:"ErrorMessage component displayed in dark mode."}}}};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    theme: "light",
    message: "An error occurred."
  },
  parameters: {
    docs: {
      description: {
        story: "ErrorMessage component displayed in light mode."
      }
    }
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    theme: "dark",
    message: "An error occurred."
  },
  parameters: {
    docs: {
      description: {
        story: "ErrorMessage component displayed in dark mode."
      }
    }
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const l=["Default","DarkMode"],h=Object.freeze(Object.defineProperty({__proto__:null,DarkMode:r,Default:e,__namedExportsOrder:l,default:g},Symbol.toStringTag,{value:"Module"}));export{h as E};
