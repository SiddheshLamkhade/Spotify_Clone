console.log("Let us write JavaScript");
async function getSongs()
{
    let a = await fetch(`/songs/`);
    let response  = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");

    let songs =[];

    for (let index=0; index<as.length;index++)
    {
        const element = as[index];
        if (element.href.endsWith(".mp3"))
        {
            songs.push(element.href)
        }
    }
    return songs;
}

async function main()
{
    //get the list of all the songs
    let songs=await getSongs();
    console.log(songs);

    let songUL=document.querySelector(".songList").getElementsByTagName("ul");
    for (const song of songs) 
    {
        songUL.innerHTML=   
    }

    //play the first song
    var audio = new Audio(songs[0]);
    //audio.play(); 

    audio.addEventListener("loadeddata",()=>{
        let duration = audio.duration;
        console.log(audio.duration,audio.currentSrc,audio.currentTime)
        //The duration variable now holds the duration ( in seconds) of the audio clip 
    })
     
}

main();
