const loadData = (name, dataLimit) => {

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then (res => res.json())
    .then (data => showData(data.drinks, dataLimit))




}

const showData = (drinks, dataLimit) => {

    const alert = document.getElementById('alert');

    const container = document.getElementById ('container');
    container.innerHTML = ''

    const showAll = document.getElementById('showAll');

    if(dataLimit && drinks.length > 10) {
        drinks = drinks.slice(0, 10);
        showAll.classList.remove('hidden');
    }
    else{
        showAll.classList.add('hidden');
    }
    
    

   

    drinks.forEach (drink => {

        container.innerHTML += `

        
        <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${drink.strDrinkThumb}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
           ${drink.strDrink}
            <div class="badge badge-secondary">${drink.strCategory}</div>
          </h2>
          <p>${drink.strInstructions}</p>
          <label onclick="loadDetails(${drink.idDrink})"  for="my-modal-3" class="btn">Details</label>

          <div class="card-actions justify-end">
            <div class="badge badge-outline">${drink.strAlcoholic}</div> 
            <div class="badge badge-outline">${drink.strGlass}</div>
          </div>
        </div>
      </div>


        
        
        
        `




    } )








 }


 document.getElementById ('search-input').addEventListener('keyup', function () {


    const input = document.getElementById('search-input').value;

    loadData (input);
    processSearch (10)



 })


 const showAll = (getAll) => {

    processSearch ()

    // fetch  (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${getAll}`)
    // .then (res => res.json ())
    // .then (data => showAllData (data.drinks))


 }

 



 const processSearch = (dataLimit) =>{
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    loadData(searchText, dataLimit);

    const select = document.getElementById ('mySelect').value;

    loadFilter (select, dataLimit)

}


const loadDetails = (details) => {


    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${details}`
    fetch (url)
    .then (response => response.json ())
    .then (data => showDetails (data.drinks))
}


const showDetails = (show) => {
    console.log (show[0].strDrink)


const container = document.getElementById('img-container');
container.innerHTML = ``



document.getElementById ('drink-name').innerText = show[0].strDrink;
document.getElementById ('drink-instruction').innerText =  show[0].strInstructions;

container.innerHTML += `

<img src="${show[0].strDrinkThumb}" alt="">



`






    
}

const loadFilter =  (cat, dataLimit) => {

  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${cat}`
  fetch (url)
  .then (res => res.json ())
  .then (data => showFilter (data.drinks, dataLimit))




 }


 const showFilter = (drinks, dataLimit) => {

  const alert = document.getElementById('alert');

  const container = document.getElementById ('container');
  container.innerHTML = ''

  const showAll = document.getElementById('showAll');

  if(dataLimit && drinks.length > 10) {
      drinks = drinks.slice(0, 10);
      showAll.classList.remove('hidden');
  }
  else{
      showAll.classList.add('hidden');
  }
  const select = document.getElementById ('mySelect').value;

  
  

 

  drinks.forEach (drink => {

      container.innerHTML += `

      
      <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="${drink.strDrinkThumb}" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
         ${drink.strDrink}
          <div class="badge badge-secondary">${select}</div>
        </h2>
        <label onclick="loadDetails(${drink.idDrink})"  for="my-modal-3" class="btn">Details</label>

       
      </div>
    </div>


      
      
      
      `




  } )








}







const myFilter =  (filter) => {



  const select = document.getElementById ('mySelect').value;
  loadFilter (select)
  processSearch (10)




}


loadFilter ()


 showAll ()




loadData()