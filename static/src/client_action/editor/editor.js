/** @odoo-module **/

import { StudioActionContainer } from "../studio_action_container";
import { actionService } from "@web/webclient/actions/action_service";
import { useBus, useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry";

import { EditorMenu } from "./editor_menu/editor_menu";

import { mapDoActionOptionAPI } from "@web/legacy/backend_utils";

import { Component, EventBus, markup, onWillStart, useSubEnv } from "@odoo/owl";

const editorTabRegistry = registry.category("odoo_studio_community.editor_tabs");

const actionServiceStudio = {
    dependencies: ["studio"],
    start(env) {
        const action = actionService.start(env);
        const _doAction = action.doAction;

        async function doAction(actionRequest, options) {
            if (actionRequest === "odoo_studio_community.action_edit_report") {
                return env.services.studio.setParams({
                    editedReport: options.report,
                });
            }
            return _doAction(...arguments);
        }

        return Object.assign(action, { doAction });
    },
};

export class Editor extends Component {
    setup() {
        const services = Object.create(this.env.services);

        useSubEnv({
            bus: new EventBus(),
            services,
        });
        // Assuming synchronousness
        services.router = {
            current: { hash: {} },
            pushState() {},
        };
        services.action = actionServiceStudio.start(this.env);

        this.studio = useService("studio");
        this.actionService = useService("action");
        this.rpc = useService("rpc");

        useBus(this.studio.bus, "UPDATE", async () => {
            const action = await this.getStudioAction();
            this.actionService.doAction(action, {
                clearBreadcrumbs: true,
            });
        });

        onWillStart(this.onWillStart);
    }

    async onWillStart() {
        this.initialAction = await this.getStudioAction();
    }

    switchView({ viewType }) {
        this.studio.setParams({ viewType, editorTab: "views" });
    }
    switchViewLegacy(ev) {
        this.studio.setParams({ viewType: ev.detail.view_type });
    }

    switchTab({ tab }) {
        this.studio.setParams({ editorTab: tab });
    }

    async getStudioAction() {
        const { editorTab, editedAction, editedReport } = this.studio;
        const tab = editorTabRegistry.get(editorTab);
        if (tab.action) {
            return tab.action;
        } else if (editorTab === "reports" && editedReport) {
            return "odoo_studio_community.report_editor";
        } else {
            const action = await this.rpc("/odoo_studio_community/get_studio_action", {
                action_name: editorTab,
                model: editedAction.res_model,
                view_id: editedAction.view_id && editedAction.view_id[0], // Not sure it is correct or desirable
            });
            action.help = action.help && markup(action.help);
            return action;
        }
    }

    onDoAction(ev) {
        // @legacy;
        const payload = ev.detail;
        const legacyOptions = mapDoActionOptionAPI(payload.options);
        this.actionService.doAction(
            payload.action,
            Object.assign(legacyOptions || {}, { clearBreadcrumbs: true })
        );
    }
}
Editor.template = "odoo_studio_community.Editor";
Editor.components = {
    EditorMenu,
    StudioActionContainer,
};
