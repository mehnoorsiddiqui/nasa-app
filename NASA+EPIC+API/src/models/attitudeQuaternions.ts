/**
 * NASA EPIC APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema } from '../schema';

/** Quaternions data of attitude */
export interface AttitudeQuaternions {
  /** quaternion 0 */
  q0: number;
  /** quaternion 1 */
  q1: number;
  /** quaternion 2 */
  q2: number;
  /** quaternion 3 */
  q3: number;
}

export const attitudeQuaternionsSchema: Schema<AttitudeQuaternions> = object({
  q0: ['q0', number()],
  q1: ['q1', number()],
  q2: ['q2', number()],
  q3: ['q3', number()],
});
