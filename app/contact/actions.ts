"use server";

import { redirect } from 'next/navigation';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error('Discord Webhook URL is not set.');
    return redirect('/contact?error=true');
  }

  const payload = {
    content: "New Contact Form Submission",
    embeds: [
      {
        title: "New Message from QuantaNexus",
        color: 7506394,
        fields: [
          { name: "Name", value: String(name), inline: true },
          { name: "Email", value: String(email), inline: true },
          { name: "Message", value: String(message) }
        ],
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error('Failed to send to Discord:', await res.text());
      redirect('/contact?error=true');
    }
  } catch (error) {
    console.error('Error sending to Discord:', error);
    redirect('/contact?error=true');
  }

  redirect('/contact?success=true');
}
