import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'mealPlan',
    type: 'document',
    title: 'Meal Plan',

    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'desc',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          }),
          defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }),
          defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
          }),
          defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
          }),
    ]
})