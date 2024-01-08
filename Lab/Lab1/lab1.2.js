const game = {
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
    team1: "Bayern Munich",
    team2: "Borrusia Dortmund",
};

// In ra cầu thủ cùng với số bàn thắng đã ghi
game.scored.forEach((player, index) => {
    console.log(`Bàn thắng ${index + 1}: ${player}`);
});

// Tính và in tỷ lệ trung bình của trận đấu
const oddsValues = Object.values(game.odds);
const averageOdds =
    oddsValues.reduce((sum, odd) => sum + odd, 0) / oddsValues.length;
console.log(`Tỷ lệ trung bình của trận đấu: ${averageOdds.toFixed(2)}`);

// In tỷ lệ cược theo định dạng yêu cầu
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr =
        team === "team1"
            ? `Tỉ lệ thắng của ${game[team]}`
            : team === "team2"
            ? `Tỉ lệ thắng của ${game[team]}`
            : `Tỉ lệ hòa`;
    console.log(`${teamStr}: ${odd}`);
}

// Tạo ra đối tượng 'scorers'
const scorers = {};
game.scored.forEach((player) => {
    scorers[player] = scorers[player] ? scorers[player] + 1 : 1;
});
console.log(scorers);
