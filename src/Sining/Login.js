import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contaxt/Authprovider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    const { loginWithEmailAndPass,continueWithGoogle} = useContext(AuthContext);
    const[error,setError] = useState();

    const googlelogin =() =>{
        const googleProvider = new GoogleAuthProvider;
        continueWithGoogle(googleProvider)
        .then(result=>{
            const user= result.user;
            console.log(user);
        })
        .catch(error=>{
            setError(error.message)
        })

    }


    const handleloginWithPass = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailAndPass(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            setError(error.message)
        })


        
       
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleloginWithPass} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                               <Link to={'/sining'}><h1>if you have no account <a href="#" className="label-text-alt link link-hover text-red-500">create a account</a></h1></Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>-----or-----</p>
						<div className="flex gap-4 justify-center pt-3 border  rounded">
							<p>
								<Link onClick={googlelogin}>
									<FaGoogle />
								</Link>
							</p>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;