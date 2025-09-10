import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      apiData: {},
    };
    console.log(this.props.name + "Child constructor called");
  }

  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/isowmyatechie111");
  //   const json = await data.json();
  //   console.log(json);
  //   this.setState({
  //     apiData: json,
  //   });
  //   console.log(this.props.name + "Child is mounting");
  // }

  componentDidMount() {
    this.state.timer = setInterval(() => {
      console.log("class comp interval");
    });
  }

  componentDidUpdate() {
    console.log("Child componnet did update called");
  }

  componentWillUnmount() {
    console.log("child demounting");
    clearInterval(this.state.timer);
  }
  render() {
    console.log(this.props.name + "Child render called");

    // const { name, location, contact } = this.props;
    const { count, count2 } = this.state;
    const { html_url, location, login } = this.state.apiData;
    return (
      <div className="user-card">
        <h2>Name: {login} </h2>
        <h3>Location: {location || "Chennai"}</h3>
        <h4>Contact: {html_url}</h4>

        {/* <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment
        </button>
        <button
          onClick={() =>
            this.setState({
              count2: this.state.count2 + 1,
            })
          }
        >
          Increment 2
        </button>
        <h5>Count: {count}</h5>
        <h5>Count 2: {count2}</h5> */}
      </div>
    );
  }
}

export default UserClass;
