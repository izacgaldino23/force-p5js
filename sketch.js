const xDots = 40
const yDots = 40
const RADIUS = 8
const near = 200
let dots = []
let maxTranslate
let colors = {}

function setup () {
	createCanvas(1000, 1000);

	let distanceBetX = width / xDots
	let distanceBetY = height / yDots

	maxTranslate = distanceBetX / 1.5

	colors.outside = color(100)
	colors.inside = color(100, 200, 100)

	for (let i = 1; i < xDots; i++) {
		for (let j = 1; j < yDots; j++) {
			dots.push(new Dot(i * distanceBetX, j * distanceBetY))
		}
	}

	noStroke()
}

function draw () {
	background(20);

	dots.map(d => {
		d.draw()
		d.update()
	})
}

class Dot {
	constructor(x, y) {
		this.pos = createVector(x, y)
		this.color = colors.inside
	}

	draw () {
		fill(this.inside ? this.color : colors.outside)
		circle(this.pos.x, this.pos.y, RADIUS)
	}

	update () {
		if (dist(this.pos.x, this.pos.y, mouseX, mouseY) <= near) {
			this.inside = true
		} else {
			this.inside = false
		}
	}
}