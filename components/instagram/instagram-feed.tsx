"use client"

import { useEffect, useState } from 'react';
import { InstagramPost } from '@/lib/instagram/types';
import { getUserMedia } from '@/lib/instagram/api';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface InstagramFeedProps {
  accessToken: string;
}

export function InstagramFeed({ accessToken }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const media = await getUserMedia(accessToken);
        setPosts(media);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, [accessToken]);

  if (isLoading) {
    return <div className="text-center">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-4">
            {post.media_type === 'VIDEO' ? (
              <video
                src={post.media_url}
                controls
                className="w-full h-64 object-cover rounded-lg"
              />
            ) : (
              <Image
                src={post.media_url}
                alt={post.caption || ''}
                width={400}
                height={400}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{post.caption}</p>
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline mt-2 block"
            >
              View on Instagram
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}