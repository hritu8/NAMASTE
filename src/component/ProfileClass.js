import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 0,
    };
  }
  componentDidMount() {} //best place to api call
  componentDidUpdate(prevProps, prevState) {} // update state like search text in func.. component
  componentWillUnmount() {} // this function will execute after render to other pages
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Profile Component </h1>
        <h2>Name:{this.props.name}</h2>
        <h2>Age:{this.props.age}</h2>
        <h2>count:{count}</h2>
        <button
          onClick={() =>
            this.setState({ count: count + 1, count1: count1 + 1 })
          }
        >
          Count
        </button>
      </div>
    );
  }
}

export default ProfileClass;
