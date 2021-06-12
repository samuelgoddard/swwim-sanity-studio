export default {
  title: "Case Studies",
  name: 'caseStudy',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The case study name",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Images",
      description: 'The gallery of images for this case study, the first image will be used as the teaser image',
      name: 'images',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'image'
      }],
      validation: Rule => Rule.min(1)
    },
    {
      title: 'Deliverables',
      name: 'deliverables',
      description: 'The deliverables for this case study',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'caseStudyDeliverable'}
          ]
        }
      ],
    },
    {
      title: "About",
      name: 'about',
      description: 'A short paragraph about this case study',
      type: 'text',
      rows: 4,
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}