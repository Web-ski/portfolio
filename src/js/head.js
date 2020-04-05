const head = function () {

  const getPageName = () => {
    const pathArray = window.location.href.split('/');
    const pathArrayLastElem = (pathArray.slice(-1))[0].split('.');
    return pathArrayLastElem[0];
  }

  const pageName = getPageName();

  const setHeadName = (item) => {
    document.title = document.title + ` | ${item.charAt(0).toUpperCase() + item.slice(1)}`
  }

  setHeadName(pageName);

}

head();