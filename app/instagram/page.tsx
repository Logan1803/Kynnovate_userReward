import { InstagramFeed } from '@/components/instagram/instagram-feed';

export default function InstagramPage() {
  // In a real application, you would fetch this token from your backend
  // This is just for demonstration purposes
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

  if (!accessToken) {
    return (
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Instagram Feed</h1>
        <p className="text-red-500">
          Please set up your Instagram access token in the environment variables.
        </p>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Instagram Feed</h1>
      <InstagramFeed accessToken={accessToken} />
    </div>
  );
}