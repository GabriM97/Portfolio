$(document).ready(function(){
  loadProjects();

});

function loadProjects(){
  //getProjectsData();
  var proj_img = ["project.png", "project.png", "project.png"];
  var proj_title = ["Portfolio", "MovieNet", "CryptoWolf"];
  var proj_descr = ["My personal Portfolio website",
                    "Movies website built during Web Programming, Design & Usability course at University of Catania.",
                    "Crypto-predicter using Machine Learning algorithms based on Linear Regression."];
  var proj_link = ["https://github.com/GabriM97/Portfolio",
                   "https://github.com/GabriM97/MovieNet",
                   "https://github.com/GabriM97/CryptoWolf"];

  for(var i=0; i<3; i++){
    var project =
    '<div class="col"> \
      <a href="#"><img src="assets/img/'+ proj_img[i] +'" alt="project"></a> \
      <h5 class="project-title">'+ proj_title[i] +'</h5> \
      <p class="project-description"> \
        '+ proj_descr[i] +' \
        <span class="description-more" style="text-align: right;"> \
          <a href="'+ proj_link[i] +'">More ...</a> \
        </span> \
      </p> \
    </div>';

    $("#grid-container").append(project);
  }
}
