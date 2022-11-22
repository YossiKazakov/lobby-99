export function parseGames({ data }){
    let games = []
    data.forEach((e) => {
        const game = {
        id: e.id,
        year: (e.date.substring(0,4)),
        month: (e.date.substring(5,7)),
        day: (e.date.substring(8,10)),
        home: e.home_team.full_name,
        homeScore: e.home_team_score,
        period: (e.period == 4 && e.status == "Final" ? 5 : e.period),
        season: e.season,
        status: e.status,
        time: e.time,
        visitor: e.visitor_team.full_name,
        visitorScore: e.visitor_team_score};
        games.push(game);
      });
    return games;
}


export function sortGameData(games, key) {
    const sorted = games.sort((a, b) => {
        if (a.year > b.year) {
            return key === "newest" ? 1 : -1;
        }
        if (a.year == b.year && a.month > b.month) {
            return key === "newest" ? 1 : -1;
        }
        if (a.year == b.year && a.month == b.month && a.day > b.day) {
            return key === "newest" ? 1 : -1;
        }
        if (a.year < b.year) {
            return key === "newest" ? -1 : 1;
        }
        if (a.year == b.year && a.month < b.month) {
            return key === "newest" ? -1 : 1;
        }
        if (a.year == b.year && a.month == b.month && a.day < b.day) {
            return key === "newest" ? -1 : 1;
        }
        return 0;
    })
    return sorted;
}

export function filterGameData(games, key) {
    if (key==="ended") {
        return games.filter((game) => game.period > 4);
    }
    else {
        if (key==="future") {
          return games.filter((game) => game.period < 1);
        }
        else {
            if (key==="live") {
            return games.filter((game) => (game.period > 0 && game.period < 5));
            }
        }
    } 
}