import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthPprovider";
import signupimg from '../../../assets/others/authentication2.png'
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserprofile } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic()


    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserprofile(data.name, data.photoURL)
                console.log('user profile update ')
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log('user addd to the database')
                        if (res.data.insertedId)
                            reset()
                        Swal.fire({
                            title: 'Good job!',
                            text: 'You clicked the button!',
                            icon: 'success'
                        });
                        navigate('/')
                    })
            })

    };
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={signupimg} alt="" />
                    </div>
                    <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                />
                                {errors.name && (
                                    <span className="text-red-500 font-bold">Name is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoURL", { required: true })}
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                                {errors.photoURL && (
                                    <span className="text-red-500 font-bold">Photo URL is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                                {errors.email && (
                                    <span className="text-red-500 font-bold">Email is required</span>
                                )}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/
                                    })}
                                    placeholder="Password"
                                    name="password"
                                    className="input input-bordered"
                                />
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-500 font-bold">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-500 font-bold">Password must be less than 20 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-500 font-bold">
                                        Password must have at least one letter and one number
                                    </p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center font-bold">
                            <small>
                                Already have an account? <Link className="text-pink-700" to="/login">Go to Login</Link>
                            </small>
                        </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
