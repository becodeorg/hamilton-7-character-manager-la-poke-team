const body = document.querySelector('body');
const nav = document.querySelector('nav');
const deleteBtn =  document.querySelector('.card__button__delete');
const deleteBtn2 = document.querySelector('.form-button__delete');
const html = `
    <div class="confirm">
        <div class="confirm__window">
            <div class="confirm__titlebar">
                <span class="confirm__title">Are you sure ?</span>
                <button class="confirm__close"></button>
            </div>
            <div class="confirm__content">
                If you confirm, you will lose your character forever.
            </div>
            <div class="confirm__buttons">
                <button class="confirm__button confirm__button--ok confirm__button--fill">OK</button>
                <button class="confirm__button confirm__button--cancel">Cancel</button>
            </div>
        </div>
    </div>
`;

document.addEventListener("click", (e) => {
    const target = e.target;
    console.log(target);
    if (target.tagName != "A") return false;
    if (target.classList.contains("card__button__delete")) {
        body.insertAdjacentHTML("afterbegin", html);
        
    }
    const confirmDiv = document.querySelector('.confirm');
    const okBtn = document.querySelector('.confirm__button--ok');
    okBtn.addEventListener('click', () => {
       test();
    });
    const cancelBtn = document.querySelector('.confirm__button--cancel');
    cancelBtn.addEventListener('click', () => {
        document.querySelector(".confirm").remove();
    });
    const redBtn = document.querySelector('.confirm__close');
    redBtn.addEventListener('click', () => {
        document.querySelector(".confirm").remove();
    });

    if (target.classList.contains("confirm__button--cancel") || target.classList.contains("confirm__close")){
        document.querySelector(".confirm").remove();
    }
    
}, false);

async function test(){
    
    const queryString_url_id = window.location.search;
// console.log(queryString_url_id);

    const leId = queryString_url_id.slice(1);

    let response = await fetch("https://character-database.becode.xyz/characters/" + leId, {
        method: 'DELETE',
        
      }
      );
      
      if(response){
        window.location = "./index.html";
      }
      
      }


