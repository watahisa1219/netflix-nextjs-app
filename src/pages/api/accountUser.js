export default function handler(req, res) {
  res.status(200).json(
    [
      {
        name: '一郎',
        picture: '/image/emerald.jpg',
      },
      {
        name: '次郎',
        picture: '/image/yellow.jpg',
      },
      {
        name: '三郎',
        picture: '/image/blue.jpg',
      },
      {
        name: '四郎',
        picture: '/image/brown.jpg',
      },
      {
        name: '五郎',
        picture: '/image/green.jpg',
      },
    ]
  )
}