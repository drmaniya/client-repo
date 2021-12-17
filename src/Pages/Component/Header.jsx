
import { useState } from 'react';
import Logo from '../../Assets/logo.png';

export default function Header(props){
  const [isMobMenu,setMobMenu] = useState(false);
	return(
		<div className={`container-fluid header p-2 ${props.toggle?'headerSticky':false}`}>
			<div className="row">
				<div className="col-lg-4 col-8">
					<img src={Logo} alt="no-logo"/>
				</div>
				<div className="col-lg-8 col-2">
					<div className="desktopMenu">
						<ul className="p-0 mb-0 h-100 d-flex align-items-center ">
							<li><a href="#Home">HOME</a></li>
							<li><a href="#Home">ABOUT US</a></li>
							<li><a href="#Home">EXCEPTIONAL DIAMONDS</a></li>
							<li><a href="#Home">LAYOUTS</a></li>
							<li><a href="#Home">FAQ</a></li>
							<li><a href="#Home">EVENTS</a></li>
							<li><a href="#Home">LOGIN</a></li>
							<li><a href="#Home">SIGN UP</a></li>

							<li><a href="#Home">CONTACT US</a></li>
						</ul>
					</div>
					<div onClick={()=> setMobMenu(!isMobMenu)} className="mobMenuIcon">
hu
					</div>
				</div>
				{isMobMenu?
				<div className="col-12">
						<ul className="mb-0 h-100 mobMenu">
							<li><a href="#Home">HOME</a></li>
							<li><a href="#Home">ABOUT US</a></li>
							<li><a href="#Home">EXCEPTIONAL DIAMONDS</a></li>
							<li><a href="#Home">LAYOUTS</a></li>
							<li><a href="#Home">FAQ</a></li>
							<li><a href="#Home">EVENTS</a></li>
							<li><a href="#Home">LOGIN</a></li>
							<li><a href="#Home">SIGN UP</a></li>

							<li><a href="#Home">CONTACT US</a></li>
						</ul>
				</div>:false}
			</div>
		</div>
	)
}