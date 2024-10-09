# AgnosticStyles

AgnosticStyles is a lightweight utility that safely applies CSS styles or class changes to a DOM element if it exists. It allows for flexible manipulation of styles and classes while ensuring the element is present, helping avoid runtime errors. Additionally, it supports optional logging and warnings through customizable debug flags.

## Installation

To install AgnosticStyles using npm, run the following command:

```bash
npm install agnostic-styles
```

## Usage

### Import and Initialization

To use AgnosticStyles, import the `agnosticStyles` function and configure it with the desired debug options.

```javascript
import { agnosticStyles } from 'agnostic-styles';

window.agnosticStyles = agnosticStyles({ debugLog: true, debugWarn: false });
```

### Example: Adding Classes

```javascript
window.safeClassAdd = window.agnosticStyles('addClass', 'rounded-full');
safeClassAdd('element-id');  // Adds the 'rounded-full' class to the element with ID 'element-id'
```
-or-
```javascript
window.safeClassAdd = window.agnosticStyles('addClass', ['someClass', 'anotherClass', 'moreClasses']);
safeClassAdd('element-id');  // Adds 'someClass', 'anotherClass', and 'moreClasses' classes to the element with ID 'element-id'
```

### Example: Removing Classes

```javascript
window.safeClassRemove = window.agnosticStyles('removeClass', 'rounded-full');
safeClassRemove('element-id');  // Removes the 'rounded-full' class from the element with ID 'element-id'
```
-or-
```javascript
window.safeClassAdd = window.agnosticStyles('removeClass', ['someClass', 'anotherClass', 'moreClasses']);
safeClassAdd('element-id');  // Removes 'someClass', 'anotherClass', and 'moreClasses' classes from the element with ID 'element-id'
```

### Example: Setting Inline Styles

```javascript
window.safeStyleChange = window.agnosticStyles('setStyle', { backgroundColor: 'red' });
safeStyleChange('element-id');  // Sets the background color to red on the element with ID 'element-id'
```
-or-
```javascript
window.safeStyleChange = window.agnosticStyles('setStyle', { borderRadius: '50px' });
safeStyleChange('element-id');  // Sets border-radius to 50px on the element with ID 'element-id'
```

### Example: Removing Inline Styles

```javascript
window.safeStyleRemove = window.agnosticStyles('removeStyle', ['background-color']);
safeStyleRemove('element-id');  // Removes the background color style from the element with ID 'element-id'
```
-or-
```javascript
window.safeStyleRemove = window.agnosticStyles('removeStyle', ['border-radius']);
safeStyleRemove('element-id');  // Removes the border-radius style from the element with ID 'element-id'
```

## Debug Options

You can enable or disable debugging logs and warnings using the following flags:
- **`debugLog`**: When set to `true`, it logs informational messages to the console (`console.log`).
- **`debugWarn`**: When set to `true`, it shows warning messages in the console (`console.warn`).

By default, both options are disabled.

### Example Configurations:

Show only debug logs:
```javascript
window.agnosticStyles = agnosticStyles({ debugLog: true, debugWarn: false });
```

Show only warnings:
```javascript
window.agnosticStyles = agnosticStyles({ debugLog: false, debugWarn: true });
```

Disable all logs and warnings:
```javascript
window.agnosticStyles = agnosticStyles;
```
-or-
```javascript
window.agnosticStyles = agnosticStyles({ debugLog: false, debugWarn: false });
```

## Supported Actions

### `addClass`
Adds one or more classes to the specified element.

#### Example:
```javascript
agnosticStyles('addClass', 'class-name');
agnosticStyles('addClass', ['class-one', 'class-two']);
```

### `removeClass`
Removes one or more classes from the specified element.

#### Example:
```javascript
agnosticStyles('removeClass', 'class-name');
agnosticStyles('removeClass', ['class-one', 'class-two']);
```

### `setStyle`
Sets one or more inline CSS styles on the specified element.

#### Example:
```javascript
agnosticStyles('setStyle', { backgroundColor: 'blue', color: 'white' });
```

### `removeStyle`
Removes one or more inline CSS styles from the specified element.

#### Example:
```javascript
agnosticStyles('removeStyle', ['background-color', 'color']);
agnosticStyles('removeStyle', ['border-radius']);
```

## What You Cannot Do

- **Manipulate non-existent elements**: If the element doesn't exist, the action will be skipped, and a warning may be shown depending on debug options.
- **Unsupported actions**: If an unsupported action is passed, **AgnosticStyles** will log a warning, and the operation will not proceed.

## License

AgnosticStyles is licensed under the MIT License. See the LICENSE file for more details.

## Issues

If you encounter any issues, feel free to report them [here](https://github.com/BansheeDevelopment/AgnosticStyles/issues).
