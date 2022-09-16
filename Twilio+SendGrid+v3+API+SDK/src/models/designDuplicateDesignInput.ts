/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { EditorEnum, editorEnumSchema } from './editorEnum';

export interface DesignDuplicateDesignInput {
  /** The name of the new design. */
  name?: string;
  /** The editor used in the UI. */
  editor?: EditorEnum;
}

export const designDuplicateDesignInputSchema: Schema<DesignDuplicateDesignInput> = object(
  {
    name: ['name', optional(string())],
    editor: ['editor', optional(editorEnumSchema)],
  }
);