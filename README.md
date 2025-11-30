# Odoo Studio Community

Odoo Studio ported for Community Edition.

## Description

This module brings Odoo Studio functionality to Odoo Community Edition, allowing users to customize their Odoo applications without coding.

## Features

- **Create New Applications** - Add new modules, top-level menu items, and default actions
- **Customize Existing Applications** - Edit menus, actions, views, and translations
- **View Editor** - Modify form, list, kanban, and search views
- **Field Management** - Add, remove, and configure fields
- **Automation Rules** - Create automated actions and scheduled tasks
- **Report Editor** - Customize PDF reports
- **Access Rights Management** - Configure user permissions

## Removed Features (Enterprise Only)

The following features are not available as they require Enterprise-only modules:
- Map view editing (requires `web_map`)
- Gantt view editing (requires `web_gantt`)

## Requirements

- Odoo 16.0 Community Edition
- Python 3.8+
- `studio_community_base` module

## Installation

1. Install the `studio_community_base` module first
2. Place this module in your Odoo addons path
3. Update the apps list in Odoo
4. Install "Odoo Studio Community" from the Apps menu

## Dependencies

- `studio_community_base`
- `base_automation`
- `base_import_module`
- `mail`
- `web`
- `web_editor`
- `sms`

## Usage

After installation, a Studio icon will appear in the top navbar. Click it to enter Studio mode and start customizing your Odoo applications.

**Note:** Only administrators are allowed to make customizations.

## Author

**MNametissa**

## License

LGPL-3
