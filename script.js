var app = new Vue ({
  el: '#app',
  data: {
    geoLocation: '',
    backgroundImg: '',
  },
  created() {
    this.getMountainImage();
  },
  methods: {
    async getMountainImage() {
      try {
        const url = "https://source.unsplash.com/1600x900/?outdoors";
        const response = await axios.get(url)
        const data = response.config.url
        backgroundImg = data;
        console.log("Response: ", response);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {

  }
});
