import React from 'react'

// type Props = {
//     comments: any;
//     comment: string;
//     name: string;
//   }

function Comments({ comments = [] }) {
    return (
        <>
          <div className='mx-4 py-4'>
          <h2 className="mt-10 mb-4 text-4xl lg:text-6xl leading-tight text-center">Comments</h2>
            <div>
              {comments.length > 0 ? (
                    comments?.map(({ _id, _createdAt, name, email, comment }) => (
                      <div key={_id} className="mb-5">
                        <hr className="mb-5 border-cyan-400" />
                        <h4><span className='text-cyan-500 font-bold'>On </span>{new Date(_createdAt).toDateString()}</h4>
                        <h3 className="mb-2 leading-tight">{name} commented:</h3>
                        <p>{comment}</p>
                    </div>
                    ))
              ):
              (
                <div className='py-4'>
                  <p className='text-center text-xl '>Be the first to leave a comment...</p>
                </div>
              )
          
              }
            </div>
          </div>
        </>
      )
}

export default Comments
