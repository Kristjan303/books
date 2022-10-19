const subbtn = document.getElementById('BTN')
const title = document.getElementById('title')
const author = document.getElementById('author')
const isbn = document.getElementById('isbn')
document.addEventListener('DOMContentLoaded', getTasks)

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
function getTasks(){
    let Book
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((task) => {
        const tr = document.createElement('th')
        tr.appendChild(document.createTextNode(task))
        tr.className = 'collection-item'
        const a = document.createElement('a')
        a.appendChild(document.createTextNode('X'))
        a.className = 'blue-text text-darken-2 secondary-content'
        a.setAttribute('href', '#')
        tr.appendChild(a)
        // add to list
        const th = document.querySelector('ul')
        th.appendChild(tr)
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