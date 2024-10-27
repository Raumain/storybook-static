import{j as t}from"./jsx-runtime-DEdD30eg.js";/* empty css             */const s=({theme:n,href:a,children:d})=>t.jsx("div",{className:`wrapper ${n}`,children:t.jsx("a",{href:a,className:"link",children:d})});s.__docgenInfo={description:"",methods:[],displayName:"RegisterLink",props:{theme:{required:!0,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const c={title:"Components/Link",component:s,argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the link, either light or dark."},href:{control:"text",description:"The URL that the hyperlink points to."},children:{control:"text",description:"The text or elements that will be displayed inside the link."}},parameters:{docs:{description:{component:"Link component allows users to navigate to different URLs with customizable themes and content."}}}},e={args:{theme:"dark",href:"#",children:"Register for free"},parameters:{docs:{description:{story:'Link component displayed in dark mode with default text "Register for free".'}}}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    href: '#',
    children: 'Register for free'
  },
  parameters: {
    docs: {
      description: {
        story: 'Link component displayed in dark mode with default text "Register for free".'
      }
    }
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const p=["Default"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{h as L};
