// import category from "@/schemas/category";
// import post from "@/schemas/post";
import Image from "next/image"
import urlFor from "../lib/urlFor"
// import {ArrowUpRightIcon} from "@heroicons/react/24/solid"
import ClientSideRoute from "./ClientSideRoute";
type Props = {
    posts: any[];
}

function BlogList({posts}: Props) {


  return (
  <div>
      <hr className="border-cyan-400"/>
    <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 pag-y-16 pb-24 mt-8">
      {posts.map(post => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div className="flex flex-col group curser-pointer">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transformation duration-200 ease-out">
              <Image
              className="object-cover object-left lg:object-center"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
              />
               <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div className="md:w-full">
                    <p className="font-bold">{post.title}</p>
                    <p className="font-bold">{new Date(post._createdAt).toDateString()}</p>
                    {/* <div className="flex flex-wrap justify-start md:gap-x-2 items-center md:justify-end">
                  {post.categories.map((category) => (
                    <div className="bg-cyan-400 m-2 md:m-0 text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div> */}
                </div>
              </div>
            </div>
        </div>
        <div className="mt-5 flex-1">
          <p className="underline text-lg font-bold">{post.title}</p>
          <p className="text-gray-500">{post.description}</p>
        </div>
        <p className="mt-5 font-bold flex items-center group-hover:underline">Read Post
        {/* <ArrowUpRightIcon/> */}
        </p>
     </ClientSideRoute>
      ))}
    </div>
  </div>
  )
}

export default BlogList