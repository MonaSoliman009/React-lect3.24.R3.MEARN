import { useSearchParams } from "react-router-dom";

const About = () => {

    const [queryString]  = useSearchParams()
    console.log(queryString.get('search'));
    
    return (
        <>
           About Us 
        </>
    );
}

export default About;
