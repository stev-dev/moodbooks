const submitButton = document.getElementById('submit')
submitButton.addEventListener("click", fetchFromSearchBar);

//in order to search for a specific book i have to create a helper function 
//to match the search query with the api format needed to make the call
function makeQueryCallable (searchQuery){
    //searchQuery is a str, we want to add a + sign instead of the spaces
    return searchQuery.split(" ").join("+")
}

function fetchFromSearchBar(){
    //the api endpoint should be in thiis format 
    //http://openlibrary.org/search.json?q=the+lord+of+the+rings
    let searchInputValue = document.getElementById('query-area').value
    let callablequery = makeQueryCallable(searchInputValue);
    let fetchUrl = "http://openlibrary.org/search.json?q="+callablequery
    
    fetch(fetchUrl).then(resp=>{
        if(!resp.ok){
            console.log("something went wrong")
            return "something went wrong"
        }else{
            return  resp.json()
        }
    }).then(data=> {
        //because of the nature of the promise the data manipulation and the work we want to do needs
        //to be inside the second promise 
        //we want to assing a bunch of variables to local storage
        localStorage.setItem("booktitle", data.docs[0].title)
        localStorage.setItem("bookAuthor", data.docs[0].author_name[0])
        localStorage.setItem("firstPublishYear", data.docs[0].first_publish_year)
        localStorage.setItem("subject", data.docs[0].subject[0])
        localStorage.setItem("bookIsbn", data.docs[0].isbn[0])
        localStorage.setItem("bookeditionKey", data.docs[0].cover_edition_key)//OL26314691M is the cover_edition_key of the book
        window.document.location = "./singlebook.html"
        //console.log(data.docs[0])
    })// !!! docs is an array 
    document.getElementById('query-area').value = ""
}

function makeCategoryQueryCallable (str){
    return str.split(" ").join("_")
}
function categorySearch (event){
    console.log(event.currentTarget.innerText.toLowerCase())
    let theCategorySelected = event.currentTarget.innerText.toLowerCase()
    let finalquery = makeCategoryQueryCallable(theCategorySelected)

    fetch("https://openlibrary.org/subjects/"+finalquery+".json")
    .then(res => res.json())//parse the result as json
    .then(data => {
        //let randomKey = Math.floor(Math.random() * data.works.length) 
        let dataLength = data.works.length
        
        localStorage.setItem("dataLength", data.works.length)
        localStorage.setItem("categorysubject" ,data.works[0].subject[0] )
        for(let i= 0; i < dataLength; i++){
            localStorage.setItem("categoryTitle"+i , data.works[i].title)
            localStorage.setItem("categoryAuthor"+i , data.works[i].authors[0].name)
            localStorage.setItem("coverImg"+i , data.works[i].cover_id)
            localStorage.setItem("bookCoverEditionKey"+i, data.works[i].cover_edition_key)
        }

        window.document.location = "./books.html"
    })//here we access the resulted data and i want to get the works
}
/**works is an array
data.works.map(elem =>{
    elem.key//this is the key:"/works/OL1548597W" we will use it to 
    
    //call the openlibrary.org/key to get informations about this specific book
    //so we need to use another fetch using this key
    //then render the data
    //in terms of rendering we want to create different html elements to hold data

    //!!!~~ now it's clear that we need to store this key in a local storage var
    //and then do the fetch in the books script in order to do the above steps

    //ahh we need a list of keys of all the works 
    //so i will write a helper func for that
})
**/