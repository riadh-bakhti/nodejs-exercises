// Task 5 - Send an email with nodemailer
// Run: npm install  (installs nodemailer)
//
// Two modes:
//  1) Real inbox (e.g. Gmail) - set credentials first, in PowerShell:
//       $env:EMAIL_USER="you@gmail.com"
//       $env:EMAIL_PASS="your-app-password"     # Gmail "App password", not your normal password
//       $env:EMAIL_TO="you@gmail.com"
//     then: node email-sender.js
//
//  2) No credentials - a temporary Ethereal test account is created automatically,
//     the message is sent and a preview URL is printed in the console.
const nodemailer = require("nodemailer");

async function main() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const target = process.env.EMAIL_TO;

  let transporter;
  let from;
  let to;

  if (user && pass) {
    transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: { user, pass },
    });
    from = user;
    to = target || user;
    console.log(`Sending a real email to ${to} ...`);
  } else {
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });
    from = testAccount.user;
    to = target || testAccount.user;
    console.log("No EMAIL_USER/EMAIL_PASS set -> using a temporary Ethereal test account.");
  }

  const info = await transporter.sendMail({
    from: `"Node Mailer" <${from}>`,
    to,
    subject: "Hello from Node.js",
    text: "This email was sent with nodemailer from a Node.js script.",
    html: "<h1>Hello from Node.js</h1><p>This email was sent with <b>nodemailer</b>.</p>",
  });

  console.log("Message sent:", info.messageId);
  const preview = nodemailer.getTestMessageUrl(info);
  if (preview) console.log("Preview URL:", preview);
}

main().catch((err) => {
  console.error("Failed to send email:", err.message);
  process.exit(1);
});
