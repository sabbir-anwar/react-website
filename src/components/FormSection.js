import React, { Component } from "react";

class FormSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2016-01-15T01:06",
    };
  }
  render() {
    return (
      <section id="form-section" className="form-section">
        <div className="container">
          <div className="row">
            <div className="col-md-5 form-wrap">
              <div className="card form-style">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <input
                        type="date"
                        className="form-control"
                        ref={(date) => {
                          this.dateRef = date;
                        }}
                        value={this.state.date}
                        onChange={this._onDateChange.bind(this)}
                        placeholder="dd-mm-yyyy"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Number"
                      />
                    </div>
                  </form>
                  <div>
                    <button type="button" className="btn btn-active">
                      Login
                    </button>
                    <button type="button" className="btn btn-inactive">
                      Create Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  _onDateChange(e) {
    let state = this.state;
    state["date"] = e.target.value;
    // Or (you can use below method to access component in another method)
    state["date"] = this.dateRef.value;
    this.setState(state);
  }
}

export default FormSection;
