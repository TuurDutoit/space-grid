var Grid = function(width, height) {
  this.size(width, height);
}

Grid.prototype.reset = function() {
  this.grid = {};

  return this;
}

Grid.prototype.size = function(width, height) {
  this.reset();
  this.cellWidth = width;
  this.cellHeight = height || width;

  return this;
}

Grid.prototype.str = function(x, y) {
  return Math.floor(x / this.cellWidth) + "," + Math.floor(y / this.cellHeight);
}

Grid.prototype.add = function(item, x, y) {
  var str = this.str(x, y);
  this.grid[str] = item;

  return this;
}

Grid.prototype.addI = function(item, x, y) {
  var str = x + "," + y;
  this.grid[str] = item;

  return this;
}

Grid.prototype.remove = function(x, y) {
  var str = this.str(x, y);
  this.grid[str] = undefined;

  return this;
}

Grid.prototype.removeI = function(x, y) {
  var str = x + "," + y;
  this.grid[str] = undefined;

  return this;
}

Grid.prototype.get = function(x, y) {
  var str = this.str(x, y);
  return this.grid[str];
}

Grid.prototype.getI = function(x, y) {
  var str = x + "," + y;
  return this.grid[str];
}

Grid.prototype.hasItem = function(x, y) {
  return !!this.get(x, y);
}

Grid.prototype.hasItemI = function(x, y) {
  return !!this.getI(x, y);
}

Grid.prototype.isEmpty = function(x, y) {
  return !this.get(x, y);
}

Grid.prototype.isEmptyI = function(x, y) {
  return !this.getI(x, y);
}



module.exports = Grid;