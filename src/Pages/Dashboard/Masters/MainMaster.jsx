import DropDown from "../../Component/DropDown";
import InputField from "../../Component/Input";
import TextArea from "../../Component/TextArea";
import UploadBtn from "../../Component/UploadBtn";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data";


export default function MainMaster(){
	const tableData = {
		columns,
		data
	  };
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
			<div className="col-12">
			<DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
		  selectableRows
          highlightOnHover
		  fixedHeader
        />
      </DataTableExtensions>
			</div>
		</div>
	</div>
	)
}