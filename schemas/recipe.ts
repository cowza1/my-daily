import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'recipe',
    type: 'document',
    title: 'Recipe',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'desc',
            title: 'Desc',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
    ]
})