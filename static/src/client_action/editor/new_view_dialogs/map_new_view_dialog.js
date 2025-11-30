/** @odoo-module */
import { NewViewDialog } from "@odoo_studio_community/client_action/editor/new_view_dialogs/new_view_dialog";
import { useService } from "@web/core/utils/hooks";
import { AlertDialog } from "@web/core/confirmation_dialog/confirmation_dialog";

export class MapNewViewDialog extends NewViewDialog {
    setup() {
        super.setup();
        this.dialog = useService("dialog");
        this.fieldsChoice = {
            res_partner: null,
        };
    }

    get viewType() {
        return "map";
    }

    computeSpecificFields(fields) {
        this.partnerFields = fields.filter(
            (field) => field.type === "many2one" && field.relation === "res.partner"
        );
        if (!this.partnerFields.length) {
            this.dialog.add(AlertDialog, {
                body: this.env._t("Contact Field Required"),
                contentClass: "o_odoo_studio_community_preserve_space",
            });
            this.props.close();
        } else {
            this.fieldsChoice.res_partner = this.partnerFields[0].name;
        }
    }
}
MapNewViewDialog.template = "odoo_studio_community.MapNewViewDialog";
MapNewViewDialog.props = {
    ...NewViewDialog.props,
};
delete MapNewViewDialog.props.viewType;
