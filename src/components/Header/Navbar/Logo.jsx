import picture from '../../../../public/logo.png'

const Logo = () => {
    return (
        <div className=''>
            <img className="w-[100px] h-[48px] lg:w-[252px] lg:h-[72px]" src={picture} alt="" />
        </div>
    );
};

export default Logo;