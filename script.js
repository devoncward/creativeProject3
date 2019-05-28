var app = new Vue ({
  el: '#app',
  data: {
    geoLocation: '',
    geoLat: '',
    geoLong: '',
    backgroundImg: '',
    hikes: {},
  },
  created() {
    this.getMountainImage();
    this.getLongLat();
  },
  methods: {
    async getMountainImage() {
      try {
        const url = "https://source.unsplash.com/1600x900/?outdoors";
        const response = await axios.get(url)
        const data = response.config.url
        this.backgroundImg = data;
        console.log("Response: ", response);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async getLongLat() {
      const url = "http://api.openweathermap.org/data/2.5/weather?q=" + "Provo" + ",US&units=imperial" + "&APPID=cf3be95cf53b4267405bcea8c73696ee";
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      this.geoLong = json.coord.lon;
      this.geoLat = json.coord.lat;
      console.log("latitude: ", this.geoLat, " longitude: ", this.geoLong);
      this.getHikingTrails();
    },
    async getHikingTrails() {
      const url = "https://www.hikingproject.com/data/get-trails?lat=" + this.geoLat + "&lon=" + this.geoLong + "&maxDistance=20&key=200478900-f017ed4af606d3aa2ca01907336330f4";
      console.log(url);
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);

    }
  },
  computed: {

  }
});
