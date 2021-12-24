
// import { useState } from 'react';
import Logo from '../../Assets/logo.png';
import {Link} from 'react-router-dom';

export default function DashHeader(props){
	// const [isMobMenu,setMobMenu] = useState(false);
	return(
		<div className={` ${props.toggle?'headerSticky':false}`}>
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/overview" className="navbar-brand pt-0 pb-0"><img src={Logo} alt="no-logo"/></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
					<a className="nav-link active" aria-current="page" href="#">DASHBOARD</a>
					</li>
						<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						MASTER
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><Link to="/main-master" className="black ps-2 pb-2">Main Master</Link></li>
						<li><Link to="/sub-master" className="black ps-2 pb-2">Sub Master</Link></li>
					</ul>
						</li>
					<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						ACCOUNT
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><Link to="" className="black ps-2 pb-2">Account</Link></li>
						<li><Link to="/change-password" className="black ps-2 pb-2">Change Password</Link></li>
						<li><Link to="/feedback" className="black ps-2 pb-2">FeedBack</Link></li>
					</ul>
					</li>
				</ul>
				</div>
			</nav>
	</div>
	)
}