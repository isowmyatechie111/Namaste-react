import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent is mounting");
  }
  componentWillUnmount() {
    console.log("Parent demounting");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        Hello from about component
        {/* <UserClass name="First" location="Chennai" contact="isowmyatechie" /> */}
        {/* <UserClass name="Second" location="Pondy" contact="ibalaaravindhan7" /> */}
        {/* <UserClass name="third" location="Pondy" contact="ibalaaravindhan7" /> */}
        <User />
      </div>
    );
  }
}

export default About;
