'use client';

import { useState } from 'react';
import { createArticle } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function NewArticlePage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: '', content: '', category: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent, status: string) => {
    e.preventDefault();
    await createArticle({ ...form, status });
    router.push('/articles');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add New Article</h1>
      <form>
        <div className="mb-4">
          <label className="block mb-1">Title</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} className="w-full border px-4 py-2" required />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Content</label>
          <textarea name="content" value={form.content} onChange={handleChange} rows={6} className="w-full border px-4 py-2" required />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Category</label>
          <input type="text" name="category" value={form.category} onChange={handleChange} className="w-full border px-4 py-2" required />
        </div>

        <div className="flex gap-4">
          <button type="submit" onClick={(e) => handleSubmit(e, 'publish')} className="bg-blue-500 text-white px-4 py-2 rounded">Publish</button>
          <button type="submit" onClick={(e) => handleSubmit(e, 'draft')} className="bg-gray-400 text-white px-4 py-2 rounded">Save as Draft</button>
        </div>
      </form>
    </div>
  );
}
