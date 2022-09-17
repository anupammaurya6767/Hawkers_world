import '../styles/globals.css'
import '../components/Styles/toggleTheme.css'
import '@fortawesome/fontawesome-free/css/all.css';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  const themes = {
    lightTheme: {
      name: "light",
      optColor: "gray",
      optColor2: 'black',
       titleCol: 'black',
       shadow: 'gray',
       bgcolor: "white"
      },
      darkTheme: {
        name: "dark",
        optColor: "white",
              optColor2: 'white',
        titleCol: 'white',
        shadow: 'white',
      bgcolor: "black"
    }
  };

  const [currTheme, setCurrTheme] = useState(() => themes.lightTheme);

  return (
  <div style={{backgroundColor: currTheme.bgcolor}}>
  <NavBar props={{themes, currTheme, setCurrTheme}} />
  <Component {...pageProps} />
  <Footer props={{themes, currTheme, setCurrTheme}}/>
  </div>
  );
}

export default MyApp
