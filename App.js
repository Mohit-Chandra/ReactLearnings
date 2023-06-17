import React from "react";
import ReactDOM from "react-dom/client";

const headingObj = React.createElement("h1", {id: heading}, "Using React Elements");
const jsxHeading = <h1 id="heading">Using JSX</h1>;
console.log(jsxHeading);
console.log(headingObj);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

const spanEle = <span> Span Element </span>
const Title = () => (
    <h1 className="head" tabIndex="5"> 
        {spanEle}
        Mohit Welcomes JSX 
    </h1>
);

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