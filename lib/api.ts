const BASE_URL = 'http://localhost:3900'; 

export const fetchArticles = async (status: string) => {
  const res = await fetch(`${BASE_URL}/article/1000/0`);
  const json = await res.json();

  const filtered = json.data.filter((item: any) => item.status === status);
  return filtered;
};

export const fetchArticleById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/article/${id}`);
  const json = await res.json();
  return json.data;
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
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
};

export const trashArticle = async (id: number) => {
  return await fetch(`${BASE_URL}/article/trash/${id}`, { method: 'POST' });
};

export async function fetchPublishedArticles(page: number, limit: number) {
    const res = await fetch(`${BASE_URL}/article/${limit}/${page-1}?preview=true`);
    const json = await res.json();
    const result = json.data;
  
    return {
      data: result,
      totalPages: json.total_page,
    };
  }
  
