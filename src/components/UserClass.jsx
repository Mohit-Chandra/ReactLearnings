import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: "dummyName",
                location: "default",
                avatar_url: "http://dummy-photo.com"
            }
        };
        console.log("Inside Constructor");
    }

    async componentDidMount(){
        console.log("Child Component Mounted");
        const data = await fetch("https://api.github.com/users/Mohit-Chandra");
        const resJson = await data.json();
        this.setState({
            userInfo: resJson
        });
    }

    render() {
        console.log("Inside render");
        debugger;
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <h1> Name: {name}</h1>
                <button onClick={() => this.setState({
                    count: this.state.count+1,
                })}> Count Increase</button>
                <h2> Location: {location}</h2>
                <img src = {avatar_url} />
                <h3> Count is: {this.state.count} </h3>
            </div>
        );
    }
}

export default UserClass;