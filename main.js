$(document).ready(function() {

// Front Page Cover Albums

  var imageAlbums = "";
  albums.forEach(function(element){
  var createImageAlbumsStr = _.template($('#albumTemplate').html());
  imageAlbums += createImageAlbumsStr(element);
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
  var createPhotoDisplayStr = _.template($('#photoTemplate').html());
    photoDisplay += createPhotoDisplayStr(element);
  });
  $(".imagesClass").html(photoDisplay);
};

// To click on the photos and have them enlarged

var selectedPhoto = "";
$('.imagesClass').on('click', '.photoClass', function(event){
  event.preventDefault();
  $("section").removeClass('active');
  $('.viewPhoto').addClass('active');
  var photoHtmlStr = "<img src ='" + $(this).data('photo-full') + "'>"
  $('.photoLarge').html(photoHtmlStr);
  });

  // this is the long and complicated way

  // selectedPhoto = $(this).attr('rel');
  // var albumName = $(this).children('img').attr('src').split("/")[1];
  // var photoToPutOnPage = albums.filter(function(element){
  //   return albumName === element.albumTitle.toLowerCase();
  // }).pop();
  // var rightPhoto = photoToPutOnPage.photos.filter(function(element) {
  //   return element.photoRel === selectedPhoto;
  // }).pop();
  // console.log(rightPhoto);
  // var photoHtmlStr = "";
  // // photoToPutOnPage.photos.forEach(function(element){
    // photoHtmlStr +=
    // "<h1>"
    // + rightPhoto.photoName
    // + "</h1>"
    // + "<img src ='" + rightPhoto.photoFull + "'>"
  // // });
  // console.log(photoHtmlStr);

  // setPhotoDisplay(selectedPhoto);

// var getPhotos = function (photoclicked) {
//   var photoArr = albums.photos.filter(function(element){
//     return element.photoRel === photoclicked;
//   });
//   return photoArr[0].photos;
// };
//
// var showPhotoDisplay = function (photoselected){
//   var photoDisplayFull = "";
//   _.each(getPhotos(selectedPhoto), function(element){
//     photoDisplayFull +=
//     "<h1>" + element.photoName + "</h1>"
//     + "<img src ='" + element.photoFull + "'>"
//   });
//   $(".photoLarge").html(photoDisplayFull);
// };

// NavBar

var navBarFunction = "";
_.each(albums, function (element){
var createNavBarStr = _.template($('#navTemplate').html());
navBarFunction += createNavBarStr(element);
});
$('.navBar').append(navBarFunction);


var button = $('.navClass');
button.click(function(event){
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
var createPhotoDisplayStr = _.template($('#photoTemplate').html());
  photoDisplay += createPhotoDisplayStr(element);
});
$(".imagesClass").html(photoDisplay);
};


});
