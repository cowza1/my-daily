import { client } from "../../../../lib/sanity.client";
import { groq } from "next-sanity";
import Image from "next/image"
import urlFor from "../../../../lib/urlFor";
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { previewData } from 'next/headers'
import PreviewSuspense from '../../../../components/PreviewSuspense'
import PreviewArticle from '../../../../components/PreviewArticle'
import Article from "../../../../components/Article";
import Comments from "../../../../components/Comments";
import Form from '../../../../components/Form'
import '../../../../src/styles/globals.css'
import Post from '../../../../schemas/post'

type Props ={
    params: {
        slug: string;
    };
};

async function PostPage({params: {slug}}: Props ) {
   const query = groq`
   *[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->,
    'comments': *[_type == "comment" && post._ref == ^._id && approved == true]{
            _id, 
            name, 
            email, 
            comment, 
            _createdAt
        }
   }
   `
  const queryParams = {slug};


   if(previewData()) {
    return( 
    <PreviewSuspense fallback={
          <div role="status">
            <p className='text-center text-lg animate-pulse'>Loading Preview Data...</p>
          </div>
        }>
        <div>Post Preview Mode</div>
        <PreviewArticle query={query} queryParams={queryParams}/>
    </PreviewSuspense>
    )
  }
  const post = await client.fetch(query, {slug});

  return (
    <>
    <Article post={post}/>
    <Form _id={post._id} />
    <Comments comments={post?.comments}/>
    </>
  )

//   
}

export default PostPage
