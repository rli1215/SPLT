import './App.css';
import React from 'react';

const Separator = () => <hr />;

const HeroImage = <img src="" alt="My Banner"/>

const Projects = () => {
    const projects = [];

    for (let i=1;i<=10;i+=1) {
        projects.push(<a href="#" title={"Project"+i}>
            <img 
                src="" 
                alt={'project image' + i}
            />
            </a>,
            );
    }
    return (<React.Fragment>
        <div>My Projects</div>
        <div>{projects}</div>
        </React.Fragment>);
};

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
            <table id="namesTable">
                <tr>
                    <th><label asp-for="Name" class="control-label" id="name1">
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label></th>
                </tr>
                    <tr>
                        <td><input type="text" value={this.state.value} onChange={this.handleChange} /></td>
                    </tr>
                    <span asp-validation-for="Name" class="text-danger"></span>
            </table>
        </div>
        <input id="addInputBtn" type="button" value="+" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default function App() {
    return (
        <div className="App">
            {/* <HeroImage /> */}
            <Separator />
            <h1>SPLT</h1>
            <Separator />
            {<NameForm />}
            {/* <Projects />
            <Separator /> */}
        </div>
    );
}