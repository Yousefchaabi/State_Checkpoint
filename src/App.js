import React from "react";
import "./App.css";
import Photo from "./Assets/profile.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fuulName: "Youssef Chaàbi",
        bio: "I am a fullstack devloper with 2 years of experience in a big company.",
        profession: "FullStack Devloper at NAXXUM company.",
        show: false,
      },
      count: 0,
    };
    this.handleIncrease = () => {
      this.setState({ count: this.state.count + 1 });
    };
    this.handleShow = () => {
      this.setState({ show: !this.state.Person.show });
    };
  }
  /*  componentWillMount() {
    console.log("Component Will Mount");
  } */

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <img className="profile" src={Photo}></img>
            <h1>{this.state.Person.fuulName}</h1>
            <h3 className="bio">{this.state.Person.bio}</h3>
            <p>{this.state.Person.profession}</p>
            <h4>{this.state.count}</h4>
            <button className="show" onClick={this.handleIncrease}>
              Increase
            </button>
          </>
        ) : (
          <button onClick={this.handleShow} className="show">
            Show
          </button>
        )}
      </div>
    );
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }
}

export default App;
