const baseUrl = process.env.BASE_URL;

export async function getStatsInfo() {
  const response = await fetch(`${baseUrl}/StatList`);

  if (response.ok === false) {
    throw new ERROR("Fetching stats failed");
  }

  return response.json();
}
