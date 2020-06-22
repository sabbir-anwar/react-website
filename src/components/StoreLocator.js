import React, { Component } from "react";

class StoreLocator extends Component {
  state = {};
  render() {
    return (
      <section id="Store" class="Store">
        <div class="container">
          <div class="section-title">
            <h2>Store Locator</h2>
          </div>

          <div class="row content">
            <div class="col-lg-12 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img">
              <img src="assets/img/map-1.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StoreLocator;
