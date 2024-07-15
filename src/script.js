let dettes=[];

document.addEventListener("DOMContentLoaded",async(event)=>{
    // alert("oki");
    // die();
    let datas = await findAllDette();
    dettes = [...datas];
    console.log(dettes);


})

async function findAllDette(){
    let response = await fetch(`data.json`);    //fetch fct async
    let datas = await response.json();
    return datas;
}