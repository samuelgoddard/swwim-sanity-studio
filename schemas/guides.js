import slugify from '../utils/slugify'

export default {
  title: "Guides / Downloads",
  name: 'guides',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this news article",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Download File",
      description: "The file that the user will download from this guide",
      name: "download",
      type: "file",
      validation: Rule => Rule.required()
    },
    {
      title: "Intro Text",
      description: "The short text intro that appears in the hero",
      name: "introText",
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: "Hero Image",
      description: "The image that will appear in the hero and the teaser for this article",
      name: "heroImage",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      title: 'Content',
      description: "The main content area, use the + button top right to add component blocks",
      name: 'content',
      type: 'blockContentGuides',
    },
    {
      title: "Signup Heading",
      description: "The heading text for the signup area in the footer",
      name: "newsletterSignupHeading",
      type: "string"
    },
    {
      title: "Signup Text",
      description: "The text for the signup area in the footer",
      name: "newsletterSignupText",
      type: "text",
      rows: 4,
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: title => slugify(title)
      },
      validation: Rule => Rule.required()
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