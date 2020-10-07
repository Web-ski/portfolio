/*basic info*/
export const BRAND_NAME = "Nieczuja";
export const MENU_NAME = "menu";
export const PAGE_NAME = ["Portfolio", "of Paweł", "Nieczuja-", "Ostrowski"];
export const SECTION_NAME = ["front", "ux", "ui", "repo", "cv", "find"];

class HERO_ELEM {
  constructor(text, tag, name) {
    this.text =  text;
    this.tag =  tag;
    this.name =  name;
  }
}

export const BRAND = new HERO_ELEM(BRAND_NAME, 'p', 'hero__brand');
export const MENU = new HERO_ELEM(MENU_NAME, 'button', 'hero__menu');
export const NAME = PAGE_NAME.map(item => new HERO_ELEM(item, 'h1', 'page__title'));
export const NAV = SECTION_NAME.map(item => new HERO_ELEM(item, 'span', 'article__text'));

//export const PAGE_LETTERS = [PAGE1, PAGE2, PAGE3, PAGE4, PAGE5];

/*home page*/
export const URL_HOME = "content/articles.json";
/*webs page*/
export const URL_WEBS = "content/front.json";
/*ux page*/
export const URL_UX = "content/ux.json";
/*ui page*/
export const URL_UI = "content/ui.json";
/*cv page*/
export const URL_CV = "content/cv.json";

/*section "footer"*/

export const FOOTER_TEXT_AUTHOR = "2020, by Pawel Nieczuja-Ostrowski";