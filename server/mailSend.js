import { ApiError, Client, MailSendController } from 'twilio-sendgrid-v-3-apilib';
import dotenv from 'dotenv';
dotenv.config();

const authKey = 'YOUR_API_KEY';

const client = new Client({
    timeout: 0,
    authorization: `Bearer ${authKey}`
})
const mailSendController = new MailSendController(client);

const mailSend = async (base64Img, emailTo) => {

    const body = {
        personalizations: [
            {
                to: [
                    {
                        email: emailTo,
                        name: emailTo
                    }
                ],
            }
        ],
        from: {
            email: 'developer@apimatic.io',
            name: 'APIMatic'
        },
        subject: 'NASAs million mile views from APIMatic ',
        content: [
            {
                type: 'text/html',
                value: '<html><body><img src=\"cid:myimagecid\"/></body></html>'
            }
        ],
        attachments: [
            {
                content: base64Img,
                type: 'image/png',
                filename: 'earth.png',
                disposition: 'inline',
                contentId: 'myimagecid'
            }
        ]
    };
    try {
        const { result, ...httpResponse } = await mailSendController.pOSTMailSend(body);
        console.log('email sent')
        return "email sent"
    } catch (error) {
        console.log(error)
    }
}

export default mailSend;


