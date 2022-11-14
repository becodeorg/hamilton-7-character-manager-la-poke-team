// const search = document.querySelector("#search");
// const cards = document.querySelectorAll(".card")

// search.addEventListener("keypress", async(e)=>{
//     if(e.key== "Enter"){
//         for(let i = 0; i< 100;i++){
//             const cards = await document.querySelectorAll(".card");

//             cards[i].style.display = "none";

//             if(cards[i].innerHTML.includes(search.value)){
//                 cards[i].style.display ="flex";
//             }
//         }
//     }
// })

search.addEventListener("keyup", async(e)=>{
    let input = document.getElementById('search').value
    input=input.toLowerCase();
    const x = document.querySelectorAll(".card")


      
    for (let i = 0; i < x.length; i++) { 
        // console.log(x[i].innerHTML);
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";                 
        }
    }
});
