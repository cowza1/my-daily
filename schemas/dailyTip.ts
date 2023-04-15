import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'DailyTip',
    type: 'document',
    title: 'DailyTip',

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
    ]
})