import { groq } from "next-sanity";
import urlFor from "../lib/urlFor";
import {PortableText} from '@portabletext/react'
import { RichTextComponents } from "./RichTextComponents";
import Image from 'next/image'
import { client } from "../lib/sanity.client";

type Props = {
    post: object;
}


function Article({post}:any) {

    return (
           <article className="px-10 pb-28">
            <section className="space-y-2 border border-cyan-400 text-white">
                <div className="relative min-h-56 flex flex-col md:flex:row justify-between">
                    <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                        <Image
                        className="object-cover object-center mx-auto"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                        priority
                        />
                    </div>
                    <section className="p-5 bg-cyan-400 w-full">
                        <div className="flex flex-col md:flex-row justify-between">
                            <div>
                                <h1 className="text-4xl font-extrabold">
                                    {post.title}
                                </h1>
                                <p className="my-4">
                                    {new Date(post._createdAt).toDateString()}
                                </p>
                            </div>
                            <div className="flex  items-center space-x-2">
                                <Image
                                className="rounded-full"
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                height={60}
                                width={60}
                                />
                                <div className="w:20 my-5 md:w-32">
                                    <h3 className="text-lg font-bold">
                                        by {post.author.name}
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="italic pt-2">{post.description}</h2>
                                <div className="flex items-center flex-wrap justify-start md:justify-end mt-auto space-x-2">
                                    {post.categories.map((category:any) => (
                                        <div>
                                            <p key={category._id} className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm front-semibold my-2'>{category.title}</p>
                                        </div>
                                    ))}
                                </div>
                         </div>
                    </section>
                </div>
            </section>
            <section>
                <PortableText value={post.body} 
                components={RichTextComponents}/>
            </section>
           </article>
          )

}

export default Article
