import { createClient } from 'next-sanity';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion: string = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

export const client = createClient({
    projectId,
    dataset,
    apiVersion: '2022-11-15',
    useCdn: false,
});
