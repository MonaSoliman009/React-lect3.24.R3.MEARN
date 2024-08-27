// import { useNavigate } from "react-router-dom";
// import styles from './Contact.module.css'

import { useCounter } from "../../Hooks/useCounter";
// import { decreaseCounter, increaseCounter } from "../../store/slices/counter";

const Contact = () => {

 const [counter , decrease , increase] =  useCounter()

    // const navigate = useNavigate()



    // const handleNavigate = () => {

    //     navigate('/')
    // }
    // ffff

    return (
        <>
            <button className="btn btn-warning" onClick={decrease}>-</button>

            <h1>Counter is {counter}</h1>
            <button className="btn btn-success" onClick={increase}>+</button>


            {/* <h1 className={styles.test}>Contact Us </h1>
            <button className="btn btn-primary" onClick={() => { handleNavigate() }}>Navigate</button> */}
        </>
    );
}

export default Contact;
