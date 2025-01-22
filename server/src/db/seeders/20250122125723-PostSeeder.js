"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Posts",
      [
        {
          content:
            "Только что закончил новый проект. Железный человек всегда на шаг впереди! #ЖелезныйЧеловек",
          userId: 1, // Тони Старк
          likeCount: Math.floor(Math.random() * 100), // Случайное количество лайков
          image: "https://example.com/ironman.jpg", // Ссылка на изображение
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Молот поднимает только достойный. А я достоин! #Тор",
          userId: 2, // Тор
          likeCount: Math.floor(Math.random() * 100),
          image: null, // Пост без изображения
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "С большой силой приходит большая ответственность. 🕷️ #ЧеловекПаук",
          userId: 3, // Питер Паркер
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/spiderman.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Я есть Грут. 🌳 #Грут",
          userId: 4, // Грут
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/groot.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Я не злодей. Я просто... misunderstood. #Локи",
          userId: 5, // Локи
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/loki.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Ещё один день, ещё один спасённый мир. #ЖелезныйЧеловек",
          userId: 1, // Тони Старк
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Гроза и молния — мои лучшие друзья. #Тор",
          userId: 2, // Тор
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/thor.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Паутина — это не только для пауков. 🕸️ #ЧеловекПаук",
          userId: 3, // Питер Паркер
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content:
            "Я есть Грут. 🌳 (Серьёзно, это всё, что я могу сказать.) #Грут",
          userId: 4, // Грут
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Кто-то сказал 'хаос'? Это моя специальность. #Локи",
          userId: 5, // Локи
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/loki2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Я люблю тебя 3000. 💖 #ЖелезныйЧеловек",
          userId: 1, // Тони Старк
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Асгард — это не место, это люди. #Тор",
          userId: 2, // Тор
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Соседи, я на страже! 🕷️ #ЧеловекПаук",
          userId: 3, // Питер Паркер
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/spiderman2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Я есть Грут. 🌳 (И это всё, что вам нужно знать.) #Грут",
          userId: 4, // Грут
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Я не ищу трон. Я создаю хаос. #Локи",
          userId: 5, // Локи
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Мой новый костюм готов. Кто следующий? #ЖелезныйЧеловек",
          userId: 1, // Тони Старк
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/ironman2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Молот Мьёльнир всегда найдёт меня. #Тор",
          userId: 2, // Тор
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Паутина — это не только для ловли мух. 🕸️ #ЧеловекПаук",
          userId: 3, // Питер Паркер
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Я есть Грут. 🌳 (И это всё, что я скажу.) #Грут",
          userId: 4, // Грут
          likeCount: Math.floor(Math.random() * 100),
          image: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Хаос — это не проблема, это решение. #Локи",
          userId: 5, // Локи
          likeCount: Math.floor(Math.random() * 100),
          image: "https://example.com/loki3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
