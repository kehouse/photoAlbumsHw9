$(document).ready(function() {

// Front Page Cover Albums

var imageAlbums = "";

albums.forEach(function (element, idx){
  imageAlbums += "<ul>" + "<li><a href><img src= '" + element.albumCover + "' /></a>" + "<h3>" + element.albumTitle + "</h3>" + "</li>" + "</ul>";
})

$('.container').append(imageAlbums);

// To click the albums to show each album

var navItem = $('li').find('img');
navItem.click(function(event){
  event.preventDefault();
  var selectedPage = "." + $(this).attr('a');

  $(selectedPage).siblings('section').removeClass('active');
  $(selectedPage).addClass('active');
});

});
