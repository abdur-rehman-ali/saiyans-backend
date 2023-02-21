export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Member Name',
      type: 'string'
    },
    {
      name: 'position',
      title: 'Member Position',
      type: 'string'
    },
    {
      name: 'imgurl',
      title: 'Member ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ]
}
