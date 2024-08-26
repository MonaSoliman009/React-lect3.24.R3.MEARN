import React from "react";

const Button = React.memo(
   function Button ({ theme, setTheme }){
    
        return (
            <>
                <button className="btn btn-success" onClick={() => {
                    setTheme((theme == "light") ? "dark" : "light")
                }}>toggle</button>
            </>
        );
    }
    


)
export default Button;
