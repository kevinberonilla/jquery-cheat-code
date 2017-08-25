# jQuery Cheat Code
<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Konami_Code.svg/800px-Konami_Code.svg.png" style="width: 100%; height: auto;">  
Add a keypress cheat code that calls a specified function on your website

See it in action here: <a href="http://kevinberonilla.com/demos/jquery-cheat-code">kevinberonilla.com/demos/jquery-cheat-code</a>

---

#### Dependencies
jQuery 1.2.6 or higher

---

#### Installation
Download the plugin via Bower or manually copy the JS files to your site, then include them in the `<head>` tag.
```
bower install jquery-cheat-code
```
```html
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/jquery-cheat-code.min.js"></script>
</head>
```

---

#### Call the Script
```javascript
$(document).ready(function() {
    $(document).cheatCode();
});
```

---

#### Play with Settings
```javascript
$(document).ready(function() {
    $(document).cheatCode({ // Default values below
        code: 38384040373937396665,
        time: 500,
        callback: function() { alert('Invincibility enabled!'); }
    });
});
```
**`code`**  
Number or string containing a combined set of key codes without spaces that represents your cheat code (default value is the Konami code sans Start button)

**`time`**  
Number representing the amount of time in milliseconds allowed between sequential key presses before the input is reset

**`callback`**   
Function that fires when the cheat code is successfully executed

---

#### Use the Code Generator
Included with the plugin is a generator you can use to determine your code string.