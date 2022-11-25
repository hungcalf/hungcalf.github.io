
let matchNumber = document.getElementById("matchnumber");
let matchDate = document.getElementById("matchdate");
let teamA = document.getElementById("teamA");
let teamB = document.getElementById("teamB");
let playersTeamA = document.querySelectorAll(".playersteamA");
let playersTeamB = document.querySelectorAll(".playersteamB");

function Tournament() {
    this.teams = [];

    this.addTeam = function(team) {
        this.teams.push(team);
    };

    this.selectmatchteams = function (match) {
        this.teams.forEach((team, index) => {
            if (this.teams[index].name == teamA.value) {
                playersTeamA.forEach((player) => {
                    if (player.value != ""){
                        team.addPlayer(player.value);
                    };
                });
                match.addTeam(team);
            };
        });
        this.teams.forEach((team, index) => {
            if (this.teams[index].name == teamB.value) {
                playersTeamB.forEach((player) => {
                    if (player.value != ""){
                        team.addPlayer(player.value);
                    };
                });
                match.addTeam(team);
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

    this.addTeam = function(team) {
        this.teams.push(team);
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
    }
}

let tournament = new Tournament();

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

function createcode() {
    let match = new Match();
    tournament.selectmatchteams(match);
};

function test() {
    let match = new Match();
    console.log(match.matchNumber);
    tournament.selectmatchteams(match);
    console.log(match.teams);
    playersTeamA.forEach((player) => {
        console.log(player.value);
    });
};

let postcreationButton = document.getElementById("postcreation");
postcreationButton.addEventListener("click", test);