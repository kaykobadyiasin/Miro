import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import 'animate.css';


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;