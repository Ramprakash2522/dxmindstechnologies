import React, { Component } from 'react';
import Header from './Header';
import edit from '../icons/edit.png';
import Delete from '../icons/Delete.png';
import star from '../icons/star.png'
class Landing extends Component {
    render() {
        const empList =[
            {
                name:"Syed",
                important:false,
                mobile_no:8895678931,
                email:'syed1@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678932,
                email:'syed2@gmail.com'
            },
            {
                name:"Syed",
                important:true,
                mobile_no:8895678933,
                email:'syed3@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678934,
                email:'syed4@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678935,
                email:'syed4@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678936,
                email:'syed5@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678937,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678938,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678939,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678910,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678911,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678912,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678913,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:true,
                mobile_no:8895678914,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678915,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678916,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678917,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678918,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678944,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678966,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678966,
                email:'syed@gmail.com'
            },
            {
                name:"Syed",
                important:false,
                mobile_no:8895678988,
                email:'syed@gmail.com'
            },


        ]
        return (
            <div>
                <Header />
                <div className='container mt-3'>
                    <div className="row ">
                        <div className="col-sm-6">
                            <div className="card custom-card">
                                <div className="card-body p-4">
                                    <input className='form-control mb-4' placeholder="Name" />
                                    <input className='form-control mb-4' placeholder="Mobile Number" />
                                    <input className='form-control mb-4' placeholder="email" />
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"  />
                                        <label class="form-check-label" for="flexCheckChecked">
                                               Employee (
                                                <img src={star } />
                                               )

                                        </label>
                                    </div>
                                    <button className="btn custom-button">Add</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card custom-card">
                                <div className="card-body  p-0">
                                   <table className="table w-100">
                                   <thead className="w-100 custom-head">
                                    <tr>
                                            <th>Name</th>
                                            <th>Mobile No</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="w-100">
                                        {
                                            empList.map((data,index)=>{
                                                return(
                                                    <tr>
                                                        <td>{data.name}
                                                        
                                                        {data.important&&<img src={star }/>}</td>
                                                        <td>{data.mobile_no}</td>
                                                        <td>{data.email}</td>
                                                        <td>
                                                            <img src={edit} />
                                                            <img src={Delete} />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                   </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Landing;