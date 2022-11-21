import '../styles/globals.css'
import '../components/Styles/toggleTheme.css'
import '@fortawesome/fontawesome-free/css/all.css';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
import Router from 'next/router';
import CustomChatbot from '../components/bot'
 
 

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ color:"#53b89e"});
NProgress.configure({ showSpinner: false });
NProgress.configure({ easing: 'ease', speed: 200 });

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  const [progress, setProgress] = useState(0);
  useEffect(()=>{
    router.events.on('routerChangeComplete',()=>{
      setProgress(100);
      console.log(progress)
    })
    
  })

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
  <CustomChatbot />
  <Footer props={{ themes, currTheme, setCurrTheme }} />
  </div>
  );
}

export default MyApp
