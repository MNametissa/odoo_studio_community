# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
# Modified for Odoo Community Edition - uses studio_community_base
{
    'name': "Odoo Studio Community",
    'summary': "Create and customize your Odoo apps - Community Edition",
    'author': 'MNametissa',
    'description': """
Studio - Customize Odoo (Community Edition Port)
=================================================

This addon allows the user to customize most element of the user interface, in a
simple and graphical way. It has two main features:

* create a new application (add module, top level menu item, and default action)
* customize an existing application (edit menus, actions, views, translations, ...)

Note: Only the admin user is allowed to make those customizations.

This version has been modified to run on Odoo Community Edition using
studio_community_base instead of the Enterprise web_enterprise module.

Removed features (require Enterprise modules):
- Map view editing (requires web_map)
- Gantt view editing (requires web_gantt)
""",
    'category': 'Customizations/Studio',
    'sequence': 75,
    'version': '1.0.1',
    'depends': [
        'base_automation',
        'base_import_module',
        'mail',
        'web',
        'studio_community_base',  # Provides web_enterprise stubs for Community Edition
        'web_editor',
        # Removed: 'web_map',
        # Removed: 'web_gantt',
        'sms',
    ],
    'data': [
        'views/assets.xml',
        'views/actions.xml',
        'views/base_import_module_view.xml',
        'views/ir_actions_report_xml.xml',
        'views/ir_model_data.xml',
        'views/studio_approval_views.xml',
        'data/mail_templates.xml',
        'data/mail_activity_type_data.xml',
        'wizard/base_module_uninstall_view.xml',
        'security/ir.model.access.csv',
        'security/studio_security.xml',
    ],
    'application': True,
    'license': 'LGPL-3',  # Changed from 'OEEL-1'
    'assets': {
        'web.assets_backend': [
            'odoo_studio_community/static/src/systray_item/**/*.js',
            'odoo_studio_community/static/src/studio_service.js',
            'odoo_studio_community/static/src/utils.js',
            'odoo_studio_community/static/src/tours/**/*.js',

            'odoo_studio_community/static/src/legacy/js/approval_component.js',
            'odoo_studio_community/static/src/legacy/scss/approval_component.scss',
            'odoo_studio_community/static/src/legacy/js/bus.js',
            'odoo_studio_community/static/src/legacy/js/views/renderers/form_renderer.js',
            'odoo_studio_community/static/src/legacy/js/views/renderers/list_renderer_eager.js',
            'odoo_studio_community/static/src/legacy/js/views/controllers/form_controller.js',
            'odoo_studio_community/static/src/legacy/studio_legacy_service.js',
            'odoo_studio_community/static/src/home_menu/**/*.js',
            'odoo_studio_community/static/src/views/**/*.js',
            'odoo_studio_community/static/src/approval/**/*',
            'odoo_studio_community/static/src/**/*.xml',
            ('remove', 'odoo_studio_community/static/src/legacy/xml/sidebar_web_editor.xml'),
        ],
        'web_editor.assets_wysiwyg': {
            'odoo_studio_community/static/src/legacy/xml/sidebar_web_editor.xml',
        },
        'web.assets_backend_prod_only': [
            'odoo_studio_community/static/src/client_action/studio_action_loader.js',
            'odoo_studio_community/static/src/client_action/app_creator/app_creator_shortcut.js',
        ],
        # This bundle is lazy loaded: it is loaded when studio is opened for the first time
        'odoo_studio_community.studio_assets': [
            'odoo_studio_community/static/src/client_action/**/*.js',
            ('remove', 'odoo_studio_community/static/src/client_action/studio_action_loader.js'),
            ('remove', 'odoo_studio_community/static/src/client_action/app_creator/app_creator_shortcut.js'),
            'odoo_studio_community/static/src/legacy/action_editor_main.js',
            'odoo_studio_community/static/src/legacy/edit_menu_adapter.js',
            'odoo_studio_community/static/src/legacy/new_model_adapter.js',

            'odoo_studio_community/static/src/legacy/js/py.js',
            'odoo_studio_community/static/src/legacy/js/edit_menu.js',
            'odoo_studio_community/static/src/legacy/js/new_model.js',
            'odoo_studio_community/static/src/legacy/js/common_menu_dialog.js',
            'odoo_studio_community/static/src/legacy/js/common/**/*.js',
            'odoo_studio_community/static/src/legacy/js/reports/**/*.js',
            'odoo_studio_community/static/src/legacy/js/views/abstract_view.js',
            'odoo_studio_community/static/src/legacy/js/views/action_editor.js',
            'odoo_studio_community/static/src/legacy/js/views/action_editor_sidebar.js',
            'odoo_studio_community/static/src/legacy/js/views/action_editor_view.js',
            'odoo_studio_community/static/src/legacy/js/views/view_components.js',
            'odoo_studio_community/static/src/legacy/js/views/view_editor_manager.js',
            'odoo_studio_community/static/src/legacy/js/views/view_editor_sidebar.js',
            'odoo_studio_community/static/src/legacy/js/views/sidebar_safe_fields.js',
            'odoo_studio_community/static/src/legacy/js/views/renderers/search_renderer.js',
            'odoo_studio_community/static/src/legacy/js/views/renderers/list_renderer_lazy.js',
            'odoo_studio_community/static/src/legacy/js/views/view_editors/**/*.js',

            ('include', 'web._assets_helpers'),
            'odoo_studio_community/static/src/scss/bootstrap_overridden.scss',
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            'odoo_studio_community/static/src/client_action/variables.scss',
            'odoo_studio_community/static/src/client_action/mixins.scss',
            'odoo_studio_community/static/src/client_action/**/*.scss',

            'odoo_studio_community/static/src/legacy/scss/icons.scss',
            'odoo_studio_community/static/src/legacy/scss/action_editor.scss',
            'odoo_studio_community/static/src/legacy/scss/kanban_view.scss',
            'odoo_studio_community/static/src/legacy/scss/new_field_dialog.scss',
            'odoo_studio_community/static/src/legacy/scss/report_editor.scss',
            'odoo_studio_community/static/src/legacy/scss/report_editor_manager.scss',
            'odoo_studio_community/static/src/legacy/scss/report_editor_sidebar.scss',
            'odoo_studio_community/static/src/legacy/scss/report_kanban_view.scss',
            'odoo_studio_community/static/src/legacy/scss/search_editor.scss',
            'odoo_studio_community/static/src/legacy/scss/sidebar.scss',
            'odoo_studio_community/static/src/legacy/scss/view_editor_manager.scss',
            'odoo_studio_community/static/src/legacy/scss/xml_editor.scss',

            'odoo_studio_community/static/src/legacy/xml/new_model.xml',
        ],
        'web.assets_tests': [
            'odoo_studio_community/static/tests/legacy/tours/**/*',
        ],
        'odoo_studio_community.report_assets': [
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            'odoo_studio_community/static/src/legacy/scss/report_iframe.scss',
        ],
        'web.qunit_suite_tests': [
            # In tests we don't want to lazy load this
            # And we don't want to push them into any other test suite either
            # as web.tests_assets would
            ('include', 'odoo_studio_community.studio_assets'),
            'odoo_studio_community/static/tests/mock_server.js',
            'odoo_studio_community/static/tests/helpers.js',
            'odoo_studio_community/static/tests/*.js',
            'odoo_studio_community/static/tests/views/**/*.js',
            'odoo_studio_community/static/tests/legacy/action_editor_action_tests.js',
            'odoo_studio_community/static/tests/legacy/edit_menu_tests.js',
            'odoo_studio_community/static/tests/legacy/new_model_tests.js',
            'odoo_studio_community/static/tests/legacy/mock_server.js',
            'odoo_studio_community/static/tests/legacy/test_utils.js',
            'odoo_studio_community/static/tests/legacy/reports/**/*.js',
            'odoo_studio_community/static/tests/legacy/views/**/*.js',
        ],
        'web.qunit_mobile_suite_tests': [
            'odoo_studio_community/static/tests/views/disable_patch.js',
        ],
    }
}
