let matchNumber = document.getElementById("matchnumber");
let matchDate = document.getElementById("matchdate");
let temperature = document.getElementById("temperature");
let weatherScreen = document.getElementById("weatherscreen")
let teamA = document.getElementById("teamA");
let teamAScore = document.getElementById("teamAscore");
let teamB = document.getElementById("teamB");
let teamBScore = document.getElementById("teamBscore");
let playersTeamA = document.querySelectorAll(".playersteamA");
let playersTeamB = document.querySelectorAll(".playersteamB");

let codeMatchNumber = document.getElementById("code__matchnumber");
let codeMatchDate = document.getElementById("code__matchdate");
let codeTeamA = document.querySelectorAll(".code__teamA");
let codeTeamB = document.querySelectorAll(".code__teamB");
let codeWeatherImg = document.getElementById("code__weatherimg");
let codeWeather = document.getElementById("code__weather");
let codeTemperature = document.getElementById("code__temperature");
let codeGoldenSnitch = document.querySelectorAll(".code__goldensnitch");
let codeWinner = document.getElementById("code__winner");

function Tournament() {
    this.teams = [];
    this.weathers = [];

    this.addTeam = function(team) {
        this.teams.push(team);
    };

    this.addWeather = function(weather) {
        this.weathers.push(weather);
    };

    this.displayWeathers = function() {
        this.weathers.forEach((weather) => {
            weather.displayWeather();
        });
    };

    this.displayTeams = function() {
        this.teams.forEach((team) => {
            team.displayTeam(teamA);
            team.displayTeam(teamB);
        });
    };

    this.selectmatchteams = function (match) {
        this.teams.forEach((team, index) => {
            if (this.teams[index].name == teamA.value) {
                playersTeamA.forEach((player) => {
                    if (player.value != "") {
                        team.addPlayer(player.value);
                    };
                });
                match.addTeam(team);
            };
        });
        this.teams.forEach((team, index) => {
            if (this.teams[index].name == teamB.value) {
                playersTeamB.forEach((player) => {
                    if (player.value != "") {
                        team.addPlayer(player.value);
                    };
                });
                match.addTeam(team);
            };
        });
    };

    this.selectmatchweather = function (match) {
        let weather = document.querySelectorAll("input[name='weather']");
        weather.forEach((weatheroption) => {
            if (weatheroption.checked == true) {
                this.weathers.forEach((weather) => {
                    if (weather.name == weatheroption.value) {
                        match.matchWeather = weather;
                    };
                });
            };
        });
    };
}

function Match() {
    this.teams = [];
    this.matchNumber = matchNumber.value;
    this.matchDate = new Date(matchDate.value);
    this.matchDate = this.matchDate.toLocaleString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    this.temperature = temperature.value;
    this.matchWeather = {};

    this.addTeam = function(team) {
        this.teams.push(team);
    };

    this.getScores = function() {
        this.teams[0].score = parseInt(teamAScore.value);
        this.teams[1].score = parseInt(teamBScore.value);
    };

    this.getGoldenSnitchSeeker = function() {
        if (document.getElementById("teamAisgoldensnitchseeker").checked == true) {
            this.teams[0].goldenSnitchSeeker = true;
        } else {
            this.teams[1].goldenSnitchSeeker = true;
        };
    };

    this.getWinner = function() {
        if (
            this.teams[0].score > this.teams[1].score
            || (
                this.teams[0].score == this.teams[1].score
                && this.teams[0].goldenSnitchSeeker == true
            )
        ) {
            this.teams[0].winner = true;
        } else {
            this.teams[1].winner = true;
        };
    };
}

function Team(name, colorcode) {
    this.name = name;
    this.colorcode = colorcode;
    this.players = [];
    this.score = 0;
    this.goldenSnitchSeeker = false;
    this.winner = false;

    this.addPlayer = function(name) {
        this.players.push(name);
    };

    this.displayTeam = function(team) {
        let optionTeam = document.createElement("option");
        optionTeam.value = this.name;
        optionTeam.textContent = this.name;
        team.append(optionTeam);
    };
}

function Weather(name, description, img) {
    this.name= name;
    this.description = description;
    this.img = "weather_img/"+img;

    this.displayWeather = function () {
        let optionWeather = document.createElement("span");
        optionWeather.classList.add("weather");

        let inputWeather = document.createElement("input");
        inputWeather.type = "radio";
        inputWeather.name = "weather";
        inputWeather.id = this.name;
        inputWeather.value = this.name;
        optionWeather.append(inputWeather);

        let labelWeather = document.createElement("label");
        labelWeather.for = this.name;
        let imageWeather = document.createElement("img");
        imageWeather.src = this.img;
        imageWeather.alt = this.name;
        labelWeather.append(imageWeather);
        let descriptionWeather = document.createElement("span");
        descriptionWeather.textContent = this.description;
        labelWeather.append(descriptionWeather);
        optionWeather.append(labelWeather);

        weatherScreen.append(optionWeather);
    }
}

