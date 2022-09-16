
# Tracking Settings

Settings to determine how you would like to track the metrics of how your recipients interact with your email.

## Structure

`TrackingSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clickTracking` | [`ClickTracking \| undefined`](../../doc/models/click-tracking.md) | Optional | Allows you to track if a recipient clicked a link in your email. |
| `openTracking` | [`OpenTracking \| undefined`](../../doc/models/open-tracking.md) | Optional | Allows you to track if the email was opened by including a single pixel image in the body of the content. When the pixel is loaded, Twilio SendGrid can log that the email was opened. |
| `subscriptionTracking` | [`SubscriptionTracking \| undefined`](../../doc/models/subscription-tracking.md) | Optional | Allows you to insert a subscription management link at the bottom of the text and HTML bodies of your email. If you would like to specify the location of the link within your email, you may use the `substitution_tag`. |
| `ganalytics` | [`Ganalytics \| undefined`](../../doc/models/ganalytics.md) | Optional | Allows you to enable tracking provided by Google Analytics. |

## Example (as JSON)

```json
{
  "click_tracking": null,
  "open_tracking": null,
  "subscription_tracking": null,
  "ganalytics": null
}
```

