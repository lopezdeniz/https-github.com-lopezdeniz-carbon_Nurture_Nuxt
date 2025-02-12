import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  // Читаем тело запроса
  const body = await readBody(event);

  // Деструктурируем данные формы
  const { name, email, message, formType } = body;

  // Проверяем, что email указан
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Invalid email address." };
  }

  try {
    // Создаем транспортер для отправки писем
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true для портов 465, false для других
      auth: {
        user: process.env.EMAIL_USER, // Используем переменную окружения для email
        pass: Buffer.from(process.env.EMAIL_PASS, "base64").toString("utf8"), // Декодируем пароль из Base64
      },
    });

    // Логика для формы подписки
    if (formType === "subscription") {
      // Настраиваем письмо для подписки
      await transporter.sendMail({
        from: `"Carbon Nurture Support" <${process.env.EMAIL_USER}>`, // От кого
        to: "contact@carbonnurture.com", // Кому отправляем
        subject: "New Subscription", // Тема письма
        html: `<p><strong>Email:</strong> ${email}</p>`,
      });

      // Возвращаем успешный ответ для подписки
      return { success: true, message: "Subscription successful!" };
    }

    // Логика для контактной формы
    if (formType === "contact") {
      // Проверка обязательных полей
      if (!name || !message) {
        return { success: false, error: "All fields are required for contact form." };
      }

      // Настраиваем письмо для контактной формы
      await transporter.sendMail({
        from: `"Carbon Nurture Support" <${process.env.EMAIL_USER}>`, // От кого
        to: "contact@carbonnurture.com", // Кому отправляем
        subject: `New Message from ${name}`, // Тема письма
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      // Возвращаем успешный ответ для контактной формы
      return { success: true, message: "Message sent successfully!" };
    }

    // Если тип формы не распознан
    return { success: false, error: "Invalid form type." };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email." };
  }
});
