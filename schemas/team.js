export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'member_name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'member_position',
      title: 'Position',
      type: 'string'
    },
    {
      name: 'member_imgurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    }
  ]
}
