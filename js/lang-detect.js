/*
 Detects the browser language
 */
var userLang = navigator.language || navigator.userLanguage;

/*
 test if ou cookie is set
 */
if(getCookie("lang")){
  //   it is set, so no redirect
}
else{
  // The cookie is not set, so set it, and redirect
  langstring=userLang.split('-')[0];
  lang = "lang="+langstring;
  document.cookie=lang;
  redirect(langstring);
}

/*
 Returns the given cookie or false if not existing
 */
function getCookie(name){
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}

/*
 Function used to clean our language cookie
 */
function clearCookie(){
  var mydate = new Date();
  mydate.setTime(mydate.getTime() - 1);
  document.cookie = "lang=; expires=" + mydate.toGMTString();
}

/*
 redirects to the desired URLs
 Only the first two letters of the ISO country code are used
 */
function redirect(actuallang){
  var url ='/';
  switch(actuallang){
	case 'en': case 'ru': case 'fr': case 'de': default:
      url ='https://virtualdot.info';
      break;
    case 'es':
      url ='https://virtualdot.info/es.html';
      break;
  }
  var oldURL = window.location.href.replace(/^https?:\/\//,'')
  var newURL = url.replace(/^https?:\/\//,'');
  console.log("old loc");
  console.log(oldURL);
  console.log("new loc");
  console.log(newURL);
  console.log(newURL == oldURL);
  if (newURL != oldURL) {
  	window.location.replace(url);
  }
}