import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Test React Crud",
      act: 0,
      index: "",
      datas: [],
      showMe: false
    };
  }

  componentDidMount() {
    this.refs.name.focus();
  }

  inSubmit = i => {
    i.preventDefault();
    console.log("Try");

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if (this.state.act === 0) {
      //NewData
      let data = {
        name,
        address
      };
      datas.push(data);
    } else {
      //UpdateData
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({
      datas: datas,
      act: 0,
      showMe: false
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  inRemove = i => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  inEdit = i => {
    console.log("Edit");

    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: i,
      showMe: true
    });

    this.refs.name.focus();
  };

  inSave = () => {
    console.log("Save");

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let index = this.state.index;
    datas[index].name = name;
    datas[index].address = address;

    this.setState({
      datas: datas,
      act: 1,
      showMe: false
    });
  };

  changeTitle = () => {
    this.setState(console.log("click"));
  };

  // changeButton = () => {
  //   this.setState({ showMe: false });
  // };

  // changeButton2 = () => {
  //   this.setState({ showMe: true });
  // };

  // inShowing = () => {
  //   let inShow = this.state.showMe;
  //   if (inShow) {
  //     return this.testShow2();
  //   } else {
  //     return this.testShow();
  //   }
  // };

  render() {
    const divStyle = {
      color: "blue",
      padding: 32
    };

    const boxStyle2 = {
      color: "black",
      margin: "32px 32px 0px 80px ",
      padding: "32px 0px 32px 0px",
      width: "320px",
      align: "center"
    };

    let datas = this.state.datas;

    return (
      <div className="App">
        <div class="ui centered two column grid" style={divStyle}>
          <div class="column ui padded segment">
            <h2 class="iu header">{this.state.title}</h2>
            <form ref="myForm" className="myForm" class="ui form">
              <div class=" field">
                <input
                  type="text"
                  ref="name"
                  placeholder="First Name "
                  className="formField"
                />
              </div>
              <div class=" field">
                <input
                  type="text"
                  ref="address"
                  placeholder="Last Name"
                  className="formField"
                />
              </div>

              <button
                onClick={i => this.inSubmit(i)}
                className="myButton"
                class="ui button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div class="ui divided three column grid">
          <div class="row">
            {datas.map((data, i) => (
              <div
                class="column ui padded segment"
                key={i}
                onClick={this.changeTitle}
                style={boxStyle2}
              >
                <p>
                  {i + 1}. {data.name} {data.address}
                </p>
                <button
                  onClick={() => this.inRemove(i)}
                  className="myButton"
                  class="ui red button"
                >
                  Remove
                </button>
                <button
                  onClick={() => this.inEdit(i)}
                  className="myButton"
                  class="ui button"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
