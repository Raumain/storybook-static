import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as o,af as r,ag as c}from"./index-CG05jJgb.js";import{B as l}from"./Button.stories-C6AzFIj5.js";import"./index-RYns6xqu.js";import"./iframe-C_f4wCrE.js";import"../sb-preview/runtime.js";import"./index-DAfSkmQi.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";/* empty css             */function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{of:l}),`
`,n.jsx(e.h1,{id:"button",children:"Button"}),`
`,n.jsx(e.p,{children:"The Button component provides a clickable element that can be used for actions or submissions. Button component with different themes and types."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The Button component is highly customizable with support for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Multiple themes (light/dark)"}),`
`,n.jsx(e.li,{children:"Different types (submit/primary/secondary)"}),`
`,n.jsx(e.li,{children:"Social media integration with icons"}),`
`,n.jsx(e.li,{children:"Flexible content through children props"}),`
`]}),`
`,n.jsx(r,{}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,n.jsx(e.h3,{id:"theme-usage",children:"Theme Usage"}),`
`,n.jsx(e.p,{children:"The button supports two themes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"light"}),": Suitable for dark backgrounds"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dark"}),": Suitable for light backgrounds"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Light theme example
<Button theme="light" type="primary">
  Sign up
</Button>

// Dark theme example
<Button theme="dark" type="primary">
  Sign up
</Button>
`})}),`
`,n.jsx(e.h3,{id:"button-types",children:"Button Types"}),`
`,n.jsx(e.p,{children:"Three types of buttons are available:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"submit"}),": Used for form submissions and primary actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"primary"}),": Used for main actions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"secondary"}),": Used for alternative or cancel actions"]}),`
`]}),`
`,n.jsx(e.h3,{id:"social-icons",children:"Social Icons"}),`
`,n.jsx(e.p,{children:"The button supports various social media icons:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Google"}),`
`,n.jsx(e.li,{children:"Facebook"}),`
`,n.jsx(e.li,{children:"Twitter"}),`
`,n.jsx(e.li,{children:"Apple"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Example with different social providers
<Button theme="dark" type="primary" icon="Facebook">
  Continue with Facebook
</Button>

<Button theme="dark" type="primary" icon="Apple">
  Sign in with Apple
</Button>
`})}),`
`,n.jsx(e.h2,{id:"technical-details",children:"Technical Details"}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface ButtonProps {
  theme: 'light' | 'dark';
  type: 'submit' | 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: 'Google' | 'Facebook' | 'Twitter' | 'Apple';
}
`})}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Submit button
<Button theme="dark" type="submit">
  Sign in
</Button>

// Secondary button
<Button theme="dark" type="secondary">
  Cancel
</Button>

// Social login
<Button theme="dark" type="primary" icon="Google">
  Sign in with Google
</Button>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Use consistent themes within the same context"}),`
`,n.jsx(e.li,{children:"Use submit type for form submissions"}),`
`,n.jsx(e.li,{children:"Provide clear and concise button text"}),`
`,n.jsx(e.li,{children:"Use appropriate icons for social login buttons"}),`
`,n.jsx(e.li,{children:"Maintain consistent spacing around buttons"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Example of form with primary and secondary buttons
<form onSubmit={handleSubmit}>
  {/* Form fields */}
  <div className="flex gap-4">
    <Button theme="dark" type="submit">
      Submit
    </Button>
    <Button theme="dark" type="secondary">
      Cancel
    </Button>
  </div>
</form>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure sufficient color contrast between button text and background"}),`
`,n.jsx(e.li,{children:"Provide descriptive text for screen readers"}),`
`,n.jsx(e.li,{children:"Maintain adequate touch target size"}),`
`,n.jsx(e.li,{children:"Use semantic HTML elements"}),`
`,n.jsx(e.li,{children:"Do not use button for navigation, use anchor tags instead"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`
## Common Patterns

### Form Submission
\`\`\`jsx
<Button theme="dark" type="submit">
  Create Account
</Button>
`})}),`
`,n.jsx(e.h3,{id:"action-buttons",children:"Action Buttons"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div className="flex gap-4">
  <Button theme="dark" type="primary">
    Save Changes
  </Button>
  <Button theme="dark" type="secondary">
    Discard
  </Button>
</div>
`})}),`
`,n.jsx(e.h3,{id:"social-login-group",children:"Social Login Group"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div className="flex flex-col gap-3">
  <Button theme="dark" type="primary" icon="Google">
    Continue with Google
  </Button>
  <Button theme="dark" type="primary" icon="Facebook">
    Continue with Facebook
  </Button>
</div>
`})})]})}function B(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{B as default};
