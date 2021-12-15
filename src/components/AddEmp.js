import React, { Component } from 'react'
import axios from 'axios';
import './addemp.css'
export class AddEmp extends Component {
    constructor(props){
        super(props);
        this.state = {empname:'', age:'',city:'',gender:'',salary:'',
    errors:{
        empname:'',
        age:'',
        city:'',
        gender:'',
        salary:''
    }};
    }
   
    handler=(event)=>{
        let {name,value}= event.target;
        this.setState({[name]: value});
        let{errors} = this.state;
        switch(name){
            case 'empname': errors.empname = value.length<4?'Please enter the name more than fours':'';
            break;
            case 'age':errors.age=value<18?'please enter valid age':'';
            break;
            case 'city':errors.city=value.length<4?'please enter valid city name':'';
            break;
            case 'salary':errors.salary=value.length>5?'':'please enter valoid salary';
            break;
            default:
                break;
        }
    }

    addEmployee=(event)=>{
        event.preventDefault();
        if(this.validate(this.state)){
        let formData={empname:this.state.empname, age:this.state.age,
        city:this.state.city, gender:this.state.gender,salary:this.state.salary};
        const URL="http://localhost:3001/Employee";
           axios.post(URL,formData)
        .then(res=> {
            axios.get(URL)
            .then(res=>{
            this.setState({empData:res.data,empname:'', age:'',city:'',gender:'',salary:''})
            alert("Data added successfully")
            })
        })
        .catch(err=>{
            console.log(err)
        })}
        else{
            alert("Fill all the fields")
        }
    }
    validate=(state)=>{
        let valid=true;
        Object.values(state).forEach((val)=> val.length == 0 && (valid=false));
        return valid;
    }

    render() {
        const {errors}=this.state;
        return (
            <div className="container-fluid ful" >
                <form className="container con m-5 " >
                <div className="form-group">
                    <div className="row">
                    <label className="col-md-4">Empname</label>
                    <input type="text" name="empname" value={this.state.empname} className="in" onChange={this.handler.bind(this)} required/>
                    </div>
                    <br/>{errors.empname.length>1?<span style={{color:"red"}}>{errors.empname}</span>:null}
                </div>
                <div className="form-group">
                    <div className="row">
                    <label className="col-md-4">age</label>
                    <input type="number" name="age" value={this.state.age}  className="in" onChange={this.handler.bind(this)}  required/>
                    </div>
                    <br/>{errors.age.length>1?<span style={{color:"red"}}>{errors.age}</span>:null} 
                </div>
                <div className="form-group">
                    <div className="row">
                    <label className="col-md-4">city</label>
                    <input type="text" name="city" value={this.state.city} className="in" onChange={this.handler.bind(this)}  required/></div>
                    <br/>{errors.city.length>1?<span style={{color:"red"}}>{errors.city}</span>:null}
                </div>
                <div class="form-group">
                        <div class="col-sm-6 col-sm-offset-3">
                            <label for="gender" class="control-label">Gender</label>

                            <label class="radio-inline ml-4">
                                <input type="radio" name="gender" value="Male" onChange={this.handler.bind(this)}/> Male
                            </label>

                            <label class="radio-inline ml-4">
                                <input type="radio" name="gender" value="Female" onChange={this.handler.bind(this)}/> Female
                            </label>
                        </div>
                    </div>
                <div className="form-group">
                    <div className="row">
                    <label className="col-md-4">salary</label>
                    <input type="text" name="salary" value={this.state.salary} className="in"  onChange={this.handler.bind(this)}  required/></div>
                    <br/>{errors.salary.length>1?<span style={{color:"red"}}>{errors.salary}</span>:null}
                </div>
                <input type="submit" className="btn btn-success ml-5" value="add"  onClick={this.addEmployee}/>
             
                </form>
                <div className="co container">
                <h2 className="h">Employee Details</h2>
            </div>
            </div>
            
        )
    }
}

export default AddEmp
