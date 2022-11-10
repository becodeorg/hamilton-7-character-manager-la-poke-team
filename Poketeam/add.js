// const form = document.getElementById("form");
// var base64 ;

  // form.addEventListener("change", (e)=>{
  //   e.preventDefault();

  //   const image = document.querySelector("#myFile").files[0];

  //   console.log(document.querySelector("#name").value);
  //   console.log(document.querySelector("#littledesc").value);
  //   console.log(document.querySelector("#description").value);
  //   console.log(document.querySelector("#myFile").files[0]);    
    // console.log(image);
   
    // // Get the remote image as a Blob with the fetch API
    //  fetch(image.src)
    //     .then((res) => res.blob())
    //     .then((blob) => {
    //         // Read the Blob as DataURL using the FileReader API

    //         const getBase64StringFromDataURL = (dataURL) =>
    //         dataURL.replace('data:', '').replace(/^.+,/, '');

    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             console.log(reader.result);
    //             // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

    //             // Convert to Base64 string
    //             base64 = getBase64StringFromDataURL(reader.result);
    //             // console.log(base64);
    //             // Logs wL2dvYWwgbW9yZ...
           
    //         };
    //         reader.readAsDataURL(blob);
          
    //     })
    //     .then((blob) => {
    //         console.log(base64);
    //     })
    
         

  


   

// })
var srcData;
var newcharacter;
const file = document.getElementById("myFile");
file.addEventListener("submit", test);

async function test(){
  const test = await encode();
  console.log("oui" + test);
  console.log(newcharacter);
}


 function encode() {
    var selectedfile = document.getElementById("myFile").files;
    const getBase64StringFromDataURL = (dataURL) =>
            dataURL.replace('data:', '').replace(/^.+,/, '');
    if (selectedfile.length > 0) {
      
      var imageFile = selectedfile[0];
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
         srcData = fileLoadedEvent.target.result;
        var newImage = document.createElement('img');
        newImage.src = srcData;
        document.getElementById("dummy").innerHTML = newImage.outerHTML;
        document.getElementById("txt").value = document.getElementById("dummy").innerHTML;
        srcData = getBase64StringFromDataURL(fileReader.result);
        // console.log(srcData);
         newcharacter = {
    
          description : document.querySelector("#description").value,
          shortDescription : document.querySelector("#littledesc").value,
          id : "",
          name : document.querySelector("#name").value,
          image : srcData,
      }
      
        fetch("https://character-database.becode.xyz/characters/", {
          method:"POST",
          body: JSON.stringify(newcharacter),
          headers:{
              "Content-type": "application/json"
          },
        });  
      
      
      }
      fileReader.readAsDataURL(imageFile);

      
    }
  
}













