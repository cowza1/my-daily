import { type } from 'os';
import {defineCliConfig} from 'sanity/cli'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const writeData = process.env.SANITY_API_TOKEN!;



export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
