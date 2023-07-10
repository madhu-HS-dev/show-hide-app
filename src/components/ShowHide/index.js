// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isDisplayed: true, isHide: false}

  onFirstName = () => {
    const {isDisplayed} = this.state
    if (isDisplayed === true) {
      this.setState({isDisplayed: false})
    } else {
      this.setState({isDisplayed: true})
    }
  }

  onLastName = () => {
    const {isHide} = this.state
    if (isHide === true) {
      this.setState({isHide: false})
    } else {
      this.setState({isHide: true})
    }
  }

  render() {
    const {isDisplayed} = this.state
    const {isHide} = this.state
    return (
      <div className="show-hide-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-container">
          <div className="first-name-container">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {isDisplayed ? null : <p className="first-name">Joe</p>}
          </div>
          <div className="first-name-container">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {isHide ? <p className="first-name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
