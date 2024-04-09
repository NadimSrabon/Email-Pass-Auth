import React, { useContext } from 'react';
import { AuthContext } from './Components/AuthProvider/AuthProvider';


const Home = (data) => {

    const user = useContext(AuthContext)
    return (
        <div className='flex flex-row text-center justify-center items-center mt-72 text-3xl'>
        Welcome To Home
        </div>
    );
};

export default Home;