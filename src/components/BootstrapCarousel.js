import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
export class BootstrapCarousel extends Component {
  render() {
    return (
      <div>
        <section id="hero" class="d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 d-lg-flex flex-lg-column align-items-stretch order-1 order-lg-2 hero-img">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={"assets/img/product.png"}
                      alt=""
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={"assets/img/product.png"}
                      alt=""
                    />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={"assets/img/product.png"}
                      alt=""
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default BootstrapCarousel;
