
import Header from './../Navbar/Navnar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Layout = () => {
  const lang = useSelector((state)=>state.lang.language)
    return (
        <>
            <div dir={(lang=="en")?'ltr':'rtl'}>

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
