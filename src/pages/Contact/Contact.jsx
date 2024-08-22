import { useNavigate } from "react-router-dom";

const Contact = () => {

      const navigate = useNavigate()



     const handleNavigate=()=>{

         navigate('/')
     }


    return (
        <>
           Contact Us 
           <button className="btn btn-primary" onClick={()=>{handleNavigate()}}>Navigate</button>
        </>
    );
}

export default Contact;
