# Asynchronous and Deferred JavaScript

JavaScript can be loaded asynchronously or deferred to optimize page performance, especially for larger scripts. By default, JavaScript blocks the rendering of the HTML page until it is fully loaded, but using `async` or `defer` can help improve load times.

## 1. `async` Attribute

The `async` attribute loads the script asynchronously, meaning the script will be downloaded and executed as soon as it is available, without blocking the page.

```html
<script src="script.js" async></script>
```

## 2. `defer` Attribute

The `defer` attribute delays the execution of the script until the entire HTML document has been parsed. This is particularly useful for scripts that manipulate the DOM.

```html
<script src="script.js" defer></script>
```

---

## 🌐 The Problem: Why Do We Need `async` or `defer`?

Normally, when the browser sees a JavaScript file like this:

```html
<script src="script.js"></script>
```

It stops building the page, downloads the script, runs it, and only then continues showing the rest of the page.  
This slows down your page, especially if the script is big or the internet is slow.

To fix that, we use:

---

### ⚡ `async`: Asynchronous Loading

- Script is downloaded in the background.
- Executed as soon as it finishes downloading.
- Doesn’t wait for the rest of the HTML.

**Example:**

```html
<head>
    <script src="news.js" async></script>
</head>
<body>
    <h1>Welcome to My Blog</h1>
</body>
```

**How it behaves:**

- The browser starts downloading `news.js`.
- Meanwhile, it continues building the page.
- When `news.js` is ready, it immediately runs, even if HTML isn't fully loaded.

**✅ Good for:** Analytics, Ads, Third-party scripts  
**🚫 Bad for:** Scripts that depend on or modify the DOM (like buttons, forms, etc.)

---

### 🕓 `defer`: Deferred Execution

- Script is also downloaded in the background.
- But it waits to run until the whole HTML is loaded.
- Order of scripts is maintained if there are multiple deferred ones.

**Example:**

```html
<head>
    <script src="dom-script.js" defer></script>
</head>
<body>
    <h1 id="title">Welcome</h1>
</body>
```

**Inside `dom-script.js`:**

```js
document.getElementById("title").innerText = "Hello, Anushka!";
```

**How it behaves:**

- `dom-script.js` is downloaded in the background.
- It waits till the HTML is fully loaded.
- Then it runs, so it can safely access and modify the DOM.

**✅ Good for:** Scripts that interact with HTML  
**🚫 Not useful if you need the script to run immediately.

---

## 💡 Summary

| Attribute | Downloads In Background | Runs Immediately | Waits for HTML | DOM-safe? |
|-----------|:----------------------:|:---------------:|:--------------:|:---------:|
| async     | ✅                     | ✅              | ❌             | ❌        |
| defer     | ✅                     | ❌              | ✅             | ✅        |

