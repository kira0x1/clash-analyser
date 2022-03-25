import { Regions } from 'twisted/dist/constants';
import * as api from './api';

async function main() {
   const account = new api.SummonerApi('SpeckIsBoosted', Regions.EU_WEST);
   const matches = await account.getMatches();
   const firstMatch = await account.getMatch(matches[0]);
   api.saveInfoToJson('firstMatch.json', firstMatch);
}

main();
