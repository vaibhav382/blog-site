import Stack from "../../lib/contentstack";

async function getPost(url: string) {
  const Query = Stack.ContentType("blog_post").Query().where("url", url);
  const result = await Query.toJSON().find();
  return result[0][0];
}

export default async function BlogPostPage({ params }: { params: { url: string } }) {
  console.log(params)
  const post = await getPost("/" +params.url);


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
