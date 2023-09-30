const baseUrl = process.env.BASE_URL;

export async function getWorksLists() {
  const response = await fetch(`${baseUrl}/WorkList`);

  if (response.ok === false) {
    throw new ERROR("Fetching how works failed");
  }

  return response.json();
}
