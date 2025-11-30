/** @odoo-module **/

import { registry } from "@web/core/registry";

const actionRegistry = registry.category("actions");

actionRegistry.add("action_odoo_studio_community_app_creator",
    (env) => env.services.studio.open(env.services.studio.MODES.APP_CREATOR)
);
