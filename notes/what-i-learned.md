# Personal Notes

## New Tools

- **SVGR Vite Plugin:** Converts SVG elements into React components.
- **Vitest & RTL Snippet Plugins:** Provides shortcuts for testing syntax and snippets.
- **Path Alias Setup (Vite & JSConfig):** Simplifies import paths using '@'.

## React Behaviors

### Handling Undefined Props

When a prop is not explicitly assigned in a component, React assigns it `undefined`. Props with values of `undefined` or `null` are ignored by React, meaning they won't render in the HTML and thus default HTML attributes will be used.

### Encoding URLs with Special Characters

Dynamic paths from third-party APIs may contain special characters (e.g., spaces, apostrophes). Use `encodeURI(string)` to properly encode these URLs.

Example:

```jsx
const path = encodeURI("women's clothing");
```

## Testing

### Mocking React Router Modules (`useOutletContext`, `useParams`)

To mock specific modules from `react-router-dom`:

**Single mock example:**

```js
vi.mock('react-router-dom', () => ({
  useOutletContext: vi.fn(),
}));
```

**Mocking with original modules preserved:**

```js
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useOutletContext: vi.fn(),
  };
});

useOutletContext.mockReturnValue({ propertyKey: value });
```

### Testing Custom Hooks with Fetch

Hooks returning data after async fetching cannot simply mock fetch with async/await. Instead, use `renderHook` and `waitFor` from React Testing Library.

Reference: [Testing Custom React Hooks with React Testing Library](https://vaskort.medium.com/how-to-unit-test-your-custom-react-hook-with-react-testing-library-and-jest-8bdefafdc8a2)

**Jest Example:**

```js
global.fetch.mockResolvedValue({
  json: jest.fn().mockResolvedValue(mockedData),
});
```

**Vitest Example:**

```js
globalThis.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedData),
  })
);
```

## Accessibility

### Screen Reader-Only Content

Include hidden contextual descriptions for screen readers:

```jsx
<span>
  <span className="sr-only">current cart items count</span>
  {itemCount}
</span>
```

CSS:

```css
.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
```

## CSS Modules

- Keep element-level styles (e.g., button, input) in global stylesheets.
- Limit CSS modules at the component level to class-based selectors to avoid unintended global effects.

## Referenced Tutorials

### HTML

- [Understanding `inputmode` - CSS-Tricks](https://css-tricks.com/everything-you-ever-wanted-to-know-about-inputmode/)

### JSX & React

- [Using PropTypes in React - freeCodeCamp](https://www.freecodecamp.org/news/how-to-use-proptypes-in-react/)
- [React Router Testing Guide - Dhiwise](https://www.dhiwise.com/blog/design-converter/a-complete-guide-to-react-router-testing-with-react)
- [Mastering `useOutletContext` - Dhiwise](https://www.dhiwise.com/blog/design-converter/mastering-useoutletcontext-for-better-app-performance)
- [Creating Custom Fetch Hooks - OpenReplay](https://blog.openreplay.com/building-a-custom-fetch-hook-in-react/)
- [Conditional Classes in React - Dhiwise](https://www.dhiwise.com/post/mastering-react-add-class-conditionally-a-comprehensive-guide)

### JavaScript

- [Using `groupBy` on Arrays - Saransh Kataria](https://www.wisdomgeek.com/development/web-development/javascript/using-groupby-on-an-array-of-objects-in-javascript/)

### CSS & Accessibility

- [Invisible Content for Screen Readers - WebAIM](https://webaim.org/techniques/css/invisiblecontent/#techniques)
- [Accessible Hamburger Menu - AcceDe Web](https://www.accede-web.com/en/guidelines/rich-interface-components/hamburger-menu/)

### Configuration

- [Fixing `__dirname` Errors in ES Modules - Ezekiel Oladejo](https://iamwebwiz.medium.com/how-to-fix-dirname-is-not-defined-in-es-module-scope-34d94a86694d)
- [Path Aliases with Vite, TypeScript, and VSCode - Deaville](https://deaville.dev/posts/path-alises-vite-typescript/)

### Testing

- [React Testing for Beginners: Start Here! by Programming with Mosh](https://youtu.be/8Xwq35cPwYg?si=YrT7fmE2AqwnfvnV)
- [`.toBeVisible()` vs. `.toBeInTheDocument()` - EpicWeb.dev](https://www.epicweb.dev/tobevisible-or-tobeinthedocument)
- [Testing React Router Hooks - Stack Overflow](https://stackoverflow.com/questions/58117890/how-to-test-components-using-new-react-router-hooks)
- [Vitest & RTL Setup Guide - Sujal](https://dev.to/web-sujal/vitest-react-testing-library-for-remix-react-router-v7-with-typescript-a-complete-setup-guide-4pop)
- [Mocking `useParams` with Vitest - Stack Overflow](https://stackoverflow.com/questions/74930606/mock-react-router-dom-useparams-hook-in-vitest)
- [Mock Custom Hook Return Values - Stack Overflow](https://stackoverflow.com/questions/60270013/how-to-mock-react-custom-hook-returned-value)
- [Mocking Fetch in Vitest - Steve Kinney](https://stevekinney.net/courses/testing/mocking-fetch-and-network-requests)
- [Mocking Data in React - Biplav Mazumdar](https://medium.com/@biplavmazumdar5/mocking-data-in-react-js-or-javascript-3f278ba7f550)
- [RTL `renderHook` Quick Start - DhiWise](https://www.dhiwise.com/blog/design-converter/testing-library-renderhook-a-quick-start-guide)
- [Testing React Hooks with RTL & Jest - Vasilis Kortsimelidis](https://vaskort.medium.com/how-to-unit-test-your-custom-react-hook-with-react-testing-library-and-jest-8bdefafdc8a2)
- [Testing `useParams` - Stack Overflow](https://stackoverflow.com/questions/76152743/how-to-test-react-component-with-useparams)
- [Module Mocking in Vitest](https://app.studyraid.com/en/read/11292/352294/module-mocking-techniques)
- [Typing Input with RTL UserEvent - Stack Overflow](https://stackoverflow.com/questions/72124232/how-to-get-react-testing-librarys-userevent-to-type-into-an-input)
