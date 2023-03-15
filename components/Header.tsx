import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 px-10 py-5 font-bold'>
            <div className='flex items-center space-x-2'>
                <Link href='/'></Link>
            </div>
            <div></div>
        </header>
    );
};

export default Header;
