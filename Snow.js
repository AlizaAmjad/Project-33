class Snow{
    constructor(x,r) {
this.x = x
this.r = r
this.y = 0
    }
    display(){
noStroke()
fill("white")
ellipse(this.x, this.y, this.r)
    }
    
movement() {
    this.y = this.y + 2
}
}