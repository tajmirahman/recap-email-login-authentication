import { useState } from 'react';
import auth from '../../firebase.init';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";


const Login = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const [showPassword,setShowPassword]=useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        setErrorMessage('')

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                navigate('/profile')
                setSuccess('Account Successfully Logged In')
            })
            .catch((error) => {
                // console.log(error.code);
                setErrorMessage(error.code);
            })

    }


    return (
        <div className='w-3/12 mx-auto my-10'>
            <h1 className='text-2xl text-center my-5'> Login Form</h1>
            <form onSubmit={handleLogin}>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type="email" name='email'
                        required
                        placeholder="email"
                    />
                </label>
                <label className="input validator my-5 relative">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <input
                        type={!setShowPassword ? 'text' : 'password'} name='password'
                        required
                        placeholder="password"
                    />

                    <div className='absolute right-4'>
                        <FaEye className='text-lg' />
                    </div>

                </label>

                <div className='mb-2'><a className="link link-hover">Forgot password?</a></div>

                <button className="btn bg-info">Submit</button>
            </form>

            {
                errorMessage && <div className='text-rose-600'>{errorMessage}</div>
            }
            {
                success && <div className='text-green-400'>{success}</div>
            }

        </div>
    );
};

export default Login;