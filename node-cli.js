/**
 * Node.CLI
 * By SchizoDuckie
 *
 * Super simple CLI cursor position control to spice up your script's functionality in terminal/console windows
 * Requires sys
 * v1.0
 *
 * Free to use and modify, enjoy!
 */

var sys = require("sys");


function NodeCli () {

	this.colors = {
	  grey:    30,
	  red:     31,
	  green:   32,
	  yellow:  33,
	  blue:    34,
	  magenta: 35,
	  cyan:    36,
	  white:   37
	};

	/**
	 * Echo color code, bold is optional
	 */
	this.color = function(color, bold) {
		sys.print('\x1B['+(bold ? 1 : 0)+';'+this.colors[color]+'m');
		return(this);
	};

	/**
	 * Reset terminal to default color
	 */
	this.resetColor = function() {
		sys.print('\x1B[0m');
		return(this);
	};
	
	/**
	 * Output string @ current x/y
	 */
	this.write = function(string) {
		sys.print(string);
		return(this);
	};
	
	/**
	 * Position the Cursor to x/y
	 */
	this.move = function(x,y) {
		sys.print('\033['+x+';'+y+'H');
		return this;
	};
	
	/**
	 * Move the cursor up x rows
	 */
	this.up = function(x) {
		sys.print('\033['+x+'A');
		return this;
	};

	/**
	 * Move the cursor down x rows
	 */
	this.down = function(x) {
		sys.print('\033['+x+'B');
		return this;
	};

	/**
	 * Move the cursor forward x rows
	 */
	this.fwd = function(x) {
		sys.print('\033['+x+'C');
		return this;
	};

	/**
	 * Move the cursor backwards x columns
	 */
	this.back = function(x) {
		sys.print('\033['+x+'D');
		return this;
	};

	/**
	 * Clear the entire screen
	 */
	this.clear = function(x) {
		sys.print('\033[2J');
		return this;
	};

	/**
	 * Clear the current line
	 */
	this.clearLine = function(x) {
		sys.print('\033[K');
		return this;
	};

	/** 
	 * Clear the next x chars, keep cursor positioned where it started.
	 */
	this.clearNext = function(x) {
		return this.write(new Array(x+1).join(' ')).back(x);
	}
	
}

cli = new NodeCli();
