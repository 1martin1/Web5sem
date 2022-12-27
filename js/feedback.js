let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
table.className = "table";

document.getElementById('table').appendChild(table);

let heading_1 = document.createElement('th');
heading_1.innerHTML = "Name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Message";

values = [];

document.getElementById('reviews').addEventListener('submit', function (e) {
    e.preventDefault(); //предотвратит отправку формы при сабмите

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    e.target.reset();

    var row = document.createElement("tr")
    var td1 = document.createElement("td")
    td1.appendChild(document.createTextNode(name))
    var td2 = document.createElement("td")
    td2.appendChild(document.createTextNode(message))
    row.appendChild(td1);
    row.appendChild(td2);
    tbody.appendChild(row);


    const data = "Имя: " + name + " Сообщение: " + message
    values.push({data});
    localStorage.setItem('test', JSON.stringify(values));
    console.log(localStorage.test)
});