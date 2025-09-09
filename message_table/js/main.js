let messages = JSON.parse(localStorage.getItem("messages")) || [];

const tbody = document.getElementById("messagesBodyTable");
tbody.innerHTML = "";

messages.forEach((msg, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${msg.name}</td>
            <td>${msg.email}</td>
            <td>${msg.phone}</td>
            <td>${msg.message}</td>
        `;
    tbody.appendChild(row);
});