// Schema for Episodes
module.exports = {
  name: {
    singular: 'Episode',
    plural: 'Episodes'
  },
  slug: {
    singular: 'episode',
    plural: 'episodes'
  },
  contentfulId: 'episode',
  contentfulFilenameField: 'fields.slug',
  collection: {
    sort: 'number',
    reverse: false
  },
  createPage: true,
  pagination: {
    perPage: 10
  }
}
