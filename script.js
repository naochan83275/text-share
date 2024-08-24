const urlParams = new URLSearchParams(window.location.search);

var base_url = 'https://naochan83275.github.io/text-share/?'
if(window.location.href = window.location.href){
  if(urlParams.get('mode') = 'HTML'){
      var text = urlParams.get('text');
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
