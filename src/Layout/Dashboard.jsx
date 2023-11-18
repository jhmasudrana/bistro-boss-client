import { NavLink, Outlet } from "react-router-dom";
import { FaAdversal, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensils, } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    // admin 
    const isadmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isadmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome />
                                    Admin Home</NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/Add Items">
                                    <FaUtensils />
                                   Add Items
                                </NavLink>

                            </li>

                            <li className=" rounded-lg">
                                <NavLink to="/dashboard/mangeItems">
                                    <FaList />
                                    Manage Items</NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook />
                                    Manage Bokings</NavLink>

                            </li>
                            <li>
                                <NavLink to="/dashboard/allusers">
                                    <FaUsers />
                                    All Users</NavLink>

                            </li>
                        </> : <>
                         <h1>my or</h1>

                        </>
                    }
                    {/* shared nav links */}
                    <div className="divider">OR</div>
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home</NavLink>

                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaSearch />
                            Menu</NavLink>

                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <FaEnvelope />
                            Contact</NavLink>

                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;