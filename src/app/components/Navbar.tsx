import Link from "next/link"
export default function Navbar(){
    return(
       
     <div style={{fontWeight: "bold", fontSize: "21px", marginTop: "16px", marginBottom: "16px"}}>
     <ul style={{display: "flex", justifyContent: "space-between", marginLeft: "112px", marginRight: "112px",  listStyleType: "none", }}>
     <li style={{color:"rgb(234, 88,12)", fontSize:"28px", }}>Little <span  style={{color:"black", fontSize:"25px"}}>Fashion</span></li>
     <li><Link style={{textDecoration: "none" ,color:"rgb(234 88 12)" }} href="/">Home</Link></li>
     <li><Link style={{textDecoration: "none", color: "black"}} href="/about">About</Link></li>
     <li><Link style={{textDecoration: "none", color: "black"}} href="/contact">Contact</Link></li>
     </ul>
     </div> 
    )
}


