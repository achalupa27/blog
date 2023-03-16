type Props = {
    posts: Post[];
};

const BlogList = ({ posts }: Props) => {
    console.log('# posts: ', posts.length);
    return (
        <div>
            <h1 className='mb-10 border-amber-500'></h1>
            <div>
                {posts.map((post) => (
                    <div key={post._id}>
                        <div></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
