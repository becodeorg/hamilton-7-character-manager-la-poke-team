import './style.css'

const fetchdiv = () => fetch("https://character-database.becode.xyz/characters/" );
  
fetchdiv("")
  .then((response) => response.json())
  .then((json) => {
    for(let i=0;i<json.length;i++){
        
    const fetchnewdiv = () => fetch("https://character-database.becode.xyz/characters/" + json[i].id);
    fetchnewdiv("")
    .then((response) => response.json())
    .then((singlejson) => {
        
        const newdiv = document.createElement("div");
        document.body.append(newdiv);
        newdiv.append(singlejson.name)
        

    })
    
 
}
});



