// A moving enemy which is created with an initial position (x,y),
// an initial speed, an initial direction of movement and a radius
// for the circle representing it. This radius will also be respected
// in collision detection.
function Enemy(x, y, v, angle, r)
{
    this.x = x;
    this.y = y;
    this.v = v;
    this.setAngle(angle);
    this.r = r;

    this.geometry = new Circle(x, y, r, CircleType.Inside, 0, 2*pi, [0.5, 0, 0]);
    return this;
}

Enemy.prototype.destroy = function() {
    this.geometry.destroy();
    this.geometry = null;
};

Enemy.prototype.setAngle = function(angle) {
    this.angle = angle;

    // Precompute current normal vector parallel to velocity
    this.vx = cos(angle);
    this.vy = sin(angle);
};

Enemy.prototype.render = function() {
    this.geometry.render(CircleType.Inside);
};

Enemy.prototype.update = function(dTime) {
    // TODO: Add movement and collision detection
};
