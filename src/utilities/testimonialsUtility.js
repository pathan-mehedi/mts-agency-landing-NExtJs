const baseUrl = process.env.BASE_URL;

export async function getTestimonialLists() {
  const response = await fetch(`${baseUrl}/TestimonialList`);

  if (response.ok === false) {
    throw new ERROR("Fetching testimonials list failed");
  }

  return response.json();
}
