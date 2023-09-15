- What is a breakpoint in responsive Web design?
  the point at which the design layout changes

- What is the advantage of using a percentage (e.g. 50%) width instead of a fixed (e.g. px) width for a "column" class in a responsive layout?
  it caters to more device types

- If you introduce CSS rules for a smaller min-width after the styles for a larger min-width in your style sheet, the CSS rules for the smaller min-width will "win". Why is that?
  because rules that appear lower in the css style sheet take precidence

for "AND" use and(no comma)
@media screen and (min-width: 600px) and (orientation: landscape) {
body {
color: blue;
}
}

for 'OR' use a comma between queries
@media screen and (min-width: 600px), screen and (orientation: landscape) {
body {
color: blue;
}
}

'NOT' reverses the meaning of the entire media query. Therefore in this next example the text will only be blue if the orientation is portrait.
@media not all and (orientation: landscape) {
body {
color: blue;
}
}
