/** @odoo-module **/

import { registerCleanup } from "@web/../tests/helpers/cleanup";
import studioBus from "odoo_studio_community.bus";

QUnit.testStart(() => {
    const originalTrigger = studioBus.trigger;
    registerCleanup(() => {
        studioBus.trigger = originalTrigger;
    });
});
