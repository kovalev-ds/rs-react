type RequestOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  search?: string;
};

export const request = async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
  const { method, search } = options;

  if (search) {
    url = url + '?' + search;
  }

  try {
    const resp = await fetch(url, { method });
    const data = await resp.json();

    return data;
  } catch (error) {
    throw error;
  }
};
