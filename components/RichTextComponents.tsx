import Image from "next/image"
import Link from "next/link"
import urlFor from "../lib/urlFor"

export const RichTextComponents = {
    types: {
        image:({value}: any) => 
   
            <div className="relative h-96 w-full m-2 mx-auto md:justify-start">
                <Image
                className="object-contain"
                src={urlFor(value).url()}
                alt="Blog Post Image"
                fill
                />
            </div>
            
        
    },
    list: {
        bullet: ({ children }: any) => <li>{children}</li>,
        number: ({children}: any) => (
            <ol className="mt-lg ml-4 list-decimal">{children}</ol>
        ),
    },
    block: {
        h1: ({children}: any) => 
            <h1 className="text-5xl py-8 font-bold">{children}</h1>
        ,
        h2: ({children}: any) => 
            <h2 className="text-4xl py-8 font-bold">{children}</h2>
        ,
        h3: ({children}: any) => 
            <h3 className="text-3xl py-8 font-bold">{children}</h3>
        ,
        h4: ({children}: any) => 
            <h4 className="text-2xl py-4 font-bold">{children}</h4>
        ,

        blockquote: ({children}: any) => 
            <blockquote className="border-l-cyan-400 border-l-4 pl-5 py-5 my-5">
                {children}
            </blockquote>
        ,
        normal: ({children}: any) => 
        <p className="py-2">{children}</p>
    },
    marks:{
        link: ({children, value}: any) => {
            const rel = !value.href.startsWith("/")
            ? "noreferrence noopener"
            : undefined;

            return (
                <Link
                href={value.href}
                rel={rel}
                className="underline decoration-cyan-400 hover:decoration-black"
                >{children}</Link>
            );
        },
        // color: ({children, value}: any) => 
        //     <span style={{color: `${value}`}}>{children}</span>
        
    },
}

