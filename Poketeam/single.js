// import axios from 'axios';

// axios.get('https://character-database.becode.xyz/characters/')
//   .then(function (json) {
//     // handle success
//     // console.log(json.data[1].name);

//     for(let i=0;i<json.data.length;i++){

//         const newdiv = document.createElement("div");
//         const divtitle = document.createElement("div");
//         const divlittledesc = document.createElement("div");
//         // const divdesc = document.createElement("div");
//         const image = document.createElement("img");
        
//         divtitle.setAttribute("class","titre_name");
//         divlittledesc.setAttribute("class","littledesc");
//         // divdesc.setAttribute("class","bigdesc");
//         image.setAttribute("src","data:image/jpeg;base64," + json.data[i].image);
    
//         document.body.append(newdiv);
    
//         newdiv.append(divtitle);
//         newdiv.append(divlittledesc);
//         // newdiv.append(divdesc);
//         newdiv.append(image);
    
//         divtitle.append(json.data[i].name);
//         divlittledesc.append(json.data[i].shortDescription);
//         // divdesc.append(json.data[i].description);
// }

//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function (json) {

   
            
//   });

const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

const leId = queryString_url_id.slice(1);
// console.log(leId);

import axios from 'axios';

await axios.get('https://character-database.becode.xyz/characters/' +leId)
  .then(function (single) {
 
    const newdiv = document.createElement("div");
    const card = document.createElement("div");
    const image = document.createElement("img");
    const text = document.createElement("div");
    const name = document.createElement("h2");
    const Ldesc = document.createElement("span");
    const desc = document.createElement("span");
    const buttons = document.createElement("div");
    const button1 = document.createElement("a");
    const button2 = document.createElement("a");

    const modifier = document.createTextNode("Modifier");
    const supprimer = document.createTextNode("Delete");

    newdiv.setAttribute("class","card__single rounded-2xl bg-green-500 h-96");
    newdiv.setAttribute("data-tilt","");
    newdiv.setAttribute("data-tilt-glare","");
    newdiv.setAttribute("data-tilt-max-glare","0.5");
    newdiv.setAttribute("data-tilt-reverse","true");
    newdiv.setAttribute("data-tilt-scale","1.1");
    card.setAttribute("class","card__single__top");
    image.setAttribute("src","data:image/jpeg;base64," + single.data.image);
    text.setAttribute("class","card__single__description rounded-2xl text-black bg-white text-center relative");
    name.setAttribute("class","card__single__title text-3xl font-bold text-black text-center text-green-500");
    Ldesc.setAttribute("class","font-bold");
    buttons.setAttribute("class","card__single__button relative bottom-0");
    button1.setAttribute("class","card__button__edit");
    button1.setAttribute("href","./character-editor.html?id=" + single.data.id +"&name=" + single.data.name + "&shortDescription=" + single.data.shortDescription + "&description=" + single.data.description + "&image=" + single.data.image);
    button2.setAttribute("class","card__button__delete");
  

    const main = document.querySelector(".main");

    main.append(newdiv);
    newdiv.append(card);
    newdiv.append(text);
    card.append(image);
    text.append(name);
    text.append(Ldesc);
    text.append(desc);
    text.append(buttons);

    buttons.append(button1);
    buttons.append(button2);

    button1.append(modifier);
    button2.append(supprimer);

    name.append(single.data.name);
    Ldesc.append(single.data.shortDescription);
    desc.append(single.data.description);


    
    

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function (json) {

   
            
  });
