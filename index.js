const inputItem = document.querySelector("#input-item");
const addButton = document.querySelector("#adicionar-item");
const listUl = document.querySelector("#lista-de-compras");
let contador = 0;

addButton.addEventListener("click", (event) => {
  event.preventDefault();

  const itemInput = inputItem.value;

  if (itemInput === "") {
    alert("Por favor, insira um item!");
    return;
  }

  const containerLi = document.createElement("li");
  const containerDiv = document.createElement("div");
//   const buttonExcluir = document.createElement("button");
//   buttonExcluir.createTextNode = 'Excluir';

  containerDiv.classList.add("lista-item-container");
  containerLi.appendChild(containerDiv);

  const inputList = document.createElement("input");
  inputList.type = "checkbox";
  inputList.id = `checkbox-1 ${contador++}`;

  containerDiv.appendChild(inputList);

  const paragrafhList = document.createElement("p");
  const text = document.createTextNode(itemInput);
 
  const paragrafhListTime = document.createElement("p");
  paragrafhListTime.classList.add("texto-data");

  inputList.addEventListener('click', () => {
    if(inputList.checked){
        paragrafhList.style.textDecoration = "line-through";
    } else {
        paragrafhList.style.textDecoration = "none";
    }
  })

  const optionsDate =  {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
  }

  const dayOfTheWeek = new Date().toLocaleDateString("pt-BR", {weekday: "long"});

  const date = new Date().toLocaleDateString("pt-BR",optionsDate);

  const time = new Date().toLocaleTimeString("pt-BR", optionsTime);

  let msgDateTime = `${dayOfTheWeek} dia ${date} às ${time}`;

  paragrafhListTime.textContent = msgDateTime;

  paragrafhList.appendChild(text);
  containerDiv.appendChild(paragrafhList);
  containerLi.appendChild(containerDiv);
  containerLi.appendChild(paragrafhListTime);
  listUl.appendChild(containerLi);

  

  inputItem.value = "";
});
