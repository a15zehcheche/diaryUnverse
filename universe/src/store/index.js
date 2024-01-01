import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: {
        id: '0001',
        name: "qiamo",
        profilesImg: "src",
        bgImg: "src"
      },
      diarys: [
        {
          id:'06',
          year: 2023,
          month: 3,
          day: 2,
          imgs: ['https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp', 'https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp'],
          content: '2023年 3 月 2 号 bra bra bra'
        },
        {
          id:'05',
          year: 2023,
          month: 3,
          day: 2,
          imgs: ['https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp', 'https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp'],
          content: '2023年 3 月 2 号 bra bra bra'
        },
        {
          id:'04',
          year: 2023,
          month: 3,
          day: 2,
          imgs: ['https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp', 'https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp'],
          content: '2023年 3 月 2 号 bra bra bra'
        },
        {
          id:'03',
          year: 2023,
          month: 3,
          day: 2,
          imgs: ['https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp', 'https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp'],
          content: '2023年 3 月 2 号 bra bra bra'
        },
        {
          id:'01',
          year: 2023,
          month: 3,
          day: 2,
          imgs: ['https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp', 'https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp'],
          content: '2023年 3 月 2 号 bra bra bra',
          Comment: [
            {
              user: {
                id: '0001',
                name: "qiamo",
                profilesImg: "src",
                bgImg: "src"
              },
              content: 'bra brabra'
            },
            {
              user: {
                id: '0001',
                name: "qiamo",
                profilesImg: "src",
                bgImg: "src"
              },
              content: 'bro bro bro'
            }
          ]
        },
        {
          d:'02',
          year: 2023,
          month: 3,
          day: 1,
          imgs: ['https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp', 'https://pics.craiyon.com/2023-06-09/18da4d7e6e80465ea34ccc36833b926e.webp'],
          content: '收到你们仨了呢按时到哪看见的你1三大啊阿萨德那就是等你阿萨德那六十年代深南东路',
          Comment: [
            {
              user: {
                id: '0001',
                name: "qiamo",
                profilesImg: "src",
                bgImg: "src"
              },
              content: 'bra bra bra'
            },
            {
              user: {
                id: '0001',
                name: "qiamo",
                profilesImg: "src",
                bgImg: "src"
              },
              content: 'bro bro bro'
            }
          ]
        },

      ],
      memories: [
        {
          id: 'm1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mighty_Mountains_with_Snow.jpg/640px-Mighty_Mountains_with_Snow.jpg',
          title: 'A trip into the mountains',
          description: 'It was a really nice trip!',
        },
        {
          id: 'm2',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg/640px-A_surfer_surfing_on_the_ocean_%28Unsplash%29.jpg',
          title: 'Surfing the sea side',
          description: 'Feeling the cool breeze',
        },
        {
          id: 'm3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Indian_-_Food.jpg/640px-Indian_-_Food.jpg',
          title: 'Good eating',
          description: 'Really tasty!',
        },
      ],
    };
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      };

      state.memories.unshift(newMemory);
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData);
    }
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
    diarys(state) {
      return state.diarys;
    },
  },
});

export default store;
