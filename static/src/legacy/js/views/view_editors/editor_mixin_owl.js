odoo.define('odoo_studio_community.EditorMixinOwl', function (require) {
    "use strict";

    return Editor => class extends Editor {
        handleDrop() { }

        highlightNearestHook() { }

        setSelectable() { }

        unselectedElements() { }
    };

});
