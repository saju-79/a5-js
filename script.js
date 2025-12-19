document.getElementById('btn').addEventListener("click" , function(event){
    event.preventDefault()
    const name = document.getElementById('name').value ;
    const img = document.getElementById("img").value;
    const roll = document.getElementById('roll').value;

    const cardMake = document.getElementById("card");
    const div= document.createElement("div");
    div.innerHTML = `
    
    <div class="card bg-base-300 w-96 shadow-lg">
  <figure class="px-10 pt-10">
    <img
      src=${img}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body ">
    <h2 class="card-title text-2xl font-bold ">Name: ${name}</h2>
    <h2 class="card-title text-xl font-bold ">Roll : ${roll}</h2>
     
  </div>
</div>
    
 
    
    `
    cardMake.appendChild(div)
   

  
    
    
    


   

})