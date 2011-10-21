Node.CLI
=========

By SchizoDuckie

Updated By xkxx
Super simple CLI cursor position control to spice up your script's functionality in terminal/console windows

Updated for 0.4.*

Requires util

v2.0

Free to use and modify.
Report any issues you encountered. 

Node.cli uses ANSI control codes to control console behavior. For details see: <http://en.wikipedia.org/wiki/ANSI_escape_code>

See screenshot.png for an impression of what you can do.

Enjoy!

Usage:
-------

```javascript
var cli = require('./node-cli.js');
cli.clear().move(20,20).color('red').write('Node.js').down(1).back(7).color('yellow').write('Rocks!').down(10);
```

Try node example.js to see this in action.

### cli.write(text)
Print the text to console without adding a new line after it

Example:

```javascript
cli.write('We are');
cli.write('in the same line.');
```

### cli.print(text)
Same as cli.write(), except will add a new line

Example:

```javascript
cli.print('We are');
cli.print('In different lines');
```

### cli.color(text_color, [bold(boolean or cli.bold), [background_color]])
### cli.color(text_color, [[background_color, [text_styles...]])
Set colors and styles

Choices of Text and background colors: 'default', 'gray', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'.
Choices of Text styles: 'bold', 'underscore', 'blink', 'inverse', 'conceal', 'nobold', 'nounderscore', 'noblink', 'noinverse', 'noconceal', 'frame', 'encircle', 'overline', 'no_frame_or_circle', 'nooverline'.

Example:

```javascript
cli.color('yellow', cli.bold).write('Here is some yellow text.');
```

If you are not satisfied with the provided text styles, it's possible to pass SGR codes directly. For example:

```javascript
cli.color('green', 'default', 'bold', 4, 7); //same as cli.color('green', 'default', 'bold', 'underscore', 'inverse');
```

### cli.bgcolor(background_color)
Set only the background color

### cli.style(text_style)
Set only the text style

### cli.reset()
Reset the console to default

### cli.resetColor()
Reset only the text color

### cli.resetBg()
Reset only the background color

### cli.resetStyle()
Reset only text styles

### cli.move(x, y)
Move the cursor in x,y position

### cli.up(x), cli.down(x), cli.fwd(x), cli.back(x)
Move the cursor up, down, fwd or back x rows/columns

### cli.clear(x)
Clear the screen. If no parameter is given or x = 2, the entire screen will be cleared; x = 0, the screen above the cursor; x = 1, the screen under the cursor

### cli.clearLine(x)
Clear the line. Works similarly as cli.clear().

### cli.clearNext(x)
Clear the next n letters in the line

### cli.custom(command)
Save you a '\x1B['.