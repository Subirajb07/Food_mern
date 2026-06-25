import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Register(){


const navigate=useNavigate();


const [user,setUser]=useState({

name:"",
email:"",
password:""

});



const register=()=>{


axios.post(
"http://localhost:5000/api/register",
user
)
.then(res=>{


alert(res.data.message);


navigate("/login");


})


}




return(

<div className="container">


<h1>
Register
</h1>


<input

type="text"

placeholder="Name"

onChange={(e)=>

setUser({

...user,

name:e.target.value

})

}

/>



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


<button onClick={register}>

Register

</button>


</div>


)

}


export default Register;