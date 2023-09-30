const baseUrl = process.env.BASE_URL;

export async function getTeamLists() {
  const response = await fetch(`${baseUrl}/TeamList`);

  if (response.ok === false) {
    throw new ERROR("Fetching team list failed");
  }

  return response.json();
}
