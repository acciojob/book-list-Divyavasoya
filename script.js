//your JS code here. If required.
document.getElementById("submit").addEventListener("click", addBook);

function addBook() {
    // Get input values
    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let isbn = document.getElementById("isbn").value.trim();
    
    // Validate input
    if (title === "" || author === "" || isbn === "") {
        alert("Please fill in all fields!");
        return;
    }

    // Get table body
    let bookList = document.getElementById("book-list");

    // Create new row
    let row = document.createElement("tr");

    // Add cells
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Append row to table
    bookList.appendChild(row);

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

    // Add event listener to delete button
    row.querySelector(".delete").addEventListener("click", function () {
        row.remove();
    });
}