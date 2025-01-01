import Cards from "../Cards/Cards";
import Report from "../Report/Report";
import Transactions from "../Transactions/Transactions";
import Budget from "../Budget/Budget";
import "./ContentMain.css";
import Subscriptions from "../Subscriptions/Subscriptions";
import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import Financial from "../Financial/Financial";

import React from "react";
const ContentMain = () =>{
    return(
        <div className="main-content-holder">
        <div className="content-grid-one">
          <Cards />
          <Transactions />
          <Report />
        </div>
        <div className="content-grid-two">
          <Budget />
          <div className="grid-two-item">
            <div className="subgrid-two">
             <Subscriptions />
             <Savings />

            </div>
          </div>
          <div className="grid-two-item">
            <div className="subgrid-two">
               <Loans />
               <Financial />

            </div>
          </div>
         
        </div>
        <div class="last-text">
        <p>Developed By Koushik Madaboni @2024</p>
       </div>
        </div>
       
        
    )
}
export default ContentMain