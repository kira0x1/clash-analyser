import * as config from '../config';
import { Constants, LolApi } from 'twisted';
import { SummonerV4DTO } from 'twisted/dist/models-dto';
import { RegionGroups, Regions } from 'twisted/dist/constants';

export const api = new LolApi(config.riotKey);

export class SummonerApi {
   summonerName: string;
   region: Regions;
   id: string = '';
   puuid: string = '';

   constructor(summonerName: string, region: Regions) {
      this.summonerName = summonerName;
      this.region = region;

      this.getAccount().then(acc => {
         this.id = acc.id;
         this.puuid = acc.puuid;
      });
   }

   public async init() {
      const acc = await this.getAccount();
      this.id = acc.id;
      this.puuid = acc.puuid;
   }

   public async getAccount() {
      const account = await api.Summoner.getByName(this.summonerName, this.region);
      return account.response;
   }

   public async getClash() {
      if (!this.id) {
         await this.init();
      }
      return api.Clash.playersList(this.id, this.region);
   }

   public async getLeague() {
      if (!this.id) {
         await this.init();
      }

      return api.League.bySummoner(this.id, this.region);
   }

   public async getMatches() {
      if (!this.puuid) {
         await this.init();
      }

      const matches = await api.MatchV5.list(this.puuid, RegionGroups.EUROPE);
      return matches.response;
   }

   public async getMatch(matchId: string) {
      const match = await api.MatchV5.get(matchId, RegionGroups.EUROPE);
      return match.response;
   }
}
