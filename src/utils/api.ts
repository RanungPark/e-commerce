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
