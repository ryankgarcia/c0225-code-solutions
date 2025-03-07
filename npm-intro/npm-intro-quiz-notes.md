# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  it is the worlds largest software registry previously called "Node Package Manager".
  its open source which allows developers to share and borrow packages.
- What is a package?
  bits of reusable code, in a directory, with one or more files in it.
- What are some other popular package managers?
  Yarn, PNPM
- How can you create a `package.json` with `npm`?
  using the command => npm init --yes, without adding --yes its interactive
- What is a dependency and how do you add one to a package?
  a dependency is package we install that we depend on while working on a project.
  npm install is how to add a dependency
- What happens when you add a dependency to a package with `npm`?
  it installs that package to our package.json, it will pull the code for that dependency inside the dependencies
- What is a devDependency and how do you add one to a package?
  devDependencies are the packages you need during development.
  npm --save-dev when doing npm install is how to add one to a package
- How do you define and run `npm` scripts? Why are these useful?
  define npm scripts inside of the scripts in our package.json file as an object.
  run the scripts inside the terminal by doing npm run (script name here).
  they're useful so that when coding in a team, everyone has access to the same formatting

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
