
# Attachment

## Structure

`Attachment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `content` | `string` | Required | The Base64 encoded content of the attachment.<br>**Constraints**: *Minimum Length*: `1` |
| `type` | `string \| undefined` | Optional | The MIME type of the content you are attaching (e.g., `“text/plain”` or `“text/html”`).<br>**Constraints**: *Minimum Length*: `1` |
| `filename` | `string` | Required | The attachment's filename. |
| `disposition` | [`DispositionEnum \| undefined`](../../doc/models/disposition-enum.md) | Optional | The attachment's content-disposition, specifying how you would like the attachment to be displayed. For example, `“inline”` results in the attached file are displayed automatically within the message while `“attachment”` results in the attached file require some action to be taken before it is displayed, such as opening or downloading the file.<br>**Default**: `DispositionEnum.Attachment` |
| `contentId` | `string \| undefined` | Optional | The attachment's content ID. This is used when the disposition is set to `“inline”` and the attachment is an image, allowing the file to be displayed within the body of your email. |

## Example (as JSON)

```json
{
  "content": "content4",
  "type": null,
  "filename": "filename2",
  "disposition": null,
  "content_id": null
}
```

