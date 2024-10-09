/**
 * AgnosticStyles 0.1.12
 *
 * AgnosticStyles is a utility function that safely applies CSS styles or class changes
 * to a DOM element if it exists. Logs or warns based on customizable debug flags.
 *
 * Developed by Claudio González (claudio@banshee.pro)
 * for Banshee Technologies - https://www.banshee.pro
 *
 * MIT License
 * Copyright (c) 2024 Banshee Technologies. All rights reserved.
 */

let globalDebugLog = false;
let globalDebugWarn = false;

export function agnosticStyles({ debugLog = false, debugWarn = false } = {}) {
  globalDebugLog = debugLog;
  globalDebugWarn = debugWarn;

  return function (action, value) {
    return function (elementId) {
      if (typeof elementId !== "string" || !elementId.trim()) {
        if (globalDebugWarn) {
          console.error(`AgnosticStyles: Invalid elementId "${elementId}". It must be a non-empty string.`);
        }
        return;
      }

      const element = document.getElementById(elementId);
      if (element) {
        if (globalDebugLog) {
          console.log(`AgnosticStyles: "${elementId}" exists. Proceeding with action "${action}".`);
        }

        if (action === "addClass") {
          if (Array.isArray(value)) {
            value.forEach((cls) => element.classList.add(cls));
          } else {
            element.classList.add(value);
          }
        } else if (action === "removeClass") {
          if (Array.isArray(value)) {
            value.forEach((cls) => element.classList.remove(cls));
          } else {
            element.classList.remove(value);
          }
        } else if (action === "setStyle") {
          Object.keys(value).forEach((style) => {
            element.style[style] = value[style];
          });
        } else if (action === "removeStyle") {
          value.forEach((style) => {
            element.style.removeProperty(style);
          });
        } else {
          if (globalDebugWarn) {
            console.warn(`AgnosticStyles: Unsupported action "${action}".`);
          }
        }
      } else {
        if (globalDebugWarn) {
          console.warn(`AgnosticStyles: Element with ID "${elementId}" does not exist.`);
        }
      }
    };
  };
}
