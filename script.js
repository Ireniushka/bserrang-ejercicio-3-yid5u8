// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". 

let users = fetch('./users.json').then(response => response.json()).then(data => console.log(data));


//Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".

let usersFilter = (users) => users.filter(user => user.money > 500);

// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.

function print(usersFilter){
  usersFilter.forEach(user => console.log(user))
}


let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

function getUsers() {
  users;
}
