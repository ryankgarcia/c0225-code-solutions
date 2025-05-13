# css-responsive-layout-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a **breakpoint** in responsive Web design?
  the specific points at which a media query are introduced.
- What is the advantage of using a percentage (_e.g._ `50%`) width instead of a fixed (_e.g._ `px`) width for a "column" class in a responsive layout?
  using percentages means the layout will be responsive to the size of the viewport. using px will be the same across different view ports, while using percentages will be percentages relative to the size of the view port of the device on the web page.
- If you introduce CSS rules for a smaller `width` _after_ the styles for a larger `width` in your style sheet, the CSS rules for the **smaller** `width` will "win". Why is that?
  because if they're at the same specificity level it goes to source order. so whichever comes last is going to win

## Notes

A media query consists of:

1. a media type, which tells the browser what kind of media this code if for (ex: print or screen)
2. a media expression, which is a rule, or test that must be passed for the contained CSS to be applied
3. a set of CSS rules that will be applied if the test passes and the media type is correct

Here is an example:

@media screen and (width: 600px) {
body {
color: red;
}
}

To combine media features, you can use 'and'.

Here is an example:

@media screen and (min-width: 600px) and (orientation: landscape) {
body {
color: blue;
}
}

you could also comma separate queries using or logic

@media screen and (min-width: 600px), screen and (orientation: landscape) {
body {
color: blue;
}
}

The points at which a media query is introduced are known as breakpoints.

**Notes**
Use '&' when referencing a class that exists in a grouped selector (ex: when .col-sm-half is defined alongside .col)
Use '&' when applying modifiers or pseudo-classes

button {
background-color: black;
color: white;

&:hover {
background-color: white;
color: black;
cursor: pointer;
}
}
