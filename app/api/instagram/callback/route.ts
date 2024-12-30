import { NextResponse } from 'next/server';
import { INSTAGRAM_CONFIG } from '@/lib/instagram/config';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const tokenResponse = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: INSTAGRAM_CONFIG.clientId,
        client_secret: INSTAGRAM_CONFIG.clientSecret,
        grant_type: 'authorization_code',
        redirect_uri: INSTAGRAM_CONFIG.redirectUri,
        code,
      }),
    });

    const data = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(data.error_message || 'Failed to exchange code for token');
    }

    // In a real application, you would store this token securely
    // For demo purposes, we'll just return it
    return NextResponse.json(data);
  } catch (error) {
    console.error('Instagram auth error:', error);
    return NextResponse.json(
      { error: 'Failed to authenticate with Instagram' },
      { status: 500 }
    );
  }
}