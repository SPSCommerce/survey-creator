import { SideBarTabModel } from "@survey/creator";
import * as ko from "knockout";
import { ImplementorBase } from "survey-knockout-ui";
const template = require("./side-bar-tab.html");

ko.components.register("svc-side-bar-tab", {
  viewModel: {
    createViewModel: (params: any) => {
      const item: SideBarTabModel = params.item;
      new ImplementorBase(item);
      return params;
    },
  },
  template: template
});
