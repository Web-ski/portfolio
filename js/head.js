//const head = function () {

var getPageName = function getPageName() {
  var pathArray = window.location.href.split('/');
  var pathArrayLastElem = pathArray.slice(-1)[0].split('.');
  return pathArrayLastElem[0];
};

var pageTitle = document.title;
var pageName = getPageName();

var setHeadName = function setHeadName(item) {
  document.title = document.title + (' | ' + (item.charAt(0).toUpperCase() + item.slice(1)));
};

setHeadName(pageName);

//}

//head();