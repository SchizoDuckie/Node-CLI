/**
 * Node.CLI
 * By SchizoDuckie
 * Updated By xkxx
 * 
 * Super simple CLI cursor position control to spice up your script's functionality in terminal/console windows
 * Updated for 0.4.*
 * Requires util only
 * v2.0
 *
 * ANSI escape codes are used. For details see: http://en.wikipedia.org/wiki/ANSI_escape_code
 *
 * Free to use and modify, enjoy!
 */

var util = require("util");


function NodeCli () {

	this.bold = true;
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
	this.bgcolors = {
	  gray:    40,
	  red:     41,
	  green:   42,
	  yellow:  43,
	  blue:    44,
	  magenta: 45,
	  cyan:    46,
	  white:   47,
	};
	this.textstyles = {
	  bold:       1,
	  underscore: 4,
	  blink:      5,
	  inverse:    7,
	  conceal:    8,
	  nobold:     22,
	  nounderline:24,
	  noblink:    25,
	  noinverse:  27,
	  noconceal:  28,
	  frame:      51,
	  encircle:   52,
	  overline:   53,
	  no_frame_or_circle:54,
	  nooverline: 55
	}

	/**
	 * Set colors and styles
	 * future: color, bold(boolean), background or: color, background, others
	 */
	this.color = function(color, bold, background) {
		bg = (background && this.bgcolors[background]) ? ';'+this.bgcolors[background] : '';
		//if(typeof bold == 'boolean')
		this.write('\x1B['+(bold ? 1 : 0)+';'+this.colors[color]+bg+'m');
		return(this);
	};

	/**
	 * Set bckground color only
	 */
	this.bgcolor = function(color) {
		return this.write('\x1B[' + this.bgcolors[color] + 'm');
	};

	/**
	 * Set text styles only
	 */
	this.style = function(style) {
		return this.write('\x1B[' + this.textstyles[style] + 'm');
	};

	/**
	 * Reset terminal to default attributes (colors, styles)
	 */
	this.resetColors = function() {
		return this.write('\x1B[0m');
	};

	/**
	 * Reset terminal to default text color
	 */
	this.resetColor = function() {
		return this.write('\x1B[39m');
	};

	/**
	 * Reset terminal to default background color
	 */
	this.resetBg = function() {
		return this.write('\x1B[49m');
	};

	/**
	 * Reset terminal to all default text styles
	 */
	this.resetStyle = function() {
		return this.write('\x1B[10;22;23;24;25;27;28;29;54;55m');
	};
	
	/**
	 * Output string @ current x/y
	 */
	this.write = function(string) {
		util.print(string);
		return(this);
	};

	/**
	 * Output string at new line
	 */
	this.print = function(string) {
		util.puts(string);
		return(this);
	};
	
	/**
	 * Position the Cursor to x/y
	 */
	this.move = function(x,y) {
		return this.write('\x1B['+x+';'+y+'H');
	};
	
	/**
	 * Move the cursor up x rows
	 */
	this.up = function(x) {
		return this.write('\x1B['+x+'A');
	};

	/**
	 * Move the cursor down x rows
	 */
	this.down = function(x) {
		return this.write('\x1B['+x+'B');
	};

	/**
	 * Move the cursor forward x rows
	 */
	this.fwd = function(x) {
		return this.write('\x1B['+x+'C');
	};

	/**
	 * Move the cursor backwards x columns
	 */
	this.back = function(x) {
		return this.write('\x1B['+x+'D');
	};

	/**
	 * Clear the entire screen
	 */
	this.clear = function(x) {
		return this.write('\x1B['+(x ? x : 2)+'J');
	};

	/**
	 * Clear the current line
	 */
	this.clearLine = function(x) {
		return this.write('\x1B['+(x ? x : 2)+'K');
	};

	/** 
	 * Clear the next x chars, keep cursor positioned where it started.
	 */
	this.clearNext = function(x) {
		return this.write(new Array(x+1).join(' ')).back(x);
	}
	
}

module.exports = new NodeCli();

//cli.clear().move(38, 5).write('Node.js').down(1).back(7).write('Rocks!');
module.exports.clear().move(20,20).color('red').write('Node.js').down(1).back(7).color('yellow').write('Rocks!').down(10);