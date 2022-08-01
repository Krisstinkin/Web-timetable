let username = prompt("Введите имя:")
let myTitle = document.getElementById ("title")
let count = 0

if(username) {
    myTitle.innerHTML = "Список дел " + username
} else {
    myTitle.innerHTML = "Список дел анонимного пользователя"
}

function makeDo() {
let myContainer = document.getElementById("container")
let myInput = document.getElementById("input")
let value = myInput.value

let myError = document.getElementById ("error")

if(count > 5) {
    document.getElementById("error").innerHTML = "Можно ввести до пяти дел"
    return

}

count = count + 1
myContainer.innerHTML = myContainer.innerHTML + count + ". " + value + "</p>"

}



