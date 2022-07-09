//Jace's api
// const URL = "https://forum2022.codeschool.cloud";

//My local server url
const URL = "http://localhost:8080"

var app = new Vue({
    el: "#app",
    data: {
        curPage: 1,
        streetName: "",
        cityName: "",
        stateName: "",
        zipCode: "",
        googleMapsURL: "",
    },
    methods: {
        //functions here
        //GET /session - Ask the server if we are logged in
        generateURL: function () {
            this.googleMapsURL = "https://www.google.com/maps/place/";
            //This line replaces all spaces with a "+"
            let newStreetName = this.streetName.replace(/ /g, "+");
            //This line replaces all spaces with a "+"
            let newCityName = this.cityName.replace(/ /g, "+"); 
            this.googleMapsURL = this.googleMapsURL + newStreetName + ",+" + newCityName + ",+" + this.stateName + ",+" + this.zipCode;
            console.log(this.googleMapsURL);
        }
    },
    computed: {
    }
});