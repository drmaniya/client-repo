import './InputField.scss';

export default function InputField(props){
return(
	<div  className="mb-4">
							{props.label?	<label for="exampleFormControlInput1" className="form-label">{props.label}{props.required? "*" :false}</label>:null}
							<input type="text" className="form-control inputWrapper" placeholder={`${props.placeholder} ${ props.required? '*':null}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
							</div>
)
}