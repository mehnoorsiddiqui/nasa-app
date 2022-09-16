/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Error1 } from '../models/error1';

/**
 * Creates an instance of TraitGlobalErrors500
 */
interface TraitGlobalErrors500 {
  errors?: Error1[];
}

export class TraitGlobalErrors500Error extends ApiError<TraitGlobalErrors500> {}