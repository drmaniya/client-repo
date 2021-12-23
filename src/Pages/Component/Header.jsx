
import { useState } from 'react';
import Logo from '../../Assets/logo.png';
import {Link} from 'react-router-dom';

export default function Header(props){
  const [isMobMenu,setMobMenu] = useState(false);
	return(
		<div className={`container-fluid header p-2 ${props.toggle?'headerSticky':false}`}>
			<div className="row">
				<div className="col-lg-4 col-10">
					<img src={Logo} alt="no-logo"/>
				</div>
				
				<div className="col-lg-8 col-2 desktopMenu">
						<ul className="p-0 mb-0 h-100 d-flex align-items-center ">
							<li><Link to="/" >HOME</Link></li>
							<li><Link to="/about">ABOUT US</Link></li>
							{/* <li><Link to="/">EXCEPTIONAL DIAMONDS</Link></li> */}
							<li><Link to="/layout">LAYOUTS</Link></li>
							<li><Link to="/faq">FAQ</Link></li>
							<li><Link to="/events">EVENTS</Link></li>
							<li><Link to="/operations">OPERATIONS</Link></li>

							<li><Link to="/login">LOGIN</Link></li>
							<li><Link to="/signup">SIGN UP</Link></li>

							<li><Link to="/contact">CONTACT US</Link></li>
						</ul>
				</div>
				<div className="col-2">
					
				<div onClick={()=> setMobMenu(!isMobMenu)} className="mobMenuIcon">
						<i className="fa fa-bars"/>
					</div>
				</div>
				{isMobMenu?
						<ul className="mb-0 h-100 mobMenu">
							<li><Link to="/" >HOME</Link></li>
							<li><Link to="/about">ABOUT US</Link></li>
							{/* <li><Link to="/">EXCEPTIONAL DIAMONDS</Link></li> */}
							<li><Link to="/layout">LAYOUTS</Link></li>
							<li><Link to="/faq">FAQ</Link></li>
							<li><Link to="/events">EVENTS</Link></li>
							<li><Link to="/operations">OPERATIONS</Link></li>

							<li><Link to="/login">LOGIN</Link></li>
							<li><Link to="/signup">SIGN UP</Link></li>

							<li><Link to="/contact">CONTACT US</Link></li>
						</ul>:false}
			</div>
		</div>
	)
}