export const fetchCategory = async (categoryName: string) => {
  const response = await fetch(`/${categoryName}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchProduct = async (categoryName: string, id: string) => {
  const response = await fetch(`/${categoryName}/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchJoin = async (
  username: string,
  password: string,
  type: string,
) => {
  const response = await fetch(`/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, type }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const fetchLogin = async (username: string) => {
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
