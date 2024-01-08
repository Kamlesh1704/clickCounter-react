import {Component} from 'react'
class ClickCounter extends Component {
  state = {count: 0}
  clickhere = () => {
    this.setState(prevCount => ({count: prevCount.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">The Button has been clicked {count} times</h1>
        <p className="para">Click the button to increase the count</p>
        <button className="button" onclick={this.clickhere}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
