export default {
  title: "Team",
  name: 'team',
  type: "document",
  fields: [
    {
      title: "First Name",
      name: "firstName",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Second Name",
      name: "secondName",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Job Title",
      description: "This persons job title, eg: 'Director'",
      name: "jobTitle",
      type: "string",
    },
    {
      title: 'Image',
      description: 'An avatar of the person',
      name: 'image',
      type: 'image',
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ]
}