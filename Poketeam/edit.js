// var url = new URL(window.location.href);
// var search_params = new URLSearchParams(url.search); 
// if(search_params.has('id') && search_params.has('name') && search_params.has('shortDescription') && search_params.has('description') && search_params.has('image')) {
//   var id = search_params.get('id');
//   // console.log(id);
//   var name = search_params.get('name');
//   // console.log(name);
//   var Sdesc = search_params.get('shortDescription');
//   // console.log(Sdesc);
//   var Ldesc = search_params.get('description');
//   // console.log(Ldesc);
//   var image = search_params.get('image');

// }
var url = new URL(window.location.href);
var search_params = new URLSearchParams(url.search); 
if(search_params.has('id')) {
  var id = search_params.get('id');
console.log(id)

}

// import axios from 'axios';
const axios = require('axios');


await axios.get('https://character-database.becode.xyz/characters/' +id)
  .then(function (json) {
 

   
    const nom = document.getElementById("name");
    nom.setAttribute("value",json.data.name);
    
    const shortDescription = document.getElementById("littledesc");
    shortDescription.setAttribute("value",json.data.shortDescription);
    
    const description = document.getElementById("description");
    description.append(json.data.description);
      
    const img = document.getElementById("myFile");
    img.setAttribute("value", json.data.image);
      

    const dum = document.getElementById("dummy")
    const mg = document.createElement("img");
    mg.setAttribute("src","data:image/jpeg;base64," +  json.data.image);
    const main = document.querySelector(".main");
    dum.append(mg);


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function (json) {

   
            
  });










const form = document.getElementById("form");
form.addEventListener("submit", async(e) =>{
    e.preventDefault();
    const name = document.querySelector("#name").value;
    let image = document.querySelector("#dummy").querySelector("img").src;
    const shortDescription = document.querySelector("#littledesc").value;
    const description = document.querySelector("#description").value;

  
    image = image.replace('data:', '').replace(/^.+,/, '');
  
    const data ={
        description : description,
        shortDescription : shortDescription,
        image : image,
        name : name, 
    };
  
    // console.log(data)
    // console.log(id)
    console.log(image)
    let response = await fetch("https://character-database.becode.xyz/characters/" + id, {
    method:"PUT",
    body: JSON.stringify(data),
    headers:{
        "Content-type": "application/json"
        
    },
    
  }
  );
  
  if(response){
    window.location = "./index.html";
  }
  
});

var srcData;
var newcharacter;

const file = document.getElementById("myFile");
file.addEventListener("change", async (e)=>{
  encode(e);
});
  function encode(e) {
  e.preventDefault();
    var selectedfile = document.getElementById("myFile").files;

    // const getBase64StringFromDataURL = (dataURL) =>
    // dataURL.replace('data:', '').replace(/^.+,/, '');


    if (selectedfile.length > 0) {   

      var imageFile = selectedfile[0];
      var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {

        srcData = fileLoadedEvent.target.result;
        var newImage = document.createElement('img');
        newImage.src = srcData;
        document.getElementById("dummy").innerHTML = newImage.outerHTML;
        // document.getElementById("txt").value = document.getElementById("dummy").innerHTML;
        
        // srcData = getBase64StringFromDataURL(fileReader.result);
        console.log(srcData);
         newcharacter = {
    
          description : document.querySelector("#description").value,
          shortDescription : document.querySelector("#littledesc").value,
          id : "",
          name : document.querySelector("#name").value,
          image : srcData,
      }

      
      }
      fileReader.readAsDataURL(imageFile);

      
    }
    
  
}

