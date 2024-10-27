import{j as n}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as r}from"./index-CcnH5Kt0.js";import{ae as l,af as t,ag as c}from"./index-CG05jJgb.js";import{L as a}from"./Link.stories-Dn3OvYP6.js";import"./index-RYns6xqu.js";import"./iframe-C_f4wCrE.js";import"../sb-preview/runtime.js";import"./index-DAfSkmQi.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";/* empty css             */function s(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:a}),`
`,n.jsx(e.h1,{id:"link",children:"Link"}),`
`,n.jsx(e.p,{children:"Link component allows users to navigate to different URLs with customizable themes and content."}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The Link component is a flexible navigation element that supports:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Light and dark themes"}),`
`,n.jsx(e.li,{children:"Custom URL destinations"}),`
`,n.jsx(e.li,{children:"Custom content (text or elements)"}),`
`,n.jsx(e.li,{children:"Accessibility features"}),`
`,n.jsx(e.li,{children:"Consistent styling across themes"}),`
`]}),`
`,n.jsx(t,{}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{}),`
`,n.jsx(e.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,n.jsx(e.h3,{id:"basic-configuration",children:"Basic Configuration"}),`
`,n.jsx(e.p,{children:"The link component requires several key properties for proper functionality:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Basic navigation link
<Link
  theme="dark"
  href="/registration"
>
  Register for free
</Link>

// External link
<Link
  theme="light"
  href="https://example.com"
>
  Visit our partner
</Link>
`})}),`
`,n.jsx(e.h3,{id:"common-link-types",children:"Common Link Types"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Internal Navigation"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Link
  theme="dark"
  href="/dashboard"
>
  Go to Dashboard
</Link>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"External Links"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Link
  theme="dark"
  href="https://example.com"
>
  Visit External Site
</Link>
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Action Links"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Link
  theme="dark"
  href="/register"
>
  Sign up now
</Link>
`})}),`
`,n.jsx(e.h2,{id:"technical-details",children:"Technical Details"}),`
`,n.jsx(e.h3,{id:"props",children:"Props"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface LinkProps {
  theme: 'light' | 'dark';
  href: string;
  children: React.ReactNode;
}
`})}),`
`,n.jsx(e.h2,{id:"best-practices",children:"Best Practices"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Clear Link Text"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use descriptive text"}),`
`,n.jsx(e.li,{children:'Avoid generic phrases like "click here"'}),`
`,n.jsx(e.li,{children:"Make destination clear from text alone"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Good
<Link
  href="/pricing"
  theme="dark"
>
  View pricing plans
</Link>

// Good
<Link
  href="/signup"
  theme="dark"
>
  Create your account
</Link>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"URL Structure"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Use absolute URLs for external links"}),`
`,n.jsx(e.li,{children:"Use relative URLs for internal navigation"}),`
`,n.jsx(e.li,{children:"Ensure URLs are properly formatted"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// External link
<Link
  href="https://example.com"
  theme="dark"
>
  Visit Partner Site
</Link>

// Internal navigation
<Link
  href="/dashboard"
  theme="dark"
>
  Go to Dashboard
</Link>
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Theme Usage"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Match theme to surrounding context"}),`
`,n.jsx(e.li,{children:"Maintain consistent styling"}),`
`,n.jsx(e.li,{children:"Ensure proper contrast"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// Dark theme example
<div className="dark-background">
  <Link
    theme="dark"
    href="/login"
  >
    Sign in to your account
  </Link>
</div>
`})}),`
`,n.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Semantic HTML"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Uses proper ",n.jsx(e.code,{children:"<a>"})," elements"]}),`
`,n.jsx(e.li,{children:"Maintains proper heading hierarchy"}),`
`,n.jsx(e.li,{children:"Includes proper ARIA attributes when needed"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Keyboard Navigation"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Ensure proper tab order"}),`
`,n.jsx(e.li,{children:"Clear focus states"}),`
`,n.jsx(e.li,{children:"Proper keyboard interaction patterns"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Visual Design"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Sufficient color contrast"}),`
`,n.jsx(e.li,{children:"Clear visual indicators"}),`
`,n.jsx(e.li,{children:"Consistent with design system"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"common-patterns",children:"Common Patterns"}),`
`,n.jsx(e.h3,{id:"navigation-menu",children:"Navigation Menu"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const NavigationMenu = () => (
  <nav>
    <Link
      theme="dark"
      href="/home"
    >
      Home
    </Link>
    <Link
      theme="dark"
      href="/products"
    >
      Products
    </Link>
    <Link
      theme="dark"
      href="/contact"
    >
      Contact
    </Link>
  </nav>
);
`})}),`
`,n.jsx(e.h3,{id:"call-to-action-links",children:"Call to Action Links"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const CTASection = () => (
  <div>
    <Link
      theme="dark"
      href="/signup"
    >
      Get started
    </Link>
    <Link
      theme="light"
      href="/learn-more"
    >
      Learn more
    </Link>
  </div>
);
`})}),`
`,n.jsx(e.h3,{id:"footer-links",children:"Footer Links"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`const Footer = () => (
  <footer>
    <Link
      theme="dark"
      href="/privacy"
    >
      Privacy Policy
    </Link>
    <Link
      theme="dark"
      href="/terms"
    >
      Terms of Service
    </Link>
  </footer>
);
`})}),`
`,n.jsx(e.h2,{id:"design-considerations",children:"Design Considerations"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Visual Feedback"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Clear hover states"}),`
`,n.jsx(e.li,{children:"Distinct focus indicators"}),`
`,n.jsx(e.li,{children:"Consistent interaction patterns"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Responsive Design"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Appropriate touch targets"}),`
`,n.jsx(e.li,{children:"Readable at all sizes"}),`
`,n.jsx(e.li,{children:"Mobile-friendly spacing"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Theme Integration"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Consistent with design system"}),`
`,n.jsx(e.li,{children:"Proper contrast ratios"}),`
`,n.jsx(e.li,{children:"Smooth theme transitions"}),`
`]}),`
`]}),`
`]})]})}function v(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(s,{...i})}):s(i)}export{v as default};
