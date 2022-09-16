/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for EditorEnum
 */
export enum EditorEnum {
  Code = 'code',
  Design = 'design',
}

/**
 * Schema for EditorEnum
 */
export const editorEnumSchema: Schema<EditorEnum> = stringEnum(EditorEnum);