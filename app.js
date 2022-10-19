const subbtn = document.getElementById('BTN')
const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
document.addEventListener('DOMContentLoaded', getBooks)
const masterTable = document.querySelector('#books')
subbtn.addEventListener("click", addbook)

let table = document.getElementById('books')
const bookDelete = document.querySelector('table')

bookDelete.addEventListener('click', deleteBook)

function addbook(e) {
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell1.innerHTML = title.value;
    cell2.innerHTML = author.value;
    cell3.innerHTML = isbn.value;

    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    cell4.appendChild(a)
    addTaskLS(title.value, author.value, isbn.value)
    title.value = ""
    author.value = ""
    isbn.value = ""
}
function getBooks(){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((book) => {
        console.log(book)

        const getRow = masterTable.insertRow()

        const getCell1 = getRow.insertCell()
        const getCell2 = getRow.insertCell()
        const getCell3 = getRow.insertCell()
        const getCell4 = getRow.insertCell()

        const getCross = document.createElement('a')
        getCross.appendChild(document.createTextNode('X'))
        getCross.className = 'red-text text-darken-2 secondary-content'
        getCross.setAttribute('href', '#')

        getCell1.innerHTML = book[0].toString()
        getCell2.innerHTML = book[1].toString()
        getCell3.innerHTML = book[2].toString()
        getCell4.appendChild(getCross)
    })
}
function deleteBook(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this task?')){
            e.target.parentElement.parentNode.remove()
            deleteTaskLS(e.target.parentElement.textContent.slice(0,-1))
            localStorage.clear()
        }
    }
}



function deleteTaskLS(title, author, isbn) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((taskLS, taskIndex) => {
        if(taskLS === books){
            books.splice(taskIndex, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}


function addTaskLS(title, author, isbn) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    let book = [title, author, isbn]
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}