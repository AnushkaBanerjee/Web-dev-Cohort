## ✍️ What is `document.write()`?

`document.write()` is a JavaScript method that writes content directly to the HTML page.

### Example

```html
<script>
    document.write("<h1>Hello, Anushka!</h1>");
</script>
```

This will display:

```
Hello, Anushka!
```

on the webpage while the HTML is still being loaded.

---

### ⚠️ Warning

> If you use `document.write()` after the HTML document is loaded, it will delete all existing HTML.

---

## Before and After Example

### ✅ Using `document.write()` While Page is Loading (Safe)

```html
<!DOCTYPE html>
<html>
    <head>
        <script>
            document.write("<h2>This is written during loading</h2>");
        </script>
    </head>
    <body>
        <p>This is a normal paragraph.</p>
    </body>
</html>
```

**Output:**

```
This is written during loading
This is a normal paragraph.
```

Here it works fine — because it's writing while the page is still loading.

---

### ❌ Using `document.write()` After Page Load (Dangerous)

```html
<!DOCTYPE html>
<html>
    <body>
        <p>This is original content.</p>
        <button onclick="document.write('Oops!')">Click me</button>
    </body>
</html>
```

**What happens when you click the button?**

All existing content (like `<p>` and even the button itself) gets deleted and replaced with just:

```
Oops!
```

That’s what the warning means!  
`document.write()` clears everything and starts writing a new blank page if it's used after the page is already loaded.

---

## 🧠 So, Remember

| When it's used           | What happens                |
|-------------------------|----------------------------|
| During page loading     | ✅ Adds content normally    |
| After page has loaded   | ❌ Wipes page and replaces it |
