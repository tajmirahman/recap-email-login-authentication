import React from 'react';

const Profile = () => {
    return (
        <div className='flex justify-between items-center w-9/12 mx-auto mt-10'>
            <div className=''>
                <h1 className='text-2xl text-center'>Wellcome to Dashboard</h1>
            </div>
            <div className='text-end'>
                <button className='btn bg-red-300'>SignOut</button>
            </div>
        </div>
    );
};

export default Profile;