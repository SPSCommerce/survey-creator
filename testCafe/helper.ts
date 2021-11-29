import { Selector, ClientFunction } from "testcafe";

export const url = "http://127.0.0.1:8080/testCafe/testcafe.html";
// export const url =
//     "http://127.0.0.1:7777/packages/survey-creator-knockout/example/index.html";
export const base64image =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8DwHwAFBQIAX8jx0gAAAABJRU5ErkJggg==";

export const getPagesLength = ClientFunction(() => {
  return window["creator"].survey.pages.length;
});

export const getQuestionsLength = ClientFunction(() => {
  return window["creator"].survey.getAllQuestions().length;
});

export const setJSON = ClientFunction((json) => {
  window["creator"].text = JSON.stringify(json);
});

export const setSurveyProp = ClientFunction((propName, value) => {
  window["creator"].survey[propName] = value;
});

export const getJSON = ClientFunction(() => {
  return JSON.parse(window["creator"].text);
});

export const getQuestionNameByIndex = ClientFunction((index) => {
  return window["creator"].survey.getAllQuestions()[index].name;
});

export const getItemValueByIndex = ClientFunction((questionName, index) => {
  const question = window["creator"].survey.getQuestionByName(questionName);
  const choices = question.visibleChoices;
  return choices[index].value;
});

export const expandButtonSelector = Selector(".sv-action-bar-item[title=\"Show Panel\"]");
export const collapseButtonSelector = Selector(".sv-action-bar-item[title=\"Hide Panel\"]");
export const propertyGridSelector = Selector(".svc-side-bar__container");
export const objectSelectorButton = Selector(".svc-side-bar__container-header #svd-grid-object-selector .sv-action-bar-item");
export const objectSelectorPopup = Selector(".sv-popup .svc-object-selector");

export const questions = Selector(".svc-question__content");
export const questionToolbarActions = Selector(".svc-question__content-actions").filterVisible().find(".sv-action").filterVisible();

export const pageNavigator = Selector(".svc-page-navigator__selector").filterVisible();
export const toolbox = Selector(".svc-toolbox");
export const toolboxItems = Selector(".svc-toolbox__tool").filterVisible();
export const toolboxItemIcons = Selector(".svc-toolbox__tool .svc-toolbox__item-container").filterVisible();
export const toolboxItemTitles = Selector(".svc-toolbox__tool .svc-toolbox__item > .svc-toolbox__item-title").filterVisible();

export function getTabbedMenuItemByText(text: "Survey Designer" | "Test Survey" | "Survey Logic" | "Translation" | "JSON Editor" | "Embed Survey") {
  return Selector(".svc-tabbed-menu-item-container .svc-tabbed-menu-item__text").withText(text).filterVisible();
}

export function getBarItemByTitle(text) {
  return Selector(".sv-action-bar-item[title=\"" + text + "\"]");
}
export function getListItemByText(text) {
  return Selector(".sv-popup__content .sv-list .sv-list__item").withText(text).filterVisible();
}

export function getVisibleElement(selector: string | Selector): Selector {
  return selectorIsVisibleFilter(Selector(selector));
}

function selectorIsVisibleFilter(selector: Selector) {
  return selector.filter(visibility).with({ timeout: 1200 });
}

export function visibility(node: Element, idx: number): boolean {
  var style = window.getComputedStyle(node);
  if (style.display === "none" || style.visibility === "hidden") return false;
  return node.parentElement ? visibility(node.parentElement, idx) : true;
}
