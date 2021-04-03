const ytdl = require("ytdl-core")

module.exports = async (req, res) => {
	const {id, quality, filter, format} = req.query
	let data = await ytdl.getInfo(id)
	let details = data.videoDetails
	delete details.availableCountries
	let formats = ytdl.chooseFormat(data.formats, {quality, filter, format})
	data = {
		details: data.videoDetails,
		formats: formats
	}
	res.json(data)
}
