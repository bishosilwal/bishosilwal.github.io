import React, { Component } from 'react'

export default class Body extends Component{


  render(){
    return(
      <div className="container">
        <div className="row body-row">
          <div className="col-6 d-flex">
            <div className="align-self-center">
              <h5>Hey There</h5>
              <h2>I AM BISHO SILWAL </h2>
              <h4>CREATIVE FULL STACK WEB DEVELOPER</h4>

              <button className="btn btn_primary">SEE MY WORK </button>
            </div>
          </div>
          <div className="col-6 text-right">
            <img src="https://colorlib.com/preview/theme/breed2/img/banner/home-right.png"/>
          </div>
        </div>
        <div className="row about-myself-row">
          <div className="col-6">

          </div>
          <div className="col-6">
            <h2>ABOUT MYSELF </h2>
            <p>
              inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed. inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
              That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.
            </p>
            <button type="button" class="btn btn-primary mr-2">More Info</button>
            <button type="button" class="btn btn-danger">Resume</button>
          </div>
        </div>
        <div className="row about-myself-row">
          <div className="col-12">
            <h2>WHAT SERVICE I OFFER FOR YOU</h2>
          </div>
          <div className="col-6">
            <p>
              inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed. inappropriate behavior is often laughed off as “boys will be boys,” women face higher.
              That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.
            </p>
            <button type="button" class="btn btn-primary mr-2">More Info</button>
            <button type="button" class="btn btn-danger">Resume</button>
          </div>
        </div>
      </div>
      )
  }
}
