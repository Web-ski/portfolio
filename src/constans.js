/*basic info*/
export const BRAND_NAME = "Nieczuja";
export const MENU_NAME = "Menu";
export const PAGE_NAME = ["Portfolio", ["of"], "Paweł", "Nieczuja-", "Ostrowski"];

class HERO_ELEM {
  constructor(name) {
    this.name =  name;
  }
}

export const BRAND = new HERO_ELEM(BRAND_NAME);


/*home page*/
export const URL_HOME = "content/articles.json";
/*webs page*/
export const URL_WEBS = "content/webs.json";


/*section "footer"*/

export const FOOTER_TEXT_AUTHOR = "2020, by Pawel Nieczuja-Ostrowski";