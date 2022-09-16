/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface Content {
  /** The MIME type of the content you are including in your email (e.g., `“text/plain”` or `“text/html”`). */
  type: string;
  /** The actual content of the specified MIME type that you are including in your email. */
  value: string;
}

export const contentSchema: Schema<Content> = object({
  type: ['type', string()],
  value: ['value', string()],
});