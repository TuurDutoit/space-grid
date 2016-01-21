space-grid
==========
v0.0.1

A very simple spatial grid implementation, designed to speed some calculations.
Every cell is either empty or contains one item. This can speed up spatial calculations by focusing on just a few cells, instead of all of space.


## API
This module exposes a single constructor, Grid. Every grid has a `grid` property, that is an object. All of space is divided into cells of customizable size, referenced by a string in the following format: `x,y`, where x and y are the indices of the cell.

__Examples (with cell size 10x10):__

* A point at (5, 5) would fall into cell `0,0`
* A point at (20, 20) would fall into cell `2,2`
* A point at (-11, 34) would fall into cell `-2,3`

__Note:__ the methods `add`, `remove`, `get`, `hasItem` and `isEmpty` have corresponding methods that take in cell indices instead of point coordinates. These methods have the same name, but with an I (capital i) appended, so `add` becomes `addI`.

__Note:__ unless otherwise noted, methods return `this`, for chaining.

### new Grid(number cellWidth, number? cellHeight)
Makes a new Grid.

 * cellWidth: the width of the cells
 * cellHeight the height of the cells. If not provided, falls back to `cellWidth`


### grid.reset()
Reset (empty) the grid.

### grid.size(number cellWidth, number? cellHeight)
Sets the size of the grid and calls `grid.reset()`.

 * cellWidth: the width of the cells
 * cellHeight the height of the cells. If not provided, falls back to `cellWidth`

### grid.str(number x, number y) : string
Returns the unique name of the cell a point at (x, y) would fall into, in the following format: `x,y` (as a string).

### grid.add(any item, numer x, number y)
Adds `item` to the correct cell (i.e. the cell a point at (x, y) falls into).

### grid.remove(number x, number y)
Remove the item from the cell a point at (x, y) would fall into, if any.

### grid.get(number x, number y) : any
Get the item from the cell a point at (x, y) would fall into.

### grid.hasItem(number x, number y) : boolean
Check whether the cell a point at (x, y) would fall into contains an item.

### grid.isEmpty(numer x, number y) : boolean
Check whether the cell a point at (x, y) would fall into is empty (i.e. the opposite of `hasItem`).