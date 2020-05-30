import React from 'react';
import './App.css';
class Data extends React.Component{
    constructor(props){
      super(props);
      this.state={
        fields:{},
        errors:{}
      };
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
      let fields = this.state.fields;
      fields[e.target.name]=e.target.value;
      this.setState({
        fields
      });
    }
    handleSubmit(e){
      e.preventDefault();
      if(this.validateForm()){
        let fields={};
        fields["username"]="";
        fields["email"]="";
        fields["password"]="";
        fields["password2"]="";
        this.setState(
        {
          fields:fields
        }
        );
        alert("Form Submitted")
      }}
     validateForm(){
       let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["username"]) {
          formIsValid = false;
          errors["username"] = "Please enter your username.";
        }
       if(!fields["email"]){
         formIsValid= false;
         errors["email"] = "Email cant be blank";
       }
       if(typeof fields["email"] !== "undefined"){
          var emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if (!emailRegex.test(fields["email"])) {
            formIsValid = false;
            errors["email"] = "Please enter valid email-ID.";
          }
       }
       if(!fields["password"]){
         formIsValid= false;
         errors["password"] = "Password cant be blank";
       }
       if(typeof fields["password"] !== "undefined"){
         if(fields["password"].length < 6){
           formIsValid = false;
           errors["password"] = "Password length shall >6";
         }
       }
       if(!fields["password2"]){
         formIsValid = false;
        errors["password2"]="Password cant be blank";
       }
       if(fields["password2"] !== "undefined"){
         if(!fields["password2"] === fields["password"]){
           formIsValid = false;
           errors["password2"] = "Password does not  match"
         }
       }
        this.setState({
          errors: errors
        });
        return formIsValid;
     } 
     
    render(){
    return(
      <div className="container">
        <div className="header">
   <h1>Create Account</h1>
        </div>
        <form id="form" onSubmit={this.handleSubmit}>
          <div className="userName">
            <label>Username</label><br />
            <input type="text" placeholder="Username" name="username" id="userName" value={this.state.fields.username} onChange={this.handleChange}/>
            <div className="errorMsg">{this.state.errors.username}</div>
          </div>
          <div>
            <label>Email</label><br />
            <input type="email" name="email"placeholder="Email" value={this.state.fields.email} onChange={this.handleChange}/>
            <div className="errorMsg">{this.state.errors.email}</div>
          </div>
          <div>
            <label>Password</label><br />
            <input type="password" placeholder="Password" name="password" value={this.state.fields.password} onChange={this.handleChange}/>
           <div className="errorMsg">{this.state.errors.password}</div>
          </div>
          <div>
            <label>Password Check</label><br />
            <input type="password" name="password2" value={this.state.fields.password2} placeholder="Password" onChange={this.handleChange} />
           <div className="errorMsg">{this.state.errors.password2}</div>
          </div>
          <button>Submit</button>
          </form>
        
        </div>
    );
  }
  }

  export default Data;