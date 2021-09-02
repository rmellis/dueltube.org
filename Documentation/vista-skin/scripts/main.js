/*******************************************************        

                  Vista-Buttons.com
                     - scrips -
                      - main -        
                      
********************************************************/

/** image array */
var _live_buttons_image = {
  'back' : [
    'http://vistabuttons.com/vista-skin/scripts/vista-skin/images/vista-form-back-active.gif',
    'http://vistabuttons.com/vista-skin/scripts/vista-skin/images/vista-form-back-enabled.gif' ],
  'next' : [
    'http://vistabuttons.com/vista-skin/scripts/vista-skin/images/vista-form-next-active.gif',
    'http://vistabuttons.com/vista-skin/scripts/vista-skin/images/vista-form-next-enabled.gif' ]
  };

/** live images id on page */
var _live_images_id = [
  'img-back-button',
  'img-next-button'
  ];

/**
 * Init. Live Buttons For Panel
 */
function liveButtonsInit()
{
  var _temp; var _counter = 0;
  // cache all images ( & create )
  for ( var key in _live_buttons_image )
  {
    for ( var i = 0; i < _live_buttons_image[ key ].length; i++ )
    {
      _temp = _live_buttons_image[ key ][ i ];
      _live_buttons_image[ key ][ i ] = new Image();
      _live_buttons_image[ key ][ i ].src = _temp;
    } 
    // add events in images
    addEvent ( document.getElementById( _live_images_id [ _counter ] ) , key );
    _counter++;
  }
}


/**
 * Add Event For Image
 * \param _image link on image
 * \param _name name
 */
function addEvent( _image, _name )
{
  _image.onmouseover = function(){ liveButtons( this, _name, 0   ) };
  _image.onmouseout  = function(){ liveButtons( this, _name, 1 ) };
}


/**
 * Init. Live Buttons For Panel
 *
 * \param _obj link to object
 * \param _name name
 * \param _type event type
 */
function liveButtons( _obj, _name, _type )
{
  //alert(_live_buttons_image[ _name ][ _type ].src);
  _obj.src = _live_buttons_image[ _name ][ _type ].src;
}

/** Loading Page */
window.onload = function()
{
  // init for live buttons
  liveButtonsInit();
}