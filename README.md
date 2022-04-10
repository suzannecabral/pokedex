# Pokedex

A mobile-friendly app to search and filter pokemon by type, version, move compatibility, and more.

## Deployment

https://pokedex-smoky.vercel.app/

## Todo

- [x] deploy on **vercel** ~~or netlify~~ and add link
- [x] add a UI framework (mui)
- [ ] Remove CRA boilerplate, add component placecholders
- [ ] thumbnail screen layouts in notebook & document here
- [ ] add basic list display in order, infinite scroll (load more when reach the end)
- [ ] tidier vercel url?

## Maybe Later:

- [ ] write an intro for medium
- [ ] interactive type chart?

## Packages

- [MUI](https://mui.com/)
- [emotion](https://emotion.sh/docs/introduction)
- [emotion/react](https://emotion.sh/docs/@emotion/react)

### MUI + Emotion

- powerful built in search bar
- good style out of the box, not too much config (this is a speed build for practice)

## Styling

- flat, bright, cartoony colors, primary is candy apple red (red/blue/yellow)
- dark mode
- mobile friendly - wide click areas
- dense data display (moves data)
- ? switchable style by generation (later)
- find icons for types or make graphics?

### Process

1. [MUI color picker](https://material.io/resources/color/#!/?view.left=0&view.right=0)

   a. Primary: Bright red, A 400 (this plays better with blue accents than deep orange A400)

   b. Secondary: Denim, Indigo 400

   c. Go back to A400 range for matching variety of type badge colors

2. Read about [MUI dark mode](https://mui.com/material-ui/customization/dark-mode/)
3. [MUI Color Generator](https://bareynol.github.io/mui-theme-creator/) to preview and tweak theme colors (dark mode was blinding) also generates the theme options for react in the editor

- primary: #ec404e
- secondary: #4b8bfb

## Writing

### Technical decisions

- What framework is installed?
- What do you need out of it? How is it suited to this project?
- What could be pitfalls? For the actual framework, and your experience/learning curve.
- What are the alternatives? Why do people like them?
- Would you pick something else given an expanded scope or timeline?
