const baseUrl = process.env.BASE_URL;

export async function getBrandLists() {
  const response = await fetch(`${baseUrl}/BrandList`);

  if (response.ok === false) {
    throw new Error("Fetching brandlist failed.");
  }

  return response.json();
}
