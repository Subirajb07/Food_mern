import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Login(){


const navigate=useNavigate();


const [user,setUser]=useState({

email:"",
password:""

});




const login=()=>{


axios.post(

"http://localhost:5000/api/login",

user

)
.then(res=>{


if(res.data.message==="Login Successful")
{


navigate("/dashboard");


}

else{


alert(res.data.message);


}


})


}



return(


<div className="container">


<h1>
Login
</h1>



<input


type="email"

placeholder="Email"


onChange={(e)=>

setUser({

...user,

email:e.target.value

})

}

/>



<input

type="password"

placeholder="Password"


onChange={(e)=>

setUser({

...user,

password:e.target.value

})

}

/>


<button onClick={login}>

Login

</button>


</div>


)

}


export default Login;