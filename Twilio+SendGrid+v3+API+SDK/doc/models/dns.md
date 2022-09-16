
# Dns

The DNS records used to authenticate the sending domain.

## Structure

`Dns`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mailCname` | [`MailCname`](../../doc/models/mail-cname.md) | Required | The CNAME for your sending domain that points to sendgrid.net. |
| `dkim1` | [`Dkim1`](../../doc/models/dkim-1.md) | Required | A DNS record. |
| `dkim2` | [`Dkim1`](../../doc/models/dkim-1.md) | Required | A DNS record. |

## Example (as JSON)

```json
{
  "mail_cname": {
    "valid": false,
    "type": "type4",
    "host": "host2",
    "data": "data6"
  },
  "dkim1": {
    "valid": false,
    "type": "type8",
    "host": "host6",
    "data": "data2"
  },
  "dkim2": {
    "valid": false,
    "type": "type6",
    "host": "host8",
    "data": "data6"
  }
}
```

