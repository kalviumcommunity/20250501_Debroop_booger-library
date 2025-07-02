import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/home');
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">BOOGER</h1>
        <p className="login-subtitle">Sign in to your account</p>
        <form className="login-form" onSubmit={handleSignIn}>
          <label htmlFor="email" className="login-label">Email</label>
          <div className="login-input-wrapper">
            <span className="login-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
              	<defs>
              		<clipPath id="clipPath5809449315">
              			<path d="M0 0L16 0L16 16L0 16L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
              		</clipPath>
              	</defs>
              	<g clip-path="url(#clipPath5809449315)">
              		<path d="M1.33333 -0.666667L12 -0.666667Q12.8261 -0.666667 13.4131 -0.0797379Q14 0.507191 14 1.33333L14 9.33333Q14 10.1595 13.4131 10.7464Q12.8261 11.3333 12 11.3333L1.33333 11.3333Q0.507191 11.3333 -0.0797377 10.7464Q-0.666667 10.1595 -0.666667 9.33333L-0.666667 1.33333Q-0.666667 0.507191 -0.0797378 -0.0797378Q0.507191 -0.666667 1.33333 -0.666667ZM1.33333 0.666667Q1.05948 0.666667 0.863071 0.863071Q0.666667 1.05948 0.666667 1.33333L0.666667 9.33333Q0.666667 9.60719 0.863071 9.8036Q1.05948 10 1.33333 10L12 10Q12.2739 10 12.4703 9.8036Q12.6667 9.60719 12.6667 9.33333L12.6667 1.33333Q12.6667 1.05947 12.4703 0.863071Q12.2739 0.666667 12 0.666667L1.33333 0.666667Z" fill-rule="nonzero" transform="matrix(1 0 0 1 1.33333 2.66667)" fill="rgb(156, 163, 175)"/>
              		<path d="M13.8795 -0.382308C13.6683 -0.683939 13.2527 -0.757296 12.951 -0.546155L6.66667 3.8529L0.382308 -0.546155C0.080678 -0.757296 -0.335013 -0.683939 -0.546155 -0.382308C-0.757296 -0.080678 -0.683939 0.335013 -0.382308 0.546155L6.28436 5.21282Q6.3684 5.27165 6.46624 5.30249Q6.56408 5.33333 6.66667 5.33333Q6.76925 5.33333 6.86709 5.30249Q6.96493 5.27165 7.04897 5.21282L13.7156 0.546155C14.0173 0.335013 14.0906 -0.0806781 13.8795 -0.382308Z" fill-rule="evenodd" transform="matrix(1 0 0 1 1.33333 4)" fill="rgb(156, 163, 175)"/>
              	</g>
              </svg>

            </span>
            <input type="email" id="email" placeholder="Enter your email" className="login-input" />
          </div>
          <label htmlFor="password" className="login-label">Password</label>
          <div className="login-input-wrapper">
            <span className="login-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
              	<defs>
              		<clipPath id="clipPath1103293336">
              			<path d="M0 0L16 0L16 16L0 16L0 0Z" fill-rule="nonzero" transform="matrix(1 0 0 1 0 0)"/>
              		</clipPath>
              	</defs>
              	<g clip-path="url(#clipPath1103293336)">
              		<rect width="12" height="7.3333335" rx="1.3333334" ry="1.3333334" stroke-width="1.3333334" stroke-linejoin="round" transform="matrix(1 0 0 1 2 7.33333)" stroke="rgb(156, 163, 175)" fill="transparent"/>
              		<path d="M-0.666667 3.33333L-0.666667 6C-0.666667 6.36819 -0.368187 6.66667 0 6.66667C0.368187 6.66667 0.666667 6.36819 0.666667 6L0.666667 3.33333Q0.666666 2.22876 1.44772 1.44772Q2.22876 0.666667 3.33333 0.666667Q4.4379 0.666667 5.21895 1.44772Q6 2.22876 6 3.33333L6 6C6 6.36819 6.29848 6.66667 6.66667 6.66667C7.03485 6.66667 7.33333 6.36819 7.33333 6L7.33333 3.33333Q7.33333 1.67648 6.16176 0.504906Q4.99019 -0.666667 3.33333 -0.666667Q1.67648 -0.666667 0.504906 0.504906Q-0.666667 1.67648 -0.666667 3.33333Z" fill-rule="evenodd" transform="matrix(1 0 0 1 4.66667 1.33333)" fill="rgb(156, 163, 175)"/>
              	</g>
              </svg>
            </span>
            <input type="password" id="password" placeholder="Enter your password" className="login-input" />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <a href="#" className="login-forgot">Forgot password?</a>
      </div>
    </div>
  );
}

export default Login; 