# Hello World - Phase 0->class 1

Link : https://hitesh.ai/cohort-diagram

## Apps to track progress and time

* Clockify
* Opal
* Wakatime

## HTTP(Hyper Text Transfer Protocol)

* Protocol used to transfer Htext -> Protocols are a set of rules and Htext is Hyper link text(Web Docs)

Extra information : Search about NS2 and NS3 

### Characteristics

* <b>Human Readable</b>,so we can see all the actions in network tab,inspect element and page source.
* <b>Stateless Protocol </b>, because everytime you visit a page,you are a new user and there is no memory of previous request.

<b>Now if http is stateless then how can we bookmark content and start a movie from where we had left on netflix or other VoD platforms?</b>

* There is no way of doing that in http even today,it is stateless.
* But eventually we realised this is not going to work.So states need to be saved for ease of use.

Therefore we introduced <b>Sessions</b>

### Session

It is the stored state between frontend and backend(stored in cookie format,key-value format)

Cookie is basically information.
I need to send more Information from Server to Browser.

#### HTTP Headers

Instructions and meta data exchanged between the browser and server.

Extra information about request and response 

*i)* Client information 
*ii)* Browser information
*iii)* Date and time
*iv)* Cookies to store

### Request-Response Model

                                 
                    GET          
              ------------------->
    |BROWSER|                       |SERVER|
              <-------------------
                    200


* Type Of Request [Get,Post,Delete...]
* Response Code [200,404,500...]

<ol>
<li> What action to perform ? GET ,POST(These are called Verbs)
<li> Where to perform? <br> On the URL : <a>https://chaicode.com</a>
<li>Was it done? 200,404...(Response)
</ol>

NOTE : HTTP 1.0 was never released to the public rather HTTP 1.1 was released at first

### HTTP / 2

* HTTP means HTTP 2(HTTP /1.1 is a fallback and is still used,just images could be transfered also even sometimes this was difficult)
* 75% of the web is using HTTP 2
* Uses compression
* Uses multiplexing (many files at the same time)
* Uses encryprtion(http<b>s</b>). Securing Clear Text to protect it from unwanted access.
        
        -> In AWS, we don't use https for internal communication
* Internal Servers doesn't use encryption because it takes up computing cost and thus this is costly
* HTTPS -> HTTP + TLS(Transport Layer Security)


#### Some known protocols and jargons

* User Agent(Browser)
* TCP (Transmission Control Protocol)
* FTP (File Transfer Protocol)
* IP (Internet Protocol)
* URL (Uniform Resource Locator)
* DNS (Domain Name System Server) -> [Points URL to IP]
* Header (Pass Additional Information)
* Payload (Actual data-email,password)
* Cache(Store frequently accessed data)


## Summary

                    GET          
              ------------------->
        |BROWSER|              |SERVER|
              <-------------------
                    200


* Set up TCP Connection
* Exchange TLS Certificate
* Send Verb + URL + Data + more
* Gets the response back with status code & Data(Img,csv,text)
* TCP connection is closed(stateless)


## Write an article on the above topic.Cover the following also :

1. Ports used for HTTP and HTTPS
2. How many ports are there in our computers?
3. HTTP 1.0 -> HTTP 1.1 -> HTTP 2 evolution
4. How is all this related to Web 3?


-------------------------

# Blog content 

# Breaking Down the World Wide Web: A Beginner's Guide

The internet is everywhere. But how does it actually work? In this article, we’ll break down the basics of the World Wide Web in simple terms. If you’re just starting out in web development or curious about how websites talk to each other, this guide is for you.

---

## What Is the World Wide Web?

The World Wide Web (WWW) is a system of interlinked documents and resources, accessed via the internet. When you open a browser and type in a website, you’re using the web.

**Suggestion:** Add an infographic showing how a browser connects to a website.

---

## Understanding HTTP: The Language of the Web

HTTP stands for HyperText Transfer Protocol. It’s the set of rules that lets your browser and a web server talk to each other.

