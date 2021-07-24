
let bookIsbnfromApi = localStorage.getItem("bookIsbn")
let bookEditionKey = localStorage.getItem("bookeditionKey");

document.getElementById("title").innerHTML += localStorage.getItem("booktitle")
document.getElementById("author").innerHTML += localStorage.getItem("bookAuthor")
document.getElementById("subject").innerHTML = localStorage.getItem("subject")
document.getElementById("firstPublished").innerHTML += localStorage.getItem("firstPublishYear")
document.getElementById("coverImg").setAttribute("src", "https://covers.openlibrary.org/b/isbn/"+bookIsbnfromApi+"-M.jpg")
document.getElementById("bookKey").setAttribute("href", "https://openlibrary.org/books/"+bookEditionKey)