import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/slices/language";

const Home = () => {

  const lang = useSelector((state)=>state.lang.language)
    const dispatch  = useDispatch()

  const handleChange=()=>{
    
    dispatch(changeLanguage((lang=="en")?"ar":"en"))
  }
  
  
    return (
        <>
         <h1 className="test">Home .... {lang}</h1>   

         <button className="btn btn-success" onClick={()=>{handleChange()}}>Change language</button>
        </>
    );
}

export default Home;
