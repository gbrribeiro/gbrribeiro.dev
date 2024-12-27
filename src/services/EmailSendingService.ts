import emailjs from '@emailjs/browser';
import { EmailDto } from '../models/EmailDto';
import { EMAIL_SERVICE_ID, EMAIL_SERVICE_PUBLIC_KEY, EMAIL_TEMPLATE_ID_TO_ME, EMAIL_TEMPLATE_ID_TO_SENDER } from '../../secrets';
export class EmailSendingService {

  constructor() {
  }

  sendEmail(dto: EmailDto) {
    const params = {
      sender_name: dto.name,
      sender_email: dto.email,
      message: dto.message,
    };

    emailjs
      .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID_TO_ME, params, {
        publicKey: EMAIL_SERVICE_PUBLIC_KEY,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }

  sendEmailToSender(senderEmail: string) {
    const params = {
        to_email: senderEmail,
    };

    emailjs
      .send(EMAIL_SERVICE_ID,EMAIL_TEMPLATE_ID_TO_SENDER, params, {
        publicKey: EMAIL_SERVICE_PUBLIC_KEY,
      })
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
          console.log('FAILED...', err);
        }
      );
  }
}
