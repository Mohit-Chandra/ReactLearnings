<h1 align="center">Hi 👋, I'm Mohit</h1>
<h3 align="center">A passionate fullstack developer from India. I am currently working in Amazon as a SDE2.</h3>

- 🌱 I’m currently learning **React**

- 💬 Ask me about **Java, Spring, Spring Boot, AWS, GCP**

- 📫 How to reach out to me **mohitchandra1994@gmail.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/mohit-chandra-3b1ab457" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="mohit-chandra-3b1ab457" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> </p>

<p><img align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=mohit-chandra&show_icons=true&locale=en&layout=compact" alt="mohit-chandra" /></p>

# Basics 

> What is React ?

React is a free and open-source front-end JavaScript library for building user interfaces based on components.

> What is a React Element ?

React elements are plain objects, and are cheap to create. It is not a html element. It describes what we want to see on the screen.

> `React.createElement(tag, {props}, [childrens])`?

- Takes 3 params. 1st one is name of tag say h1,div. 2nd one is attribute attributes like id class. 3rd one takes array of elements i.e. childrens.

> React.createRoot() ?

`const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);`
Create a React root for the supplied container and return the root. The root can be used to render a React element into the DOM with render as root.render();

> Creating a nested div structure ?

``` /**
 * create a nested div using div1
 *  * <div id="parent">
 *      <div id="child1">
 *          <h1>I am  2 level nested heading </h1>
 *      </div>
 *  <div id="child2">
 *          <h1>I am  2 level nested heading </h1>
 *  </div>
 *</div> 
 */
 const nestedHead3 = React.createElement("h1", {id: "nestedheading1"}, "I am  h1 level nested heading");
 const nestedHead4 = React.createElement("h2", {id: "nestedheading2"}, "I am  h2 level nested heading");
 const headArray2 = [nestedHead3, nestedHead4];
 const childDiv2 = React.createElement("div", {id: "childDiv"}, headArray2);
 // Two divs as siblings
 const parentDiv = React.createElement("div", {id: "parentDiv"}, [childDiv, childDiv2]);
 const root2 = ReactDOM.createRoot(document.getElementById("root"));
 root2.render(parentDiv);
 ```
 > Difference between document.createElement and React.createElement ? 

