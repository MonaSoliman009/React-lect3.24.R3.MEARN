import { useContext, useState } from "react";
import { login } from "../../services/auth";
import { authContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        usernameError: null,
        passwordError: null
    })

    const {setAuth}= useContext(authContext)
   const navigate= useNavigate()

    const handleChange = (evt) => {

        console.log(evt.target);
        if (evt.target.name == "username") {

            setUser({ ...user, username: evt.target.value })//{  password:"",email:evt.target.value}
            setErrors({ ...errors, usernameError: (evt.target.value.length == 0) ? "username is Required" : "" })
        } else if (evt.target.name == "password") {

            setUser({ ...user, password: evt.target.value })
        }


        //switch(evt.target.name)

        //    setUser({...user,[evt.target.name]:evt.target.value})

    }

    const handleSubmit = async (evt) => {

        evt.preventDefault();

        if (!errors.usernameError && !errors.passwordError) {

            try {

                console.log(user);
                

                let res = await login(user)

                console.log(res);
                localStorage.setItem("token",res.data.token)
                setAuth(true)
                navigate('/')
            } catch (err) {

                toast.error("Login failed , try again",{
                    duration:2000
                })

                console.log(err);

            }




        }
    }

    return (
        <>

        <Toaster/>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">

                            <div className="mb-3">
                                <label htmlFor="" className="form-label">userName</label>
                                <input
                                    type="text"
                                    className={`form-control ${(errors.usernameError) ? "is-invalid" : "is-valid"}`}
                                    name="username"
                                    id=""
                                    aria-describedby="emailHelpId"
                                    value={user.username}

                                    onChange={(e) => { handleChange(e) }}

                                />

                                <p className="text-danger">{errors.usernameError}</p>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="password"
                                    id=""
                                    value={user.password}
                                    onChange={(e) => { handleChange(e) }}

                                />
                                <p className="text-danger">{errors.passwordError}</p>

                            </div>
                            <button className="btn btn-success">Submit</button>
                        </div>

                    </div>
                </div>


            </form>



        </>
    );
}

export default Login;
