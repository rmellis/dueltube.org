

 function xpinit()
 {
   var o, i, uls = document.getElementsByTagName('UL');
   for (i=0, cnt=uls.length; i<cnt; i++)
     if (uls[i].id && uls[i].id.substring(0, 7)=='xpwbUL_')
     {
        o=uls[i];
        if (o)
        {
            var lis = o.getElementsByTagName('LI');
            for (var k=0; k<lis.length; k++)
            {
              lis[k].onmouseover = function (){ this.className = 'over'; }
              lis[k].onmouseout  = function (){ this.className = ''; }
            }
        }
     }
 }
 xpinit();


 function xppr(im)
  {
    var i=new Image();
    i.src='vista-skin/images/menu/bt'+im;
    return i;
  }


  function xpe(id)
  {
    x=id.substring(0,id.length-1);
    document['xpwb'+x].src=eval('xpwb'+id+'.src');
    if (id.indexOf('e')!=-1)
      document['xpwb'+x+'e'].src=eval('xpwb'+id+'e.src');

    return false;
  }

   /**
   * It searchs the parent
   *
   * @param _object object
   * @return unique variable from table-id
   *
   */
  function xpgetparent( _object )
  {
    var _id = null;
    while ( _object && _object.tagName != 'TABLE' ) _object = _object.parentNode;
    if ( _object.id && _object.id.indexOf(':') != -1 ) _id  = _object.id.split(':')[1];
    return _id;
  }


  function xpshow(ind, isVertical, _id)
  {
     if (xobtn != ind)  xphide();
    // create unique variable
    _id = xpgetparent( _id );
    if ( !_id ) return;
    if ( global[ _id ] ) global[ _id ] = null;
    global[ _id ] = document.getElementById('xpwbUL_'+ind);
    xpsm = global[ _id ];

    // it saves button
    xobtn = ind;

    if (!xpsm) return;

    var img = document.getElementById('xpi_'+ind);
    var pos = xppos(img);

    if (isVertical)
    {
      xpsm.style.left = pos[0] + img.width + 'px';
      xpsm.style.top  = pos[1] + 'px';
    }
    else
    {
      xpsm.style.left = pos[0] + 'px';
      xpsm.style.top  = pos[1] + img.height + 'px';
    }

    xpsm.style.visibility = 'visible';
  }



  function xphide()
  {
    if (xpsm)
    {
      if (xpsmt)
        clearTimeout(xpsmt);

      xpsm.style.visibility = 'hidden';
      xpsm = null;
      // clear selected
      xpe(xobtn + 'n');
    }
  }


  function xpsmout()
  {
    if (xpsm)
      xpsmt = setTimeout( 'xphide();', 1000);
    else
    {
      // clear selected
      xpe(xobtn + 'n');
    }
  }

  function xpsmover()
  {
    if (xpsmt)
      xpsmt = clearTimeout(xpsmt);
  }

  function xppos(o)
  {
    var l=0, t=0;
    while (o)
    {
      l += o.offsetLeft;
      t += o.offsetTop;
      o = o.offsetParent;
    }
    return [l, t];
  }

  // init global vars
  if (!global) var global = this;
  var xpsm  = null;
  var xpsmt = null;
  var xobtn = null;
xpwbz79twn=xppr('http://vistabuttons.com/vista-skin/scripts/z79tw_0.gif');xpwbz79two=xppr('http://vistabuttons.com/vista-skin/scripts/z79tw_1.gif');xpwbz79twc=xppr('http://vistabuttons.com/vista-skin/scripts/z79tw_2.gif');xpwb379twn=xppr('http://vistabuttons.com/vista-skin/scripts/379tw_0.gif');xpwb379two=xppr('http://vistabuttons.com/vista-skin/scripts/379tw_1.gif');xpwb379twc=xppr('http://vistabuttons.com/vista-skin/scripts/379tw_2.gif');xpwbw79twn=xppr('http://vistabuttons.com/vista-skin/scripts/w79tw_0.gif');xpwbw79two=xppr('http://vistabuttons.com/vista-skin/scripts/w79tw_1.gif');xpwbw79twc=xppr('http://vistabuttons.com/vista-skin/scripts/w79tw_2.gif');xpwbuy9twn=xppr('http://vistabuttons.com/vista-skin/scripts/uy9tw_0.gif');xpwbuy9two=xppr('http://vistabuttons.com/vista-skin/scripts/uy9tw_1.gif');xpwbuy9twc=xppr('http://vistabuttons.com/vista-skin/scripts/uy9tw_2.gif');xpwbly9twn=xppr('http://vistabuttons.com/vista-skin/scripts/ly9tw_0.gif');xpwbly9two=xppr('http://vistabuttons.com/vista-skin/scripts/ly9tw_1.gif');xpwbly9twc=xppr('http://vistabuttons.com/vista-skin/scripts/ly9tw_2.gif');
  // Menu Type 2
  function xppr(im)
  {
    var i=new Image();
    i.src='vista-skin/images/menu/bt'+im;
    return i;
  }


  function xpe(id)
  {
    x=id.substring(0,id.length-1);
    document['xpwb'+x].src=eval('xpwb'+id+'.src');
    if (id.indexOf('e')!=-1)
      document['xpwb'+x+'e'].src=eval('xpwb'+id+'e.src');

    return false;
  }

