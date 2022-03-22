import * as config from "./config";
import { LolApi, Constants } from "twisted";

const api = new LolApi(config.riotKey);

async function summonerByNameExample() {
  const res = await api.Summoner.getByName(
    "Hide on bush",
    Constants.Regions.KOREA
  );
  console.dir(res.response, { depth: 5 });
}

summonerByNameExample();
