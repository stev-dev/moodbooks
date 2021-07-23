let categoryTitle= "categoryTitle",categoryAuthor="categoryAuthor"
,coverImg = "coverImg", booksContainer = "booksContainer"
,title="title", author = "author"

document.getElementById("subject").innerHTML = localStorage.getItem("categorysubject")
let datalength = localStorage.getItem("dataLength")

const BookContainerStyles = {
    width: '250px',
    margin: '15px',
    background: 'radial-gradient(#1fe4f5, #3fbafe)',
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.5s',

    padding: '15px',
    borderRadius: '10px',
    textAlign: 'center'
}
const booksContainerHover =  {
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.4)',
    transform: 'scale(1.01)'
}

for(let i = 0; i<datalength ; i++){
    let boonOuterCtn = document.getElementById('bookOuterContainer')
    let booksDiv = document.createElement("div");
    booksDiv.id = booksContainer+i;
    boonOuterCtn.appendChild(booksDiv);

    Object.assign(booksDiv.style, BookContainerStyles)
    // Object.assign(//how to hover dynamicaly, booksContainerHover)
    
    let covrImgtag = document.createElement("img");
    covrImgtag.id = coverImg+i;
    covrImgtag.style.cssText = 'max-height: 250px;';
    booksDiv.appendChild(covrImgtag);
    
    let bookTitle = document.createElement("h2");
    bookTitle.id = title+i;
    bookTitle.textContent  = "Title: ";
    booksDiv.appendChild(bookTitle);
    
    let bookAuthor = document.createElement("h4");
    bookAuthor.id = author+i;
    bookAuthor.innerHTML = "Author: ";
    booksDiv.appendChild(bookAuthor);

    let imgCover = localStorage.getItem(coverImg+i)
    document.getElementById(coverImg+i).setAttribute("src", "https://covers.openlibrary.org/b/id/"+imgCover+"-M.jpg")
    document.getElementById(title+i).innerHTML += localStorage.getItem(categoryTitle+i)
    document.getElementById(author+i).innerHTML += localStorage.getItem(categoryAuthor+i)
}