
const submitButton = document.getElementById("submit-data")
const emptyButton = document.getElementById("empty-table")
let formName = document.getElementById("input-username")
let formEmail = document.getElementById("input-email")
let formAdmin = document.getElementById("input-admin")
let table = document.querySelector("tbody")

submitButton.addEventListener("click", addData)
emptyButton.addEventListener("click", emptyData)


function addData(){    
    event.preventDefault()

    let nameIndex = checkNames(formName.value)
    let newRow = document.createElement("tr")
    if (nameIndex != -1) {
        table.rows.item(index)

        let newEmail = document.createElement("td")
        newEmail.innerText = formEmail.value
        newRow.appendChild(newEmail)

        let newAdmin = document.createElement("td")
        if (formAdmin.checked) {
            newAdmin.textContent = "X"
        } else {
            newAdmin.textContent = "-"
        }
        newRow.appendChild(newAdmin)

        table.appendChild(newRow)
    } else {
        let newName = document.createElement("td")
        newName.innerText = formName.value
        newRow.appendChild(newName)

        let newEmail = document.createElement("td")
        newEmail.innerText = formEmail.value
        newRow.appendChild(newEmail)

        let newAdmin = document.createElement("td")
        if (formAdmin.checked) {
            newAdmin.textContent = "X"
        } else {
            newAdmin.textContent = "-"
        }
        newRow.appendChild(newAdmin)

        table.appendChild(newRow)
    }
}

function emptyData(){
    event.preventDefault()

    let length = table.rows.length
    for (let index = 0; index < length; index++) {
        table.deleteRow(0)
    }
}

function checkNames(name){

    let length = table.rows.length
    for (let index = 0; index < length; index++) {
        if (table.rows.item(index).firstChild.innerText == name) {
            return index
        } 
    }
    return -1
}