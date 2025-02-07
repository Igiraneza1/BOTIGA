// Account.jsx
import React, { useState } from 'react';
import '../styles/account.css'

const Account = ({ShowAccount}) => {
  return (
    <div className='loginform'>
      <h2>Login</h2>
      <input type="text" value="" placeholder='Enter your username'/>
      <input type="password" value="" placeholder='Enter your password'/>
      <p>you are not a member <a href="">Register</a></p>
    </div>
    
    );
}
export default Account;