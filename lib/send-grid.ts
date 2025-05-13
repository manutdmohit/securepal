import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendEmail = async (formData: {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const { fullName, email, phone, message } = formData;

  let emailContent;

  if (!fullName && !phone && !message) {
    emailContent = {
      to: 'info@securepal.com.au',
      from: 'mohitdev4444@gmail.com',
      subject: `New Request from ${email}`,
      html: `
      <h2>New Application Details:</h2>
    <p><strong>Email:</strong> ${email}</p>
    `,
    };
  } else {
    emailContent = {
      to: 'info@securepal.com.au',
      from: 'mohitdev4444@gmail.com',
      subject: `New Application from ${fullName}`,
      html: `
      <h2>New Application Details:</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };
  }

  try {
    await sgMail.send(emailContent);
    return { success: true };
  } catch (error) {
    console.error('SendGrid Error:', error);
    return { success: false, error: 'Failed to send email' };
  }
};

export const sendBookingEmail = async (formData: {
  name: string;
  organization: string;
  phone: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
}) => {
  const { name, organization, phone, email, bookingDate, bookingTime } = formData;

  // Email to support team
  const supportEmailContent = {
    to: 'info@securepal.com.au',
    from: 'mohitdev4444@gmail.com',
    subject: `New Service Booking from ${name}`,
    html: `
      <h2>New Service Booking Details:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Preferred Date:</strong> ${bookingDate}</p>
      <p><strong>Preferred Time:</strong> ${bookingTime}</p>
    `,
  };

  // Email to the booked user
  const userEmailContent = {
    to: email,
    from: 'mohitdev4444@gmail.com',
    subject: 'Your Service Booking Confirmation - SecurePal',
    html: `
      <h2>Thank you for booking with SecurePal!</h2>
      <p>Dear ${name},</p>
      <p>We have received your service booking request. Here are your booking details:</p>
      <p><strong>Date:</strong> ${bookingDate}</p>
      <p><strong>Time:</strong> ${bookingTime}</p>
      <p>Our team will review your request and contact you within 24 hours to confirm your booking and discuss your requirements in detail.</p>
      <p>If you have any questions, please don't hesitate to contact us at (02) 9051 0054.</p>
      <p>Best regards,<br>The SecurePal Team</p>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      sgMail.send(supportEmailContent),
      sgMail.send(userEmailContent)
    ]);
    return { success: true };
  } catch (error) {
    console.error('SendGrid Error:', error);
    return { success: false, error: 'Failed to send email' };
  }
};
