export default function DropDown(props){
	return(
		<>
		{props.label?<label className="mb-2">{props.label}</label>:false}
		<select class="form-select" aria-label="Default select example">
  <option selected>{props.placeholder}</option>
  {props.menuList.map((data,i)=>(
		<option key={i} value="1">{data}</option>
  ))};
</select>
</>
	)
}