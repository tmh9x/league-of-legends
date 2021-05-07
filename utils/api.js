export async function getChampions(id) {
  const promise = fetch(
    `https://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${id}.json`
  );
  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  return data;
}
