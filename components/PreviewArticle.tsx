'use client'

import { usePreview } from "../lib/sanity.preview";
import Article from './Article';

type Props = {
  query: any;
  queryParams: any;
}


export default function PreviewArticle({ query, queryParams }:
  Props) {
      const post = usePreview(null, query, queryParams);
      
      return <Article post={post}/>;
  }