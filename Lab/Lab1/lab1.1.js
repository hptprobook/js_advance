const game = {
    team1: "Bayern Munich",
    team2: "Borrusia Dortmund",
    players: [
        [
            "Neuer", // Thủ môn Bayern
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki", // Thủ môn Dortmund
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: {
        Davies: 1,
        Muller: 1,
        Lewandowski: 1,
        Kimmich: 1,
    },
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
};

// Nhiệm vụ 1
const [players1, players2] = game.players;

// Nhiệm vụ 2
const [gk, ...fieldPlayers] = players1;

// Nhiệm vụ 3
const allPlayers = [...players1, ...players2];

// Nhiệm vụ 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// Nhiệm vụ 5
const { team1, draw, team2 } = game.odds;

// Nhiệm vụ 6
function printGoals(...players) {
    console.log(
        `${players.length} bàn thắng được ghi bởi: ${players.join(", ")}`
    );
}

// Nhiệm vụ 7
console.log(
    `Đội có tỷ lệ cược thấp hơn là: ${team1 < team2 ? game.team1 : game.team2}`
);

// Kiểm tra hàm printGoals với các cầu thủ đã cho
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// Chạy hàm với game.scored
printGoals(...Object.keys(game.score));
