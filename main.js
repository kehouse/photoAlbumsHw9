$(document).ready(function() {

// Front Page Cover Albums

var imageAlbums = "";

_.each(albums, function (element){
  imageAlbums += "<ul>"
  + "<div class='albumClass' rel='"
  + element.albumRel + "'>"
  + "<li><img src= '"
  + element.albumCover
  + "' />"
  + "<h3>"
  + element.albumTitle
  + "</h3>"
  + "</li>"
  + "</div>"
  + "</ul>";
});

$('.home').append(imageAlbums);

// To click the albums to show each album

var selectedPage = "";
$('.albumClass').on('click', albums, function(event){
  event.preventDefault();
  $("section").removeClass('active');
  $('.viewAlbum').addClass('active');
  selectedPage = $(this).attr('rel');
  setPhotoDisplay(selectedPage);
});

var getAlbumPhotos = function (albumclicked) {
  var photoArray = albums.filter(function(element){
    return element.albumRel === albumclicked;
  });
  return photoArray[0].photos;
};

var setPhotoDisplay = function (albumselected){
  var photoDisplay = "";
  _.each(getAlbumPhotos(selectedPage), function(element){
    photoDisplay += "<div class='photoClass' id='" + element.photoRel + "'>"
    + "<img src ='" + element.photoThumb + "'>"
    + "<h3>" + element.photoName + "</h3>"
    + "</div>"
  });
  $(".imagesClass").html(photoDisplay);
};


});
