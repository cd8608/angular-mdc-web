import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.html'
})
export class AppLayout {
  startVisible: boolean;
  buttonVisible: boolean;
  inputVisible: boolean;
  listVisible: boolean;

  navigationLinks = [
    { name: 'App Bar', route: 'app-bar-demo', icon: 'remove' },
    { name: 'Card', route: 'card-demo', icon: 'credit_card' },
    { name: 'Chips', route: 'chips-demo', icon: 'indeterminate_check_box' },
    { name: 'Dialog', route: 'dialog-demo', icon: 'question_answer' },
    { name: 'Drawer', route: 'drawer-demo', icon: 'code' },
    { name: 'Elevation', route: 'elevation-demo', icon: 'filter_none' },
    { name: 'Icon', route: 'icon-demo', icon: 'star' },
    { name: 'Linear Progress', route: 'linear-progress-demo', icon: 'compare_arrows' },
    { name: 'Menu', route: 'menu-demo', icon: 'menu' },
    { name: 'Ripple', route: 'ripple-demo', icon: 'code' },
    { name: 'Snackbar', route: 'snackbar-demo', icon: 'info_outline' },
    { name: 'Shape', route: 'shape-demo', icon: 'transform' },
    { name: 'Tabs', route: 'tab-demo', icon: 'tab' },
    { name: 'Toolbar', route: 'toolbar-demo', icon: 'remove' },
    { name: 'Typography', route: 'typography-demo', 'icon': 'title' }
  ];

  inputRoutes = [
    { name: 'Checkbox', route: 'checkbox-demo' },
    { name: 'Form Field', route: 'form-field-demo' },
    { name: 'Radio Buttons', route: 'radio-demo' },
    { name: 'Select', route: 'select-demo' },
    { name: 'Slider', route: 'slider-demo' },
    { name: 'Switch', route: 'switch-demo' },
    { name: 'Text Field', route: 'textfield-demo' }
  ];

  buttonRoutes = [
    { name: 'Button', route: '/button-demo' },
    { name: 'FAB', route: '/fab-demo' },
    { name: 'Icon Button', route: '/icon-button-demo' },
    { name: 'Icon Toggle (deprecated)', route: '/icon-toggle-demo' }
  ];

  listRoutes = [
    { name: 'List', route: 'list-demo' },
    { name: 'Grid List', route: 'grid-list-demo' },
    { name: 'Image List', route: 'image-list-demo' }
  ];

  startRoutes = [
    { name: 'Installation', route: 'getting-started' },
    { name: 'Angular CLI', route: 'cli-guide' }
  ];
}
