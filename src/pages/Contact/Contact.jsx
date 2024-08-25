// import { useNavigate } from "react-router-dom";
// import styles from './Contact.module.css'
import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../../store/slices/counter";
const Contact = () => {

    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()
    // const navigate = useNavigate()



    // const handleNavigate = () => {

    //     navigate('/')
    // }
    // ffff

    return (
        <>
            <button className="btn btn-warning" onClick={()=>{dispatch(decreaseCounter())}}>-</button>

            <h1>Counter is {counter}</h1>
            <button className="btn btn-success" onClick={()=>{dispatch(increaseCounter())}}>+</button>


            {/* <h1 className={styles.test}>Contact Us </h1>
            <button className="btn btn-primary" onClick={() => { handleNavigate() }}>Navigate</button> */}
        </>
    );
}

export default Contact;
