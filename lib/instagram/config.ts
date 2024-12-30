export const INSTAGRAM_CONFIG = {
  clientId: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID!,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
  redirectUri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/instagram/callback`,
  scope: ['user_profile', 'user_media'],
};