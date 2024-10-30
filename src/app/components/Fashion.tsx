export default function Fashion(){
    return(
   
        <div style={{height:"350px", marginTop:"40px", backgroundColor:"#FFFFFF", textAlign:"center", }}>
        <h1 style={{fontSize: "35px", marginBottom:"15px", fontWeight: "bold", fontFamily:"serif"}}>Our Fashion</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque iure, necessitatibus distinctio laborum <br />praesentium consectetur esse aspernatur laudantium </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "40px" , marginTop: "20px"}}>
        <img style={{height:"200px", borderRadius: "16px", }} src="https://cdn.pixabay.com/photo/2016/11/18/17/14/cloth-1835894_1280.jpg" alt="pic" />
        <img style={{height: "200px", borderRadius: "16px" }} src="https://cdn.pixabay.com/photo/2016/10/16/23/33/fashion-show-1746590_1280.jpg" alt="pic" />

        <img style={{height: "200px", borderRadius: "16px" }} src="https://cdn.pixabay.com/photo/2017/12/06/20/23/accessory-3002608_640.jpg" alt="pic" /> 
     </div>
    </div>
    )
} 