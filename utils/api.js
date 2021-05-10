export async function getChampions() {
  const promise = fetch(
    `http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json`
  );
  const response = await promise;
  if (response.status === 404) {
    return {};
  }
  const data = await response.json();
  return data.data;
}
