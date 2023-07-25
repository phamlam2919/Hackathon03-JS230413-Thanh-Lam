let tableBody = document.getElementById("table-body");
let form = document.getElementById("createGameForm");
let baseURL = "http://localhost:3000/api/v1/users";
let currentPlayerData =
    JSON.parse(localStorage.getItem("currentPlayerData")) || [];

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const user = {
        username1: form.player1.value,
        username2: form.player2.value,
        username3: form.player3.value,
        username4: form.player4.value,
    };
    try {
        let res = await fetch(baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        let response = await res.json();
        console.log(response);

        currentPlayerData = [
            user.username1,
            user.username2,
            user.username3,
            user.username4,
        ];
        localStorage.setItem(
            "currentPlayerData",
            JSON.stringify(currentPlayerData)
        );

        updateTable();
        form.reset();
    } catch (error) {
        console.error("Error:", error);
    }
});

function updateTable() {
    tableBody.innerHTML = "";
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
                <th>#</th>
                <th>${currentPlayerData[0]}</th>
                <th>${currentPlayerData[1]}</th>
                <th>${currentPlayerData[2]}</th>
                <th>${currentPlayerData[3]}</th>
            `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);
}

updateTable();
