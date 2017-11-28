import React, { Component } from 'react';
import logo from './logo.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './App.css';
import Panel1 from './Panel1'
import Panel2 from './Panel2'
import Panel3 from './Panel3'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPanel: 1,
      items: ['Click', 'To', 'Remove', 'An', 'Item']
    }
  }
  animateLeft() {
    this.removeItem(0)
    this.setState({ currentPanel: this.state.currentPanel - 1 })
  }
  animateRight() {
    this.removeItem(1)
    this.setState({ currentPanel: this.state.currentPanel + 1 })
  }

  renderPanel() {
    switch (this.state.currentPanel) {
      case 1:
        return (<Panel1 />)
      case 2:
        return (<Panel2 />)
      case 3:
        return (<Panel3 />)
      default:
        return (<Panel1 />)
    }
  }


  renderItems() {
    return this.state.items.map((item, i) => {
      return (
        <div key={item} className="item">
          {item}
        </div>
      );
    });
  }
  removeItem(i) {
    console.log('sss')
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionLeaveTimeout={1000}
              transitionEnterTimeout={1000}
            >
              {this.renderItems()}
              {this.renderPanel()}

              <a className="prev" onClick={() => this.animateLeft()}>
                &#10094;
            </a>
              <a className="next" onClick={() => this.animateRight()}>
                &#10095;
            </a>
            </ReactCSSTransitionGroup>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
