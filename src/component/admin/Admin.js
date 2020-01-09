import React from 'react';
class Admin extends React.Component {
constructor(props){
  super(props);
this.state={
    Displayemail:'',
    Displaypassword:'',
    Displayname:'',
    Displayentries:'',
    Displayid:''
  }}
OnSomething = () => {
 fetch('http://localhost:3001/getsomething',{
    method: 'get', 
    headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
   email:this.state.Displayemail,
      password: this.state.Displaypassword,
       id:this.state.Displayid,
      entries: this.state.Displayentries
    })
  })
 //.then(response => response.json())
 .then(user => {
  if (user)
    console.log(user);
  else
    console.log("Nu merge");
  })
}

render() {
  return(
    <div className="">
              <input
                onClick={this.OnSomething}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Show Data"
              />
            </div>
    );
}}
export default Admin;