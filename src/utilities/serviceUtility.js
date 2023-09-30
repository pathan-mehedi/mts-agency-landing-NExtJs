const baseUrl = process.env.BASE_URL;

export async function getServiceLists() {
  const response = await fetch(`${baseUrl}/AllService`);

  if (response.ok === false) {
    throw new ERROR("Fetching service list failed");
  }

  return response.json();
}
