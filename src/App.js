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
		<Header toggle={toggle}/>
		<Login/>
		{/* <AboutUs/> */}
		 {/* <SignUp/> */}
 		{/* <HomePage/> */}
			{/* <FAQ/> */}
	{/* <Events/> */}
	{/* <Operations/> */}
	<ContactUs/>
	{/* <Layout/> */}
	<Footer/>
    </div>
  );
}

export default App;
