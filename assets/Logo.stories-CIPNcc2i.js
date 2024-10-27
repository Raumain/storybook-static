import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const i=({theme:e,src:d,alt:n})=>t.jsx("div",{className:`wrapper ${e}`,children:t.jsx("img",{className:`logo ${e}`,src:d,alt:n})});i.__docgenInfo={description:"",methods:[],displayName:"Logo",props:{theme:{required:!0,tsType:{name:"string"},description:""},src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!0,tsType:{name:"string"},description:""}}};const m={title:"Components/Logo",component:i,tags:["autodocs"],argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the logo, either light or dark."},src:{control:"text",description:"The source URL of the logo image."},alt:{control:"text",description:"The alt text for the logo image."}},parameters:{docs:{description:{component:"Logo component displays a logo image with customizable theme, source URL, and alt text."}}}},o={args:{theme:"dark",src:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",alt:"Your Company"},parameters:{docs:{description:{story:'Logo component displayed in dark mode with default source URL and alt text "Your Company".'}}}};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    theme: "dark",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Your Company"
  },
  parameters: {
    docs: {
      description: {
        story: 'Logo component displayed in dark mode with default source URL and alt text "Your Company".'
      }
    }
  }
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const l=["Default"];export{o as Default,l as __namedExportsOrder,m as default};
