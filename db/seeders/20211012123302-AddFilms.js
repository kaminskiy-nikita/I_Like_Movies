const films = [
  {
    title: 'Сиротский Бруклин',
    year: 2019,
    genre: 'детектив',
    rating: 7,
    img: 'bryklin.jpg',
    isNew: true,
    isRecommend: true,
    price: 290,
  },
  {
    title: 'Сплит',
    year: 2018,
    genre: 'психотриллер',
    rating: 8,
    img: 'glass.jpg',
    isNew: true,
    isRecommend: true,
    price: 110,
  },
  {
    title: 'Соло - Звездные воины',
    year: 2016,
    genre: 'фантастика',
    rating: 7,
    img: 'solo.jpg',
    isNew: true,
    isRecommend: true,
    price: 230,
  },
  {
    title: 'Звездные воины',
    year: 2019,
    genre: 'фантастика',
    rating: 7,
    img: 'starWars.jpg',
    isNew: true,
    isRecommend: true,
    price: 170,
  },
  {
    title: 'Доктор Стрэндж',
    year: 2019,
    genre: 'фантастика',
    rating: 8,
    img: 'Tilda_Swinton_as_Ancient_One.jpg',
    isNew: true,
    isRecommend: true,
    price: 230,
  },
  {
    title: 'Сиротский Бруклин',
    year: 2017,
    genre: 'мультфильм',
    rating: 9,
    img: 'zveropolis.jpg',
    isNew: true,
    isRecommend: true,
    price: 150,
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {

    for (let i = 0; i < films.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await queryInterface.bulkInsert('Films', [{
        title: films[i].title,
        year: films[i].year,
        genre: films[i].genre,
        rating: films[i].rating,
        img: films[i].img,
        isNew: films[i].isNew,
        isRecommend: films[i].isRecommend,
        price: films[i].price,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Films', null, {});
  },
};
