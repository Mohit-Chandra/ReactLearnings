
import UserClass from "./UserClass";
import UserInfo from "./UserInfo";
import { Component } from "react";

class About extends Component {

    constructor(props){
        super(props);
        console.log("Inside parent Constructor");
    }

    componentDidMount(){
        console.log("Inside Parent ComponentDidMount");
    }

    render() {
        console.log("Inside Parent Render");
        return (
            <div>
                <h1>About</h1>
                <h2> Welcome to SwiggyFoods</h2>
                <UserInfo />
                <UserClass name={"Mohit Chandra"} location= {"Bangalore"}/>
            </div>
        );
    }
}

export default About;