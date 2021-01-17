import React, { Component } from 'react';
import Header from './Header';
import edit from '../icons/edit.png';
import Delete from '../icons/Delete.png';
import star from '../icons/star.png';

let empList = [
    {
        name: "Syed",
        important: false,
        mobile_no: 8895678931,
        email: 'syed1@gmail.com'
    },
    {
        name: "Syed",
        important: false,
        mobile_no: 8895678932,
        email: 'syed2@gmail.com'
    },
    {
        name: "Syed",
        important: true,
        mobile_no: 8895678933,
        email: 'syed3@gmail.com'
    },
    {
        name: "Syed",
        important: false,
        mobile_no: 8895678934,
        email: 'syed4@gmail.com'
    },
    {
        name: "Syed",
        important: false,
        mobile_no: 8895678935,
        email: 'syed4@gmail.com'
    },
    {
        name: "Syed",
        important: false,
        mobile_no: 8895678936,
        email: 'syed5@gmail.com'
    },
    {
        name: "Syed",
        important: false,
        mobile_no: 8895678937,
        email: 'syed@gmail.com'
    },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678938,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678939,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678910,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678911,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678912,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678913,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:true,
    //     mobile_no:8895678914,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678915,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678916,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678917,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678918,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678944,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678966,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678966,
    //     email:'syed@gmail.com'
    // },
    // {
    //     name:"Syed",
    //     important:false,
    //     mobile_no:8895678988,
    //     email:'syed@gmail.com'
    // },


]
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            mobile_no: "",
            important:false
        }
    }
    handleSubmit = () => {
        let obj = {
            name: this.state.name,
            important: this.state.important,
            mobile_no: this.state.mobile_no,
            email: this.state.email
        }
        empList.push(obj)

        this.setState({
            name: "",
            email: "",
            mobile_no: "",
            important:false
        })
    }
    render() {

        return (
            <div>
                <Header />
                <div className='container mt-3'>
                    <div className="row ">
                        <div className="col-sm-6">
                            <div className="card custom-card">
                                <div className="card-body p-4">
                                    <input className='form-control mb-4' placeholder="Name" value={this.state.name} onChange={(e) => {this.setState({ name: e.target.value})}} />
                                    <input className='form-control mb-4' placeholder="Mobile Number"value={this.state.mobile_no} onChange={(e) => this.setState({ mobile_no: e.target.value })} />
                                    <input className='form-control mb-4' placeholder="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                    <div class="form-check mb-4">
                                        <input class="form-check-input" type="checkbox"  id="flexCheckChecked" checked={this.state.important} onChange={(e, value)=>{
                                            this.setState({important: !this.state.important})
                                        }} />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Employee (
                                                <img src={star} />
                                               )

                                        </label>
                                    </div>
                                    <button className="btn custom-button" onClick={this.handleSubmit}>Add</button>
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
                                                (empList.reverse()).map((data, index) => {
                                                    return (
                                                        <tr>
                                                            <td>{data.name}

                                                                {data.important && <img src={star} />}</td>
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