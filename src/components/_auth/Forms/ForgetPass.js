import React from "react";
import classes from './ProfileForm.module.css';
import backgroundImage from '../../assets/OIP1.jpeg'; // Import your background image

const ForgetPass = () => {
  const formStyle = {
    backgroundImage: `url(${backgroundImage})`, // Set the background image
    // backgroundSize: 'cover', // Adjust the background size as needed
    // backgroundPosition:'center', // Adjust the background position as needed
  };

  return (
    <form className={`${classes.form}`} style={formStyle}>
      <div className={classes.control}>
        <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Reset Your Password</h2>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" required />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ForgetPass;
