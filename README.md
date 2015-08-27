# jQuery Cheat Code
<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Konami_Code.svg/800px-Konami_Code.svg.png" style="width: 100%; height: auto;">  
Add a keypress cheat code that calls a specified function on your website.

See it in action here: <a href="http://kevinberonilla.com/demos/jquery-cheat-code">kevinberonilla.com/demos/jquery-cheat-code</a>

---

#### Dependencies
jQuery 1.2.6 or higher

---

#### Installation
Copy the provided JS files to your site and include them in the `<head>` tag after jQuery.
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
        code: '38384040373937396665',
        time: 500,
        callback: function() { alert('Invincibility enabled!'); }
    });
});
```
**code**  
A string of key codes without spaces representing your cheat code (default value is the Konami code sans Start button)

**time**  
The amount of time in milliseconds allowed between sequential key presses before the input is reset

**callback**   
The function that fires when the cheat code is successfully executed (can be a pre-defined function within scope)

---

#### Useful Tools
You can use <a href="https://css-tricks.com/snippets/javascript/javascript-keycodes/">this page</a> to help you determine the key codes for your code string.