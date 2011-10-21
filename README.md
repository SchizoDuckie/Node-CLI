Node.CLI
=========

By SchizoDuckie
Updated By xkxx

Super simple CLI cursor position control to spice up your script's functionality in terminal/console windows
Updated for 0.4.*
Requires util
v2.0

Free to use and modify.
Reporting issues is appreciated.

Node.cli uses ANSI control codes to control console behavior. For details see: <http://en.wikipedia.org/wiki/ANSI_escape_code>

Usage:
-------

var cli = require('./node-cli.js');
cli.clear().move(20,20).color('red').write('Node.js').down(1).back(7).color('yellow').write('Rocks!').down(10);

### cli.write(text)
Print the text to console without adding a new line after it

Example:

cli.write('We are');
cli.write('in the same line.');

### cli.print(text)
Same as cli.write(), except will add a new line

Example:

cli.print('We are');
cli.print('In different lines');

### cli.color(text_color, [bold(boolean or cli.bold), [background_color]])
### cli.color(text_color, [[background_color, [text_styles...]])
Set colors and styles
Choices of Text and background colors: default, gray, red, green, yellow, blue, magenta, cyan, white.
Choices of Text styles: bold, underscore, blink, inverse, conceal, nobold, nounderscore, noblink, noinverse, noconceal, frame, encircle, overline, no_frame_or_circle, nooverline.

Example:

cli.color('yellow', cli.bold).write('Here is some yellow text.');

Try node example.js to see this in action.
See screenshot.png for an impression of what you can do.

Enjoy!