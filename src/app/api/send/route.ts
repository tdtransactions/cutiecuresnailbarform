import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, phone, email } = await request.json();

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Use default code
    const code = '936470';

    // Send email to the shop owner
    const data = await resend.emails.send({
      from: 'Cutiecures Nail Bar <onboarding@resend.dev>', // Replace with your verified domain for production
      to: ['cutiecuresnailbar@gmail.com'],
      subject: `Customer Information For Claiming The $10 Offer. - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="background-color: #f9f9f9; padding: 40px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; -webkit-font-smoothing: antialiased;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9;">
            <tr>
              <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 16px rgba(0,0,0,0.05); margin: 0 auto; border: 1px solid #eaebed;">
                  <tr>
                    <td align="center" style="padding: 30px 0; background-color: #ffffff; border-bottom: 1px solid #f0f0f0;">
                      <img src="https://cutiecuresnailbarsunnyvale.com/wp-content/uploads/2026/05/646679576_122110247517244994_8865244738307769827_n-removebg-preview.png" alt="Cutiecures Nail Bar" width="220" style="display: block; max-width: 100%; height: auto;" />
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 40px 20px 40px;">
                      <h1 style="margin: 0 0 20px 0; font-size: 24px; color: #333333; text-align: center;">New Coupon Claimed For ${name}</h1>
                      <p style="margin: 0 0 25px 0; font-size: 16px; color: #555555; line-height: 1.6;">
                        Hello Cutiecures Nail Bar,<br><br>
                        A new customer has just generated a $10 discount coupon. Please find their details below:
                      </p>
                      
                      <table width="100%" border="0" cellspacing="0" cellpadding="15" style="background-color: #fcf9f9; border: 1px solid #f0e6e6; border-radius: 8px; margin-bottom: 35px;">
                        <tr>
                          <td width="35%" style="font-weight: 600; color: #888888; border-bottom: 1px solid #f0e6e6; font-size: 15px;">Customer Name:</td>
                          <td width="65%" style="color: #333333; font-weight: bold; border-bottom: 1px solid #f0e6e6; font-size: 15px;">${name}</td>
                        </tr>
                        <tr>
                          <td width="35%" style="font-weight: 600; color: #888888; border-bottom: 1px solid #f0e6e6; font-size: 15px;">Phone Number:</td>
                          <td width="65%" style="color: #333333; font-weight: bold; border-bottom: 1px solid #f0e6e6; font-size: 15px;">${phone}</td>
                        </tr>
                        <tr>
                          <td width="35%" style="font-weight: 600; color: #888888; font-size: 15px;">Email Address:</td>
                          <td width="65%" style="color: #333333; font-weight: bold; font-size: 15px;">
                            <a href="mailto:${email}" style="color: #d17a86; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                      </table>

                      <div style="text-align: center; background-color: #fff1f2; border: 2px dashed #d17a86; padding: 25px; border-radius: 10px;">
                        <p style="margin: 0 0 10px 0; font-size: 13px; color: #d17a86; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">Generated Code</p>
                        <p style="margin: 0; font-size: 36px; color: #b8626e; font-weight: bold; letter-spacing: 6px;">${code}</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" style="padding: 25px 40px; background-color: #fafafa; border-top: 1px solid #eeeeee;">
                      <p style="margin: 0; font-size: 13px; color: #999999; line-height: 1.5;">
                        This is an automated message from the Cutiecures Nail Bar system.<br>
                        &copy; Cutiecures Nail Bar. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    });

    return NextResponse.json({ success: true, code });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to generate code and send email' }, { status: 500 });
  }
}
