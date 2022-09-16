import { ApiError, Client, MailSendController } from 'twilio-sendgrid-v-3-apilib';
import dotenv from 'dotenv';
dotenv.config();

const authKey = 'YOUR_AUTH_KEY';

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
                        name: 'Mehnoor Siddiqui'
                    }
                ],
            }
        ],
        from: {
            email: 'mahnoor.siddiqui@apimatic.io',
            name: 'Mahnoor'
        },
        subject: 'Test email from APIMatic ',
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
        if (error instanceof ApiError) {
            const errors = error.result;

        }
    }
}

export default mailSend;


