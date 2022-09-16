
# Mail Settings

A collection of different mail settings that you can use to specify how you would like this email to be handled.

## Structure

`MailSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bypassListManagement` | [`BypassListManagement \| undefined`](../../doc/models/bypass-list-management.md) | Optional | Allows you to bypass all unsubscribe groups and suppressions to ensure that the email is delivered to every single recipient. This should only be used in emergencies when it is absolutely necessary that every recipient receives your email. This filter cannot be combined with any other bypass filters. See our [documentation](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters. |
| `bypassSpamManagement` | [`BypassSpamManagement \| undefined`](../../doc/models/bypass-spam-management.md) | Optional | Allows you to bypass the spam report list to ensure that the email is delivered to recipients. Bounce and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See our [documentation](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters. |
| `bypassBounceManagement` | [`BypassBounceManagement \| undefined`](../../doc/models/bypass-bounce-management.md) | Optional | Allows you to bypass the bounce list to ensure that the email is delivered to recipients. Spam report and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See our [documentation](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters. |
| `bypassUnsubscribeManagement` | [`BypassUnsubscribeManagement \| undefined`](../../doc/models/bypass-unsubscribe-management.md) | Optional | Allows you to bypass the global unsubscribe list to ensure that the email is delivered to recipients. Bounce and spam report lists will still be checked; addresses on these other lists will not receive the message. This filter applies only to global unsubscribes and will not bypass group unsubscribes. This filter cannot be combined with the `bypass_list_management` filter. See our [documentation](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters. |
| `footer` | [`Footer \| undefined`](../../doc/models/footer.md) | Optional | The default footer that you would like included on every email. |
| `sandboxMode` | [`SandboxMode \| undefined`](../../doc/models/sandbox-mode.md) | Optional | Sandbox Mode allows you to send a test email to ensure that your request body is valid and formatted correctly. |

## Example (as JSON)

```json
{
  "bypass_list_management": null,
  "bypass_spam_management": null,
  "bypass_bounce_management": null,
  "bypass_unsubscribe_management": null,
  "footer": null,
  "sandbox_mode": null
}
```

