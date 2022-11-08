import './style.css'

// const fetchdiv = () => fetch("https://character-database.becode.xyz/characters/");
  
// fetchdiv("")
//   .then((response) => response.json())
//   .then((json) => {
   
    
//     for(let i=0;i<json.length;i++){
//     const newdiv = document.createElement("div");
//     const divtitle = document.createElement("div");
//     const divlittledesc = document.createElement("div");
//     // const divdesc = document.createElement("div");
//     const image = document.createElement("img");
    
//     divtitle.setAttribute("class","titre_name");
//     divlittledesc.setAttribute("class","littledesc");
//     // divdesc.setAttribute("class","bigdesc");
//     image.setAttribute("src","data:image/jpeg;base64," + json[i].image);

//     document.body.append(newdiv);

//     newdiv.append(divtitle);
//     newdiv.append(divlittledesc);
//     // newdiv.append(divdesc);
//     newdiv.append(image);

//     divtitle.append(json[i].name);
//     divlittledesc.append(json[i].shortDescription);
//     // divdesc.append(json[i].description);
    

//     }
// });



import axios from 'axios';

axios.get('https://character-database.becode.xyz/characters/')
  .then(function (json) {
    // handle success
    // console.log(json.data[1].name);

    for(let i=0;i<json.data.length;i++){
        const lien = document.createElement("a");
        const newdiv = document.createElement("div");
        const divtitle = document.createElement("div");
        const divlittledesc = document.createElement("div");
        // const divdesc = document.createElement("div");
        const image = document.createElement("img");
        
        divtitle.setAttribute("class","titre_name");
        divlittledesc.setAttribute("class","littledesc");
        lien.setAttribute("href","singleCharacter.html?" + json.data[i].id);
        // divdesc.setAttribute("class","bigdesc");
        image.setAttribute("src","data:image/jpeg;base64," + json.data[i].image);


        document.body.append(lien);
        lien.append(newdiv);
    
        newdiv.append(divtitle);
        newdiv.append(divlittledesc);
        // newdiv.append(divdesc);
        newdiv.append(image);
    
        divtitle.append(json.data[i].name);
        divlittledesc.append(json.data[i].shortDescription);
        // divdesc.append(json.data[i].description);

        // console.log(json.data[i].id);
}

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function (json) {

   
            
  });