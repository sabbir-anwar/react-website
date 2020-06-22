import React, { Component } from "react";
import "../App.css";

export class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <header id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="logo-header d-flex">
                  <div className="logo mr-auto">
                    <a href="index.html">
                      <img src={"assets/img/logo.png"} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="nav-menu">
                  <ul className="ul-style">
                    <li className="col-md-3">
                      <a href="#header">Home</a>
                    </li>
                    <li className="col-md-3">
                      <a href="#products">Products</a>
                    </li>
                    <li className="col-md-3">
                      <a href="#Store">Store Location</a>
                    </li>
                    <li className="col-md-3">
                      <a href="#form-section">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
