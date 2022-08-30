export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getDate(),
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos ducimus nemo distinctio architecto atque accusantium provident sit consequatur sequi obcaecati, dolor nesciunt, incidunt, alias ipsam maiores voluptatibus omnis nihil.',
      picture: null,
    },
    {
      id: new Date().getDate() + 1000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos ducimus nemo distinctio architecto atque accusantium provident sit consequatur sequi obcaecati, dolor nesciunt, incidunt, alias ipsam maiores voluptatibus omnis nihil.',
      picture: null,
    },
    {
      id: new Date().getDate() + 2000,
      date: new Date().toDateString(),
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos ducimus nemo distinctio architecto atque accusantium provident sit consequatur sequi obcaecati, dolor nesciunt, incidunt, alias ipsam maiores voluptatibus omnis nihil.',
      picture: null,
    },
  ],
})
