<h1 align="center">Hi 👋, I'm Mohit</h1>
<h3 align="center">A passionate fullstack developer from India. I am currently working in Amazon as a SDE2.</h3>

- 🌱 I’m currently learning **React**

- 💬 Ask me about **Java, Spring, Spring Boot, AWS, GCP**

- 📫 How to reach me **mohitchandra1994@gmail.com**

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
 
