## NativePulldown
Trigger an action on pulling down a container on the page.

## Features
Widgets can be paced inside of this widget. A pull down action can be configured. his widget visually uses OS native pull down functionaity (via native ScrollView).

## Usage
Place the widget on the page and place all page content inside it. The pull down functionality works on the widget and everything inside it. So to pul down (most of) the page, it would need to be high in the page structure.

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.