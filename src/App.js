import React, { Component } from 'react'
import Profile from './component/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      ShowMe: true,
      count :0
    }
  }
  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }
  render() {
    const count = this.state.count
    return (
      <div>
        <button type="button" className="btn btn-secondary button"
          onClick={() => this.setState({ ShowMe: !this.state.ShowMe })}>
          {this.state.ShowMe ? " Hide Me " : "Show Me"}</button>

        {
          this.state.ShowMe ? <Profile /> : null

        }
                 <small className="text-muted" style={{marginLeft:"48%"}}>Current Count : {count}</small>
      </div>
    )
  }
}
