import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Construtor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User
        name={"Kumar Abhishek Functional"}
        location={"Jamshedpur"}
        contact={"@golukr"}
      /> */}
        <UserClass name={"First"} location={"Jamshedpur"} contact={"@golukr"} />
        <UserClass name={"Second"} location={"USA"} contact={"@muskelon"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User
//         name={"Kumar Abhishek Functional"}
//         location={"Jamshedpur"}
//         contact={"@golukr"}
//       /> */}
//       <UserClass
//         name={"Kumar Abhishek class"}
//         location={"Jamshedpur"}
//         contact={"@golukr"}
//       />
//     </div>
//   );
// };

/*
- Parent Constructor
- Parent Render
  - First Child Constructor
  - First Child Render

  - Second Child Constructor
  - Second Child Render

  <DOM UPDATED - IN SINGLE BATCH>
  - First Child ComponentDidMount
  - Second Child ComponentDidMount

-Parent ComponentDidMount
 */

export default About;
