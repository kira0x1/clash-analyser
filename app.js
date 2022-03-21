require("dotenv").config();
const { LolApi, Constants } = require("twisted");

const api = new LolApi(process.env.RIOT_KEY);

async function summonerByNameExample() {
  const res = await api.Summoner.getByName(
    "Hide on bush",
    Constants.Regions.KOREA
  );

  console.dir(res.response, { depth: 5 });
}

summonerByNameExample();
