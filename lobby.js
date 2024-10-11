let gameListData = {
    game1: {
        name: "olleystone",
        players: 0,
        open: true
    },
    game2: {
        name: "pete",
        players: 9,
        open: false
    }
}

addListDataToLobby(gameListData);

function addListDataToLobby(listData){
    let gameList = document.querySelector("#gameList");

    for (const key in listData){
        const game = listData[key];
        addListItem(game, gameList);
    }
}

function addListItem(game, list){

    const listItem = document.createElement("li");
    const listText = document.createTextNode(game.name + "'s Game " + game.players + "/9");
    const listButton = document.createElement("button");

    listButton.innerHTML = "Join";
    listButton.disabled = true;

    if (game.players < 9) listButton.disabled = false;

    listItem.appendChild(listText);
    listItem.appendChild(listButton);

    list.appendChild(listItem);
}


