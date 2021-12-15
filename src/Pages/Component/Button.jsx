export default function Button(props){
	return(
		<button type="button" onClick={props.onClick} className={`${props.linkBtn?'linkBtn':false} ${props.primaryBtn?'primaryBtn':false}`}>{props.label}</button>
	)
}