import React, { Component } from 'react'
import axios from 'axios';
export class Deletemp extends Component {
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
    deleteEmployee=(id,event)=>{
        event.preventDefault();
        
        const URL="http://localhost:3001/Employee";
        axios.delete(`${URL}/${id}`)
        // fetch(`${URL}/${id}`,{
        //     method:"DELETE"
        // })
        .then(res=> {
            axios.get(URL)
            .then(res=>{
            this.setState({empData:res.data,empname:'', profession:'',phone:'',city:''})
            })
        })
            
            // fetch(URL)
            // .then(res=>res.json())
            // .then(data=>{
            //     this.setState({empData:data,empname:'', profession:'',phone:'',city:''})
            // })
    
    }
    render() {
        return (
            <div>
                 <table className="table table-dark">
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
    <td>
    <button type="button" className="btn btn-primary ml-5" onClick={this.deleteEmployee.bind(this,data.id)}>Delete</button></td>
    </tr>
          );})}
          </tbody>
          </table> 
            </div>
        )
    }
}

export default Deletemp
