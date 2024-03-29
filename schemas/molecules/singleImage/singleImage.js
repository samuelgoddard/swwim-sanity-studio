export default {
  title: 'Single Image',
  type: 'object',
  name: 'singleImage',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare(selection) {
      return {
        title: `Single Image`,
        media: selection.image
      }
    }
  }
}
