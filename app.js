const subbtn = document.getElementById('BTN')

subbtn.addEventListener("click", addbook)

let table = document.getElementById('books')
const taskList = document.querySelector('ul')
const bookDelete = document.querySelector('table')

bookDelete.addEventListener('click', deleteBook)

function addbook(e) {
    let row = table.insertRow(-1)
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell1.innerHTML = document.getElementById('title').value;
    cell2.innerHTML = document.getElementById('author').value;
    cell3.innerHTML = document.getElementById('isbn').value;

    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.setAttribute('href', '#')
    cell4.appendChild(a)
}

function deleteBook(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this task?')){
            e.target.parentElement.parentNode.remove()

        }
    }
}