export default {
  title: 'Stats',
  name: 'statBlock',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'heading',
      description: 'The optional heading text for this stat block'
    },
    {
      type: 'array',
      name: 'stats',
      of: [{ type: 'stat' }]
    },
  ],
  preview: {
    select: {
      stat0: 'stats.0.heading',
      stat1: 'stats.1.heading'
    },
    prepare(selection) {
      return {
        title: `Stat Block: (${[selection.stat0, selection.stat1].join(', ')}... etc)`
      }
    }
  }
}
