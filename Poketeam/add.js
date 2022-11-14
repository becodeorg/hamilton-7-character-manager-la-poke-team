var srcData;
var newcharacter;

const form = document.getElementById("form");
form.addEventListener("submit", async(e) =>{
  e.preventDefault();
  const name = document.querySelector("#name").value;
  let image = document.querySelector("#dummy").querySelector("img").src;
  const shortDescription = document.querySelector("#littledesc").value;
  const description = document.querySelector("#description").value;

  image = image.replace('data:', '').replace(/^.+,/, '');

  const data ={
    description,
    shortDescription,
    image,
    name,
  };

  
let response = await fetch("https://character-database.becode.xyz/characters/", {
  method:"POST",
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

 










