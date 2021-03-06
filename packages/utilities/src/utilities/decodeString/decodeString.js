/**
 * Utility function to parse and decode text content.
 * Strings can become encoded for various reasons.
 * This utility decodes those strings.
 *
 * @param {string} str String to decode
 * @returns {string} Final string with decoded characters
 * @example
 * import { decodeString } from '@carbon/ibmdotcom-utilities'
 *
 * const str = decodeString('https://www.ibm.com/search?lang=en&amp;cc=us&amp;q=cloud');
 * console.log(str); // https://www.ibm.com/search?lang=en&cc=us&q=cloud
 *
 */
function decodeString(str) {
  const parser = new DOMParser();
  return parser.parseFromString(`<!doctype html><body>${str}`, 'text/html').body
    .textContent;
}

export default decodeString;
