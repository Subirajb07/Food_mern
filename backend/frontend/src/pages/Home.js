import {Link} from "react-router-dom";


function Home(){


return(

<div className="container">


<h1>
Food Order App
</h1>


<p>
Welcome to Online Food Ordering System
</p>


<Link to="/register">

<button>
Register
</button>

</Link>


<Link to="/login">

<button>
Login
</button>

</Link>


</div>


)

}


export default Home;