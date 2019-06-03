import React, { Component } from 'react'

export default class Header extends Component{

  state = {
    scroll: false
  }
  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event)=>{
    if(window.scrollY > 10)
    {
      this.setState({scroll: true});
    }else{
      this.setState({scroll: false});
    }
  }

  getBgColor = () => {
    let scroll = this.state.scroll
    return scroll ? 'bg-white shadow' : '';
  }
  render(){
    const { scroll } = this.state
    return(
        <nav className={"navbar navbar-expand-lg navbar-light sticky-top "+ this.getBgColor()}>
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ABOUT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">PORTFOLIO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>

        </nav>
      )
  }
}
