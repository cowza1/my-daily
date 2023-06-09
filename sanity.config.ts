import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { getDefaultDocumentNode } from './structure';


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
// const writeData = process.env.SANITY_API_TOKEN!;

export default defineConfig({
  basePath: '/studio',
  name: 'Content_Studio',
  title: 'Content Studio',
  // name: 'default',
  // title: 'my-daily',

  projectId,
  dataset,
  // writeData,

  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