- **Human-readable:** You can see what’s happening in the network tab of your browser’s developer tools.
- **Stateless:** Each time you visit a page, the server treats you as a new visitor. It doesn’t remember your previous visits.

**Question:** If HTTP is stateless, how do websites remember you?

**Answer:** They use something called **sessions**.

---

## Sessions and Cookies: Remembering You

A **session** is a way to store information about you as you browse. This information is often saved in a **cookie**—a small piece of data stored in your browser.

Cookies help websites remember things like your login status or where you left off in a movie.

**Suggestion:** Add an infographic showing how cookies and sessions work between browser and server.

---

## HTTP Headers: The Extra Details

When your browser talks to a server, it sends extra information called **HTTP headers**. These headers can include:

- What browser you’re using
- The date and time
- Cookies
- Other metadata

Headers help servers understand your request and respond correctly.

---

## The Request-Response Model

Every time you visit a website, this is what happens:

1. Your browser sends a **request** (like GET or POST) to the server.
2. The server processes the request and sends back a **response** (like 200 OK or 404 Not Found).

**Infographic suggestion:** Visualize the request-response cycle with arrows between browser and server.

---

## HTTP Evolution: From 1.0 to 2

- **HTTP 1.0:** The earliest version, never officially released to the public.
- **HTTP 1.1:** The first widely used version. It allowed for persistent connections and better performance.
- **HTTP/2:** The latest major version. It’s faster, supports multiple requests at once (multiplexing), and uses compression.

Today, about 75% of the web uses HTTP/2. If HTTP/2 isn’t available, browsers fall back to HTTP/1.1.

---

## HTTP vs HTTPS: Security Matters

- **HTTP:** Data is sent in plain text. Anyone can read it if they intercept it.
- **HTTPS:** Adds encryption using TLS (Transport Layer Security). Your data is protected from prying eyes.

**Ports:**
- HTTP uses **port 80**.
- HTTPS uses **port 443**.

**Fun fact:** There are 65,535 ports on your computer. Ports help your computer manage multiple connections at once.

**Infographic suggestion:** Show the difference between HTTP and HTTPS with a lock icon and port numbers.

---

## Other Important Protocols and Terms

- **User Agent:** The browser or app making the request.
- **TCP (Transmission Control Protocol):** Ensures data is sent reliably.
- **FTP (File Transfer Protocol):** Used for transferring files.
- **IP (Internet Protocol):** The address system for devices on the internet.
- **URL (Uniform Resource Locator):** The address of a web page.
- **DNS (Domain Name System):** Translates URLs to IP addresses.
- **Header:** Extra information sent with requests.
- **Payload:** The actual data (like form inputs).
- **Cache:** Stores frequently accessed data for faster loading.

---

## How Does This Relate to Web 3?

Web 3 is the next evolution of the web. It focuses on decentralization, blockchain technology, and giving users more control over their data.

While HTTP and HTTPS are still the backbone of communication, Web 3 introduces new protocols and ways to interact with the web. Understanding the basics of HTTP helps you grasp how Web 3 builds on top of the existing web.

**Infographic suggestion:** Compare Web 1.0, Web 2.0, and Web 3.0 in a timeline.

---

## Summary: The Journey of a Web Request

1. Your browser sets up a TCP connection.
2. If using HTTPS, it exchanges TLS certificates for security.
3. It sends a request (with headers and data) to the server.
4. The server responds with a status code and data (like images or text).
5. The connection closes—unless you’re using newer protocols that keep it open for efficiency.

---

## Final Thoughts

The World Wide Web is a complex system, but its core ideas are simple. Understanding how browsers, servers, and protocols work together is the first step to becoming a web developer.

**Tip:** Use tools like Clockify, Opal, or Wakatime to track your learning progress.

---

**Ready to dive deeper?** Explore developer tools in your browser and watch the request-response cycle in action!



# Article Link 
https://web-cohort.hashnode.dev/breaking-down-the-world-wide-web-a-beginners-guide






















