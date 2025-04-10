const BASE_URL = 'http://localhost:3900'; 

export const fetchArticles = async (status: string) => {
  const res = await fetch(`${BASE_URL}/article/50/1`);
  console.log("Res : ",res)
  return res.json();
};

export const fetchArticleById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/article/${id}`);
  return res.json();
};

export const createArticle = async (data: any) => {
  return await fetch(`${BASE_URL}/article`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const updateArticle = async (id: string, data: any) => {
  return await fetch(`${BASE_URL}/article/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const trashArticle = async (id: number) => {
  return await fetch(`${BASE_URL}/article/${id}/trash`, { method: 'PUT' });
};

export async function fetchPublishedArticles(page: number, limit: number) {
    const res = await fetch(`${BASE_URL}/article?status=published&page=${page}&limit=${limit}`);
    const json = await res.json();
  
    return {
      data: json.articles,
      totalPages: json.totalPages,
    };
  }
  
