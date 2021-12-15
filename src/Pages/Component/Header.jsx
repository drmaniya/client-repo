import Logo from '../../Assets/logo.png';

export default function Header(){
	return(
		<div className="container-fluid header p-2">
			<div className="row">
				<div className="col-lg-4 col-12">
					<img src={Logo} alt="no-logo"/>
				</div>
				<div className="col-lg-8 col-12">
					<div className="d-flex align-items-center h-100 justify-content-end">
						<ul className="p-0 mb-0 h-100 d-flex align-items-center desktopMenu">
							<li><a href="#Home">HOME</a></li>
							<li><a href="#Home">ABOUT US</a></li>
							<li><a href="#Home">EXCEPTIONAL DIAMONDS</a></li>
							<li><a href="#Home">LAYOUTS</a></li>
							<li><a href="#Home">FAQ</a></li>
							<li><a href="#Home">EVENTS</a></li>
							<li><a href="#Home">LOGIN</a></li>
							<li><a href="#Home">CONTACT US</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}