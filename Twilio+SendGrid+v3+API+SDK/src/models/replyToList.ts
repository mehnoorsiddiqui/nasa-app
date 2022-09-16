/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface ReplyToList {
  /** The email address where any replies or bounces will be returned. */
  email: string;
  /** A name or title associated with the `reply_to_list` email address. */
  name?: string;
}

export const replyToListSchema: Schema<ReplyToList> = object({
  email: ['email', string()],
  name: ['name', optional(string())],
});