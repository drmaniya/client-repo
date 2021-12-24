import { useEffect ,useState} from 'react';
import Login from './Pages/LoginFlow/Login';
import Header from './Pages/Component/Header';
import SignUp from './Pages/LoginFlow/SignUp';
import FAQ from './Pages/Faq';
import Events from './Pages/Events';
import Operations from './Pages/Operations';
import Footer from './Pages/Component/Footer';
import HomePage from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import Layout from './Pages/Layout';
import AboutUs from './Pages/AboutUs';
import Register from './Pages/Register';
import BgImg from './Assets/bg.jpeg';
import OverView from './Pages/Dashboard/Overview';
import {
	Routes, // Just Use Routes instead of "Switch"
	useLocation,
	useNavigate,
	Route,} from 'react-router-dom';
import ChangePassword from './Pages/Dashboard/ChangePassword';
import MainMaster from './Pages/Dashboard/Masters/MainMaster';
import SubMaster from './Pages/Dashboard/Masters/SubMaster';
import Feedback from './Pages/Dashboard/Feedback';
import DashHeader from './Pages/Dashboard/DashHeader';


	const Hero = () => {
		const location = useLocation();
		return(
			<div className="hero">
			<img src={BgImg} alt="no-found"/>
			<div className="heroTitle">
				<div className="heroBlock">
				{location.pathname === "/login"? '': location.pathname === "/signup"?'': location.pathname === "/" ? 
				<div className="heroDesc"><h1>Welcome to Diamond</h1>
				<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>

				</div>
				: 
				<div className="heroDesc">
				<h1>{location.pathname.substring(1)}</h1>
				<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
					</div>
				}
				</div>
				</div>
		</div>
		)
	}
function App() {
	const [toggle, setToggle] = useState(false);
	const [isAuthenticated,setAuthenticated] = useState(false);
	const navigate = useNavigate();
	const handleScroll = () => {
        if (window.screenTop + window.pageYOffset > 10) {
            setToggle(true);
        } else {
            setToggle(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
	const handleClick = () => {
		setAuthenticated(!isAuthenticated);
		navigate('/overview');
	}
  return (
    <div onScroll={handleScroll}>
		{isAuthenticated?
		<>
		<DashHeader  toggle={toggle}/>
			<Routes>
				
				<Route exact path="/overview" element={<OverView />} />
				<Route path="/change-password" element={<ChangePassword /> }/>
				<Route path="/feedback" element={<Feedback /> }/>
				<Route path="/main-master" element={<MainMaster /> }/>
				<Route path="/sub-master" element={<SubMaster /> }/>


			</Routes>
			</>
			:
			<>
			<Header toggle={toggle}/>
			<Hero/>
			<Routes>
				
				<Route exact path="/" element={<HomePage />} />
				<Route path="/login" element={<Login handleDashboard={handleClick}/>} />
				<Route path="/about" element={<AboutUs/>} />
				<Route path="/contact" element={<ContactUs/>} />
				<Route path="/layout" element={<Layout/>} />
				<Route path="/operations" element={<Operations/>} />
				<Route path="/faq" element={<FAQ/>} />
				<Route path="/signup" element={<SignUp/>} />
				<Route path="/events" element={<Events/>} />
				<Route path="/register" element={<Register/>} />

			</Routes>
			<Footer/>
			</> }
 
    </div>
  );
}

export default App;
