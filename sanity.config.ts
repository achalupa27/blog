import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './sanityTheme';
import StudioNavBar from './components/StudioNavBar';
import Logo from './components/Logo';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
    basePath: '/studio',
    name: 'Andrew_Content_Studio',
    title: 'Andrew Content Studio',

    projectId,
    dataset,

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
    studio: {
        components: {
            logo: Logo,
            navbar: StudioNavBar,
        },
    },

    theme: myTheme,
});
