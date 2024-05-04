import { Component, OnInit } from '@angular/core';
// import { DoBootstrap } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  isloginvisible :boolean = false;
  isregistervisible : boolean = false;
  islogedIn : boolean = false;
signupusers : any[] = [];

constructor(){
  
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
  // to get signup data and save into localdata
  const localData = localStorage.getItem('signupUsers');
  if(localData != null){
    // convert the signupdata to string
    this.signupusers = JSON.parse(localData);
  }
  else{
    alert("data is null")
  }
}
signupObj : any ={
  username:'',
  email:'',
  password:''
};

loginObj : any = {
  email: '',
  password: ''
}

onRegister(){
  this.isregistervisible = true;
  this.signupusers.push(this.signupObj);

  //to store data in local storage we have to pass the key and array
  localStorage.setItem('signupUsers',JSON.stringify(this.signupusers));
  this.signupObj ={
    username:'',
    email:'',
    password:''
  };
}
onLoginmodal(){
  this.isloginvisible = true;
}
onLogin(){
  debugger;
  
  const isUserExist = this.signupusers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
  if(isUserExist != undefined){
    alert("login successfully");
    this.islogedIn = true;
  }
  else{
    alert("wrong credentials");
  }
}


}
