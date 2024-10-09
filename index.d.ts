/**
 * AgnosticStyles Type Definitions
 *
 * Provides TypeScript type definitions for the AgnosticStyles utility.
 */

interface AgnosticStylesOptions {
  debugLog?: boolean;
  debugWarn?: boolean;
}

type Action = "addClass" | "removeClass" | "setStyle" | "removeStyle";

type CSSStyles = {
  [key: string]: string;
};

/**
 * The main AgnosticStyles function.
 *
 * @param options - Optional debugging options.
 * @returns A function that takes an action and a value.
 */
export function agnosticStyles(options?: AgnosticStylesOptions): (action: Action, value: string | string[] | CSSStyles) => (elementId: string) => void;
