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
   <div className="main-div-container" >
     { showConfetti && (<Confetti width={width} height={height} numberOfPieces={showConfetti ? 300 : 0}/>)}
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
     <center className="main-heading">🌿 ఉగాది శుభాకాంక్షలు 🌿</center>
      <p style={{paddingTop:"20px",fontWeight:"bold"}}>✨ శుభ ఉగాది ✨</p>
      <p className="sub-text" >ఈ ఉగాది మీ జీవితంలో కొత్త ఆశలు, కొత్త ప్రారంభాలు తీసుకురావాలని కోరుకుంటున్నాను.
మీ ఇంటి నిండా ఆనందం, ఆరోగ్యం, ఐశ్వర్యం నిలవాలని ఆశిస్తున్నాను.</p>
      <p style={{width:"400px",paddingTop:"20px"}}>
                పచ్చడి లో ఉన్న ఆరు రుచుల లాగే,
జీవితంలో సంతోషం, బాధ, ఆశ్చర్యం, కోపం, భయం, ప్రేమ అన్నీ సమతుల్యంగా ఉండాలని కోరుకుంటున్నాను.


        </p>
      <p style={{paddingTop:"20px"}}>ఈ కొత్త సంవత్సరం మీకు విజయాలు, సంతోషం మరియు శాంతిని అందించాలి.
      </p>
      <p style={{paddingTop:"20px"}}> 🌸 మీకు మరియు మీ కుటుంబ సభ్యులకు శ్రీ పరాభవ నామ సంవత్సర ఉగాది 
      </p>
      <p style={{paddingTop:"20px"}}>— శుభాకాంక్షలు 🌸<br/>
      <span style={{color:"#f4f4f4",fontWeight:"bold",fontSize:"18px"}}>వంశీ మార్రిపూడి</span></p>
    </div>
  </div>
  )

}

export default App