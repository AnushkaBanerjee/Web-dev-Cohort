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





















