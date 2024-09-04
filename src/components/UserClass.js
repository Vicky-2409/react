import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log("Child Constructor");

  }

  componentDidMount(){
    console.log("Child componentDidMount");

}

  render() {
    const { name, loc, con } = this.props;
    const { count, count2 } = this.state;
    console.log("Child Render");



    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <h1>Count2 = {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Name:{name} Class</h1>
        <h2>Loction:{loc}</h2>
        <h3>COntact:{con}</h3>
      </div>
    );
  }
}

export default UserClass;
