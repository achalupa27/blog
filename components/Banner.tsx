const Banner = () => {
    return (
        <div className='mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5'>
            <div>
                <h1 className='text-4xl lg:text-7xl'>Andrew's Blog</h1>
                <h2 className='mt-5 md:mt-0'>
                    Welcome to <span className='underline decoration-amber-600 decoration-4'>Every Developers</span> favorite blog.
                </h2>
            </div>
            <p className='mt-5 max-w-sm text-gray-400 md:mt-2'>New product features | The latest in technology | Weekly debugging nightmares and More!</p>
        </div>
    );
};

export default Banner;
