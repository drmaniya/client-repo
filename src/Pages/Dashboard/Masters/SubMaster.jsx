import DropDown from "../../Component/DropDown";
import InputField from "../../Component/Input";
import TextArea from "../../Component/TextArea";
import UploadBtn from "../../Component/UploadBtn";

export default function SubMaster(){
	return(
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-12">
					<div className="row">
						<div className="col-12">
							<InputField label="Name" required/>
						</div>
						<div className="col-12">
							<InputField label="Code" required/>
						</div>
						<div className="col-12">
							<TextArea label="Description"/>
						</div>
						<div className="col-12">
							<DropDown
							label="Group"
							menuList={[
								'speaker','Attendee'
							]}
							/>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-12">
					<div className="row">
						<div className="col-12">
							<p className="mb-1">Image</p>
							<UploadBtn/>
						</div>
						<div className="col-12 mt-4">
							<p className="mb-1">Icon</p>
							<UploadBtn/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}