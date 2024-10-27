import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as l,af as t,ag as a}from"./index-CG05jJgb.js";import{I as d}from"./InputField.stories-C7FEXVan.js";import"./index-RYns6xqu.js";import"./iframe-C_f4wCrE.js";import"../sb-preview/runtime.js";import"./index-DAfSkmQi.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";/* empty css             */function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:d}),`
`,n.jsx(e.h1,{id:"inputfield",children:"InputField"}),`
`,n.jsx(e.p,{children:"InputField component allows users to input data with various attributes like id, name, type, autoComplete, required, and label."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The InputField component is a flexible form input that supports various types of data entry. It comes with built-in support for:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Light and dark themes"}),`
`,n.jsx(e.li,{children:"Various input types (email, password, text, etc.)"}),`
`,n.jsx(e.li,{children:"Form integration attributes"}),`
`,n.jsx(e.li,{children:"Accessibility features"}),`
`,n.jsx(e.li,{children:"Automatic completion support"}),`
`]}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(a,{}),`
`,n.jsx(e.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,n.jsx(e.h3,{id:"basic-configuration",children:"Basic Configuration"}),`
`,n.jsx(e.p,{children:"The input field requires several key properties for proper functionality:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Basic email input
<InputField
  theme="dark"
  id="email"
  name="email"
  type="email"
  label="Email"
  required
/>

// Basic password input
<InputField
  theme="dark"
  id="password"
  name="password"
  type="password"
  label="Password"
  required
/>
`})}),`
`,n.jsx(e.h3,{id:"common-input-types",children:"Common Input Types"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Email Input"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<InputField
  theme="dark"
  id="email"
  name="email"
  type="email"
  autoComplete="email"
  label="Email address"
  required
/>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Password Input"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<InputField
  theme="dark"
  id="password"
  name="password"
  type="password"
  autoComplete="current-password"
  label="Password"
  required
/>
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Text Input"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<InputField
  theme="dark"
  id="username"
  name="username"
  type="text"
  autoComplete="username"
  label="Username"
  required
/>
`})}),`
`,n.jsx(e.h2,{id:"technical-details",children:"Technical Details"}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface InputFieldProps {
  theme: 'light' | 'dark';
  id: string;
  name: string;
  type: string;
  autoComplete?: string;
  required?: boolean;
  label: string;
}
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Proper Labeling"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Always provide clear, descriptive labels"}),`
`,n.jsx(e.li,{children:"Use concise but meaningful label text"}),`
`,n.jsx(e.li,{children:"Ensure labels properly associate with inputs"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Good
<InputField
  label="Email address"
  id="email"
  // ...other props
/>

// Good
<InputField
  label="Create password"
  id="new-password"
  // ...other props
/>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AutoComplete Support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use appropriate autoComplete values"}),`
`,n.jsx(e.li,{children:"Follow standard autoComplete conventions"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Email field
<InputField
  autoComplete="email"
  // ...other props
/>

// New password
<InputField
  autoComplete="new-password"
  // ...other props
/>

// Username
<InputField
  autoComplete="username"
  // ...other props
/>
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Form Organization"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Group related fields together"}),`
`,n.jsx(e.li,{children:"Maintain consistent styling"}),`
`,n.jsx(e.li,{children:"Use logical tab order"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<form>
  <InputField
    theme="dark"
    id="username"
    name="username"
    type="text"
    label="Username"
    required
  />
  <InputField
    theme="dark"
    id="password"
    name="password"
    type="password"
    label="Password"
    required
  />
</form>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Labels and ARIA"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Every input should have a label"}),`
`,n.jsx(e.li,{children:"Use proper HTML semantics"}),`
`,n.jsx(e.li,{children:"Include ARIA attributes when needed"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Keyboard Navigation"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure proper tab order"}),`
`,n.jsx(e.li,{children:"Support keyboard interactions"}),`
`,n.jsx(e.li,{children:"Maintain focus states"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Error States"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Provide clear error messages"}),`
`,n.jsx(e.li,{children:"Use appropriate ARIA attributes for errors"}),`
`,n.jsx(e.li,{children:"Ensure error states are announced to screen readers"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"common-patterns",children:"Common Patterns"}),`
`,n.jsx(e.h3,{id:"login-form",children:"Login Form"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const LoginForm = () => (
  <form>
    <InputField
      theme="dark"
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      label="Email"
      required
    />
    <InputField
      theme="dark"
      id="password"
      name="password"
      type="password"
      autoComplete="current-password"
      label="Password"
      required
    />
  </form>
);
`})}),`
`,n.jsx(e.h3,{id:"registration-form",children:"Registration Form"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const RegistrationForm = () => (
  <form>
    <InputField
      theme="dark"
      id="username"
      name="username"
      type="text"
      autoComplete="username"
      label="Choose username"
      required
    />
    <InputField
      theme="dark"
      id="email"
      name="email"
      type="email"
      autoComplete="email"
      label="Email address"
      required
    />
    <InputField
      theme="dark"
      id="new-password"
      name="password"
      type="password"
      autoComplete="new-password"
      label="Create password"
      required
    />
  </form>
);
`})}),`
`,n.jsx(e.h3,{id:"profile-form",children:"Profile Form"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const ProfileForm = () => (
  <form>
    <InputField
      theme="dark"
      id="full-name"
      name="fullName"
      type="text"
      autoComplete="name"
      label="Full name"
      required
    />
    <InputField
      theme="dark"
      id="phone"
      name="phone"
      type="tel"
      autoComplete="tel"
      label="Phone number"
    />
  </form>
);
`})}),`
`,n.jsx(e.h2,{id:"design-considerations",children:"Design Considerations"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Visual Feedback"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clear focus states"}),`
`,n.jsx(e.li,{children:"Consistent styling with theme"}),`
`,n.jsx(e.li,{children:"Proper spacing and alignment"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Responsive Design"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Appropriate input sizing"}),`
`,n.jsx(e.li,{children:"Mobile-friendly touch targets"}),`
`,n.jsx(e.li,{children:"Readable text at all screen sizes"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Theme Integration"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Consistent with overall design system"}),`
`,n.jsx(e.li,{children:"Proper contrast in both themes"}),`
`,n.jsx(e.li,{children:"Smooth theme transitions"}),`
`]}),`
`]}),`
`]})]})}function y(s={}){const{wrapper:e}={...i(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{y as default};
