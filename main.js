let img=document.querySelector(".img");
let name=document.querySelector(".name");
let occ=document.querySelector(".title");
let qut=document.querySelector(".quote");
let track_index=0;
let t=0;
let track_list=[
    {
        img:"person/1.jpg",
        name:"Ratan tata",
        occ:"Ceo of tata grp",
        quote:"Change starts with yo,be the change you  want too see in the world"
    },
    {
        img:"person/2.jpg",
        name:"Anand Mahindra",
        occ:"Ceo of M&M",
        quote:"no dream is too big to dream and no wing is too small to fly"
    },
    {
        img:"person/3.jpg",
        name:"Murthy",
        occ:"Ceo of infosys",
        quote:"a journey always began with small step"
    },
];

function looptr(track_index){
    img.style.backgroundImage="url(" + track_list[track_index].img + ")";
    name.textContent = track_list[track_index].name;
    occ.textContent = track_list[track_index].occ;
    qut.textContent = track_list[track_index].quote;
    track_index+=1;
}

function next() {
    // Go back to the first track if the
    // current one is the last in the track list
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0;
    
    // Load and play the new track
    looptr(track_index);
    
    }
    
    function prev() {
    // Go back to the last track if the
    // current one is the first in the track list
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list.length - 1;
    
    // Load and play the new track
    looptr(track_index);
    }
    setInterval(next,5000);
