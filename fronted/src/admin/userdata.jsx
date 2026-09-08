import React , {useState , useEffect} from "react";
import  toast , {Toaster} from "react-hot-toast";
import "./userdata.css";


function Userdata(){

const [users , setUsers] = useState([]);

async function getusers(){
try{
    const response = await fetch("https://freedo-rentel-stma.vercel.app/api/users");
    const data = await response.json();
    setUsers(data);
    }catch(error){
        toast.error("Data not found....!")
    }
}


useEffect(function(){
    getusers();
},[]);



return(

<div className="table-container">
    <Toaster position="top-center"/>
    <h2>User Registration List</h2>

 {users.length === 0 ? (
    <p>Users not Registred</p>
 ) :(
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map(function (user, index) {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.number}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )} 
    
 

</div>
)



}

export { Userdata };