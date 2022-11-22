export function sortGameData(games, key) {

    // initial load, so bypass the sorting logic enitrely  
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