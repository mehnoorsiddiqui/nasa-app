
# Design Common Fields

## Structure

`DesignCommonFields`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the new design.<br>**Default**: `'Duplicate: <original design name>'` |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | The editor used in the UI. |
| `generatePlainContent` | `boolean \| undefined` | Optional | If true, plain_content is always generated from html_content. If false, plain_content is not altered.<br>**Default**: `true` |
| `subject` | `string \| undefined` | Optional | Subject of the Design.<br>**Constraints**: *Maximum Length*: `5000` |
| `categories` | `string[] \| undefined` | Optional | The list of categories applied to the design<br>**Constraints**: *Maximum Items*: `10`, *Unique Items Required*, *Maximum Length*: `255` |

## Example (as JSON)

```json
{
  "name": null,
  "editor": null,
  "generate_plain_content": null,
  "subject": null,
  "categories": null
}
```

