const ytdl = require("ytdl-core")

module.exports = async (req, res) => {
	const {id, quality, filter, format} = req.query
	try {
		let data = await ytdl.getInfo(id)
		let {videoDetails: details, formats} = data
		delete details.availableCountries
		if (quality || filter || format) {
			formats = ytdl.chooseFormat(data.formats, {quality, filter, format})
		}
		data = {
			details: data.videoDetails,
			formats: formats
		}
		res.json(data)
	} catch (err) {
		res.status(400).json({
			err: err.message
		})
	}
}
