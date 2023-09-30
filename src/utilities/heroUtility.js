const baseUrl = process.env.BASE_URL;

export async function getHeroList() {
  const response = await fetch(`${baseUrl}/HeroList`);

  if (response.ok === false) {
    throw new ERROR("Fetching hero failed");
  }

  return response.json();
}
