import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as l,af as a,ag as o}from"./index-CG05jJgb.js";import{E as t}from"./ErrorMessage.stories-CfbGjl40.js";import"./index-RYns6xqu.js";import"./iframe-C_f4wCrE.js";import"../sb-preview/runtime.js";import"./index-DAfSkmQi.js";import"./index-D-8MO0q_.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{of:t}),`
`,e.jsx(n.h1,{id:"errormessage",children:"ErrorMessage"}),`
`,e.jsx(n.p,{children:"ErrorMessage component allows users to be aware that an error occurred."}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"The ErrorMessage component provides clear feedback to users when something goes wrong. It supports both light and dark themes to maintain visual consistency across your application."}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"usage-guidelines",children:"Usage Guidelines"}),`
`,e.jsx(n.h3,{id:"theme-selection",children:"Theme Selection"}),`
`,e.jsx(n.p,{children:"The error message supports two themes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"light"}),": Suitable for light backgrounds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dark"}),": Suitable for dark backgrounds"]}),`
`]}),`
`,e.jsx(n.h3,{id:"common-use-cases",children:"Common Use Cases"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Form Validation"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<form>
  <input type="email" />
  <ErrorMessage 
    theme="light"
    message="Please enter a valid email address."
  />
</form>
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"API Error Handling"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div>
  {error && (
    <ErrorMessage 
      theme="light"
      message={error.message}
    />
  )}
  <div>Content...</div>
</div>
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Field-Level Validation"})}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div className="form-field">
  <label>Username</label>
  <input type="text" />
  {hasError && (
    <ErrorMessage 
      theme="light"
      message="Username is already taken."
    />
  )}
</div>
`})}),`
`,e.jsx(n.h2,{id:"technical-details",children:"Technical Details"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`interface ErrorMessageProps {
  theme: 'light' | 'dark';
  message: string;
}
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Simple error message
<ErrorMessage 
  theme="light"
  message="An error occurred."
/>

// With dynamic message
<ErrorMessage 
  theme="light"
  message={errorState.message}
/>
`})}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clear and Concise Messages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use plain language"}),`
`,e.jsx(n.li,{children:"Explain what went wrong"}),`
`,e.jsx(n.li,{children:"Provide guidance on how to resolve the error"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`// Good examples
<ErrorMessage message="Password must be at least 8 characters long." />
<ErrorMessage message="This username is already taken. Please choose another." />

// Bad examples
<ErrorMessage message="Error 500" />
<ErrorMessage message="Invalid input" />
`})}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Appropriate Placement"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Display errors close to where they occurred"}),`
`,e.jsx(n.li,{children:"Maintain consistent positioning across similar contexts"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div className="form-field">
  <label>Email</label>
  <input type="email" />
  {emailError && (
    <ErrorMessage 
      theme="light"
      message={emailError}
    />
  )}
</div>
`})}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Timing and Display"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Show errors immediately after validation"}),`
`,e.jsx(n.li,{children:"Clear errors when the user begins correcting the issue"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const [error, setError] = useState('');

const handleInput = () => {
  // Clear error when user starts typing
  setError('');
};

return (
  <div>
    <input onChange={handleInput} />
    {error && <ErrorMessage theme="light" message={error} />}
  </div>
);
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Color and Contrast"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure error messages are clearly visible"}),`
`,e.jsx(n.li,{children:"Don't rely solely on color to indicate errors"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Screen Readers"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use appropriate ARIA attributes"}),`
`,e.jsx(n.li,{children:"Ensure error messages are announced to screen readers"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Focus Management"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Move focus to error message when appropriate"}),`
`,e.jsx(n.li,{children:"Maintain keyboard navigation"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"common-patterns",children:"Common Patterns"}),`
`,e.jsx(n.h3,{id:"form-submission-errors",children:"Form Submission Errors"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const FormExample = () => {
  const [submitError, setSubmitError] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      {submitError && (
        <ErrorMessage 
          theme="light"
          message={submitError}
        />
      )}
      {/* Form fields */}
    </form>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"field-validation",children:"Field Validation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const FieldExample = () => {
  const [fieldError, setFieldError] = useState('');

  const validateField = (value) => {
    if (value.length < 3) {
      setFieldError('Input must be at least 3 characters long');
    }
  };

  return (
    <div>
      <input onBlur={(e) => validateField(e.target.value)} />
      {fieldError && (
        <ErrorMessage 
          theme="light"
          message={fieldError}
        />
      )}
    </div>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"api-error-handling",children:"API Error Handling"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const ApiExample = () => {
  const [apiError, setApiError] = useState('');

  const fetchData = async () => {
    try {
      // API call
    } catch (error) {
      setApiError('Failed to load data. Please try again.');
    }
  };

  return (
    <div>
      {apiError && (
        <ErrorMessage 
          theme="light"
          message={apiError}
        />
      )}
      <button onClick={fetchData}>Load Data</button>
    </div>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"design-considerations",children:"Design Considerations"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Visual Hierarchy"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Error messages should be noticeable but not overwhelming"}),`
`,e.jsx(n.li,{children:"Use consistent styling across your application"}),`
`,e.jsx(n.li,{children:"Consider using icons to enhance visibility"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Responsive Behavior"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Ensure error messages are readable on all screen sizes"}),`
`,e.jsx(n.li,{children:"Maintain proper alignment in different layouts"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Message Content"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Be specific about what went wrong"}),`
`,e.jsx(n.li,{children:"Provide actionable solutions when possible"}),`
`,e.jsx(n.li,{children:"Use consistent tone and language"}),`
`]}),`
`]}),`
`]})]})}function b(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{b as default};
