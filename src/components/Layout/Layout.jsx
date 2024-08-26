
import Header from './../Navbar/Navnar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { themeContext } from '../../contexts/theme';
const Layout = () => {
  const lang = useSelector((state)=>state.lang.language)
   const {theme}  =useContext(themeContext)
    return (
        <>
            <div dir={(lang=="en")?'ltr':'rtl'} className={`bg-${theme} text-bg-${theme} vh-100`}>

                <Header />

                <div className="m-5">
                    <Outlet />

                </div>


                <Footer />
            </div>


        </>
    );
}

export default Layout;
