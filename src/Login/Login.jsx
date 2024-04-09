import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser, googleLogin,facebookLogin } = useContext(AuthContext)

    function handleLogin(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    function handleGoogle() {
        googleLogin()
        .then(result => console.log(result.user))
        .catch(error => console.log(error.message))
    }

    function handleFacebook(){

        facebookLogin()
        .then(result => console.log(result.user))
        .catch(error => console.log(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold -translate-y-16">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password"
                                name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='mx-auto mb-3'>
                        <button onClick={handleGoogle} className="btn btn-success w-[200px] ">Google Login</button>
                    </div>
                    <div className='mx-auto mb-3'>
                        <button onClick={handleFacebook} className="btn bg-blue-200 w-[200px] ">Facebook Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;