import React, { Component } from 'react'
import image2 from '../images/image2.png'
import web from '../images/web.png'
import ux from '../images/ux.png'
import mobile from '../images/mobile.png'
import facebookIcon from '../images/facebook.png'
import githubIcon from '../images/github.png'
import linkedinIcon from '../images/linkedin.png'
import bishoImage from '../images/bisho.png'

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
              <a href="https://www.linkedin.com/in/bisho-silwal-46717a8a/" target="_blank"><img src={linkedinIcon} height="30"/></a>
              <a href="https://github.com/bishosilwal" target="_blank"><img src={githubIcon} height="30"/></a>
              <a href="https://www.facebook.com/bisho.silwal" target="_blank"><img src={facebookIcon} height="30"/></a><br/>
              <button className="btn btn_primary mt-1">SEE MY WORK </button>
            </div>
          </div>
          <div className="col-6 text-right">
          </div>
        </div>
        <div className="row about-myself-row pt-5 mt-5" id="service">
          <div className="col-12">
            <h2 className="primary_color">WHAT SERVICE I CAN OFFER FOR YOU</h2>
          </div>
          <div className="col-12 pt-4 row justify-content-between">
            <div className="col-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-center primary_color">
                    <img src={web} height="100"/><br/>
                    Web Development
                  </h5>
                  <p class="card-text font-weight-light text-black-50">
                    Innovative technology solutions for real-world business challenges.
                    <br/> <br/> <br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-center primary_color">
                    <img src={mobile} height="100"/><br/>
                    Mobile App Development
                  </h5>
                  <p class="card-text font-weight-light text-black-50">
                   We specialize in creating mobile apps for Android, and iOS (iPhone and iPad).
                   <br/> <br/> <br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-center primary_color">
                    <img src={ux} height="100"/><br/>
                    UX/UI Design
                  </h5>
                  <p class="card-text font-weight-light text-black-50">
                    We provide best User experience (UX) design by creating products that provide meaningful and relevant experiences to users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row about-myself-row pt-5 mt-5" id="about">
          <div className="col-6 image-div d-flex justify-content-center">
            <div className="align-self-center">
              <img src={bishoImage}/>
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
        <div className="row pt-5 tech-stack-row mt-5">
          <div className="col-12">
            <h2 className="primary_color">TECHNOLOGY STACK I EXPERT AT </h2>
          </div>
          <div className="col-12 pt-4 row justify-content-between">
            <div className="col-3">
              <div class="card">
                <div class="card-body p-2">
                  <h5 class="card-title text-center primary_color">
                    Ruby
                    <p className="font-weight-light text-black-light">Rails </p>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body p-2">
                  <h5 class="card-title text-center primary_color">
                    Php
                    <p className="font-weight-light text-black-light">
                      Laravel
                    </p>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body p-2">
                  <h5 class="card-title text-center primary_color">
                    Javascript
                    <p className="font-weight-light text-black-light">Jquery, Reactjs</p>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body p-2">
                  <h5 class="card-title text-center primary_color">
                    Css
                    <p className="font-weight-light text-black-light">Bootstrap, MdBootstrap, Semantic UI</p>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-3 mt-3">
              <div class="card">
                <div class="card-body p-2">
                  <h5 class="card-title text-center primary_color">
                    Git
                    <br/> <br/>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-3 mt-3">
              <div class="card">
                <div class="card-body p-2">
                  <h5 class="card-title text-center primary_color">
                    Linux
                    <p className="font-weight-light text-black-light">Ubuntu</p>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-3 mt-3">
              <div class="card">
                <div class="card-body p-2">
                  <h5 class="card-title text-center primary_color">
                    Database
                    <p className="font-weight-light text-black-light">Mysql, Postgresql</p>
                  </h5>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row pt-5 mt-5 pb-5" id="contact">
          <div className="col-12">
            <h2 className="primary_color">CONTACT ME </h2>
            <p className="text-muted">If you need creative, energetic, problem solver and highly motivated developer for your project or company, please do contact me. I am available at part-time as well as fulltime. </p>
          </div>
          <div className="col-12 d-flex justify-content-between">
            <h5 className="text-muted">Mobile Number: +9779847555071</h5>
            <h5 className="text-muted">Email: aayussilwal@gmail.com </h5>
            <h5 className="text-muted">Address: Kathmandu, Nepal </h5>
          </div>
          <div className="col-12 ">
            <a href="https://www.linkedin.com/in/bisho-silwal-46717a8a/" target="_blank"><img src={linkedinIcon} height="30"/></a>
            <a href="https://github.com/bishosilwal" target="_blank"><img src={githubIcon} height="30"/></a>
            <a href="https://www.facebook.com/bisho.silwal" target="_blank"><img src={facebookIcon} height="30"/></a><br/>
          </div>
        </div>
      </div>
      )
  }
}
