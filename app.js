const App = {
    data() {
      return {
        appTitle: 'Небольшие советы',
        activeIndex: 0,
        advices: [
          {
            title: 'Начало дня',
            text: 'Начни с самого важного дела дня.',
          },
          {
            title: 'Вода',
            text: 'Пей достаточно воды.',
          },
          {
            title: 'Фокус',
            text: 'Фокусируйся на одном деле, избегай многозадачности.',
          },
          {
            title: 'Атомные проценты',
            text: 'Каждый день становись лучше хотя бы на 1%.',
          },
          {
            title: 'Нет.',
            text: "Научись говорить 'нет' отвлекающим вещам и людям.",
          },
        ],
        stepContent: '',
      };
    },
    methods: {
      prev() {
        this.activeIndex > 0 ? this.activeIndex-- : null;
        this.setStepContent();
      },
      reset() {
        this.activeIndex = 0;
        this.setStepContent();
      },
      setActive(event, index) {
        this.activeIndex = index;
        this.setStepContent();
      },
      nextOrFinish() {
        this.activeIndex < 4 ? this.activeIndex++ : null;
        this.setStepContent();
      },
  
      setStepContent() {
        this.stepContent = this.advices[this.activeIndex].text;
      },
    },
    mounted() {
      this.setStepContent();
    },
  };
  
  Vue.createApp(App).mount('#app');
  