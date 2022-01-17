import {Link} from "react-router-dom"

export const Navbar=()=>{
    return(
      <div>
    <Link to="/login/home">Home</Link>
    <Link to="/jobs" style={{margin:"20px"}}>Jobs</Link>
      </div>
    )
    
}