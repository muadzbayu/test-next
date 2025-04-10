'use client';
import { useEffect, useState } from 'react';
import { fetchArticles, trashArticle } from '@/lib/api';
import Link from 'next/link';

const Tabs = ['publish', 'draft', 'trash'];

export default function ArticlesPage() {
  const [status, setStatus] = useState('publish');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(status).then(setArticles);
  }, [status]);

  const handleTrash = async (id: number) => {
    await trashArticle(id);
    setStatus("trash");
    const updated = await fetchArticles(status);
    setArticles(updated);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <div className="flex gap-4 mb-4">
        {Tabs.map((tab) => (
          <button key={tab} onClick={() => setStatus(tab)} className={`px-4 py-2 border ${status === tab ? 'bg-blue-500 text-white' : ''}`}>
            {tab.toUpperCase()}
          </button>
        ))}
        <Link href="/articles/new" className="ml-auto text-blue-500 underline">Add New</Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article: any) => (
            <tr key={article.id}>
              <td className="border px-4 py-2">{article.title}</td>
              <td className="border px-4 py-2">{article.category}</td>
              <td className="border px-4 py-2">
                {status !== 'trash' && (
                  <>
                    <Link href={`/articles/${article.id}/edit`} className="mr-2 text-blue-500">✏️</Link>
                    <button onClick={() => handleTrash(article.id)} className="text-red-500">🗑️</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
