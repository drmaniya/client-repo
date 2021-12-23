import React from 'react';
import './LoginFlow.scss';
import InputField from '../Component/Input';
import CheckBox from '../Component/CheckBox';
import Button from '../Component/Button';
import Logo from '../../Assets/logo.png';
import {
	useNavigate
 } from 'react-router-dom';


export default function Login(){
	const navigate = useNavigate();
	const handleClick = () => navigate('/signup');
	return(
			<div className="loginWrapper">
						<div className="loginBlock pt-5">
							<div className="logoLogin d-flex align-items-center justify-content-center m-auto"><img src={Logo} alt="no-logo"/></div>
							<h4 className="text-center mb-5 pt-4">Login</h4>
							<InputField placeholder="UserName" required error="Invalid Username"/>
							<InputField placeholder="Password" required error="Invalid Password"/>
							<div className="mb-5 d-flex align-items-center justify-content-between">
								<CheckBox/>
								<Button linkBtn label="Forgot Password?" />
							</div>
							<div className="mb-3 text-center">
								<Button  primaryBtn label="Login"/>
							</div>
							<div className="mb-3 text-center">

							{/* <Button linkBtn label="Guest User Login" /> */}
							</div>
							<div className="mb-3 text-center">
							Don't have an account ? <Button linkBtn label="Register Here" onClick={handleClick}/>
								
							</div>
						</div>
			</div>
	)
}