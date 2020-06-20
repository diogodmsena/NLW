 function populateUFs () {
   const ufSelect = document.querySelector("select[name=uf]")

   fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => {return res.json()})
    .then( states => {
      for( const state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
      }
    } )
 }

 populateUFs();

 function getCities (event) {
  const citySelect = document.querySelector("select[name=city]")
  const ufValue = event.target.value;


  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
  citySelect.disabled = true;

  fetch(url)
   .then( (res) => {return res.json()})
   .then( cities => {
     for( const city of cities) {
       citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
     }

     citySelect.disabled = false;
   } )
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities)

//Itens de coleta
//pegar todos os li's
const itensToCollect = document.querySelectorAll(".itens-grid li")  

for (const item of itensToCollect) {
  item.addEventListener("click", handleSelectedItem)
}

const collectedItens = document.querySelector("input[name=itens]")

let selectedItens = []

function handleSelectedItem (event) {
  const itemLi = event.target

  //add or remove class with javascript
  itemLi.classList.toggle("selected")
  
  const itemId = itemLi.dataset.id
  
  //verificar se existem itens selecionados, se sim
  //pegar os itens selecionados

  const alreadySelected = selectedItens.findIndex( item => item == itemId )

  //se já tiver selecionado, tirar da seleção

  if( alreadySelected >= 0 ){
    //tirar da seleção
    const filteredItens = selectedItens.filter( item => {
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    })

    selectedItens = filteredItens
  }else {
    //se não estiver selecionada, adicionar à seleção
    selectedItens.push(itemId)
  }

  console.log(selectedItens)

  //atualizar o campo escondido com os itens selecionados
  collectedItens.value = selectedItens  

}
