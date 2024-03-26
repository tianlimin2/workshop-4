import { simpleOnionRouter } from "./simpleOnionRouter";
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export async function launchOnionRouters(n: number) {
  const promises = [];

  for (let index = 0; index < n; index++) {
    const newPromise = simpleOnionRouter(index);
    promises.push(newPromise);
  }

  await sleep(2000); 
  const servers = await Promise.all(promises);
  
  return servers;
}
