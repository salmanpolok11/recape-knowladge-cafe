
import imge from '../images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center lg:mx-6 lg:p-4 border-b-2'>
       <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
         <img src={imge} alt="" />
    </div>
  );
};

export default Header;