//Video Variables
var videos = ["https://www.youtube-nocookie.com/embed/ykieEE1j9eA",
                  "https://www.youtube-nocookie.com/embed/M5azNpTwVk8",
                  "https://www.youtube-nocookie.com/embed/e0-2XxgHIXk",
                  "https://www.youtube-nocookie.com/embed/xWdPusIK8XU",
                  "https://www.youtube-nocookie.com/embed/arMKDDSwrTo",
                  "https://www.youtube-nocookie.com/embed/xGKFVMgjrPc",
                  "https://www.youtube-nocookie.com/embed/cqvVL8IurMw"
                 ];

//Artwork Variables
var artwork = [{by: "Isabelle", files: ["assets/artwork/0/0.jpg", 
                                        "assets/artwork/0/1.jpg", 
                                        "assets/artwork/0/2.jpg", 
                                        "assets/artwork/0/3.jpg", 
                                        "assets/artwork/0/4.jpg", 
                                        "assets/artwork/0/5.jpg"]
               }

              ];

//Idea Variables
var words = [{name: "Read", link: null},
             {name: "Play Video Games", link: 'https://www.epicgames.com/store'},
             {name: "Call Or Text A Friend", link: null},
             {name: "Listen To Music", link: 'https://www.spotify.com/us/'},
             {name: "Learn A Musical Instrument", link: 'https://www.udemy.com/topic/piano/'},
             {name: "Watch Youtube", link: 'https://www.youtube.com/'},
             {name: "Watch A Movie Or TV Show", link: 'https://www.netflix.com/'},
             {name: "Play A Board Or Card Game", link: 'https://www.gearhungry.com/best-family-board-games/'},
             {name: "Read The News", link: 'https://news.google.com/'},
             {name: "Learn A New Language", link: 'https://www.duolingo.com/'},
             {name: "Do Extra Chores", link: null},
             {name: "Learn To Code", link: 'https://www.khanacademy.org/computing/computer-programming'},
             {name: "Take an Online Course", link: 'https://www.edx.org'},
             {name: "Write A Story", link: null},
             {name: "Write A Journal Or Diary", link: 'https://myjournalate.com/'},
             {name: "Build A Pillow Fort", link: null},
             {name: "Build A Cardboard Box Fort", link: 'https://handsonaswegrow.com/build-fun-cardboard-fort/'},
             {name: "Go On A Bike Ride, Run, Or Walk", link: null},
             {name: "Start  A Garden", link: null},
             {name: "Do A Puzzle", link: null},
             {name: "Organize Your Books By Color", link: null},
             {name: "Bake", link: null},
             {name: "Cook", link: null},
             {name: "Draw Or Color", link: null},
             {name: "Make A Collage With Scraps Of Paper", link: null},
             {name: "Start A Vlog Or Blog About Your Time Stuck At Home", link: null},
             {name: "Write A Song", link: null},
             {name: "Make Something Out Of Clay", link: null},
             ];

//Home Page Videos
var funnyvid = videos[0];
var happyvid = videos[6];

//Article Variables
var articles = [{image: "assets/images/dc.jpeg", description: "Discover Camp in Hawthorne New York is using their spare 3D printers to make shields for nurses, doctors, and other first responders. At the time of writing this they already have ditributed 6,500 shields to hospital workers.", link: "assets/articles/discover-camp.html"}
    
               ];





//Start Function 
function start() {
    console.log("This is a work in progress. Please suggest any improvements on the feedback page https://corona-media.github.io/feedback.html");
    
    //popup for feedback
    setTimeout(function() {
        $("#feedbackpopup").modal('show')
    }, 60000);
}


//Video Code
function videosfunc(document) {

    for (var x = 0; x < videos.length; x += 1) {
        var div = "<center>" + "<iframe class='card-body' width='100%' height='300px' src='" + videos[x] + "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>" + "</center>";
        var addTo = document.getElementById("vids");
        var newContent = document.createElement('div');
        newContent.className = "card bg-dark text-center mr-3 ml-3  rounded mt-4 mb-3 mx-auto";
        newContent.style = "width:  500px;";
        newContent.innerHTML = div;
        addTo.appendChild(newContent);
    }
}


//home page videos
var funnyvidid = document.getElementById("funnyvid");
var happyvidid = document.getElementById("happyvid");

funnyvidid.setAttribute("src", funnyvid);
funnyvidid.setAttribute("width", "90%");
funnyvidid.setAttribute("height", "300px");

happyvidid.setAttribute("src", happyvid);
happyvidid.setAttribute("width", "90%");
happyvidid.setAttribute("height", "300px");


//Artwork Code
function artworkfunc(document) {

    for (var x1 = 0; x1 < artwork.length; x1 += 1) {
        var div = "<center>" + "<img id='img1' src='" + artwork[x1].files[0] + "' width='90%' data-toggle='tooltip' title='Artwork By " + artwork[x1].by + "'>" + "</center>"  
        var addTo = document.getElementById("art");
        var newContent = document.createElement('div');
        newContent.className = "card bg-dark pt-2 mt-5 mb-3 rounded mx-auto mobile";
        newContent.style = "width: 400px; height: 530px;";
        newContent.setAttribute("onclick", "popup(this)");
        newContent.setAttribute("id", String(x1));
        newContent.innerHTML = div;
        addTo.appendChild(newContent);
        
        //create popup
        var images = [];
        for (var x2 = 0; x2 < artwork[x1].files.length; x2 += 1) {
            images.push("<img src='" + artwork[x1].files[x2] + "'width='90%;'>")
        }
        
        var modalele = "<div class='modal-dialog' role='document'>" + " <div class='modal-content'>" + "<div class='modal-header'>" + "<h5 class='modal-title' id='" + "model" + String(x1) + "Label" + "'>Artwork By " + artwork[x1].by + "</h5>" + "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" + "<span aria-hidden='true'>&times;</span>" + " </button>" + "</div>" + "<div class='modal-body'>" + "<center>" + images.toString() + "</center>" + "</div>" + "<div class='modal-footer'>" + "<button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>" + "</div>" + "</div>" + "</div>" + "</div>";
        
        var addToModal = document.getElementById("modals");
        var newContentModal = document.createElement("div");
        newContentModal.className = "modal fade";
        newContentModal.setAttribute("id", "model" + String(x1));
        newContentModal.setAttribute("tabindex", "-1");
        newContentModal.setAttribute("role", "dialog");
        newContentModal.setAttribute("aria-labelledby", "model" + String(x1) + "Label");
        newContentModal.setAttribute("aria-hidden", "true");
        newContentModal.innerHTML = modalele;
        addToModal.appendChild(newContentModal);
    }
}


//Show Popup
function popup(thus) {
    var modalnum = String("#model" + thus.id)
    $(modalnum).modal('show');
}


//Ideas Gen code
function ideasfunc(document) {

//Set link text to "Learn More"
document.getElementById("link").innerHTML = "I want to try this.";

//Set text to random idea and set link to correct url
var number = Math.floor(Math.random() * words.length);

var word = words[number].name;
document.getElementById("text").innerHTML = word;

var link = words[number].link;
    if (link != null) {
        document.getElementById("link").href = link;
    } else {
        document.getElementById("link").removeAttribute("href");
        document.getElementById("link").innerHTML = "";
    }
}