import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useContext,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    const [id, setid] = useState(sessionStorage.getItem("myid"));

    const [items, setitems] = useState([["item 1"," Item1 id","item2 Quantity"],["item 2"," Item2 id","item2 Quantity"]]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const itemname = document.getElementById("itemname").value;
        const itemid = document.getElementById("itemid").value;
        const price = document.getElementById("itemquantity").value;

        var arr = [ itemname, itemid, price ];

        setitems(old => [...old, arr]);

        console.log(items);


    }

    // const [password, setpassword] = useState(sessionStorage.getItem("mypassword"))
    return (
        <div>
            <Navbar />




            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                
                <div class="offcanvas-body border">
                <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title"> Hello {id}</h5>
                            
                        </div>
                    </div>
                            <div className='p-3 m-2'>
                                <h3>My History</h3>
                            </div>
                    <div class="card" >
                        
                            <div class="card-body">


                                <ul>
                                    {
                                        
                                        items.map((item,index)=>(
                                            <div>
                                                <h3>My Item--{index} </h3>
                                                <ul>
                                                <li>{item[0]}</li>
                                                <li>{item[1]}</li>
                                                <li>{item[2]}</li>
                                                </ul>
                                                
                                            </div>
                                            
                                        ))
                                    }
                                </ul>
                            </div>
                    </div>
                </div>
            </div>



            <div className="row  p-5 d-flex justify-content-center">
                <h2>Want to Add Items</h2>
                <div className="p-4 col col-lg-5 p-md-5 border rounded-3 bg-body-tertiary text-truncate">
                    <form onSubmit={handleSubmit}>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Item Name</label>
                            <input type="text" class="form-control" id="itemname" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Item Id</label>
                            <input type="text" class="form-control" id="itemid" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Price</label>
                            <input type="text" class="form-control" id="itemprice" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Quantity</label>
                            <input type="text" class="form-control" id="itemquantity" />
                        </div>

                        <div class="mb-3">
                            <h1>Total Price :  </h1>
                        </div>

                        <button class="btn btn-primary">Submit</button>

                    </form>
                </div>

            </div>



        </div>
    )
}
