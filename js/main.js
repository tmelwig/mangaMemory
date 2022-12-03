//console.log("ok")
let alire = document.getElementById("aLire");
let lu = document.getElementById("Lu")

document.getElementById("ajouter").addEventListener("click",function(){
    //console.log("click ok");
let titre = document.getElementById("titre").value;
let lien = document.getElementById("lien").value;
let Url = document.getElementById("url").value;

//console.log(lien,titre)
if(lien=="" || titre==""){
    alert("Les deux champs doivent être remplis");
}
else{
    document.getElementById("titre1").style.visibility="visible"
    document.getElementById("titre0").style.visibility="hidden"
    alire.insertAdjacentHTML("afterbegin",`<li>${titre}<img src=${Url} alt="manga-cover"><i id=${titre} onClick=supprimer(this.id) class="fa-sharp fa-solid  fa-xmark"></i><a href=${lien} target="blank"><i class="fa-sharp fa-solid fa-book"></i></a><i id=${titre} onClick=marquerLu(this.id) class="fa-solid fa-check"></i></li>`);
    document.getElementById('lien').value=""
    document.getElementById('titre').value=""
}


})

function supprimer(id){
    //console.log(id);
    //console.log(document.querySelectorAll("#alire > li").length);
    document.getElementById(id).parentElement.outerHTML="";
    if(!document.querySelectorAll("#alire > li").length){ //permet de savoir si alire est vide
        //console.log(document.getElementById("alire").getElementsByTagName('alire').length)
        document.getElementById("titre1").style.visibility="hidden";
        //console.log(document.querySelectorAll("#alire > li").length);

    }
    if(!document.querySelectorAll("#lu > li").length){ //permet de savoir si lu est vide
        document.getElementById("titre2").style.visibility="hidden";
        //console.log(document.querySelectorAll("#lu > li").length);

    }
    if((document.querySelectorAll("#lu > li").length)==0 && (document.querySelectorAll("#alire > li").length)==0){ //permet de savoir si lu est vide
        document.getElementById("titre0").style.visibility="visible";
        console.log(document.querySelectorAll("#lu > li").length);

    }

}
function marquerLu(id){
    //console.log(id);
    document.getElementById("titre2").style.visibility="visible"
    lu.insertAdjacentHTML("afterbegin",`<li>${id}<i id=${id} onClick=supprimer(this.id) class="fa-sharp fa-solid fa-xmark"></i></i><a href=${id} target="blank"><i class="fa-sharp fa-solid fa-book"></i></a></li>`);
    supprimer(id);
}

