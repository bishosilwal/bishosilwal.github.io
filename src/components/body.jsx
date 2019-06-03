import React, { Component } from 'react'
import image2 from '../images/image2.png'

export default class Body extends Component{


  render(){
    return(
      <div className="container">
        <div className="row body-row">
          <div className="col-6 d-flex">
            <div className="align-self-center">
              <h5 className="text-black-50 font-weight-light">Hey There</h5>
              <h2 className='primary_color'>I AM BISHO SILWAL </h2>
              <h4 className="text-black-50 font-weight-light">CREATIVE FULL STACK WEB DEVELOPER</h4>

              <button className="btn btn_primary">SEE MY WORK </button>
            </div>
          </div>
          <div className="col-6 text-right">
            <img src="https://colorlib.com/preview/theme/breed2/img/banner/home-right.png"/>
          </div>
        </div>
        <div className="row about-myself-row pt-5">
          <div className="col-6 image-div d-flex justify-content-center">
            <div className="align-self-center">
              <img src="https://colorlib.com/preview/theme/breed2/img/banner/home-right.png"/>
            </div>
          </div>
          <div className="col-6 d-flex">
            <div className="align-self-center">
              <h5 className="text-black-50">ABOUT ME</h5>
              <h2 className='primary_color'>CREATIVE FULL STACK WEB DEVELOPER</h2>
              <p className="font-weight-light text-black-50">
                My name is Bisho Silwal and I am a freelance web developer who specializes in creating dynamic and
                beautiful web application using latest tech stack. I have been in the field for nearly 2 years, and have been loving every minute of it. Check out some of the links below to see what I’ve been up to lately
              </p>
            </div>
          </div>
        </div>
        <div className="row about-myself-row pt-5">
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
