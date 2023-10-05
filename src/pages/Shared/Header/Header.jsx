import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center '>
            <div >
                <img className='mx-auto mb-5' src={logo} alt="" />
            </div>
            <p className=' mb-5'>Journalism Without Fear or Favour</p>
            <p className=' mb-5'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;