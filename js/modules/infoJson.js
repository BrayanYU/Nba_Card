export default function infoJson(url) {
  
  async function getInfo() {
    const infoResponse = await fetch(url);
    const infoJSON = await infoResponse.json();
    return infoJSON;
  }
  return getInfo();
}