/**
 * AgnosticCSS Type Definitions
 *
 * Provides TypeScript type definitions for the AgnosticCSS utility.
 */

interface AgnosticCSSOptions {
  debugLog?: boolean;
  debugWarn?: boolean;
}

type Action = "addClass" | "removeClass" | "setStyle" | "removeStyle";

type CSSStyles = {
  [key: string]: string;
};

/**
 * The main AgnosticCSS function.
 *
 * @param options - Optional debugging options.
 * @returns A function that takes an action and a value.
 */
export function agnosticCSS(options?: AgnosticCSSOptions): (action: Action, value: string | string[] | CSSStyles) => (elementId: string) => void;
