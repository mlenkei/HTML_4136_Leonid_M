var name_1 = prompt("Введите ваше имя");

//         function showName() {
// 	let message = "Привет, "
// 	alert(`${message + name_1}.`)

//     }

//     showName()

    switch (name_1) {
        case "": alert('Имя не выбрано '); break;
        case "Leonid": alert("Добро пожаловать дорогой Карлсон"); break
    
        default: alert('Ну и ты малыш ' + name_1 + '!, заходи');

    }

    function changeColor() {
        document.querySelectorAll(".card-title").forEach(v => v.style.backgroundColor = "red");
        document.querySelectorAll(".card-title").forEach(v => v.style.color = "green");
        }
    function changeColor1() {
        document.querySelectorAll(".card-title").forEach(v => v.style.backgroundColor = "green");
        document.querySelectorAll(".card-title").forEach(v => v.style.color = "red");
                }
        