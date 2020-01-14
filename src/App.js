import React, { Component } from "react";
import NavBar from "./components/Nav";
import Footer from "./components/Footer";
import LoanResults from "./components/loanResults";
import data from "./data/data.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loanData: data,
      filteredData: "",
      loanAmount: "",
      loanDuration: "",
      showComponent: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLoan = () => {
    let principal = this.state.loanAmount;
    let loanPeriod = this.state.loanDuration;
    let monthlyAmt;

    let newData = this.state.loanData.filter(loan => {
      return (
        principal >= parseInt(loan.minAmt) &&
        principal < parseInt(loan.maxAmt) &&
        loanPeriod >= parseInt(loan.minTenure) &&
        loanPeriod <= parseInt(loan.maxTenure)
      );
    });

    newData.map((int, index) => {
      let totalInt = (parseInt(int.monthlyInterest) / 100) * loanPeriod;
      let totalAmount = principal * (totalInt + 1);
      monthlyAmt = totalAmount / loanPeriod;
      newData[index].montlyPay = monthlyAmt.toFixed(2);
      return newData;
    });

    this.setState({
      showComponent: true,
      filteredData: newData
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { loanAmount, loanDuration } = this.state;
    return (
      <React.Fragment>
        <NavBar />

        <div className="container content">
          <div className="heading mt-5" align="center">
            <h1>Loan Calculator</h1>
            <p>Get Loan options from different Loan Providers</p>
          </div>

          <section id="calculator">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="LoanAmount">Desired Loan Amount</label>
                <input
                  type="number"
                  name="loanAmount"
                  className="form-control"
                  value={this.state.loanAmount}
                  onChange={this.handleChange}
                  placeholder="enter desired loan amount ..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="loanDuration">Desired Loan Duration</label>
                <select
                  value={this.state.loanDuration}
                  onChange={this.handleChange}
                  className="form-control"
                  name="loanDuration"
                  id="loanDuration"
                >
                  <option value="0">Select Loan Period</option>
                  <option value="1">1 month</option>
                  <option value="2">2 months</option>
                  <option value="3">3 months</option>
                  <option value="4">4 months</option>
                  <option value="5">5 months</option>
                  <option value="6">6 months</option>
                  <option value="7">7 months</option>
                  <option value="8">8 months</option>
                  <option value="9">9 months</option>
                  <option value="10">10 months</option>
                  <option value="11">11 months</option>
                  <option value="12">12 months</option>
                </select>
              </div>
              <div align="center" className="mt-4">
                <button
                  type="submit"
                  onClick={this.handleLoan}
                  className="btn btn-primary my-1"
                  disabled={loanAmount && loanDuration ? false : true}
                >
                  Get Loan Options
                </button>
              </div>
            </form>
          </section>

          <section id="loanResults">
            {this.state.showComponent && (
              <LoanResults data={this.state.filteredData} />
            )}
          </section>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
