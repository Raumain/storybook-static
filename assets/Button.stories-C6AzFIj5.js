import{j as e}from"./jsx-runtime-DEdD30eg.js";/* empty css             */const g=({theme:s,type:a,children:b,icon:w})=>{let r=null;switch(w){case"Google":r=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon",children:[e.jsx("title",{children:"Google"}),e.jsx("path",{d:"M21.35 11.1h-9.4v2.8h5.5c-.3 1.5-1.2 2.7-2.5 3.5v2.9h4c2.3-2.1 3.6-5.2 3.6-8.7 0-.6-.1-1.2-.2-1.8zM12 22c2.7 0 5-1 6.7-2.7l-3.2-2.7c-.9.6-2 1-3.5 1-2.7 0-5-1.8-5.8-4.3H3.1v2.7C4.8 19.7 8.1 22 12 22zM6.2 13.3c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2L3.1 6.6C2.4 8 2 9.5 2 11s.4 3 1.1 4.4l3.1-2.1zM12 4.5c1.5 0 2.8.5 3.8 1.4l2.8-2.8C16.9 1.5 14.5 0 12 0 8.1 0 4.8 2.3 3.1 5.6l3.1 2.1c.8-2.5 3.1-4.2 5.8-4.2z"})]});break;case"Facebook":r=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon",children:[e.jsx("title",{children:"Facebook"}),e.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.026 1.79-4.72 4.533-4.72 1.31 0 2.685.237 2.685.237v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})]});break;case"Twitter":r=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon",children:e.jsx("title",{children:"Twitter"})});break;case"Apple":r=e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"icon",children:[e.jsx("title",{children:"Apple"}),e.jsx("path",{d:"M12 11.81c1.65 0 2.99-.56 2.99-1.29 0-.73-.77-1.29-2.1-1.29-1.32 0-2.1.56-2.1 1.29 0 .73 1.36 1.29 2.99 1.29zM12 2.29c2.4 0 4.46.73 5.96 1.93 1.51 1.2 2.48 2.8 2.48 4.49 0 1.69-.97 3.29-2.48 4.49-1.51 1.2-3.57 1.93-5.96 1.93-2.4 0-4.46-.73-5.96-1.93-1.51-1.2-2.48-2.8-2.48-4.49 0-1.69.97-3.29 2.48-4.49C9.54 2.73 11.6 2 14 2c2.4 0 4.46.73 5.96 1.93 1.51 1.2 2.48 2.8 2.48 4.49 0 1.69-.97 3.29-2.48 4.49-1.51 1.2-3.57 1.93-5.96 1.93z"})]});break}return e.jsx("div",{className:`wrapper ${s}`,children:e.jsxs("button",{type:a==="primary"?"submit":"button",className:`button ${s} ${a}`,children:[r&&e.jsx("span",{className:"icon",children:r}),b]})})};g.__docgenInfo={description:"",methods:[],displayName:"Button",props:{theme:{required:!0,tsType:{name:"string"},description:""},type:{required:!0,tsType:{name:"union",raw:'"submit" | "primary" | "secondary"',elements:[{name:"literal",value:'"submit"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"union",raw:'"Google" | "Facebook" | "Twitter" | "Apple" | undefined',elements:[{name:"literal",value:'"Google"'},{name:"literal",value:'"Facebook"'},{name:"literal",value:'"Twitter"'},{name:"literal",value:'"Apple"'},{name:"undefined"}]},description:""}}};const v={title:"Components/Button",component:g,argTypes:{theme:{control:"select",options:["light","dark"],description:"Theme of the button, either light or dark."},type:{control:"select",options:["submit","primary","secondary"],description:"Type of the button, can be submit, primary, or secondary."},children:{control:"text",description:"Text or elements to be displayed inside the button."},icon:{control:"select",options:["Google","Facebook","Twitter","Apple"],description:"Icon to be displayed inside the button."}},parameters:{docs:{description:{component:"The Button component provides a clickable element that can be used for actions or submissions. Button component with different themes and types."}}}},t={args:{theme:"dark",type:"submit",children:"Sign in"},parameters:{docs:{description:{story:"Primary button used for form submission in dark theme."}}}},n={args:{theme:"dark",type:"secondary",children:"Cancel"},parameters:{docs:{description:{story:"Secondary button used for cancellation in dark theme."}}}},o={args:{theme:"dark",type:"primary",icon:"Google",children:"Sign in with Google"},parameters:{docs:{description:{story:"Primary button used for social login in dark theme."}}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    theme: "dark",
    type: "submit",
    children: "Sign in"
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button used for form submission in dark theme."
      }
    }
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    theme: "dark",
    type: "secondary",
    children: "Cancel"
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary button used for cancellation in dark theme."
      }
    }
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,h,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    theme: "dark",
    type: "primary",
    icon: "Google",
    children: "Sign in with Google"
  },
  parameters: {
    docs: {
      description: {
        story: "Primary button used for social login in dark theme."
      }
    }
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const x=["Primary","Secondary","Social"],j=Object.freeze(Object.defineProperty({__proto__:null,Primary:t,Secondary:n,Social:o,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{j as B};
