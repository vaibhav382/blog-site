import Stack from "../../lib/contentstack";

async function getPost(uid: string) {
  const Query = Stack.ContentType("blog_post").Query().where("uid", uid);
  const result = await Query.toJSON().find();
  return result[0][0];
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.uid);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </main>
  );
}
