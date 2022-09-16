# Settings-Mail

```ts
const settingsMailController = new SettingsMailController(client);
```

## Class Name

`SettingsMailController`

## Methods

* [GET Mail Settings](../../doc/controllers/settings-mail.md#get-mail-settings)
* [PATCH Mail Settings-Address Whitelist](../../doc/controllers/settings-mail.md#patch-mail-settings-address-whitelist)
* [GET Mail Settings-Address Whitelist](../../doc/controllers/settings-mail.md#get-mail-settings-address-whitelist)
* [PATCH Mail Settings-Forward Spam](../../doc/controllers/settings-mail.md#patch-mail-settings-forward-spam)
* [GET Mail Settings-Forward Spam](../../doc/controllers/settings-mail.md#get-mail-settings-forward-spam)
* [PATCH Mail Settings-Forward Bounce](../../doc/controllers/settings-mail.md#patch-mail-settings-forward-bounce)
* [GET Mail Settings-Forward Bounce](../../doc/controllers/settings-mail.md#get-mail-settings-forward-bounce)


# GET Mail Settings

**This endpoint allows you to retrieve a list of all mail settings.**

Each setting will be returned with an `enabled` status set to `true` or `false` and a short description that explains what the setting does.

```ts
async gETMailSettings(
  limit?: number,
  offset?: number,
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<V3MailSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `limit` | `number \| undefined` | Query, Optional | The number of settings to return. |
| `offset` | `number \| undefined` | Query, Optional | Where in the list of results to begin displaying settings. |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`V3MailSettingsResponse`](../../doc/models/v3-mail-settings-response.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsMailController.gETMailSettings(None, None, onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "result": [
    {
      "title": "Address Whitelist",
      "enabled": false,
      "name": "address_whitelist",
      "description": "Address / domains that should never have email suppressed."
    },
    {
      "title": "Bounce Purge",
      "enabled": false,
      "name": "bounce_purge",
      "description": "Allows you to automatically purge bounce records from SendGrid after a specified number of days."
    },
    {
      "title": "Event Notification",
      "enabled": true,
      "name": "event_notify",
      "description": "Controls notifications for events, such as bounces, clicks, and opens."
    },
    {
      "title": "Footer",
      "enabled": false,
      "name": "footer",
      "description": "Allows you to add a custom footer to outgoing email."
    },
    {
      "title": "Forward Bounce",
      "enabled": true,
      "name": "forward_bounce",
      "description": "Allows you to forward bounces to a specific email address."
    },
    {
      "title": "Forward Spam",
      "enabled": false,
      "name": "forward_spam",
      "description": "Allows for a copy of spam reports to be forwarded to an email address."
    },
    {
      "title": "Legacy Email Template",
      "enabled": true,
      "name": "template",
      "description": "Allows you to customize your outgoing HTML emails."
    },
    {
      "title": "Plain Content",
      "enabled": false,
      "name": "plain_content",
      "description": "Convert your plain text emails to HTML."
    },
    {
      "title": "Spam Checker",
      "enabled": true,
      "name": "spam_check",
      "description": "Check outbound messages for spam content."
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 401 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 403 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 404 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 500 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |


# PATCH Mail Settings-Address Whitelist

**This endpoint allows you to update your current email address whitelist settings.**

You can select whether or not this setting should be enabled by assigning the `enabled` field a `true` or `false` value.

Passing only the `enabled` field to this endpoint will not alter your current `list` of whitelist entries. However, any modifications to your `list` of entries will overwrite the entire list. For this reason, you must included all existing entries you wish to retain in your `list` in addition to any new entries you intend to add. To remove one or more `list` entries, pass a `list` with only the entries you wish to retain.

You should not add generic domains such as `gmail.com` or `yahoo.com`  in your `list` because your emails will not honor recipients' unsubscribes. This may cause a legal violation of [CAN-SPAM](https://sendgrid.com/docs/glossary/can-spam/) and could damage your sending reputation.

The Address Whitelist setting allows you to specify email addresses or domains for which mail should never be suppressed.

For example, if you own the domain `example.com`, and one or more of your recipients use `email@example.com` addresses, placing `example.com` in the address whitelist setting instructs Twilio SendGrid to ignore all bounces, blocks, and unsubscribes logged for that domain. In other words, all bounces, blocks, and unsubscribes will still be sent to `example.com` as if they were sent under normal sending conditions.

```ts
async pATCHMailSettingsAddressWhitelist(
  onBehalfOf?: string,
  body?: V3MailSettingsAddressWhitelistRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailSettingsAddressWhitelabel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`V3MailSettingsAddressWhitelistRequest \| undefined`](../../doc/models/v3-mail-settings-address-whitelist-request.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailSettingsAddressWhitelabel`](../../doc/models/mail-settings-address-whitelabel.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const bodyList: string[] = ['email1@example.com', 'example.com'];
const body: V3MailSettingsAddressWhitelistRequest = {};
body.enabled = true;
body.list = bodyList;

try {
  const { result, ...httpResponse } = await settingsMailController.pATCHMailSettingsAddressWhitelist(onBehalfOf, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "enabled": true,
  "list": [
    "email1@example.com"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 401 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 403 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 404 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 500 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |


# GET Mail Settings-Address Whitelist

**This endpoint allows you to retrieve your current email address whitelist settings.**

The Address Whitelist setting allows you to specify email addresses or domains for which mail should never be suppressed.

For example, if you own the domain `example.com`, and one or more of your recipients use `email@example.com` addresses, placing `example.com` in the address whitelist setting instructs Twilio SendGrid to ignore all bounces, blocks, and unsubscribes logged for that domain. In other words, all bounces, blocks, and unsubscribes will still be sent to `example.com` as if they were sent under normal sending conditions.

```ts
async gETMailSettingsAddressWhitelist(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailSettingsAddressWhitelabel>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailSettingsAddressWhitelabel`](../../doc/models/mail-settings-address-whitelabel.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsMailController.gETMailSettingsAddressWhitelist(onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "enabled": true,
  "list": [
    "example.com",
    "jane_doe@example1.com"
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 401 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 403 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 404 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 500 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |


# PATCH Mail Settings-Forward Spam

**This endpoint allows you to update your current Forward Spam mail settings.**

Enabling the Forward Spam setting allows you to specify `email` addresses to which spam reports will be forwarded. You can set multiple addresses by passing this endpoint a comma separated list of emails in a single string.

```
{
  "email": "address1@example.com, address2@exapmle.com",
  "enabled": true
}
```

The Forward Spam setting may also be used to receive emails sent to `abuse@` and `postmaster@` role addresses if you have authenticated your domain.

For example, if you authenticated `example.com` as your root domain and set a custom return path of `sub` for that domain, you could turn on Forward Spam, and any emails sent to `abuse@sub.example.com` or `postmaster@sub.example.com` would be forwarded to the email address you entered in the `email` field.

You can authenticate your domain using the "Authenticate a domain" endpoint or in the [Sender Authentication section of the Twilio SendGrid App](https://app.sendgrid.com/settings/sender_auth). You can also configure the Forward Spam mail settings in the [Mail Settings section of the Twilio SendGrid App](https://app.sendgrid.com/settings/mail_settings).

```ts
async pATCHMailSettingsForwardSpam(
  onBehalfOf?: string,
  body?: MailSettingsForwardSpam,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailSettingsForwardSpam>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`MailSettingsForwardSpam \| undefined`](../../doc/models/mail-settings-forward-spam.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailSettingsForwardSpam`](../../doc/models/mail-settings-forward-spam.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: MailSettingsForwardSpam = {};
body.email = '';
body.enabled = true;

try {
  const { result, ...httpResponse } = await settingsMailController.pATCHMailSettingsForwardSpam(onBehalfOf, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "email": "abuse@example.com",
  "enabled": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 401 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 403 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 404 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 500 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |


# GET Mail Settings-Forward Spam

**This endpoint allows you to retrieve your current Forward Spam mail settings.**

Enabling the Forward Spam setting allows you to specify `email` addresses to which spam reports will be forwarded. This endpoint returns any email address(es) you have set to receive forwarded spam and an `enabled` status indicating if the setting is active.

```ts
async gETMailSettingsForwardSpam(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailSettingsForwardSpam>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailSettingsForwardSpam`](../../doc/models/mail-settings-forward-spam.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsMailController.gETMailSettingsForwardSpam(onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "email": "abuse@example.com",
  "enabled": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 401 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 403 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 404 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 500 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |


# PATCH Mail Settings-Forward Bounce

**This endpoint allows you to update your current bounce forwarding mail settings.**

Enabling the Forward Bounce setting allows you to specify an `email` address to which bounce reports will be forwarded.

You can also configure the Forward Spam mail settings in the [Mail Settings section of the Twilio SendGrid App](https://app.sendgrid.com/settings/mail_settings).

```ts
async pATCHMailSettingsForwardBounce(
  onBehalfOf?: string,
  body?: MailSettingsForwardBounce,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailSettingsForwardBounce>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `body` | [`MailSettingsForwardBounce \| undefined`](../../doc/models/mail-settings-forward-bounce.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailSettingsForwardBounce`](../../doc/models/mail-settings-forward-bounce.md)

## Example Usage

```ts
const contentType = null;
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
const body: MailSettingsForwardBounce = {};
body.enabled = false;

try {
  const { result, ...httpResponse } = await settingsMailController.pATCHMailSettingsForwardBounce(onBehalfOf, body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "email": "bounces@example.com",
  "enabled": true
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 401 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 403 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 404 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 500 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |


# GET Mail Settings-Forward Bounce

**This endpoint allows you to retrieve your current bounce forwarding mail settings.**

Enabling the Forward Bounce setting allows you to specify `email` addresses to which bounce reports will be forwarded. This endpoint returns the email address you have set to receive forwarded bounces and an `enabled` status indicating if the setting is active.

```ts
async gETMailSettingsForwardBounce(
  onBehalfOf?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MailSettingsForwardBounce>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `onBehalfOf` | `string \| undefined` | Header, Optional | **Default**: `'The subuser\'s username. This header generates the API call as if the subuser account was making the call.'` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MailSettingsForwardBounce`](../../doc/models/mail-settings-forward-bounce.md)

## Example Usage

```ts
const onBehalfOf = 'The subuser\'s username. This header generates the API call as if the subuser account was making the call.';
try {
  const { result, ...httpResponse } = await settingsMailController.gETMailSettingsForwardBounce(onBehalfOf);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "enabled": true,
  "email": "bounces@example.com"
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 401 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 403 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 404 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |
| 500 | - | [`TraitMakoErrorResponse400Error`](../../doc/models/trait-mako-error-response-400-error.md) |

