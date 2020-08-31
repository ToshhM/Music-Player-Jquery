var bg = $("#particles-js"); //selection du bg
$(document).keydown(function(){
    $(bg).css("background-color",getRandomColor);
});

$(".img").on("click",function(){
    // PREMIERE ACTION
    var name=$(this).attr("name"); //this fait reférence à img pour eviter de le réecrire en met le this = objet courant
    $("#titre").text(name);// .text pour selectionner le texte et lui passer l'attribut name selectionné au dessus comme chaque image à un attribut name
    $('#titre').css('textTransform', 'capitalize');  //transforme la premiere lettre en capital.
    
    /*const firstLetter= name.charAt(0).toUpperCase();
    const nameCapitalized = firstLetter + name.slice(1); // on prend la premiere lettre de chq chaine et le reste on lui rajoute pas deffet
    $("titre").text(nameCapitalized);*/ //méthode Compliqué 
    
    // SECONDE ACTION
    $(this).toggleClass("flash"); //propriété Css rajouté sur les images

    //Troisième ACTION
    var music = $(this).attr("name");
    music += ".mp3";
    playMusic(music);
}) 
function playMusic(music){ // on crée un objet(newAudio), on a donc accès à une methode qui est la méthode play qui va nous permettre de lancer la musique
    var audio = new Audio(music);
    audio.play();
}
$("#btn").click(function(){
    var artist = $("#input").val();
    console.log(artist);
    var music = artist + ".mp3";
    playMusic(music);
})
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color ="#";
    for(var i=0; i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}