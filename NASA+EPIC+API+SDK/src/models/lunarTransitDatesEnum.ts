/**
 * NASA EPIC APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LunarTransitDatesEnum
 */
export enum LunarTransitDatesEnum {
  LunarTransitFeb2021 = '2021-02-11',
}

/**
 * Schema for LunarTransitDatesEnum
 */
export const lunarTransitDatesEnumSchema: Schema<LunarTransitDatesEnum> = stringEnum(LunarTransitDatesEnum);