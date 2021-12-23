import './InputField.scss';

export default function InputField(props){
return(
	<div  className={`mb-4 ${props.className}`}>
							{props.label?	<label for="exampleFormControlInput1" className="form-label">{props.label}{props.required? "*" :false}</label>:''}
							<input type={props.type? props.type : 'text'} onChange={props.onChange} className="inputWrapper form-control " placeholder={`${props.placeholder ? props.placeholder:''}`} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
							{props.error? <p className="errorText">{props.error}</p>:false}
							</div>
)
}