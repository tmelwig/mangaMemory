//console.log("ok")
let alire = document.getElementById("aLire");
let lu = document.getElementById("Lu")

document.getElementById("ajouter").addEventListener("click",function(){
    //console.log("click ok");
let Titre = document.getElementById("titre").value;
let Lien = document.getElementById("lien").value;
let Url = document.getElementById("url").value;



if(Lien=="" || Titre=="" || Url==""){
    alert("Les trois champs doivent être remplis");
}
else{
    document.getElementById("titre1").style.visibility="visible"
    document.getElementById("titre0").style.visibility="hidden"
    console.log(Titre,Lien,Url)
    alire.insertAdjacentHTML("afterbegin",`<li>${Titre}<img src=${Url} alt="manga-cover"><i id=${Titre} 
    onClick=supprimer(this.id) class="fa-sharp fa-solid  fa-xmark"></i><a href=${Lien} target="blank">
    <i class="fa-sharp fa-solid fa-book"></i></a><i id=${Titre} onClick=marquerLu(this.id) class="fa-solid fa-check"></i></li>`);
    document.getElementById('lien').value=""
    document.getElementById('titre').value=""
    document.getElementById('url').value=""
}


})

function supprimer(id){
    //console.log(id);
    //console.log(document.querySelectorAll("#aLire > li").length);
    document.getElementById(id).parentElement.outerHTML="";
    if(!document.querySelectorAll("#aLire > li").length){ //permet de savoir si alire est vide
        //console.log(document.getElementById("aLire").getElementsByTagName('alire').length)
        document.getElementById("titre1").style.visibility="hidden";
        //console.log(document.querySelectorAll("#aLire > li").length);

    }
    if(!document.querySelectorAll("#Lu > li").length){ //permet de savoir si lu est vide
        document.getElementById("titre3").style.visibility="hidden";
        //console.log(document.querySelectorAll("#Lu > li").length);

    }
    if((document.querySelectorAll("#Lu > li").length)==0 && (document.querySelectorAll("#aLire > li").length)==0){ //permet de savoir si lu est vide
        document.getElementById("titre0").style.visibility="visible";
        //console.log(document.querySelectorAll("#Lu > li").length);

    }

}
function marquerLu(id){
    

    document.getElementById("titre3").style.visibility="visible"
    lu.insertAdjacentHTML("afterbegin",`<li>${id}<i id=${id} onClick=supprimer(this.id) class="fa-sharp fa-solid fa-xmark"></i></i><a href=${id} target="blank"><i class="fa-sharp fa-solid fa-book"></i></a></li>`);
    supprimer(id);
}

