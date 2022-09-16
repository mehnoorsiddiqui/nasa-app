
# Create a Segment Request

## Structure

`CreateASegmentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of this segment. |
| `listId` | `number \| undefined` | Optional | The list id from which to make this segment. Not including this ID will mean your segment is created from the main contactdb rather than a list. |
| `conditions` | [`ContactDBSegmentsConditions[]`](../../doc/models/contact-db-segments-conditions.md) | Required | The conditions for a recipient to be included in this segment. |
| `recipientCount` | `number \| undefined` | Optional | The count of recipients in this list. This is not included on creation of segments. |

## Example (as JSON)

```json
{
  "name": "Last Name Miller",
  "list_id": 4,
  "conditions": [
    {
      "field": "last_clicked",
      "value": "01/02/2015",
      "operator": "gt",
      "and_or": "and"
    },
    {
      "field": "clicks.campaign_identifier",
      "value": "513",
      "operator": "eq",
      "and_or": "or"
    }
  ],
  "recipient_count": 1234
}
```

