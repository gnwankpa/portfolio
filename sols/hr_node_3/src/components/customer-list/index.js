import React  from "react";
import { useState, useEffect } from "react";
import "./index.css";

function CustomerList() {

  const CustomerAdd = (val) =>{
    if(val === ''){

    }else{
      setNewCustomerList(oldArray => [...oldArray, val])
      setCust('')
    }
  }

  const [newCustomerList, setNewCustomerList] = useState([]);
  const [newCust, setCust] = useState([]);
  


  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" value={newCust} onChange={(e)=>setCust(e.target.value)} />
        <button type="submit" className="ml-30" data-testid="submit-button" onClick={()=>CustomerAdd(newCust)}>Add Customer</button>

  
        
      </section>

      <ul className="styled mt-50" data-testid="customer-list">
          <li className="slide-up-fade-in" data-testid="list-item1" key="list-item1" >Customer</li>
          {
          newCustomerList?.length > 0 || newCust === '' ? (
            newCustomerList.map((customer, index) =>{
                  return <li className="slide-up-fade-in" data-testid="list-item1" key={index} >{customer}</li>
            })
            
          ) : (
            <></>
          )
        }
          
      </ul>
    </div>
  );
}

export default CustomerList