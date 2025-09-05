import Link from "next/link";
import Stack from "../lib/contentstack";

async function getPosts() {
  const Query = Stack.ContentType("blog_post").Query();
  const result = await Query.toJSON().find();
  return result[0].map((p: any) => ({
    uid: p.uid,
    title: p.title,
    slug: p.slug,
  }));
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.uid} className="border-b border-gray-300 pb-2">
            <Link href={`/${post.uid}`}>
              <span className="text-xl font-medium hover:underline cursor-pointer">
                {post.title}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
