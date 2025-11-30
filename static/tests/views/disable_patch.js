/** @odoo-module */

import { unpatch } from "@web/core/utils/patch";
import { ListRenderer } from "@web/views/list/list_renderer";

import "@odoo_studio_community/views/list/list_renderer";

unpatch(ListRenderer.prototype, "odoo_studio_community.ListRenderer");
