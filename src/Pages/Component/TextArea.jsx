export default function TextArea(props){
	return(
		<div class="mb-3">
{props.label?  <label for="exampleFormControlTextarea1" className="form-label">{props.label}</label>:false}
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder={props.placeholder}></textarea>
</div>)
}