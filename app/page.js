import { Suspense } from 'react';

import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';

async function LatestPosts() {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts} />;
}

// export const metadata = {
//   title: 'All Posts',
//   description: 'Browse and share amazing posts.',
// };

export async function generateMetadata() {
  const posts = await getPosts();
  const postslength = posts.length;
  return {
    title: `Browse all ${postslength} posts`,
    description: 'Browse and share amazing posts.'
  };
}
export default async function Home() {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
      <Suspense fallback={<p>Loading recent posts...</p>}>
        <LatestPosts />
      </Suspense>
      </section>
    </>
  );
}
