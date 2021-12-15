import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {empData:[],empname:'', profession:'',phone:'',city:'',id:null};
    }
    componentDidMount(){
        const URL="http://localhost:3001/Employee"
        axios.get(URL)
        .then(res=>{
         this.setState({empData:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Empid</th>
                            <th>Emp name</th>
                            <th>AGE</th>
                            <th>GENDER</th>
                            <th>City</th>
                            <th>SALARY</th>
                            <th>Action</th>
                            </tr>
                    </thead>
                    <tbody>
                {this.state.empData.map((data) => {
          return (
<tr key={data.id}>
    <td>{data.id}</td>
    <td>{data.empname}</td>
    <td>{data.age}</td>
    <td>{data.gender}</td>
    <td>{data.city}</td>
    <td>{data.salary}</td>
    <td><Link to={`/editemp/${data.id}`} class="nav-link" ><button type="button" className="btn btn-primary ml-5" >Update</button></Link>
    <Link to="/deletemp" class="nav-link" ><button type="button" className="btn btn-primary ml-5" >Delete</button></Link></td>
    </tr>
          );})}
          </tbody>
          </table>
            </div>
        )
    }
}

export default Home
