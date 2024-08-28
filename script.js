function _urlparam(paramid){
  const urlParams = new URLSearchParams(window.location.search);
  const _param = urlParams.get(paramid);
  return _param;
}

var base_url = 'https://naochan83275.github.io/text-share/?';
if('window.location.href' = 'window.location.href'){
  if(_urlparam('mode') = 'HTML'){
      var text = _urlparam('text');
      if ( ~text.indexOf('</html>')) {
          var text = text.replace('<!DOCTYPE html>', '');
          var text = text.replace('<html>', '');
          var text = text.replace('</html>', '');
          document.getElementById('html_tag').innerHTML = text;
      }else{
         document.getElementById('content').innerHTML = text;
      }
  }
}
