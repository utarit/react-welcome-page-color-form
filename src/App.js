import React, { Component } from 'react';
import FormCard from './FormCard';
import Result from './Result';
import logo from './logo.svg';
import './App.css';

const data = {};

class App extends Component {

  state = {
    numberOfForm: 1,
    images:{},
    showResult: false
  };



  renderFormGroups = () => {
    const no = this.state.numberOfForm;
    const groups = [];

    for(let i = 0; i < no; i++) {

      groups.push(
      <FormCard
        onRemoveButton={this.onRemoveButton}
        onInputChange={this.onInputChange}
        onImageChange={this.onImageChange}
        onLoadPalette={this.onLoadPalette}
        images={this.state.images}
        key={i}
        id={i}
      />
      );
    }

    return <div>{groups}</div>;
  }

  onRemoveButton = (e) => {
    e.preventDefault();
    const id = e.target.parentNode.id;
    delete data[id];
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }

  onLoadPalette = (backColor, textColor, id) => {
    if(!data.hasOwnProperty(id)) {
      data[id] = {};
    }

    const formData = data[id];
    formData['backgroundColor'] = backColor;
    formData['textColor'] = textColor;
  }



  onImageChange = (e) => {
    var id = e.target.parentNode.id;
    var preview = document.getElementById(`${id}-img`);
    var file    = document.getElementById(`${id}-img-input`).files[0];
    var reader  = new FileReader();
    const images = this.state.images;

    reader.addEventListener("load", function () {
      preview.src = reader.result;
      images[id] = reader.result;
      
    }, false);

    if (file) {
      reader.readAsDataURL(file);
      preview.style.width = '500px';
      this.setState({images});
    }
  
  }

  onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = e.target.parentNode.id ? e.target.parentNode.id : e.target.parentNode.parentNode.id;

    if(!data.hasOwnProperty(id)) {
      data[id] = {};
    }

    const formData = data[id];
    formData[name] = value;

  }

  onAddButton = (e) => {
    e.preventDefault()
    this.setState({numberOfForm: this.state.numberOfForm + 1});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({showResult: true});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Color Picker</h1>
        </header>
          <h1>Form </h1>
          
          <form onSubmit={this.onSubmit} id='form'>
            {this.renderFormGroups()}
            <button onClick={this.onAddButton}>Add Group</button>

            <button style={{marginTop: 50}} className="submit-button">Send!</button>
          </form>
          
          {this.state.showResult ? <Result data={data} /> : ''}
      </div>
    );
  }
}

export default App;
