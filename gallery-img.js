// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

let obj=[
    {
        id:0,
        image:"myimg1",
        modal:"modal1",
        modalimg:"img01",
        caption:"cap01",
        close:"close01"

    },
    {
        id:1,
        image:"myimg2",
        modal:"modal2",
        modalimg:"img02",
        caption:"cap02",
        close:"close02",

    },
    {
        id:2,
        image:"myimg3",
        modal:"modal3",
        modalimg:"img03",
        caption:"cap03",
        close:"close03",

    },
    {
        id:3,
        image:"myimg4",
        modal:"modal4",
        modalimg:"img04",
        caption:"cap04",
        close:"close04",

    },
    {
        id:4,
        image:"myimg5",
        modal:"modal5",
        modalimg:"img05",
        caption:"cap05",
        close:"close05",

    },
    {
        id:5,
        image:"myimg6",
        modal:"modal6",
        modalimg:"img06",
        caption:"cap06",
        close:"close06",

    }
];

function checkimg(id){
    
    for(let i=0;i<obj.length;i++){
        if(obj[i].id==id){
            
            var modal=document.getElementById(obj[i].modal);

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            var img = document.getElementById(obj[i].image);
            var modalImg = document.getElementById(obj[i].modalimg);
            var captionText = document.getElementById(obj[i].caption);
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = this.alt;

            // Get the <span> element that closes the modal
            var span = document.getElementById(obj[i].close);
            
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() { 
                
                document.getElementById(obj[i].modal).style.display="none";
                location.reload();
            }
            break;
            
            

        }

        



    }

}

