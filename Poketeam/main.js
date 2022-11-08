import './style.css'

const fetchdiv = () => fetch("https://character-database.becode.xyz/characters/");
  
fetchdiv("")
  .then((response) => response.json())
  .then((json) => {
   
    
    for(let i=0;i<json.length;i++){
    const newdiv = document.createElement("div");
    const divtitle = document.createElement("div");
    const divlittledesc = document.createElement("div");
    // const divdesc = document.createElement("div");
    const image = document.createElement("img");
    
    divtitle.setAttribute("class","titre_name");
    divlittledesc.setAttribute("class","littledesc");
    // divdesc.setAttribute("class","bigdesc");
    image.setAttribute("src","data:image/jpeg;base64," + json[i].image);

    document.body.append(newdiv);

    newdiv.append(divtitle);
    newdiv.append(divlittledesc);
    // newdiv.append(divdesc);
    newdiv.append(image);

    divtitle.append(json[i].name);
    divlittledesc.append(json[i].shortDescription);
    // divdesc.append(json[i].description);
    

    }
});



