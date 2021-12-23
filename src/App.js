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
import {BrowserRouter,
	Routes, // Just Use Routes instead of "Switch"
	useLocation,
	Route,} from 'react-router-dom';


	const Hero = () => {
		const location = useLocation();
		return(
			<div className="hero">
			<img src={BgImg} alt="no-found"/>
			<div className="heroTitle">
				<div className="heroBlock">
				{location.pathname === "/login"? '': location.pathname === "/signup"?'': location.pathname === "/" ? <h1>Welcome to Diamond</h1>: <h1>{location.pathname.substring(1)}</h1>}
				</div>
			</div>
		</div>
		)
	}
function App() {
	const [toggle, setToggle] = useState(false);
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
  return (
    <div onScroll={handleScroll}>
		
		<BrowserRouter>
		<Header toggle={toggle}/>
		<Hero/>
			<Routes>
				
				<Route exact path="/" element={<HomePage />} />
				<Route path="/login" element={<Login/>} />
				<Route path="/about" element={<AboutUs/>} />
				<Route path="/contact" element={<ContactUs/>} />
				<Route path="/layout" element={<Layout/>} />
				<Route path="/operations" element={<Operations/>} />
				<Route path="/faq" element={<FAQ/>} />
				<Route path="/signup" element={<SignUp/>} />
				<Route path="/events" element={<Events/>} />
				<Route path="/register" element={<Register/>} />


			</Routes>
    	</BrowserRouter>
 	<Footer/> 
    </div>
  );
}

export default App;
