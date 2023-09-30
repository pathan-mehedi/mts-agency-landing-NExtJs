const baseUrl = process.env.BASE_URL;

export async function getProjectLists() {
  const response = await fetch(`${baseUrl}/AllProject`);

  if (response.ok === false) {
    throw new ERROR("Fetching project list failed");
  }

  return response.json();
}
