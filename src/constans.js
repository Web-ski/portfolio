/*basic info*/
export const BRAND_NAME = "Nieczuja";
export const MENU_NAME = "Menu";
export const PAGE_NAME = ["Portfolio", ["of"], "Paweł", "Nieczuja-", "Ostrowski"];

class HERO_ELEM {
  constructor(text, tag, name) {
    this.text =  text;
    this.tag =  tag;
    this.name =  name;
  }
}

export const BRAND = new HERO_ELEM(BRAND_NAME, 'p', 'hero__brand');
export const MENU = new HERO_ELEM(MENU_NAME, 'button', 'hero__menu');
const PAGE1 = (PAGE_NAME[0].split('')).map((item) => new HERO_ELEM(item, 'h1', 'page__title'));
const PAGE2 = PAGE_NAME[1].map((item) => new HERO_ELEM(item, 'h1', 'page__title page__title--of'));
const PAGE3 = (PAGE_NAME[2].split('')).map((item) => new HERO_ELEM(item, 'h1', 'page__title'));
const PAGE4 = (PAGE_NAME[3].split('')).map((item) => new HERO_ELEM(item, 'h1', 'page__title'));
const PAGE5 = (PAGE_NAME[4].split('')).map((item) => new HERO_ELEM(item, 'h1', 'page__title'));

export const PAGE_LETTERS = [PAGE1, PAGE2, PAGE3, PAGE4, PAGE5];



/*home page*/
export const URL_HOME = "content/articles.json";
/*webs page*/
export const URL_WEBS = "content/webs.json";


/*section "footer"*/

export const FOOTER_TEXT_AUTHOR = "2020, by Pawel Nieczuja-Ostrowski";