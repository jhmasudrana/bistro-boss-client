import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googlesignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handlegoolesignIn = () =>{
     googlesignIn()
     .then(res =>{
        console.log(res.user)
        const userInfo = {
            email : res.user?.email,
            name: res.user?.displayName
        }
        axiosPublic.post('users', userInfo)
        .then(res=>{
            console.log(res.data)
            navigate('/')
        })
    })
    }    
    return (
        <div>
            <div>
                <div className="divider">OR</div>
                <button  onClick={handlegoolesignIn} className="font-bold flex  items-center gap-2 mx-auto">
                <FcGoogle />
                  Sign Up with  Google                
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;