import logo from './logo.svg';
import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import dompurify from 'dompurify';
import marked from 'marked';

const TITLE = "viewer.md";

class Render extends React.Component {
  render() {
    return ( <div id="preview" dangerouslySetInnerHTML={
        { __html: dompurify.sanitize(this.props.markdown) } // purify html via DOMPurify before setting html element to eliminate vulnerability against xss-attack
      } /> );
  }
}

class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Test  \n## Test  \n`Code test`  \n* Item 1\n* Item 2\n* Item 3  \n\n```python\ndef codeblock:\n  return true\n```  \n\n[Link](https://kurtchoi.dev)  \n> Blockquote  \n\n**Bold Text**  \n\n*Italics*  \n\n![Markdown](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png)"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div className="main">
        <div className="top">
          <span class="title">viewer.md</span>
          <hr/>
          <span class="sub-title">A simple Markdown viewer</span>
        </div>
        <div className="bottom">
          <div class="editor-div">
            <span class="div-desc"><i class="fas fa-edit"></i>Editor</span>
            <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
          </div>
          <div className="viewer-div" id="preview-div">
            <div class="div-desc"><i class="far fa-eye"></i>Viewer</div>
            { /* <div dangerouslySetInnerHTML={
        { __html: DOMPurify.sanitize(marked(this.state.input, { gfm: true })) }
      } /> */ }
            <Render className="render" markdown={marked(this.state.input, {gfm: true, breaks: true})} />
          </div>
        </div>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Markdown />
    </div>
  );
}

export default App;
