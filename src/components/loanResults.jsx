import React, { Component } from "react";
import LoanData from "./LoanData";

class LoanResults extends Component {
  render() {
    let principal = this.props.principal;
    let period = this.props.period;
    console.log(principal, period);
    return (
      <div>
        <div className="heading" align="center">
          <h1>Loan Results</h1>
          <p>Visit Loan Provider sites/app for more detailed Information</p>
        </div>
        {this.props.data.map(d => (
          <LoanData key={d.id} loan={d} />
        ))}
      </div>
    );
  }
}

export default LoanResults;
