$(document).ready(function() { 
  $("#myTable").tablesorter();   
  
  window.lang="en";
  i18n.init({ lng: window.lang });

  for (window.truePainter = 1; window.truePainter <= 118; window.truePainter++) {
    
    $.getJSON("painters/"+ truePainter + "/data.json", function(json) {

        window.paintings = json.paintings;
        window.id = json.id;
        window.truePainterName = json.name;
        window.link = json.link.local;
        window.wiki = json.link.wikipedia.ru;
        window.years = json.years;
        window.bio = json.bio[window.lang];
        window.nation = undefined;
        json.nationality.forEach(function(entry) {
          if (window.nation == undefined) {
            window.nation = i18n.t("nation." + entry, { lng: window.lang });
          } else {
            window.nation = window.nation + ", " + i18n.t("nation." + entry, { lng: window.lang });
          }
        });
        window.genre = undefined;
        json.genre.forEach(function(entry) {
          if (window.genre == undefined) {
            window.genre = i18n.t("genre." + entry, { lng: window.lang });
          } else {
            window.genre = window.genre + ", " + i18n.t("genre." + entry, { lng: window.lang });
          }
        });
    

        html = "<tr>\
        <td>"+window.id +"</td>\
        <td>"+window.truePainterName +"</td>\
        <td>"+window.paintings+"</td>\
        <td>"+window.genre+"</td>\
        <td>"+window.nation+"</td>\
        <td>"+window.years+"</td>\
      </tr>";
    
      $("#tbody").append(html);
      $("table").trigger("update"); 


    }); //JSON

  } //for
});