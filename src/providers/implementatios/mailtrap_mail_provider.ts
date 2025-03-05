import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../email_provider";

export class MailTrapMailProvider implements IMailProvider {

    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "b0ef8c22485ad9",
                pass: "92e186a09b5767"
            }

        } as nodemailer.TransportOptions)
    }


    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email
            },
            from: {
                name: message.from.name,
                address: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}