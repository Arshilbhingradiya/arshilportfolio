# Portfolio Website

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It showcases your projects, services, and allows visitors to contact you directly via email.

## Features

- Modern, responsive design
- About, Portfolio, Services, and Contact pages
- Contact form sends messages directly to your email (no database storage)
- Built with Next.js App Router and TypeScript
- Styled with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- pnpm (or npm/yarn)
- A Gmail account with 2-factor authentication enabled

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Arshilbhingradiya/Portfolio.git
   cd Portfolio
   ```
2. Install dependencies:
   ```sh
   pnpm install
   # or
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your email credentials:
   ```env
   EMAIL_USER=your_gmail_address@gmail.com
   EMAIL_PASS=your_gmail_app_password
   YOUR_EMAIL=your_gmail_address@gmail.com
   ```
   - `EMAIL_PASS` must be a Gmail App Password (not your normal password). [How to create an App Password](https://support.google.com/accounts/answer/185833?hl=en)

### Running Locally

```
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your site.

## Deployment

You can deploy this project to Vercel, Netlify, or any Node.js hosting provider. Make sure to set the same environment variables in your deployment dashboard.

## Email Setup Guide for Contact Form

### Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration for Contact Form
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
YOUR_EMAIL=your-email@gmail.com
```

### Step 2: Get Gmail App Password

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled
4. Go to **App passwords** (under 2-Step Verification)
5. Select **Mail** as the app and **Other** as the device
6. Click **Generate**
7. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)
8. Paste this password as your `EMAIL_PASS` in the `.env.local` file

### Step 3: Update Environment Variables

Replace the placeholder values in your `.env.local` file:

- `EMAIL_USER`: Your Gmail address (e.g., `yourname@gmail.com`)
- `EMAIL_PASS`: The 16-character app password from Step 2
- `YOUR_EMAIL`: The email where you want to receive contact form messages (can be the same as EMAIL_USER)

### Step 4: Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/contact`

## Contact

For any questions or feedback, please use the contact form on the website or email me directly at `YOUR_EMAIL`.

---

**Arshil Bhingradiya**

Full-Stack Developer & Freelancer 3. Fill out and submit the contact form 4. Check your email for the notification message

## How It Works

When someone submits the contact form:

1. **You receive an email** with the contact form details
2. **The sender receives an auto-reply** confirming their message was received
3. **No database is used** - emails are sent directly via Gmail SMTP

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**: Make sure you're using an app password, not your regular Gmail password
2. **"Less secure app access" error**: Enable 2-factor authentication and use app passwords
3. **Emails not sending**: Check that all environment variables are correctly set
4. **TypeScript errors**: Make sure `@types/nodemailer` is installed

### Security Notes:

- Never commit your `.env.local` file to version control
- The app password is more secure than your regular password
- You can revoke app passwords anytime from your Google Account settings

## Alternative Email Services

If you prefer not to use Gmail, you can modify the transporter configuration in `app/api/contact/route.ts` to use other services like:

- Outlook/Hotmail
- Yahoo Mail
- Custom SMTP server
- Email service providers (SendGrid, Mailgun, etc.)
