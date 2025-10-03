import emailjs from '@emailjs/browser';

export async function sendEmail(form: HTMLFormElement) {

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_USER_ID;

    await emailjs.sendForm(
        serviceId,
        templateId,
        form,
        userID
    )
}