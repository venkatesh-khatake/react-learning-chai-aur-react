import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("black");
  return (
   <>
    <div
      style={
        {
          width:"100vw",
          height:"100vh",
          backgroundColor:color,
          display:"flex",
          // alignItems:"center",
          justifyContent:"center",
        }
      }
    >
      <div className="btns"
        style={{
          width:"100%",
          borderRadius:"25px",
          backgroundColor:"white",
          display:'flex',
          flexWrap:'wrap',
          justifyContent:"center",
          gap:'10px',
          padding:'10px',
          height:'40px',
          marginTop:'25px',
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin:"25px 50px"
          


        }}
      >
       <button
       onClick={()=> setColor('red')}
       style={{
        backgroundColor:"red",
        padding:" 5px 25px",
        borderRadius:"25px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                fontWeight:"700"


       }}
       >Red</button>
       <button
         onClick={()=> setColor('blue')}
       style={{
        backgroundColor:"blue",
        padding:" 5px 25px",
        borderRadius:"25px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                fontWeight:"700"


       }}
       >Blue</button>
       <button
              onClick={()=> setColor('yellow')}
       style={{
        backgroundColor:"yellow",
        padding:" 5px 25px",
        borderRadius:"25px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" ,
                fontWeight:"700"


       }}
       >Yellow</button>
       <button
       onClick={()=> setColor('green')}

       style={{
        backgroundColor:"Green",
        padding:" 5px 25px",
        borderRadius:"25px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                fontWeight:"700"


       }}
       >Green</button>
       <button
              onClick={()=> setColor('violet')}

       style={{
        backgroundColor:"Violet",
        padding:" 5px 25px",
        borderRadius:"25px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        fontWeight:"700"

       }}
       >Violet</button>
       
      </div>
    </div>
   </>
  )
}

export default App
