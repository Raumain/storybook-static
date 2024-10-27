import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as t}from"./index-CcnH5Kt0.js";import{ae as r,af as d,ag as l}from"./index-CG05jJgb.js";import{D as o}from"./Divider.stories-BzBECx3J.js";import"./index-RYns6xqu.js";import"./iframe-C_f4wCrE.js";import"../sb-preview/runtime.js";import"./index-DAfSkmQi.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{of:o}),`
`,n.jsx(e.h1,{id:"divider",children:"Divider"}),`
`,n.jsx(e.p,{children:"Divider component is meant to separate informations to help the user making a choice."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The Divider component provides a visual separation between different sections of content. It supports both light and dark themes to maintain consistency with your application's design system."}),`
`,n.jsx(d,{}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(l,{}),`
`,n.jsx(e.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,n.jsx(e.h3,{id:"theme-selection",children:"Theme Selection"}),`
`,n.jsx(e.p,{children:"The divider supports two themes:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"light"}),": Suitable for light backgrounds"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"dark"}),": Suitable for dark backgrounds"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Light theme example
<Divider theme="light" />

// Dark theme example
<Divider theme="dark" />
`})}),`
`,n.jsx(e.h3,{id:"common-use-cases",children:"Common Use Cases"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Form Sections"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div>
  <h2>Personal Information</h2>
  {/* Personal information fields */}
  <Divider theme="light" />
  <h2>Contact Details</h2>
  {/* Contact information fields */}
</div>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Content Groups"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div>
  <section>
    <h3>Section 1</h3>
    <p>Content for section 1</p>
  </section>
  <Divider theme="light" />
  <section>
    <h3>Section 2</h3>
    <p>Content for section 2</p>
  </section>
</div>
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"List Separation"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div>
  <div>List item 1</div>
  <Divider theme="light" />
  <div>List item 2</div>
  <Divider theme="light" />
  <div>List item 3</div>
</div>
`})}),`
`,n.jsx(e.h2,{id:"technical-details",children:"Technical Details"}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface DividerProps {
  theme: 'light' | 'dark';
}
`})}),`
`,n.jsx(e.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Simple divider
<Divider theme="light" />

// With surrounding content
<div className="space-y-4">
  <section>Above content</section>
  <Divider theme="light" />
  <section>Below content</section>
</div>
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Consistent Spacing"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Maintain equal spacing above and below the divider"}),`
`,n.jsx(e.li,{children:"Use consistent spacing throughout your application"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Example with consistent spacing
<div className="space-y-6">
  <section>Content</section>
  <Divider theme="light" />
  <section>Content</section>
</div>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Theme Consistency"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Match the divider theme with your application's color scheme"}),`
`,n.jsx(e.li,{children:"Use the same theme for dividers within the same context"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Semantic Usage"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use dividers to create meaningful content groupings"}),`
`,n.jsx(e.li,{children:"Avoid overusing dividers which can lead to visual clutter"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure sufficient contrast between the divider and its background"}),`
`,n.jsx(e.li,{children:"Consider using semantic HTML elements for grouping content"}),`
`,n.jsx(e.li,{children:"Maintain proper heading hierarchy in divided sections"}),`
`]}),`
`,n.jsx(e.h2,{id:"common-patterns",children:"Common Patterns"}),`
`,n.jsx(e.h3,{id:"modal-sections",children:"Modal Sections"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div className="modal">
  <div className="modal-header">
    <h2>Modal Title</h2>
  </div>
  <Divider theme="light" />
  <div className="modal-content">
    {/* Modal content */}
  </div>
  <Divider theme="light" />
  <div className="modal-footer">
    {/* Modal actions */}
  </div>
</div>
`})}),`
`,n.jsx(e.h3,{id:"navigation-groups",children:"Navigation Groups"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<nav>
  <div>Main Navigation</div>
  <Divider theme="light" />
  <div>Secondary Navigation</div>
  <Divider theme="light" />
  <div>User Settings</div>
</nav>
`})}),`
`,n.jsx(e.h3,{id:"form-organization",children:"Form Organization"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<form>
  <section>
    <h3>Account Details</h3>
    {/* Account fields */}
  </section>
  <Divider theme="light" />
  <section>
    <h3>Preferences</h3>
    {/* Preference fields */}
  </section>
</form>
`})}),`
`,n.jsx(e.h2,{id:"design-considerations",children:"Design Considerations"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Visual Weight"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"The divider should be subtle enough not to compete with content"}),`
`,n.jsx(e.li,{children:"Should provide clear visual separation without being distracting"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Responsive Behavior"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Divider should span the full width of its container"}),`
`,n.jsx(e.li,{children:"Maintain consistent appearance across different screen sizes"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"Theme Integration"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Light theme should work well on light backgrounds"}),`
`,n.jsx(e.li,{children:"Dark theme should work well on dark backgrounds"}),`
`]}),`
`]}),`
`]})]})}function D(i={}){const{wrapper:e}={...t(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{D as default};
