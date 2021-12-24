import Button from "../Component/Button";
import InputField from "../Component/Input";

export default function ChangePassword(){
	return(
		<div className="container mt-5 pt-5">
			<div className="row">

			<div className="col-lg-6 col-12">
			<h2>Change Password</h2>
			</div>
			<div className="col-lg-6 col-12">
				<div className="row">
					<div className="col-12">
						<InputField placeholder="User Name"/>
					</div>
					<div className="col-12">
						<InputField placeholder="Current Password" type="password"/>
					</div>
					<div className="col-12">
						<InputField placeholder="New Password" type="password"/>
					</div>
					<div className="col-12">
						<InputField placeholder="Confirm Password" type="password"/>
					</div>
					<div className="col-12">
						<Button primaryBtn label="Update"/>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}