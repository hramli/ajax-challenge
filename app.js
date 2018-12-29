$(document).ready(function() {

  $('#submit').click(function(event){
    event.preventDefault();
    $('#search').prop("disabled", true);
    $('#submit').prop("disabled",true).attr('value','searching...');
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $('#search').val();
    var data = {
      tags: animal,
      format: "json"
    }
    function displayPhotos(data){
      var photoHTML = '';
      if(data.items.length == 0)
        photoHTML += '<li>There are no photos found</li>';
      else
      {
        $.each(data.items, function(index, item){
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + item.link + '" class="image">';
          photoHTML += '<img src="' + item.media.m + '"></a></li>';
        })
      }
      $('#photos').html(photoHTML);

      $('#search').prop("disabled", false);
     $('#submit').prop("disabled",false).attr('value','search');
    }
    $.getJSON(flickerAPI, data, displayPhotos);
  });

}); // end ready
