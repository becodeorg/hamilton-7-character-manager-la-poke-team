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
    const divname = document.createElement("div");
    const image = document.createElement("img");
    const divlittledesc = document.createElement("div");
    const divdesc = document.createElement("div");

    image.setAttribute("src","data:image/jpeg;base64," + single.data.image);
    divname.setAttribute("class","titre_name");
    divlittledesc.setAttribute("class","littledesc");
    divdesc.setAttribute("class","bigdesc");

    document.body.append(newdiv);
    newdiv.append(divname);
    newdiv.append(image);
    newdiv.append(divlittledesc);
    newdiv.append(divdesc);

    divname.append(single.data.name);
    divlittledesc.append(single.data.shortDescription);
    divdesc.append(single.data.description);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function (json) {

   
            
  });
