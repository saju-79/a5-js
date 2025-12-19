document.getElementById('btn').addEventListener("click" , function(event){
    event.preventDefault()
    const name = document.getElementById('name').value ;
    const img = document.getElementById("img").value;
    const roll = document.getElementById('roll').value;

    const cardMake = document.getElementById("card");
    const div= document.createElement("div");
    div.innerHTML = `
    
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src=${img}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body ">
    <h2 class="card-title text-2xl">Name: ${name}</h2>
    <h2 class="card-title text-xl">Roll : ${roll}</h2>
     
  </div>
</div>
    
    
    
    
    
    
    
    
    
    
    `
    cardMake.appendChild(div)
   

  
    
    
    


   

})