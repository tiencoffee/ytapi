const ytdl = require("ytdl-core")

module.exports = async (req, res) => {
	const {id, quality, filter, format} = req.query
	let data = await ytdl.getInfo(id)
	let formats = ytdl.chooseFormat(data.formats, {quality, filter, formats})
	data = {
		details: data.videoDetails,
		formats: formats
	}
	data = JSON.stringify(data)
	res.json(data)
}
