import { FaGoogle , FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';


const RightNav = () => {
    const {googleLogin } = useContext(AuthContext)

    const handleGoogle = () =>{
        googleLogin()
        .then((result) =>{
            console.log(result.user);
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }
    return (
        <div className=''>
            <div className='mb-10'>
                <h2 className='pl-4 mb-2 font-semibold'>Login With</h2>
                <div className='p-4 space-y-5 '>
                    <button onClick={handleGoogle} className="btn btn-md btn-outline w-full "> <FaGoogle></FaGoogle> Google</button>
                    <button className="btn btn-md btn-outline w-full "> <FaGithub></FaGithub> Github</button>
                </div>
            </div>

            <div className='mb-10'>
                <h2 className='pl-4 mb-2 font-semibold'>Find Us On</h2>
                <div className='p-4 '>
                    <a className="flex items-center gap-2 border rounded-t-md w-full p-4" href='https://www.facebook.com/'> <FaFacebook className='text-xl text-blue-600'></FaFacebook> Facebook</a>

                    <a className="flex items-center gap-2 border-x  w-full p-4" href='https://www.twitter.com/'> <FaTwitter className='text-xl text-sky-400'></FaTwitter> Twitter</a>

                    <a className="flex items-center gap-2 border rounded-b-md w-full p-4" href='https://www.instagram.com/'> <FaInstagram className='text-xl text-[#E4405F]'></FaInstagram> Instagram</a>
                    
                </div>
            </div>

            <div className='mb-10 p-4'>
                
                <div className='p-4 space-y-3 bg-gray-100'>
                    <h2 className='mb-2 font-semibold'>Q Zone</h2>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;