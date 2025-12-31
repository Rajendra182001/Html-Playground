import React from "react";

 const Practice =() => {

return(
    <div style={{display:"grid",gridtemplatecolumn:"250px 1fr",gap:"20px",margin:"20px",padding:"20px 10px"}}>
        
                <div style={{width:"100%",height:"100px",backgroundColor:"white"}}></div>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
     <div className="divs" style={{width:"100%", backgroundColor:"white",height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}><h1 style={{color:"black" ,display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>ji</h1></div>
    <div className="divs2" style={{width:"100%",backgroundColor:"grey",height:"50vh",display:"flex",justifyContent:"center",alignItems:"center"}}><h2>Hi</h2> </div>
    </div>
        <div style={{width:"100%",height:"100px",backgroundColor:"white"}}></div>
    </div>
    )
}
export default Practice