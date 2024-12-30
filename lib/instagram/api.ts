import { InstagramPost, InstagramUser } from './types';

const BASE_URL = 'https://graph.instagram.com';

export async function getUserProfile(accessToken: string): Promise<InstagramUser> {
  const response = await fetch(
    `${BASE_URL}/me?fields=id,username,media_count,account_type&access_token=${accessToken}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  
  return response.json();
}

export async function getUserMedia(accessToken: string, limit = 20): Promise<InstagramPost[]> {
  const response = await fetch(
    `${BASE_URL}/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=${limit}&access_token=${accessToken}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch user media');
  }
  
  const data = await response.json();
  return data.data;
}