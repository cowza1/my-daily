import {defineField, defineType} from 'sanity'


export default defineType({
    name: 'comment',
    type: 'document',
    title: 'Comment',
    
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
      defineField({
        title: 'Approved',
        name: 'approved',
        type: 'boolean',
        description: "Comments won't show on the site without approval"
      }),   
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
      defineField({
        name: 'comment',
        title: 'Comment',
        type: 'text',
      }),
      defineField({
        name: 'post',
        title: 'Post',
        type: 'reference',
        to: [
          {type: 'post'}
        ]
      })
    ],
  })