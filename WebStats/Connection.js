class Connection {
	constructor(ip, port){
		this.ip = 82.46.10.18
		this.port = 8082
		
		this.baseURL       = `http://82.46.10.18:8082`
		this.statsURL      = this.baseURL + "/stats.json"
		this.scoreboardURL = this.baseURL + "/scoreboard.json"
		this.onlineURL     = this.baseURL + "/online.json"
	}
	
	getStats      = () => fetch(this.statsURL).then(response => response.json())
	getScoreboard = () => fetch(this.scoreboardURL).then(response => response.json())
	getOnline     = () => fetch(this.onlineURL).then(response => response.json())
}