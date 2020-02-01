$(document).ready(function() {
  $.ajax(
   {
     url: "https://flynn.boolean.careers/exercises/api/array/music",
     method: "GET",
     success: function (data) {
      processData(data.response);
     },
     error: function (richiesta, stato, errori) {
       alert("E' avvenuto un errore. " + errore);
     }
   }
  );
  $(document).on('change', '#genere', function () {
    var selected= $(this).val();
    for (var i = 0; i < $('.cd').length; i++) {
      if ($('.cd .genre').eq(i).text() == selected) {
        $('.cd').eq(i).show();
      } else {
        $('.cd').eq(i).hide();
      }
      if (selected == 'All') {
        $('.cd').show();
      }
    }
  });
});

function processData (data) {
  for (var i = 0; i < data.length; i++) {
    var disco = data[i];
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(disco);
    $('.cds-container').append(html);
  }
}
