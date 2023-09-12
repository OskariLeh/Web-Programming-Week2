
const submitButton = document.getElementById("submit-data")
const emptyButton = document.getElementById("empty-table")
let formName = document.getElementById("input-username")
let formEmail = document.getElementById("input-email")
let formAdmin = document.getElementById("input-admin")
let fileInput = document.getElementById("input-image")
let table = document.querySelector("tbody")

submitButton.addEventListener("click", addData)
emptyButton.addEventListener("click", emptyData)

function addData(){    
    event.preventDefault()

    let nameIndex = checkNames(formName.value)
    
    if (nameIndex != -1) {
        table.rows.item(nameIndex).childNodes[1].textContent = formEmail.value

        if (formAdmin.checked) {
            table.rows.item(nameIndex).childNodes[2].textContent = "X"
        } else {
            table.rows.item(nameIndex).childNodes[2].textContent = "-"
        }

        let imageLocation = URL.createObjectURL(new File(fileInput.files, "img"))
        table.rows.item(nameIndex).childNodes[3].firstChild.src = imageLocation
        table.rows.item(nameIndex).childNodes[3].firstChild.width = "64"
        table.rows.item(nameIndex).childNodes[3].firstChild.height = "64"
        
    } else {
        let newRow = document.createElement("tr")

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
        
        let imageLocation = URL.createObjectURL(new File(fileInput.files, "img"))
        let newImageCell = document.createElement("td")
        let newImage = document.createElement("img")
        newImage.src = imageLocation
        newImage.width = "64"
        newImage.height = "64"
        newImageCell.appendChild(newImage)
        newRow.appendChild(newImageCell)

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