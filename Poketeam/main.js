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
        const card = document.createElement("div");
        const text = document.createElement("div");
        const name = document.createElement("h2");
        const paragraph = document.createElement("p");
        const image = document.createElement("img");
        
        newdiv.setAttribute("class","card rounded-2xl bg-green-500");
        newdiv.setAttribute("data-tilt","");
        newdiv.setAttribute("data-tilt-glare","");
        newdiv.setAttribute("data-tilt-max-glare","0.5");
        newdiv.setAttribute("data-tilt-reverse","true");
        newdiv.setAttribute("data-tilt-scale","1.1");
        card.setAttribute("class","card__top");
        text.setAttribute("class","card__description rounded-2xl text-black bg-white text-center");
        name.setAttribute("class","card__title text-2xl font-bold text-black text-center text-green-500")

        lien.setAttribute("href","singleCharacter.html?" + json.data[i].id);
        image.setAttribute("src","data:image/jpeg;base64," + json.data[i].image);
        image.setAttribute("class","pokemon-img");

        const main = document.querySelector(".main");
       
        main.append(lien);
        lien.append(newdiv);
    
        newdiv.append(card);
        newdiv.append(text);
        // newdiv.append(divdesc);
        card.append(image);
        text.append(name);
        text.append(paragraph);
    
        name.append(json.data[i].name);
        paragraph.append(json.data[i].shortDescription);

     



        // const lien = document.createElement("a");
        // const newdiv = document.querySelector("newdiv");
        // const card = document.getElementsByClassName("card");
        // const image = document.getElementsByClassName("image");
        // const text = document.getElementsByClassName("text");
        // const name = document.getElementsByClassName("name");
        // const paragraph = document.getElementsByClassName("paragraph");
      
        
        
       
        // lien.setAttribute("href","singleCharacter.html?" + json.data[i].id);
        // // image.setAttribute("src","data:image/jpeg;base64," + json.data[i].image);
        // image.src = "data:image/jpeg;base64," + json.data[i].image;

        // const main = document.querySelector(".main");
       
        // main.append(lien);
        // lien.append(newdiv);
    
        // newdiv.append(card);
        // newdiv.append(text);
        // // newdiv.append(divdesc);
        // card.append(image);
        // text.append(name);
        // text.append(paragraph);
    
        // name.append(json.data[i].name);
        // paragraph.append(json.data[i].shortDescription);
 

      //   if(json.data[i].shortDescription === "Eau"){
      //     newdiv.style.backgroundColor ="blue";
      // }
      // else{
      //   newdiv.style.backgroundColor = "lightgrey";
      // }
}

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function (json) {

   
            
  });





  