import React from "react";
import UserClass from "./UserClass";

// const About = () => {

//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>This is the About Us page</p>
//       <UserClass name={"Vignesh"} loc={"Chennai"} con={"vicky@gmail.com"}/>
//     </div>

//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About Us page</p>
        <UserClass name={"Vignesh"} loc={"Chennai"} con={"vicky@gmail.com"} />
      </div>
    );
  }
}
export default About;
