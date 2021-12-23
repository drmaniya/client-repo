import React from 'react';
import './LoginFlow.scss';
import InputField from '../Component/Input';
import Button from '../Component/Button';
import DropDown  from '../Component/DropDown';
import TextArea from '../Component/TextArea';
import UploadBtn from '../Component/UploadBtn';

export default function SignUp(){
	return(
		
			<div className="container loginWrapper">
				<div className="row">
					<div className="col-sm-12  col-md-12 col-lg-10 m-auto">
						<div className="loginBlock pt-5">
							<h4 className="text-center mb-2">Sign Up</h4>
							<p className="text-center">This information will let us know more about you.</p>
							<div className="row pt-3">
							<nav>
							<div class="nav nav-tabs operation-tab" id="nav-tab" role="tablist">
								<button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Login Details</button>
								<button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Personal Details</button>
								<button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Reference Details</button>
							</div>
							</nav>
							<div className="tab-content" id="nav-tabContent">
								<div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
									<div className="row pt-5">
										<div className="col-lg-4 col-md-6 col-12">
											<InputField placeholder="UserName" required/>
										</div>
										<div className="col-lg-4 col-md-6 col-12">
											<InputField placeholder="Password" required type="password"/>
										</div>
										<div className="col-lg-4 col-md-6 col-12">
											<InputField placeholder="Confirm Password" required type="password"/>
										</div>
									</div>
								</div>
  								<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
									<div className="row pt-3">
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
										<div className="col-lg-4 col-md-6 col-12 mb-4">
											<DropDown placeholder="Select Country" menuList={[
												'India','Pakistan'
											]}/>
										</div>
										<div className="col-lg-4 col-md-6 col-12 mb-4">
											<DropDown placeholder="Select State" menuList={[
												'India','Pakistan'
											]}/>
										</div>
										<div className="col-lg-4 col-md-6 col-12 mb-4">
											<DropDown placeholder="Select City" menuList={[
												'India','Pakistan'
											]}/>
										</div>
										<div className="col-lg-4 col-md-6 col-12 d-flex">
											<InputField placeholder="CC" className="me-1"/>
											<InputField placeholder="NCD" className="me-1"/>
											<InputField placeholder="Fax Number"/>
										</div>
										<div className="col-lg-8 col-md-6 col-12">
										<TextArea placeholder="Message"/>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
									<div className="row pt-3">
										<div className="col-12 mb-3"><h5>Reference 1</h5></div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Company Name"/>
										</div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Contact Person"/>
										</div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Email"/>
										</div>
										<div className="col-lg-8 col-12">
											<InputField placeholder="Address Line1"/>
										</div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Address Line2"/>
										</div>
										<div className="col-lg-4 col-12 d-flex">
											<InputField placeholder="CC"  className="me-2"/>
											<InputField placeholder="NDC"  className="me-2"/>

											<InputField placeholder="FAX Number"/>

										</div>	
										<div className="col-lg-4 col-12 d-flex">
											<InputField placeholder="CC"  className="me-2"/>
											<InputField placeholder="NDC"  className="me-2"/>

											<InputField placeholder="Phone Number"/>

										</div>	
										<div className="col-lg-4 col-12">
											<InputField placeholder="Website"/>
										</div>
										<div className="col-12 mb-3"><h5>Reference 2</h5></div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Company Name"/>
										</div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Contact Person"/>
										</div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Email"/>
										</div>
										<div className="col-lg-8 col-12">
											<InputField placeholder="Address Line1"/>
										</div>
										<div className="col-lg-4 col-12">
											<InputField placeholder="Address Line2"/>
										</div>
										<div className="col-lg-4 col-12 d-flex">
											<InputField placeholder="CC" className="me-2"/>
											<InputField placeholder="NDC" className="me-2"/>

											<InputField placeholder="FAX Number"/>

										</div>	
										<div className="col-lg-4 col-12 d-flex">
											<InputField placeholder="CC"  className="me-2"/>
											<InputField placeholder="NDC"  className="me-2"/>

											<InputField placeholder="Phone Number"/>

										</div>	
										<div className="col-lg-4 col-12">
											<InputField placeholder="Website"/>
										</div>
										<div className="col-lg-6 col-12">
											Upload Passport copy of the Proprietor Or any Partner or Director (only .jpg, .png, .pdf allowed)
											<UploadBtn/>
										</div>
										<div className="col-lg-6 col-12">
											Company Reg. (only .jpg, .png, .pdf allowed)
											<UploadBtn/>
										</div>
									</div>
									</div>
								</div>
							</div>
							<div className="mb-3 d-flex align-items-center justify-content-between">
								<Button  primaryBtn label="Prev"/>
								<Button  primaryBtn label="Next"/>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
}