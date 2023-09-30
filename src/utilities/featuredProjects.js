const baseUrl = process.env.BASE_URL;

export async function getFeaturedProjectLists() {
  const response = await fetch(`${baseUrl}/FeaturedProject`);

  if (response.ok === false) {
    throw new ERROR("Fetching featured projects failed");
  }

  return response.json();
}
