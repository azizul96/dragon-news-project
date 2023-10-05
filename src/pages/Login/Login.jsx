import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
    const {login} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()


    const handleLogin = e =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form);

        const email = form.get('email')
        const password = form.get('password')

        login(email, password)
        .then(result =>{
            console.log(result.user);
            navigate(location?.state ? location.state :'/')
        })
        .catch(error =>{
            console.log(error.message);
        })
    } 


    return (
        <div>
            <Navbar></Navbar>
            
                    <div className="mt-10">
                        <h1 className="text-3xl font-semibold text-center mb-5">Login your account</h1>
                        
                        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto px-5 py-10 shadow-2xl">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email address</span>
                                </label>
                                <input type="text" placeholder="Enter your email address" className="input input-bordered bg-gray-200" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="text" placeholder="Enter your password" className="input input-bordered bg-gray-200" name='password' />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-semibold">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6 p-0">
                                <button type='submit' className="btn btn-neutral">Login</button>
                            </div>
                            <p className=" text-center mt-5">
                            Don’t Have An Account ?  <Link to="/register" className=" link link-hover text-red-600 font-bold">Register</Link>
                            </p>
                            {/* <SocialLogin /> */}
                        </form>
                    </div>

        </div>
    );
};

export default Login;