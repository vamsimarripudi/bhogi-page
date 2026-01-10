import {useState,useEffect} from "react"
import Confetti from "react-confetti"
import {useWindowSize} from "react-use"

import "./App.css"

const App = () => {
  const {width,height} = useWindowSize();
  const [showConfetti,setShowingConfetti] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
        setShowingConfetti(false)
    },10000)

    return () => clearTimeout(timer);
  },[]);

  return(
   <div className="main-div-container">
     { showConfetti && (<Confetti width={width} height={height} numberOfPieces={showConfetti ? 300 : 0}/>)}
     <center className="main-heading">భోగి శుభాకాంక్షలు</center>
     <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <p style={{paddingTop:"20px",fontWeight:"bold"}}>🔥 శుభ భోగి 🔥</p>
      <p className="sub-text" >ఈ భోగి మీ జీవితంలో పాత బాధలను కాల్చివేసి, కొత్త ఆశలను వెలిగించుగాక.</p>
      <p style={{width:"400px",paddingTop:"20px"}}>
        పాతదాన్ని అగ్నికి అర్పించి,
కొత్త ఆశలకు స్వాగతం పలుకుదాం.
సంతోషం మీ ఇంటిని నింపుగాక,
ఆరోగ్యం మీ జీవితాన్ని కాపాడుగాక,
విజయం మీ అడుగులను అనుసరించుగాక.
      </p>
      <p style={{paddingTop:"20px"}}>భోగి మంటలతో
దుఃఖాలు దహించబడాలి,
ఆనందం పూయాలి,
సంపద పెరగాలి.</p>
<p style={{paddingTop:"20px"}}>🌾 మీకు మరియు మీ కుటుంబానికి
ఆనందభరితమైన భోగి
🌾</p>
<p style={{paddingTop:"20px"}}>— శుభాకాంక్షలతో<br/>
<span style={{color:"#f4f4f4",fontWeight:"bold",fontSize:"18px"}}>వంశీ మార్రిపూడి</span></p>
     </div>
   </div>
  )

}

export default App