
import React,{useRef,useState} from "react";

const Account=()=>{
    const SurnameInputRef = useRef();
  const LastnameInputRef = useRef();
  const emailInputRef = useRef();

  // const [isLogin , setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
    const SubmitHandler = (event)=>{
       
        const enteredSurname = SurnameInputRef.current.value;
        const enteredLastname = LastnameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        setIsLoading(true);
        console.log(enteredSurname);
        console.log(enteredLastname);
        console.log(enteredEmail)
    }
    return(
        <>
            <div className="flex flex-wrap mb-4">
            <h2 className="text-2xl font-bold my-4">Accounts</h2>
            <h3 className="text-md font-semibold my-6">(Control Panel)</h3>
        </div>
        <div className="flex justify-center px-6">


        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={SubmitHandler}>
          <label htmlFor="Name" className="block text-sm font-medium leading-9 text-gray-900">
              Name:
              <div className="mt-2">
              <input
                type="text"
                id="Name"
                placeholder="Name"
                  required
                  ref={SurnameInputRef}
                className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
              />
              </div>           
            </label>
            <label htmlFor="Date" className="block text-sm font-medium leading-6 text-gray-900">
              Date of Birth:
              <div className="mt-2">
                  <input
                    type="Date"
                    id="lastName"
                    placeholder="D.O.B"
                    required
                    ref={LastnameInputRef}
                    className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
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
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6 px-3"
                />
              </div>
            </label>

            <div className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 mt-5">
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <button type="submit">Change Password</button>
                )}
            </div>
          </form>
        </div>
      </div>

        </>
    )
}
export default Account;