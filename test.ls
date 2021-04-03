require! {
	fs
	"ytdl-core": ytdl
}
process.chdir __dirname

do !->>
	data = await ytdl.getInfo \0TWpjk2s8bA
	formats = ytdl.chooseFormat data.formats,
		quality: void
		filter: \videoandaudio
	data =
		details: data.videoDetails
		formats: formats
	data = JSON.stringify data,, \\t
	fs.writeFileSync \test.json data
