const timeline = new Timeline({
	id: 'top',
	pauseWhenInvisible: true,
	duration: 10000,
	// maxStep: 100,
	// maxFPS: 20,

	// loop: true,

	onInit: () => {
		console.log('timeline init')
	},
	onStart: time => {
		console.log('timeline start', time)
	},
	onEnd: time => {
		console.log('timeline end', time)
	},
	// onUpdate: (t, p) => {console.log('timeline update', t, p);},
	// onUpdate: () => {console.log(timeline.playing);}
})

// timeline.addTrack({
//     startTime: 1000,
//     duration: 2000,
//     onInit: () => console.log('init'),
//     onStart: (t) => {console.log('start', timeline.currentTime, t);},
//     // onUpdate: (time, p) => { console.log(timeline.currentTime) },
//     onUpdate: (time, p) => { document.body.innerHTML = `${time}\n${p}` },
//     onEnd: (t) => {console.log('end', timeline.currentTime, t);},
//     loop: true,
// })
//
// console.log(timeline.tracks[0]);

const timelineS = new Timeline({
	id: 's',
	pauseWhenInvisible: true,
	duration: 10000,
	// maxStep: 100,
	// maxFPS: 20,

	onInit: () => {
		console.log('timelineS init')
	},
	onStart: time => {
		console.log('timelineS start', time)
	},
	onUpdate: (t, p) => {
		console.log('timelineS update', t, p)
	},
	onEnd: time => {
		console.log('timelineS end', time)
	},
})

timelineS.setOrigin(timeline)

timeline.play()
