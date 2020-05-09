var min = 0;
function hre (){
    document.getElementById("minr").innerHTML = min;
}

let YoutubeTrailers = {
stranding : 'https://www.youtube.com/watch?v=tCI396HyhbQ',
devilsHunt : 'https://www.youtube.com/watch?v=JGrT65Ge_Mc',
dmc : 'https://www.youtube.com/watch?v=KMSGj9Y2T9Q',
mk11 : 'https://www.youtube.com/watch?v=bxFoRCvEjUA',
starwars : 'https://www.youtube.com/watch?v=0GLbwkfhYZk',
doom : 'https://www.youtube.com/watch?v=FkklG9MA0vM'
}

let gameName;
function watchYoutubeTrailer(gameName) {
    if (confirm("Подивитися трейлер?")){

    switch (x) {
        case 'stranding':  location.href = YoutubeTrailers.stranding ;
        break;
        case 'devilsHunt':  location.href = YoutubeTrailers.devilsHunt ;
        break;
        case 'dmc':  location.href = YoutubeTrailers.dmc ;
        break;
        case 'mk11':  location.href = YoutubeTrailers.mk11 ;
        break;
        case 'starwars':  location.href = YoutubeTrailers.starwars ;
        break;
        case 'doom':  location.href = YoutubeTrailers.doom ;
        break;
        default : alert('we have a problem...');
    }
}
}