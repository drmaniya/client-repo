import './InputField.scss';

export default function InputField(props){
return(
	<div  className={`mb-4 ${props.className}`}>
							{props.label?	<label for="exampleFormControlInput1" className="form-label">{props.label}{props.required? "*" :false}</label>:''}
							<input type="text" onChange={props.onChange} className="form-control inputWrapper" placeholder={`${props.placeholder ? props.placeholder:''}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
							{props.error? <p className="errorText">{props.error}</p>:false}
							</div>
)
}