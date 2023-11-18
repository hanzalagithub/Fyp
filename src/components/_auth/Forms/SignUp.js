import React, { useState,useRef,useContext} from "react";
import AuthContext from "../../../store/auth-context";
import { Link, useNavigate } from "react-router-dom";
import signupImg from '../../assets/OIP.jpg';

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const SurnameInputRef = useRef();
  const LastnameInputRef = useRef();
  const emailInputRef = useRef();
  const PasswordInputRef = useRef();
  const confirmPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  // const [isLogin , setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const SubmitHandler = (event)=>{
    event.preventDefault();
    const enteredSurname = SurnameInputRef.current.value;
    const enteredLastname = LastnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = PasswordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef.current.value;
    

    if (enteredPassword !== enteredConfirmPassword) {
      console.log('password do not matched')
      return;
    }
    setIsLoading(true);
    console.log(enteredSurname);
    console.log(enteredLastname);
    // console.log(enteredEmail);
    // console.log(enteredConfirmPassword);

   

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxE2aYx4_AUme3oMhTZxyabxk2En1ioXE';
      
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = 'Authentication failed!';

            // Customize error handling for login, e.g., check for specific login errors
            // if (data.error && data.error.message) {
            //   if (data.error.message === 'EMAIL_NOT_FOUND') {
            //     errorMessage = 'Email not found. Please sign up.';
            //   } else if (data.error.message === 'INVALID_PASSWORD') {
            //     errorMessage = 'Invalid password. Please try again.';
            //   } // Add more cases as needed

            //   // You can also provide a more detailed error message based on the specific error codes returned by the API.
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        navigate('/Signin'); 
      })
      .catch((err) => {
        alert(err.message);
      });
      
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={signupImg} alt="Sign Up" />
        </div>

        <form onSubmit={SubmitHandler} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-3">
            <h2  className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
            <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">
              Surname:
              <div className="mt-2">
              <input
                type="text"
                id="surname"
                placeholder="Surname"
                  required
                  ref={SurnameInputRef}
                className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-4"
              />
              </div>           
            </label>
            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name:
              <div className="mt-2">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Lastname"
                    required
                    ref={LastnameInputRef}
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-4"
                  />
              </div>
            </label>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Username:
              <div className="mt-2">
                <input
                  type="email"
                  id="email"
                  placeholder="Username"
                  required
                  ref={emailInputRef}
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-4"
                />
              </div>
            </label>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password:
              <div className="mt-2">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  ref={PasswordInputRef}
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-4"
                />
              </div>
            </label>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password:
             <div className="mt-2">
             <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                autoComplete="current-password"
                required
                ref={confirmPasswordInputRef}
                className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-4"
              />
             </div>
            </label>
            <div className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                {isLoading ? (
                  <p>Signing up...</p>
                ) : (
                  <button type="submit">Sign Up</button>
                )}
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?
              <span className="font-semibold leading-6 text-green-600 hover:text-green-500">
                <Link to="/Signin">Sign In</Link>
              </span>
            </p>
      </form>
    </div>
  );
}
export default SignUp;