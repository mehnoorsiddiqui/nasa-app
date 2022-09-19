/**
 * NASA EPIC APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  AttitudeQuaternions,
  attitudeQuaternionsSchema,
} from './attitudeQuaternions';
import {
  CentroidCoordinates,
  centroidCoordinatesSchema,
} from './centroidCoordinates';
import { Coords, coordsSchema } from './coords';
import {
  DscovrJ2000Position,
  dscovrJ2000PositionSchema,
} from './dscovrJ2000Position';
import {
  LunarJ2000Position,
  lunarJ2000PositionSchema,
} from './lunarJ2000Position';
import { SunJ2000Position, sunJ2000PositionSchema } from './sunJ2000Position';

/** Image data on a date. */
export interface ImagesOnADate {
  /** image id */
  identifier: string;
  /** image caption */
  caption: string;
  /** image file name */
  image: string;
  /** image version */
  version: string;
  /** The coordinates of the centroid are simply the average of the coordinates of the vertices. */
  centroidCoordinates: CentroidCoordinates;
  /** Dscovr J2000 coordinate system position. */
  dscovrJ2000Position: DscovrJ2000Position;
  /** Lunar J2000 coordinate system position. */
  lunarJ2000Position: LunarJ2000Position;
  /** Sun J2000 coordinate system position. */
  sunJ2000Position: SunJ2000Position;
  /** Quaternions data of attitude */
  attitudeQuaternions: AttitudeQuaternions;
  /** image taken on which date */
  date: string;
  /** Coordinates */
  coords: Coords;
}

export const imagesOnADateSchema: Schema<ImagesOnADate> = object({
  identifier: ['identifier', string()],
  caption: ['caption', string()],
  image: ['image', string()],
  version: ['version', string()],
  centroidCoordinates: [
    'centroid_coordinates',
    lazy(() => centroidCoordinatesSchema),
  ],
  dscovrJ2000Position: [
    'dscovr_j2000_position',
    lazy(() => dscovrJ2000PositionSchema),
  ],
  lunarJ2000Position: [
    'lunar_j2000_position',
    lazy(() => lunarJ2000PositionSchema),
  ],
  sunJ2000Position: ['sun_j2000_position', lazy(() => sunJ2000PositionSchema)],
  attitudeQuaternions: [
    'attitude_quaternions',
    lazy(() => attitudeQuaternionsSchema),
  ],
  date: ['date', string()],
  coords: ['coords', lazy(() => coordsSchema)],
});
