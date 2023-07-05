const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const frase = frm.inFrase.value.toLowerCase();
    const add = frm.inInserd.value.toLowerCase();

    let indices = frm.inIndice.value.split(" ");

    //vai mapear a string percorre cada elemento e aplica uma função
    indices = indices.map((e) => Number(e))

    console.log(indices)
    insertString(frase,add,indices)
});

function insertString(str, toInsert, indexes){
    const charArray = str.split('');
    let insertCount = 0;

    for(let i =0; i <= str.length; i++){
       
        if(indexes.includes(i) ){
            charArray.splice(i + insertCount, 0, toInsert);
            insertCount++;
        }
    }

    resp.innerText = `Nova Frase: ${charArray.join("")}`;
    
}