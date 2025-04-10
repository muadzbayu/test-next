'use client';

import { useEffect, useState } from 'react';
import { fetchPublishedArticles } from '@/lib/api';

const PAGE_SIZE = 5;

export default function PreviewPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchPublishedArticles(page, PAGE_SIZE).then((res) => {
      setArticles(res.data);
      setTotalPages(res.totalPages);
    });
  }, [page]);

  const goToPage = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) setPage(newPage);
  };

  return (
    <div>
        <h1 className="text-3xl font-bold mb-6">Preview</h1>
      
        {articles.length === 0 ? (
            <p>No published articles yet.</p>
        ) : (
            articles.map((article: any) => (
            <div key={article.id} className="mb-6 border-b pb-4">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="text-gray-500 text-sm mb-1">Category: {article.category}</p>
                <p className="text-gray-700">{article.content.slice(0, 200)}...</p>
            </div>
            ))
        )}

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-6 mb-12">
            <button onClick={() => goToPage(page - 1)} disabled={page === 1} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                Prev
            </button>
            <span className="self-center">{page} / {totalPages}</span>
            <button onClick={() => goToPage(page + 1)} disabled={page === totalPages} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                Next
            </button>
        </div>

    </div>
  );
}
