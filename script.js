function _urlparam(paramid){
    let url_string = window.location.href;
    let _url = new URL(url_string);
    let paramdata =url.searchParams.get(paramid);
    return paramdata;
}
var base_url = 'https://naochan83275.github.io/text-share/?'
if(base_url = window.location.href){
  if(_urlparam('mode') = 'HTML'){
    
    document.getElementById('content').innerHTML = _content;
  }
}
