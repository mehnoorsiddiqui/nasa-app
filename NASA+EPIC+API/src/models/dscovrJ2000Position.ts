/**
 * NASA EPIC APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

/** Dscovr J2000 coordinate system position. */
export interface DscovrJ2000Position {
  /** x coordinates */
  x: number;
  /** y coordinates */
  y: number;
  /** z coordinates */
  z: number;
}

export const dscovrJ2000PositionSchema: Schema<DscovrJ2000Position> = object({
  x: ['x', number()],
  y: ['y', number()],
  z: ['z', number()],
});
