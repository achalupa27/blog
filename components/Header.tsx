import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className='flex items-center justify-between space-x-2 px-10 py-5 font-bold'>
            <div className='flex items-center space-x-2'>
                <Link href='/'>
                    <Image className='rounded-full' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' width={50} height={50} alt='logo'></Image>
                </Link>
                <h1>Andrew Chalupa's Blog</h1>
            </div>
            <div></div>
        </header>
    );
};

export default Header;
