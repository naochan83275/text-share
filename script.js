function _urlparam(paramid){
    let url_string = window.location.href;
    let _url = new URL(url_string);
    let paramdata =url.searchParams.get(paramid);
    return paramdata;
    alert(paramdata)
}
var base_url = 'https://naochan83275.github.io/text-share/?'
if(base_url = window.location.href){
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
