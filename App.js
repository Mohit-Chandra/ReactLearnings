/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am  2 level nested heading </h1>
 *      </div>
 *</div>      
 */

 // To add a sibling say <h2> besides <h1>, pass an array of children in 3rd parameter
const nestedHead1 = React.createElement("h1", {id: "nestedheading1"}, "I am  h1 level nested heading");
const nestedHead2 = React.createElement("h2", {id: "nestedheading2"}, "I am  h2 level nested heading");
const headArray = [nestedHead1, nestedHead2];
const childDiv = React.createElement("div", {id: "childDiv"}, headArray);
// const parentDiv = React.createElement("div", {id: "parentDiv"}, childDiv);
/**
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

const heading1 = React.createElement("h1", {id:"heading1"}, "Hello World Using React");
const root2 = ReactDOM.createRoot(document.getElementById("root"));
//root2.render(heading1);
root2.render(parentDiv);
console.log(heading1);
console.log(parentDiv);