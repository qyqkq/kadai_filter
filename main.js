var $keyWords = $('.image_box');
$('#search').keyup(function() {
  var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
  
  $keyWords.show().filter(function() {
    var text = $(this).text().replace(/\st/g, ' ').toLowerCase();
    return !~text.indexOf(val);
  }).hide();
})

