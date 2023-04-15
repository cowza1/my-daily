import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'subscription',
    type: 'document',
    title: 'Subscription',

    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string',
        }),
        defineField({
            name: 'info',
            title: 'Info',
            type: 'array',
            of: [{type: 'string'}]
          }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
    ]
})