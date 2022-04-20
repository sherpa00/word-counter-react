import React, { Component } from 'react';
import './App.css';

class InputTable extends Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onTextChange(e.target.value);
  }

  render() { 
    return (
      <p>ENTER SOME WORDS BELOW:<br></br>
      <textarea
        placeholder='type something.....'
        className='textarea'
        style={{width: '500px',border: '2px solid skyblue'}}
        onChange={this.handleTextChange}
        value={this.props.inputText}
      ></textarea>
      </p>
    );
  }
}

class ResultParagraph extends Component {
  constructor(props) {
    super(props);

    this.countWords = this.countWords.bind(this);
  }

  countWords() {
    const para = this.props.inputText;
    let wordCount = 0;
    let characterCount = 0;
    let match = para.match(/\S+/g);
    wordCount = match ? match.length : 0;
    characterCount = para.length;
    return [wordCount,characterCount]
  }

  render() { 
    const word = this.countWords()[0];
    const character = this.countWords()[1]
    
    const letter = (l) => {
      return l <= 0 ? "word" : "words"
    }

    return (
      <p>
        You have typed <b>{word} {letter(word)}</b> and <b>{character} {letter(character)}</b>.
      </p>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: ""
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(text) {
    this.setState({
      inputText: text
    })
  }


  render() { 
    return (
      <div style={{margin: "50px auto"}}>
        <h1 style={{textAlign: "center"}}>WORD COUNTER</h1>
        <InputTable
          onTextChange={this.handleTextChange}
          inputText={this.state.inputText}
        />
        <ResultParagraph
          inputText={this.state.inputText}
        />
      </div>
    );
  }
}
 
export default App;
 



