# jquery-cheatcode
Add a keypress cheat code that calls a specified function on your website.

---

#### Requirements
jQuery 1.2.6 or higher

---

#### Installation
Copy the provided JS files to your site and include them in the `<head>` tag after jQuery
```
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/jquery-cheatcode.js"></script>
</head>
```

---

#### Call the Script
```
$(document).ready(function() {
    $('document').cheatcode();
});
```
---

#### Play with Settings
```
$(document).ready(function() {
    $('document').cheatcode({
        code: '38384040373937396665',
        time: 500,
        callback: function() { alert('Cheat code activated!');
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
