/** @odoo-module */
import { ViewButton } from "@web/views/view_button/view_button";
import { useStudioRef, studioIsVisible } from "@odoo_studio_community/client_action/view_editors/utils";

/*
 * ViewButton:
 * - Deals with invisible
 * - Click is overriden not to trigger the bound action
 */
export class ViewButtonStudio extends ViewButton {
    setup() {
        super.setup();
        useStudioRef("rootRef");
    }
    getClassName() {
        let className = super.getClassName();
        if (!studioIsVisible(this.props)) {
            className += " o_odoo_studio_community_show_invisible";
        }
        if (this.props.studioXpath) {
            className += " o-web-studio-editor--element-clickable";
        }
        return className;
    }

    onClick(ev) {
        if (this.props.tag === "a") {
            ev.preventDefault();
        }
        if (!this.props.studioXpath) {
            return;
        }
        this.env.config.onNodeClicked({
            xpath: this.props.studioXpath,
            target: ev.currentTarget,
        });
    }
}
ViewButtonStudio.template = "odoo_studio_community.ViewButton";
ViewButtonStudio.props = [...ViewButton.props, "studioIsVisible?", "studioXpath?"];
