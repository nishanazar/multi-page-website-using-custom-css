import { MdOutlineComputer } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";

export default function Description(){
    return(
    <div style={{height: "350px", backgroundColor: "#f3f4f6", marginTop: "80px", display: "flex", justifyContent: "space-evenly"}}>
    <div style={{height: "420px", width: "560px"}}>
    <MdOutlineComputer style={{fontSize: "30px", marginTop: "40px"}}/>


    <h2 style={{fontSize: "30px", marginTop: "15px",marginBottom: "30px"}}>What we do</h2>
    <p>We believe God has called us with a purpose to equip local churches to use the web effectively by getting them set up with creative and functional websites they can use right away. We know that the average church doesn’t have a web developer on staff; It’s Pastors, lay people, youth leaders or the sound guy who is in charge of the church website. We also know by experience that getting it right is an arduous task. We partner with church leadership teams by giving them a simple, effective path to getting the message of their church to the local area and the world!</p>
    </div>

    <div style={{height: "450px", width: "560px"}} >
    <IoMdHeart style={{fontSize: "30px", marginTop: "40px"}}/>

    <h2 style={{fontSize: "30px", marginTop: "15px",marginBottom: "30px"}} >Why we do it</h2>
    <p>We believe God has called us with a purpose to equip local churches to use the web effectively by getting them set up with creative and functional websites they can use right away. We know that the average church doesn’t have a web developer on staff; It’s Pastors, lay people, youth leaders or the sound guy who is in charge of the church website. We also know by experience that getting it right is an arduous task. We partner with church leadership teams by giving them a simple, effective path to getting the message of their church to the local area and the world!</p>

    </div>
    </div>
    )
}


