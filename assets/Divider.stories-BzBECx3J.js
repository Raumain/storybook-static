import{j as o}from"./jsx-runtime-DEdD30eg.js";const c=({theme:p})=>o.jsxs("div",{className:`wrapper ${p}`,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"2rem"},children:[o.jsx("span",{children:"Paint au chocolat"}),o.jsx("div",{className:"separator",style:{marginTop:0},children:"or"}),o.jsx("span",{children:"Chocolatine"})]});c.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{theme:{required:!0,tsType:{name:"string"},description:""}}};const m={title:"Components/Divider",component:c,parameters:{layout:"centered",docs:{description:{component:"Divider component is meant to separate informations to help the user making a choice."}}},argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the form, either light or dark."}}},e={args:{theme:"light"},parameters:{docs:{description:{story:"Divider component displayed in light mode."}}}},r={args:{theme:"dark"},parameters:{docs:{description:{story:"Divider component displayed in dark mode."}}}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    theme: "light"
  },
  parameters: {
    docs: {
      description: {
        story: "Divider component displayed in light mode."
      }
    }
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var a,i,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    theme: "dark"
  },
  parameters: {
    docs: {
      description: {
        story: "Divider component displayed in dark mode."
      }
    }
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const l=["Default","DarkMode"],g=Object.freeze(Object.defineProperty({__proto__:null,DarkMode:r,Default:e,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{g as D};
