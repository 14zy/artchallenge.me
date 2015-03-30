$(document).ready(function() { 
  
  window.lang="en";
  i18n.init({ lng: window.lang });
    
  
  for (i = 1; i <= 200; i++) {
    

    $.getJSON("painters/" + Math.floor((Math.random()*118)) + "/data.json", function(json) {

      window.paintings = json.paintings;
      window.image = Math.floor((Math.random()*window.paintings)+1);

      link = "painters/" + json.id + "/" + window.image + ".jpg";
      html = "\
      <div class='col-sm-6 col-md-3' style='height: 400px'>\
        <div class='thumbnail'>\
          <a href='#'><img src='" + link + "' style='max-height: 300px'></a>\
          <div class='caption'>\
            <a href='#'>"+json.name+"</a>\
            <p>"+json.years+"</p>\
          </div>\
        </div>\
      </div>"

      $("#gallery").append(html);
      // $("#gallery").trigger("update");

    }); //JSON

  }; //for
  
});



