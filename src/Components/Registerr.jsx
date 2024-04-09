import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';

const Registerr = () => {

    const {registerUser} = useContext(AuthContext)

    const [error , setError] = useState("");

    function handleRegister(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name,email,password,confirmPassword); 

        if(password.length<6){
            setError("Password Must Contain At Least SIX Characters ");
            return
        }
        else if(password !== confirmPassword){
            setError("Password Does Not Match Please Try Again")
            return

        }
        else if(!/[^((0-9)|(a-z)|(A-Z)|\s)]/.test(password)){
            console.log("abc");
            setError("Please Provide at least one special character");
            return
        }
        setError("")

        registerUser(email,password)
        .then(result => console.log(result.user))
        .catch(error => setError(error.message.split("/")[1]))

    }
    return (
        <div className='mt-6 mx-96 border-4 border-blue-100 rounded-2xl'>
            <div className='p-16 mx-40'>
                <form onSubmit={handleRegister} action="">
                    <div>
                        <p>Name</p>
                        <input type="text" placeholder="Type name" name='name' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <br />
                    <div>
                        <p>Email</p>
                        <input type="text" placeholder="Type email" name="email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <br />
                    <div>
                        <p>Password</p>
                        <input type="password" placeholder="Type Password" name="password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <br />
                    <div>
                        <p>Confirm Password</p>
                        <input type="confirmPassword" placeholder="Re Type password" name='confirmPassword' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <br />
                    <div>
                        <button className="btn w-full max-w-xs bg-cyan-700">Register</button>
                    </div>
                </form>
                {
                    error && <p className='text-2xl text-red-500 font-bold pt-5'>{error}</p>
                }
            </div>
        </div>
    );
};

export default Registerr;