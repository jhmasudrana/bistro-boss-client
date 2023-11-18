import { useContext, useEffect,useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../Providers/AuthPprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';
import loginimg from '../../../assets/others/authentication1.png'

const Login = () => {
    
    const [disabled, setDiabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const { singIn } = useContext(AuthContext)

    const handlelogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        singIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "Good job!",
                    text: "User Login successful!",
                    icon: "success"
                });
                navigate(from, {replace: true})
            })
    }
    const handlevalidateCapcha = (e) => {
        const user_capcha_value =e.target.value;
        if (validateCaptcha(user_capcha_value)) {
            setDiabled(false)
        } else {
            setDiabled(true)
        }

    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl mb-5 ml-16 font-bold">Login now!</h1>
                       <img src={loginimg} alt="" />
                    </div>
                    <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-error input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered input-error " required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handlevalidateCapcha}    type="text"  name="captcha" placeholder="type the text above" className="input input-error  input-bordered" required />                            

                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'><small className=' font-bold '>New Here? <Link className='text-pink-700' to="/signup">Create an Account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;