- document.createElement returns a DOM element (for example a div or an h1). Whereas React.createElement returns an object that represents the DOM element.
- React.createElement() returns an object rather than a DOM element because this allows React to perform performance optimizations(such as the Virtual DOM).
- Virtual DOM is made up of react elements. They seem similar to HTML elements but they are JavaScript objects.
- Read more about [Virtual DOM here](https://www.geeksforgeeks.org/reactjs-virtual-dom/).

# Parcel

- Parcel is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration.
[Read More About Parcel Here](https://parceljs.org/features/development/).
> What is a Bundler ?

Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

> Commands for Parcel 

- Dev Build -> npx parcel index.html
- Prod Build -> npx parcel build index.html

# Notes
- Donot push node_modules, dist and .parcel_cache to git. They are generated when `npx parcel build index.html` is run on prod server.

 
> What is JSX ?

 - JSX is a way to create React elements with elegant significant.
 - JSX is transpiled into React Elements by Babel library.
 - When an element type starts with a lowercase letter, it refers to a built-in component like `<div> or <span>` and results in a string 'div' or 'span' passed to React.createElement. Types that start with a capital letter like `<Foo />` compile to `React.createElement(Foo)` and correspond to a component defined or imported in your JavaScript file. We recommend naming components with a capital letter. If you do have a component that starts with a lowercase letter, assign it to a capitalized variable before using it in JSX.
 - Since JSX compiles into calls to React.createElement, the React library must also always be in scope from your JSX code.
 
 # React Component

 - React Component is a Javacript function which returns JSX.
 - React Components must have a parent element, it cannot have multiple parent's at the same level.
 - To overcome the above said issue, we use `<React.Fragment> </React.Fragment>`. We can use empty tag `<> </> ` as the best alternative for `React.Fragment`.

 - Example below :-

 ```
 const HeadingComponent = () => (
    <>
    <div id="container">
        <Title />
        <h1 className="heading1">
            Functional Component
        </h1>
    </div>
    <div></div>
    </>
);

root.render(<HeadingComponent />)
```

 ### Food Ordering App

 > Layout

 - ```
 /**
 * 
 * Header
 *  -Logo
 *  - Nav Bar
 * Body
 *  - Search
 *  - Restaurant Container
 *  - Restaurant Card
 * Footer 
 *  - Links
 *  - Contact Us
 *  - Email
 */
 ```

# React Props

- Props are just an argument to a React Component.
- When we need to dynamically pass data to a component, we use props.
- We can use destructuring on the fly.

# Functional Components

- They are often referred to as “dumb” components.
- Functional components are “pure functions” that accept props as input and return UI code in the form of JSX.
- Functional components provide better code composition than classes.
- 

# React Hooks

- React hooks is a normal JS utility functions.

- useState() whenever a state variable is changed, react will re-render the components.

- The useState hook only takes one argument which is the value of the initial state. 
```const [state, setState] = useState(INITIAL_STATE); ```
> It returns an array with two items in it:
- The first item in this array is a variable that holds the current value of the state.
- The second item is a function for updating the state variable with the new value.

- React Fiber Reconcillation Algorithm 

- useEffect will be called after the component is rendered.

> common scenarios to use the useEffect hook with are mentioned below:

- Add an event listener for a button
- Fetch data from API when component mounts
- Perform an action when state or props change
- Clean up event listeners when the component unmounts.

> useEffect hook takes the two arguments mentioned below:

- It accepts the first argument as a callback function. By default, this function will run after every render but this depends upon the value of the second argument.
- The second argument is an optional dependencies array. **useEffect** hook checks this array to compare the previous and current value for those dependencies and then it runs the callback function but only if one of the dependencies has changed.

```useEffect(() => {
    // some code
  }, [someProp, someState]);
  ```

  - Use CORS plugin to avoid CORS issue.

  - Use Shimmer effect for better UI experience.

  - Whenever a state variable is changed, React will rerender the component. But if we use local state variables, React does not have knowledge whether to update the component or not.

  - If 2nd params is not given it is called only once. If dependency array param is given, it is called every time dependency changes.

  ### Best Practices For useState and useEffect

  - Do not use `useState` inside `if-else` or  loops.
  - Always use `useState` inside functions.

- As all of the necessary client-side structure for the site is already in place, once the SPA loads the server responses only need to include the data to fill in the gaps.
[Read More About SPA Here](https://www.magnolia-cms.com/blog/all-about-single-page-applications.html)

### React-DOM Router
- 





### React Class Based Component

> Why `super(props)` is used ?

- If we want to use this.props or simply this keyword inside the constructor, we need to pass the props coming from the parent class (React.Component in this case) in super.

-  If it doesn’t assign it to this context; how is it rendering inside the render method?
React assigns props on the instance right after calling the component constructor.
```//React under the hood
const instance = new DefinedComponent(props);
instance.props = props;```

- Let’s say we miss passing props to it, it will be challenging to debug if we initialize a method in the constructor and that specific method tries to access 'this' inside the function. We might not even notice it, and it can be challenging or difficult.

- Donot update state directly use ```this.setState({
    name: this.state.name+1,
});```

> Lifecycle Methods of Class Based Components :-

- Constructor -> Render -> ComponentDidMount

- In case of parent and child class relationship, it is as below :-

```
Inside parent Constructor
Inside Parent Render
Inside Child Constructor
Inside Child render
Child Component Mounted
Inside Parent ComponentDidMount
```

- We call API's in componentDidMount(). Why ?
Because it is a better UX as we load the component first then make a call fill the data needed and re-render the component. This will render the diff filling the API
data inside component.

- Two phases in React LifeCycle Diagram :-

1. Render Phase -> `Constructor()` then `Render()`.
2. Commit Phase -> `ComponentDidMount()`

- React batches parent and child class render phase and then calls commit phase. [Refer Here For React LifeCycle Diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

- Render phase looks for diff in the batch phase then manipulates the dom. This is why React is fast.


### Tailwind CSS

- tailwindcss gives you class names for every css that you want to use in your app.
- postcssrc is an indication to parcel to understands tailwind wherever it encounters tailwind.
- tailwind.config.css `content ` tells where tailwind can be used.
- To install tailwind css [Link](https://tailwindcss.com/docs/guides/parcel).
- Our JS files become overloadede with css class making code a bit ugly. This is the main disadvantage from code readability.
- 


