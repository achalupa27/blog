const Logo = (props: any) => {
    const { renderDefault, title } = props;
    return (
        <div className='ml-2 flex items-center'>
            <span className='font-black text-amber-600'>AC</span>
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    );
};

export default Logo;
