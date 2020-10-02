/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';

const Auth = () => (
  <div>
    <div className="auth-container">
      <div className="auth-box">
        <input
          className="userName-bar"
          type="text"
          placeholder="userName"
        />
        <input
          className="password-bar"
          type="text"
          placeholder="password"
        />
        <button
          type="button"
          className="btn"
        >
          Login!
        </button>
      </div>
    </div>
  </div>
);

export default Auth;
