import React, { Component } from 'react'
import axios from 'axios';
import './addemp.css'
export class EditEmp extends Component {
    constructor(props){
        super(props);
       this.id = this.props.match.params.id;        
        this.state = {empData:[],empname:'', age:'',city:'',gender:'',salary:'',
        errors:{
            empname:'',
            age:'',
            city:'',
            gender:'',
            salary:''
        }
    };
        this.client = axios.create({
            baseURL:"http://localhost:3001/Employee"
        })
    }
    componentDidMount=async()=>{
        try{
        
        const res = await this.client.get(`/${this.id}`);
        const data = res.data;
        this.setState({empname:data.empname, age:data.age, city:data.city, gender:data.gender, salary:data.salary,});
        }
        catch(err){
            console.log(err);
        }
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

    updateEmployee=async(event)=>{
        event.preventDefault();
        
            try{
        
        let formData={empname:this.state.empname, age:this.state.age,
            salary:this.state.salary, city:this.state.city, gender:this.state.gender};
            
        const resData = await this.client.put(`/${this.id}`,formData)
        const res = await this.client.get()
                    this.setState({empData:res.data,empname:'', age:'',salary:'',city:'',gender:''}) 
        alert("Employee updated successfully")
    
        }
            catch(err){
                console.log(err)
            }
    }
    
    render() {
           const {errors}=this.state;
        return (
            <div>
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
            <input type="submit" className="btn btn-success ml-5" value="add" onClick={this.addEmployee}/>
         
            </form>
            <div className="co container">
            <h2>Employee Details</h2>
        </div>
        </div>
        )
    }
}

export default EditEmp
