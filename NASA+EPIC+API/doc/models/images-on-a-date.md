
# Images on a Date

Image data on a date.

## Structure

`ImagesOnADate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `identifier` | `string` | Required | image id |
| `caption` | `string` | Required | image caption |
| `image` | `string` | Required | image file name |
| `version` | `string` | Required | image version |
| `centroidCoordinates` | [`CentroidCoordinates`](../../doc/models/centroid-coordinates.md) | Required | The coordinates of the centroid are simply the average of the coordinates of the vertices. |
| `dscovrJ2000Position` | [`DscovrJ2000Position`](../../doc/models/dscovr-j2000-position.md) | Required | Dscovr J2000 coordinate system position. |
| `lunarJ2000Position` | [`LunarJ2000Position`](../../doc/models/lunar-j2000-position.md) | Required | Lunar J2000 coordinate system position. |
| `sunJ2000Position` | [`SunJ2000Position`](../../doc/models/sun-j2000-position.md) | Required | Sun J2000 coordinate system position. |
| `attitudeQuaternions` | [`AttitudeQuaternions`](../../doc/models/attitude-quaternions.md) | Required | Quaternions data of attitude |
| `date` | `string` | Required | image taken on which date |
| `coords` | [`Coords`](../../doc/models/coords.md) | Required | Coordinates |

## Example (as JSON)

```json
{
  "identifier": "20151031003633",
  "caption": "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
  "image": "epic_1b_20151031003633",
  "version": "03",
  "centroid_coordinates": {
    "lat": -5.222168,
    "lon": 159.748535
  },
  "dscovr_j2000_position": {
    "x": -1283061.502946,
    "y": -669893.465826,
    "z": -130240.863464
  },
  "lunar_j2000_position": {
    "x": 33466.895832,
    "y": 354549.449169,
    "z": 116876.96183
  },
  "sun_j2000_position": {
    "x": -118557507.999987,
    "y": -82106194.000015,
    "z": -35593694.71975
  },
  "attitude_quaternions": {
    "q0": -0.308502,
    "q1": -0.119342,
    "q2": 0.210556,
    "q3": 0.919914
  },
  "date": "2015-10-31 00:31:45",
  "coords": {
    "centroid_coordinates": {
      "lat": -5.222168,
      "lon": 159.748535
    },
    "dscovr_j2000_position": {
      "x": -1283061.502946,
      "y": -669893.465826,
      "z": -130240.863464
    },
    "lunar_j2000_position": {
      "x": 33466.895832,
      "y": 354549.449169,
      "z": 116876.96183
    },
    "sun_j2000_position": {
      "x": -118557507.999987,
      "y": -82106194.000015,
      "z": -35593694.71975
    },
    "attitude_quaternions": {
      "q0": -0.308502,
      "q1": -0.119342,
      "q2": 0.210556,
      "q3": 0.919914
    }
  }
}
```

