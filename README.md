# AgnosticCSS

AgnosticCSS is a lightweight utility that safely applies CSS styles or class changes to a DOM element if it exists. It allows for flexible manipulation of styles and classes while ensuring the element is present, helping avoid runtime errors. Additionally, it supports optional logging and warnings through customizable debug flags.

## Installation

To install AgnosticCSS using npm, run the following command:

```bash
npm install agnostic-css
```

## Usage

### Import and Initialization

To use AgnosticCSS, import the `agnosticCSS` function and configure it with the desired debug options.

```javascript
import { agnosticCSS } from 'agnostic-css';

window.agnosticCSS = agnosticCSS({ debugLog: true, debugWarn: false });
```

### Example: Adding a Class

```javascript
window.safeClassAdd = window.agnosticCSS('addClass', 'rounded-full');
safeClassAdd('element-id');  // Adds the 'rounded-full' class to the element with ID 'element-id'
```

### Example: Removing a Class

```javascript
window.safeClassRemove = window.agnosticCSS('removeClass', 'rounded-full');
safeClassRemove('element-id');  // Removes the 'rounded-full' class from the element with ID 'element-id'
```

### Example: Setting Inline Styles

```javascript
window.safeStyleChange = window.agnosticCSS('setStyle', { backgroundColor: 'red' });
safeStyleChange('element-id');  // Sets the background color to red on the element with ID 'element-id'
```

### Example: Removing Inline Styles

```javascript
window.safeStyleRemove = window.agnosticCSS('removeStyle', ['backgroundColor']);
safeStyleRemove('element-id');  // Removes the background color style from the element with ID 'element-id'
```

## Debug Options

You can enable or disable debugging logs and warnings using the following flags:
- **`debugLog`**: When set to `true`, it logs informational messages to the console (`console.log`).
- **`debugWarn`**: When set to `true`, it shows warning messages in the console (`console.warn`).

By default, both options are disabled.

### Example Configurations:

Show only debug logs:
```javascript
window.agnosticCSS = agnosticCSS({ debugLog: true, debugWarn: false });
```

Show only warnings:
```javascript
window.agnosticCSS = agnosticCSS({ debugLog: false, debugWarn: true });
```

Disable all logs and warnings:
```javascript
window.agnosticCSS = agnosticCSS;
```
-or-
```javascript
window.agnosticCSS = agnosticCSS({ debugLog: false, debugWarn: false });
```

## Supported Actions

### `addClass`
Adds one or more classes to the specified element.

#### Example:
```javascript
agnosticCSS('addClass', 'class-name');
agnosticCSS('addClass', ['class-one', 'class-two']);
```

### `removeClass`
Removes one or more classes from the specified element.

#### Example:
```javascript
agnosticCSS('removeClass', 'class-name');
agnosticCSS('removeClass', ['class-one', 'class-two']);
```

### `setStyle`
Sets one or more inline CSS styles on the specified element.

#### Example:
```javascript
agnosticCSS('setStyle', { backgroundColor: 'blue', color: 'white' });
```

### `removeStyle`
Removes one or more inline CSS styles from the specified element.

#### Example:
```javascript
agnosticCSS('removeStyle', ['background-color', 'color']);
agnosticCSS('removeStyle', ['border-radius']);
```

## What You Cannot Do

- **Manipulate non-existent elements**: If the element doesn't exist, the action will be skipped, and a warning may be shown depending on debug options.
- **Unsupported actions**: If an unsupported action is passed, **AgnosticCSS** will log a warning, and the operation will not proceed.

## License

AgnosticCSS is licensed under the MIT License. See the LICENSE file for more details.

## Issues

If you encounter any issues, feel free to report them [here](https://github.com/BansheeDevelopment/AgnosticCSS/issues).
