
# Global Error Response Schema Error

## Structure

`GlobalErrorResponseSchemaError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error3[] \| undefined`](../../doc/models/error-3.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "errors": [
    {
      "field": "field_name",
      "message": "error message"
    }
  ]
}
```

