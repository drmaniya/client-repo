import React from 'react';
import './LoginFlow.scss';
import BgImg from '../../Assets/bg.jpeg';
import InputField from '../Component/Input';
import CheckBox from '../Component/CheckBox';
import Button from '../Component/Button';
import DropDown  from '../Component/DropDown';
import TextArea from '../Component/TextArea';

export default function SignUp(){
	return(
		<div className="loginContainer">
			<img src={BgImg} alt="no-img"/>
			<div className="loginImg"></div>
			<div className="container loginWrapper">
				<div className="row">
					<div className="col-sm-12  col-md-12 col-lg-10 m-auto">
						<div className="loginBlock pt-5">
							<h4 className="text-center mb-4">Sign Up</h4>
							<div className="row pt-5">
							<nav>
							<div class="nav nav-tabs" id="nav-tab" role="tablist">
								<button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Login Details</button>
								<button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Personal Details</button>
								<button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reference Details</button>
							</div>
							</nav>
							<div class="tab-content" id="nav-tabContent">
  							<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

  								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="UserName" required/>

								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Password" required/>

								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Confirm Password" required/>

								</div>

  							</div>
  						<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
	 						 <div className="row">
  								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Company Name" required/>

								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Select Business Type" required/>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Email"/>

								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Contact Person" required/>

								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Email 1" required/>

								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="Email2"/>

								</div>
								<div className="col-lg-8 col-md-6 col-12">
									<TextArea placeholder="Address Line 1"/>

								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="ZipCode"/>
									<InputField placeholder="Address Line 2"/>


								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<DropDown placeholder="Select Country" menuList={[
										'India','Pakistan'
									]}/>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<DropDown placeholder="Select State" menuList={[
										'India','Pakistan'
									]}/>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<DropDown placeholder="Select City" menuList={[
										'India','Pakistan'
									]}/>
								</div>
								<div className="col-lg-4 col-md-6 col-12">
									<InputField placeholder="CC"/>
									<InputField placeholder="NCD"/>
									<InputField placeholder="Fax Number"/>
								</div>
								<div className="col-lg-8 col-md-6 col-12">
								<TextArea placeholder="Message"/>
								</div>
								</div>
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
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