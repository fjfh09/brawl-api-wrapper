import { Request } from './Request'
import { Player } from './Player'
import { BattleLog } from './BattleLog'
import { Club } from './Club'
import { Brawler } from './Brawler'
import type { RankingOfPlayersResponse } from '../types/RankingOfPlayerResponse'
import type { RankingOfClubsResponse } from '../types/RankingOfClubsResponse'
import type { EventsResponse } from '../types/EventsResponse'
import type { Brawlers } from '../utils/Brawlers'

export class Client {
	public token: string | undefined
	constructor(token: string | undefined) {
		this.token = token
	}

	public async getPlayer(tag: string): Promise<Player> {
		return new Player(await new Request(this.token).getPlayer(tag))
	}
	public async getBattleLog(tag: string): Promise<BattleLog> {
		return new BattleLog(await new Request(this.token).getBattleLog(tag))
	}
	public async getClub(tag: string): Promise<Club> {
		return new Club(await new Request(this.token).getClub(tag))
	}
	public async getBrawler(brawler: Brawlers): Promise<Brawler> {
		return new Brawler(await new Request(this.token).getBrawler(brawler))
	}
	public async getBrawlers(): Promise<Brawler[]> {
		return await new Request(this.token).getBrawlers()
	}
	public async getRankingOfPlayers(
		countryCode = 'global'
	): Promise<RankingOfPlayersResponse[]> {
		return await new Request(this.token).getRankingOfPlayers(countryCode)
	}
	public async getRankingOfClubs(
		countryCode = 'global'
	): Promise<RankingOfClubsResponse[]> {
		return await new Request(this.token).getRankingOfClubs(countryCode)
	}
	public async getRankingOfBrawlers(
		brawler: Brawlers,
		countryCode = 'global'
	): Promise<RankingOfPlayersResponse[]> {
		return await new Request(this.token).getRankingOfBrawlers(countryCode, brawler)
	}
	public async getEvents(): Promise<EventsResponse[]> {
		return await new Request(this.token).getEvents()
	}
}
