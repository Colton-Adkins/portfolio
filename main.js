

function HideProjects() {
  var projects = document.getElementById("projects");
  var projects2 = document.getElementById("projects2");

  if (projects.style.display === "inline-block") {
    projects.style.display = "none";
    projects2.style.display = "inline-block";
  } else {
    projects.style.display = "inline-block";
  }
} 

function setStyle() {
projects.style.display = "inline-block";   
projects2.style.display= "none";
}

function ShowProjects() {
  var projects = document.getElementById("projects");
  var projects2 = document.getElementById("projects2");

  if (projects2.style.display === "inline-block") {
    projects2.style.display = "none";
    projects.style.display = "inline-block";
  } else {
    projects.style.display = "inline-block";
  }
} 

function terry() {
      var header = document.getElementById("header");
var child = document.getElementById("btn");

    document.body.style.backgroundImage = "url('terry.jpg')"; 
    document.getElementById('me').src='terry.jpg';
    document.getElementById('me2').src='terry.jpg';
    document.getElementById("header_text").innerHTML = "Terry Crews";
     document.getElementById("subtitle").innerHTML = "Terry Crews";
      document.getElementById("am").innerHTML = "About Terry";
       document.getElementById("in").innerHTML = "Terry Alan Crews (born July 30, 1968) is an American actor, comedian, activist, artist, and former American football player.";
   document.getElementById("pics").src = "terry.png"; 
     document.getElementById("pics2").src = "terry.png"; 
       document.getElementById("pics3").src = "terry.png"; 
         document.getElementById("pics4").src = "terry.png"; 
           document.getElementById("pics5").src = "terry.png"; 
            document.getElementById("projects").style.backgroundImage = "url('terry.gif')";
            document.getElementById("projects2").style.backgroundImage = "url('terry.gif')";
              document.getElementById("header").style.backgroundImage = "url('terry.jpg')";
   document.getElementById("aboutme").style.backgroundImage = "url('terry.jpg')";
    document.getElementById("aboutme-inner").style.backgroundImage = "url('terry.jpg')";
     document.getElementById("aboutme-front").style.backgroundImage = "url('terry.jpg')";
      document.getElementById("aboutme-back").style.backgroundImage = "url('terry.jpg')";
        document.getElementById("btn").style.backgroundImage = "url('terry.jpg')";
          document.getElementById("btn2").style.backgroundImage = "url('terry.jpg')";
          alert('TERRY MODE: ACTIVATED');
          var audio = new Audio('Pressure.mp3');
audio.play();
          
          
}
