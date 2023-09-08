# css-flexbox-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the default `flex-direction` of a `flex` container?
  flex-start

- What is the default `flex-wrap` of a `flex` container?
  nowrap

- What axis do the `justify-content` properties work on?
  horizontal

- What axis do the `align-items` properties work on?
  vertically

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

<justify-content>: (options:)
flex-start; |ooo |
flex-end; | ooo|
center; | ooo |
space-between; |o o o|
space-around; | o o o |

<align-items>: (options:)
flex-start;
flex-end;
center;
baseline;
stretch;

needs a min-height: property if the image does not have height, which it usually doesnt, use value 100vh to take up the entire page vertically.

<flex-direction>: (options:)
row; -- items placed same direction as text
row-reverse; -- items placed opposite direction to text
column; -- items placed top to bottom
column-reverse; -- items placed bottom to top

<flex-wrap>: (options:)
nowrap;(default)
wrap;
wrap-reverse; -- both wrap and wrap reverse, items flow onto separate lines

<flex-flow>: (options:)
row wrap; <- combo example. use any combo of flex-direction and flex-wrap
~ Individual items: ~

<order>: number; -- orders the specified item depending what number value inputed

<align-self>: -- accepts same values as align-items

<flex-basis>: calc(100% / 6);
to make 6 items appear on each line

o o o o o o o <-- before

o o o o o o \
o / <-- after
