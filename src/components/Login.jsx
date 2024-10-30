import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate=useNavigate();
    const [id,setid]=useState("");
    const [spinner,setspinner]=useState(false);
    const [password,setpassword]=useState("");
    const [ShippingAddress,setShippingAddress]=useState("")
    const [BillingAddress,setBillingAddress]=useState("")
    const [CustomerName,setCustomerName]=useState("")
    const [InvoiceNumber,setInvoiceNumber]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault();
        setspinner(true);
  
        try {
            sessionStorage.setItem("myid", id);
            sessionStorage.setItem("mypassword", password);
            sessionStorage.setItem("ShippingAddress", ShippingAddress);
            sessionStorage.setItem("BillingAddress", BillingAddress);
            sessionStorage.setItem("CustomerName", CustomerName);
            sessionStorage.setItem("InvoiceNumber", InvoiceNumber);
            console.log(sessionStorage.getItem("myid"));
    
            navigate("/home");
          
        } catch (error) {
            console.log(error);
        }
      }
    return (
        <section>


{/* Id: string;
Date: string;
InvoiceNumber: number;
CustomerName: string;
BillingAddress: string;
ShippingAddress: string;
GSTIN: string; */}

            <section className='mt-5' >
                <form onSubmit={handleSubmit} >
                    <div className="row  d-flex justify-content-center">

                        <div className="p-4 col col-lg-5 p-md-5 border rounded-3 bg-body-tertiary text-truncate">
                            <h1>  Register</h1>
                            <div className="form-floating mb-3 mt-2 text-truncate">
                                <input className="form-control" id="f1" placeholder=" ID" onChange={(e) => setid(e.target.value)} required />
                                <label for="floatingInput"> ID</label>
                            </div>

                            <div className="form-floating mb-3 mt-2 text-truncate">
                                <input className="form-control" id="f1" placeholder=" InvoiceNumber"  required />
                                <label for="floatingInput"> InvoiceNumber</label>
                            </div>


                            <div className="form-floating mb-3 mt-2 text-truncate">
                                <input className="form-control" id="f1" placeholder=" CustomerName" required />
                                <label for="floatingInput"> CustomerName</label>
                            </div>

                            <div className="form-floating mb-3 mt-2 text-truncate">
                                <input className="form-control" id="f1" placeholder=" BillingAddress" required />
                                <label for="floatingInput"> BillingAddress</label>
                            </div>

                            <div className="form-floating mb-3 mt-2 text-truncate">
                                <input className="form-control" id="f1" placeholder=" ShippingAddress" required />
                                <label for="floatingInput"> ShippingAddress</label>
                            </div>

                            <div className="form-floating mb-3 text-truncate">
                                <input type='password' className="form-control" id="f3" placeholder="Password" onChange={(e) => setpassword(e.target.value)} required />
                                <label for="floatingInput">Password</label>
                            </div>
                            <div id="statementafterclick" className='text-warning'></div>
                            <button className="w-100 btn btn-lg btn-primary" type="submit"   >{spinner == true ? (
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            ) : (
                                <p>Register</p>
                            )}</button>
                            <hr className="my-4" />
                            <div className='d-flex'>
                                <div><small className="text-body-secondary">If you does not have an account  </small></div>
                                <div className='ms-1'>
                                    <Link to={`/`} className="nav-link text-primary " aria-current="page">
                                        Register
                                    </Link>
                                </div>
                            </div>


                        </div>
                    </div>

                </form>
            </section>
        </section>
    )
}

