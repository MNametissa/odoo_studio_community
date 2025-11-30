odoo.define('odoo_studio_community.ListRenderer', function (require) {
"use_strict";

/**
 * In this file, we patch the ListRenderer, to open Studio when the user clicks
 * on 'Add a field' in the optional field dropdown. We create a dedicated file
 * for this patch as it can't be lazy loaded when the user first opens Studio,
 * as this patch applies outside Studio.
 */

const ListRenderer = require('web.ListRenderer');
const { patch } = require('web.utils');

// This is used to force odoo_studio_community to load after web_enterprise
require('web_enterprise.ListRenderer');

patch(ListRenderer.prototype, 'odoo_studio_community.ListRenderer', {
    /**
     * This function opens the studio mode with current view
     *
     * @override
     */
    _onAddCustomFieldClick: function (event) {
        event.stopPropagation();
        this.trigger_up('studio_icon_clicked');
    },
});

});