let tournament = new Tournament();

/* création des équipes */
let ethelred = new Team("Ethelred", "#999C9C");
tournament.addTeam(ethelred);

let grymm = new Team("Grymm", "#A3BD5A");
tournament.addTeam(grymm);

let lufkin = new Team("Lufkin", "#768DCC");
tournament.addTeam(lufkin);

let pokeby = new Team("Pokeby", "#B994D6");
tournament.addTeam(pokeby);

let summerbee = new Team("Summerbee", "#CCB406");
tournament.addTeam(summerbee);

let wright = new Team("Wright", "#D46565");
tournament.addTeam(wright);

/* création de la météo */
let clearweather = new Weather("clearweather", "Beau temps", "clear_weather.png");
tournament.addWeather(clearweather);

let fewclouds = new Weather("fewclouds", "Brumeux", "few_clouds.png");
tournament.addWeather(fewclouds);

let clouds = new Weather("clouds", "Assez nuageux", "clouds.png");
tournament.addWeather(clouds);

let manyclouds = new Weather("manyclouds", "Ciel couvert", "many_clouds.png");
tournament.addWeather(manyclouds);

let scatteredshowers = new Weather("scatteredshowers", "Quelques averses", "scattered_showers.png");
tournament.addWeather(scatteredshowers);

let showers = new Weather("showers", "Averses", "showers.png");
tournament.addWeather(showers);

let rain = new Weather("rain", "Pluie", "rain.png");
tournament.addWeather(rain);

let steadyrain = new Weather("steadyrain", "Pluie soutenue", "steady_rain.png");
tournament.addWeather(steadyrain);

let snowrain = new Weather("snowrain", "Averses de neige et pluie mélangées", "snow_rain.png");
tournament.addWeather(snowrain);

let scatteredsnow = new Weather("scatteredsnow", "Quelques flocons", "scattered_snow.png");
tournament.addWeather(scatteredsnow);

let snow = new Weather("snow", "Neige", "snow.png");
tournament.addWeather(snow);

let steadysnow = new Weather("steadysnow", "Neige soutenue", "steady_snow.png");
tournament.addWeather(steadysnow);

let scatteredstorm = new Weather("scatteredstorm", "Quelques orages", "scattered_storm.png");
tournament.addWeather(scatteredstorm);

let storm = new Weather("storm", "Orages", "storm.png");
tournament.addWeather(storm);

let hail = new Weather("hail", "Grêle", "hail.png");
tournament.addWeather(hail);

let freezingrain = new Weather("freezingrain", "Pluie verglaçante", "freezing_rain.png");
tournament.addWeather(freezingrain);

tournament.displayWeathers();
tournament.displayTeams();

/* génération du code pour le post */
function createcode() {
    let match = new Match();
    tournament.selectmatchteams(match);
    tournament.selectmatchweather(match);
    match.getScores();
    match.getGoldenSnitchSeeker();
    match.getWinner();

    if (match.matchNumber == "1") {
        codeMatchNumber.textContent = match.matchNumber + "er";
    } else {
        codeMatchNumber.textContent = match.matchNumber + "ème";
    }
    
    codeMatchDate.textContent = match.matchDate;

    codeTeamA.forEach((span) => {
        span.textContent = "[color=" + match.teams[0].colorcode + "]" + match.teams[0].name + "[/color]";
    });
    codeTeamB.forEach((span) => {
        span.textContent = "[color=" + match.teams[1].colorcode + "]" + match.teams[1].name + "[/color]";
    });

    codeWeatherImg.textContent = match.matchWeather.img;
    codeWeather.textContent = match.matchWeather.description;
    codeTemperature.textContent = match.temperature;

    codeGoldenSnitch.forEach((span) => {
        if (match.teams[0].goldenSnitchSeeker == true) {
            span.textContent = "[color=" + match.teams[0].colorcode + "]" + match.teams[0].name + "[/color]";
        } else {
            span.textContent = "[color=" + match.teams[1].colorcode + "]" + match.teams[1].name + "[/color]";
        };
    });
    
    if (match.teams[0].winner == true) {
        codeWinner.textContent = "[color=" + match.teams[0].colorcode + "]" + match.teams[0].name + "[/color]";
    } else {
        codeWinner.textContent = "[color=" + match.teams[1].colorcode + "]" + match.teams[1].name + "[/color]";
    };
};

function test() {
    let match = new Match();
    tournament.selectmatchweather(match);
    console.log(match.matchWeather);
};

let postcreationButton = document.getElementById("postcreation");
postcreationButton.addEventListener("click", createcode);