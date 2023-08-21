import Banner from '../../components/Banner';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviewSuspense';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';

const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

const HomePage = async () => {
    if (previewData()) {
        console.log('preview data');
        return (
            <PreviewSuspense
                fallback={
                    <div role='status'>
                        <p className='animate-pulse text-center text-lg'>Loading Preview Data...</p>
                    </div>
                }
            >
                <Banner />
                <PreviewBlogList query={query} />
            </PreviewSuspense>
        );
    }

    const posts = await client.fetch(query);
    console.log('NOT preview data');
    return (
        <div>
            <Banner />
            <BlogList posts={posts} />
        </div>
    );
};

export default HomePage;
