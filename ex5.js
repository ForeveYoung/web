let youtubeTrailers = {
    stranding : 'https://www.youtube.com/watch?v=tCI396HyhbQ',
    devils_hunt : 'https://www.youtube.com/watch?v=JGrT65Ge_Mc',
    dmc : 'https://www.youtube.com/watch?v=KMSGj9Y2T9Q',
    mk11 : 'https://www.youtube.com/watch?v=bxFoRCvEjUA',
    starwars : 'https://www.youtube.com/watch?v=0GLbwkfhYZk',
    doom : 'https://www.youtube.com/watch?v=FkklG9MA0vM'
}

function watchYoutubeTrailer(gameName) {
    let watchTrailerQuestion = confirm("Подивитися трейлер?");
    if (watchTrailerQuestion) {
        switch (gameName) {
            case 'stranding': 
                location.href = youtubeTrailers.stranding ;
                break;
            case 'devils_hunt':  
                location.href = youtubeTrailers.devils_hunt ;
                break;
            case 'dmc':  
                location.href = youtubeTrailers.dmc ;
                break;
            case 'mk11':  
                location.href = youtubeTrailers.mk11 ;
                break;
            case 'starwars':  
                location.href = YoutubeTrailers.starwars ;
                break;
            case 'doom':  
                location.href = YoutubeTrailers.doom ;
                break;
            default : 
                alert('Sorry. Something went wrong...');
        }
    }
}

let watch = document.querySelector('#qwerty');
watch.addEventListener('click', function (){watchYoutubeTrailer('stranding')} );