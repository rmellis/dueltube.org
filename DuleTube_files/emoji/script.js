var randomEmojis = randomEmojis || {};
randomEmojis.apiKey = "50eea16bb81fed00c5aac92bfb354735d4ac117b";
randomEmojis.main = (function () {
	const buildURL = function (type, searchKeyword) {
		let baseURL = "https://emoji-api.com/";
		switch (type) {
			case "search":
				baseURL +=
					"emojis?search=" + searchKeyword + "&access_key=" + randomEmojis.apiKey;
				break;
			case "category":
				baseURL +=
					"categories/" + searchKeyword + "?access_key=" + randomEmojis.apiKey;
				break;
			case "emoji":
				baseURL += "emojis/" + searchKeyword + "?access_key=" + randomEmojis.apiKey;
				break;
			// all icons ( default )
			default:
				baseURL += "emojis?access_key=" + randomEmojis.apiKey;
				break;
		}
		return baseURL;
	};

	const fetchData = async function () {
		const url = buildURL(randomEmojis.options.type, randomEmojis.options.search);

		await fetch(url)
			.then(function (result) {
				return result.json();
			})
			.then(function (data) {
				randomEmojis.emojis = data.map(function (item) {
					return item.character;
				});
			});
	};

	const randomInt = function (min, max) {
		min = Math.ceil(min) || 0;
		max = Math.floor(max) || 50;
		return Math.floor(Math.random() * (max - min)) + min;
	};

	const printEmoji = function () {
		randomEmojis.element.innerText =
			randomEmojis.emojis[randomInt(0, randomEmojis.emojis.length)];
	};

	const init = async function (el, fetchOptions) {
		randomEmojis.element = el;
		randomEmojis.options = fetchOptions;

		await fetchData();
		printEmoji();

		randomEmojis.element.addEventListener("mouseover", printEmoji);
		randomEmojis.element.addEventListener("touchstart", printEmoji);
	};

	return {
		init: init,
		fetchData: fetchData
	};
})();

//Init
const el = document.getElementById("random-emoji"),
	options = {
		type: "category",
		search: "smileys-emotion"
	};

randomEmojis.main.init(el, options);