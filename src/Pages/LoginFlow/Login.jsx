import React from 'react';
import './LoginFlow.scss';
import BgImg from '../../Assets/bg.jpeg';
import InputField from '../Component/Input';
import CheckBox from '../Component/CheckBox';
import Button from '../Component/Button';
import Logo from '../../Assets/logo.png';

export default function Login(){
	return(
		<div className="loginContainer">
			<img src={BgImg} alt="no-img"/>
			<div className="loginImg"></div>
			<div className="container loginWrapper">
				<div className="row">
					<div className="col-sm-8  col-md-6 col-lg-5 m-auto">
						<div className="loginBlock pt-5">
							<div className="logoLogin d-flex align-items-center justify-content-center m-auto"><img src={Logo} alt="no-logo"/></div>
							<h4 className="text-center mb-5 pt-4">Login</h4>
							<InputField placeholder="UserName" required/>
							<InputField placeholder="Password" required/>
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
							Don't have an account ? <Button linkBtn label="Register Here" />
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}