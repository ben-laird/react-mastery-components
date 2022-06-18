# Components

This is "chapter" 2 in my React mastery journey, focused on making components. Special thanks to Stephen Grider, from whose course I am learning React. See the course [here](https://www.udemy.com/share/101WcY3@ttelH1nM2n_aFyFKZUHlU9nbDts4nsfYHfm9mfvdWbsVMgOYOsy_Us16hVIUpcn1/). Midway through the course, I got very comfortable with React and JS, so much so that I started integrating new technologies and languages. I'm steadily going through my earlier projects and integrating them with the latest tech and the best practices, like TypeScript, Redux Toolkit, and React Final Form.  
The last "chapter" is [here](https://github.com/ben-laird/my-first-react-app/) if you'd like to start from the beginning.

## Purpose

The purpose of this react app is to introduce the concept of React components, a way to compartmentalize pieces of a React app, very similar to functions or classes from OOP. In fact, the components are written as functions, known as functional components. Rather on the nose, but it gets the job done.

## Development Steps

### Step 1: Follow Tutorial

The original, React-only app followed the tutorial to the letter, creating the same project structure and files. There is only one commit step mostly because there really only needed to be one commit step.

### Step 2: Migrate to TypeScript

I started with

- [Adding types to React/ReactDOM and TS support](https://github.com/ben-laird/react-mastery-components/commit/538ca44a2537a04fbdd66acbdaeddca52defd2d1) then
- [migrating my components to .tsx files](https://github.com/ben-laird/react-mastery-components/commit/75fa487e1a8ba546403ec45a1376b3863b50abb5).

I technically did both those steps at once, and the other way around; the method to this madness was that I wanted the experience of having the compiler yell at me for something instead of just following the tutorial. It's like a migratory version of test-driven-development. Call it compiler-tantrum-development. Migrating the React components to .tsx files *first* allows me to also not bloat my app with the `webpack.config.json` from the last project; I never included it this time because everything worked without it. I didn't know which builder I was using, so I just included it the first time. For context, I've been using [this guide](https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide) to convert my projects over.

### Step 3: Add Types

Lastly was the most important (and most fun) step in the migration process: adding types. Types are the main feature of TypeScript, and they add extra functionality to something that would otherwise be a standard JS file. The main implication is that now the compiler catches errors instead of the end user or your product. The type system can also function as built-in documentation; editors like VSCode (my personal favorite) hook into type definitions and provide autocomplete and hover information about your variables or other objects.

I added a `CommentDetailProps` type to the [`CommentDetail`](src/CommentDetail.tsx) component and an `ApprovalCardProps` type to, well, the [`ApprovalCard`](src/ApprovalCard.tsx) component. For the `CommentDetailProps` type, I looked at what props I was passing into the component and made a type for the `props` argument based on that. The component needed nothing more or less, so I made the types required and made sure not to allow any other arguments to be passed in. For the `ApprovalCard` component, I knew it needed to accept children as a prop and that I couldn't pass it anything else, like booleans or strings. I used a handy feature in VSCode that allows you to infer the type of a variable, parameter, etc by analyzing where it was declared and how it's used. After doing that, I pruned down some of the union types into something that only accepted child JSX components.

### Step 4: Dockerize

As an added bonus, this app is also fully dockerized! The command for starting the app in development mode can be found by looking in the [`package.json`](package.json) file, under the `scripts` heading. Instead of typing all that out, run

#### `npm run docker-dev`

instead.

## Create React App Readme

This time around, I decided to rename the CRA readme and just include it as a link. If you'd like to read it, you can find it [here](CRA-README.md).
