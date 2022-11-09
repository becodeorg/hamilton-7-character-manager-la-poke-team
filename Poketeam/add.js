const form = document.getElementById("form");
var base64 ;

 form.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const image = document.querySelector("#myFile").files[0];

    console.log(document.querySelector("#name").value);
    console.log(document.querySelector("#littledesc").value);
    console.log(document.querySelector("#description").value);
    console.log(document.querySelector("#myFile").files[0]);    
    // console.log(image);
   
    // Get the remote image as a Blob with the fetch API
    await fetch(image.src)
        .then((res) => res.blob())
        .then((blob) => {
            // Read the Blob as DataURL using the FileReader API

            const getBase64StringFromDataURL = (dataURL) =>
            dataURL.replace('data:', '').replace(/^.+,/, '');

            const reader = new FileReader();
            reader.onloadend = () => {
                // console.log(reader.result);
                // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

                // Convert to Base64 string
                base64 = getBase64StringFromDataURL(reader.result);
                console.log(base64);
                // Logs wL2dvYWwgbW9yZ...
           
            };
            reader.readAsDataURL(blob);
            
        });
    
        console.log(base64);

    const newcharacter = {
    
        description : document.querySelector("#description").value,
        shortDescription : document.querySelector("#littledesc").value,
        id : "",
        name : document.querySelector("#name").value,
        image : base64,
    }
    
    console.log(newcharacter);

//     fetch("https://character-database.becode.xyz/characters/", {
//     method:"POST",
//     body: JSON.stringify(newcharacter),
//     headers:{
//         "Content-type": "application/json"
//     },
// });  
   

})







