/** @odoo-module */

import { formView } from "@web/views/form/form_view";

import { Component } from "@odoo/owl";

const components = formView.Controller.components;

export class ChatterContainer extends components.ChatterContainer {
    _insertFromProps(props) {
        props = { ...props };
        delete props.studioXpath;
        return super._insertFromProps(props);
    }
    onClick(ev) {
        this.env.config.onNodeClicked({
            xpath: this.props.studioXpath,
            target: ev.target,
        });
    }
}
ChatterContainer.template = "odoo_studio_community.ChatterContainer";
ChatterContainer.props = {
    ...ChatterContainer.props,
    studioXpath: String,
};

export class ChatterContainerHook extends Component {
    onClick() {
        this.env.config.onViewChange({
            structure: "chatter",
            ...this.props.chatterData,
        });
    }
}
ChatterContainerHook.template = "odoo_studio_community.ChatterContainerHook";
ChatterContainerHook.components = { ChatterContainer: components.ChatterContainer };
ChatterContainerHook.props = {
    chatterData: Object,
    threadModel: String,
};
