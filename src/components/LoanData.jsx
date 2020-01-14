import React from "react";

const LoanData = ({ loan }) => {
  return (
    <a href={loan.url} target="_blank" rel="noopener noreferrer">
      <div className="row box">
        <div className="col-md-2">
          <div className="loan_logo">
            <img src={loan.loanImg} alt="quickcredit" />
          </div>
        </div>

        <div className="col-md-4">
          <h6>{loan.title}</h6>
          <p>
            <span className="fee">{loan.montlyPay} / Monthly Repayment</span>
          </p>
          <p>
            <span className="interest">{loan.monthlyInterest}% / Monthly</span>
          </p>
          <span className="badge badge-secondary">{loan.lowInterest}</span>
        </div>

        <div className="col-md-4">
          <h6>faq</h6>
          <ul className="list-unstyled">
            <li>{loan.faq[0]}</li>
            <li>{loan.faq[1]}</li>
          </ul>
        </div>

        <div className="col-md-2">
          <button className="btn btn-success btn-sm mt-4">Visit Site</button>
        </div>
      </div>
    </a>
  );
};

export default LoanData;
