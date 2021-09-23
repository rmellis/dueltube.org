/*
*  This section is purely for interactivity, letting the user change options via the box.
*/


/* Lets user use color scheme dropdown to change scheme color. */
$('#color-scheme').change(function(){
  var colorScheme = $('#color-scheme').val();
  $('.wppw-title-font-color').css('color',colorScheme);
  $('.wppw-background-color').css('background-color',colorScheme);
});

/* Lets user use text color dropdown to change text color. */
$('#text-color-choice').change(function(){
  var colorText = $('#text-color-choice').val();
  $('.wppw-text-font-color').css('color',colorText);
});

/* Lets user use font dropdown to change font. */
$('#font-choice').change(function(){
  var fontText = $('#font-choice').val();
  $('.wppw-font').css('font-family',fontText);
});

/* Lets user input custom color for scheme */
$('#custom-color-scheme').keyup(function(e){
  if(e.which == 13) {
    var colorScheme = $('#custom-color-scheme').val();
    $('.wppw-title-font-color').css('color',colorScheme);
    $('.wppw-background-color').css('background-color',colorScheme);
    
    //Checks if value is able to be used
    var color = $('.wppw-title-font-color').css('color');
    if (color.length==0) {
      $('.wppw-title-font-color').css('color','#DA4454');
      $('.wppw-background-color').css('background-color','#DA4454');
    }
    
    //Resets value of text area
    $('#custom-color-scheme').val('');
  }
});

/* Lets user input custom color for text */
$('#custom-color-text').keyup(function(e){
  if(e.which == 13) {
    var colorScheme = $('#custom-color-text').val();
    $('.wppw-text-font-color').css('color',colorScheme);
    
    //Checks if value is able to be used
    var color = $('.wppw-text-font-color').css('color');
    if (color.length==0) {
      $('.wppw-text-font-color').css('color','#DA4454');
    }
    
    //Resets value of text area
    $('#custom-color-text').val('');
  }
});