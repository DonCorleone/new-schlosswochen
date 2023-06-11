import { Handler } from '@netlify/functions';
import { Mailbody } from 'netlify/models/mailbody';
import fetch from 'node-fetch';

const handler: Handler = async function (event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify('Payload required'),
    };
  }

  const requestPayload: Mailbody = JSON.parse(event.body ?? '');

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(`${process.env['URL']}/.netlify/functions/emails/subscribed`, {

    headers: {
      'netlify-emails-secret': process.env['NETLIFY_EMAILS_SECRET'] as string,
    },
    method: 'POST',
    body: JSON.stringify({
      from: process.env['EMAIL_SENDER'],
      to: requestPayload.email,
      subject: "Bestätigung Newsletter- Eintrag",
      parameters: {
        ...requestPayload.data
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify('Subscribe email sent!'),
  };
};

export { handler };
