import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate=useNavigate();

    const handleSignOut=()=>{
        // console.log('yes')
        signOut(auth)
        .then(()=>{
            console.log('account success fully logout');
            navigate('/');
        })
        .catch((err)=>{console.log(err)})
    }

    return (
        <div className='flex justify-between items-center w-9/12 mx-auto mt-10'>
            <div className=''>
                <h1 className='text-2xl text-center'>Wellcome to Dashboard</h1>
            </div>
            <div className='text-end'>
                <button onClick={handleSignOut} className='btn bg-red-300'>SignOut</button>
            </div>
        </div>
    );
};

export default Profile;