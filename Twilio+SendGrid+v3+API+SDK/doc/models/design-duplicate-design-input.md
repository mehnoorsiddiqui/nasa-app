
# Design Duplicate Design Input

## Structure

`DesignDuplicateDesignInput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the new design.<br>**Default**: `'Duplicate: <original design name>'` |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | The editor used in the UI. |

## Example (as JSON)

```json
{
  "name": "Ahoy, Cake or Pie Cafe!",
  "editor": "design"
}
```

