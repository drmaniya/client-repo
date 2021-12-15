import React from 'react';
import './LoginFlow.scss';
import BgImg from '../../Assets/bg.jpeg';
import InputField from '../Component/Input';
import CheckBox from '../Component/CheckBox';
import Button from '../Component/Button';
export default function SignUp(){
	return(
		<div className="loginContainer">
			<img src={BgImg} alt="no-img"/>
			<div className="loginImg"></div>
			<div className="container loginWrapper">
				<div className="row">
					<div className="col-sm-10  col-md-6 col-lg-6 m-auto">
						<div className="loginBlock pt-5">
							<h4 className="text-center mb-4">Sign Up</h4>
							<div className="row pt-5">
								<div className="col-12">
								<InputField placeholder="UserName" required/>

								</div>
								<div className="col-12">
								<InputField placeholder="Password" required/>

								</div>
								<div className="col-12">
								<InputField placeholder="Confirm Password" required/>

								</div>
								<div className="col-12">
									Personal Details
								</div>
								<div className="col-lg-6 col-12">
								<InputField placeholder="Company Name" required/>

								</div>
								<div className="col-lg-6 col-12">
								<InputField placeholder="Contact Person" required/>

								</div>
								<div className="col-lg-6 col-12">
								<InputField placeholder="Email"/>

								</div>
							</div>
						
							
							<InputField placeholder="State" required label="State"/>
						
						
							


							<div className="mb-5 d-flex align-items-center justify-content-between">
								<CheckBox/>
								<Button linkBtn label="Forgot Password?" />
							</div>
							<div className="mb-3 text-center">
								<Button  primaryBtn label="Register"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}