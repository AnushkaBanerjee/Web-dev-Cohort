# Introduction to Web Development

## Model OSI (7 layers)

* Application layer 
* Presentation layer      
* Session layer     
* Transport layer - TCP/UDP
* Network layer - Routing ip addressing
* Data Link layer - frames
* Physical layer -  Bits 0 or 1

## TCP (Transmission Control Protocol)
### Characteristics
* Reliable
* Ordered 
* 3-way handshake

            Client -------------------> Server
            | | | |                     ||||
        (Data Packets)                 


Now this data can be lost on the way ,rearranged etc i.e the integrity of the data might be compromised. 

This data integrity is handled and maintained by TCP.

### Process of TCP
#### TCP 3-Way Handshake

```
Client                        Server
    | ----------- SYN ----------> |
    | <-------- SYN-ACK --------- |
    | ----------- ACK ----------> |
    |------ Connection Established ------|
```

## HTTP 

HTTP works on the application layer and relies on TCP in the Transport layer.

```
HTTP VERSION
1 -> 1.1 -> 2 -> 3
```
####  Problems with HTTP 1
* Everytime data needed to be transferred 3 way sync needed to be performed

#### HTTP 1.1 solved this problem where TCP handshake when done once data can be transferred without needing to perform the handshake again.

#### HTTP 2 used newer concepts of multiplexing
#### HTTP 3 uses a new concept called QUIC which uses UDP underneath

* Now there is a loss of time in TCP but instead we get reability(This results in latency)
* This is why we cannot use TCP in live stream or video calls thus we use UDP(loss of data packets is permitted but performance increases by taking less time)

## Some interesting scenarios

* Cricket match(live) - uses TCP
* Video call - uses UDP
* YouTube Live - latency present thus uses TCP
* Zoom has two scenarios -
    1. Hosts in realtime meeting are connected in UDP
    2. But other muted participants are connected in TCP

ZOOM has it's own custom protocols too.That is why it has proprietary software.The streaming chances according to device size as well.(Proprietary software, also known as closed-source software, is software that is owned by a specific individual or company, and its source code is not publicly available)

## How does the internet actually work ?

* Step 1 : DNS lookup,DNS Resolution

### How does DNS work internally?

```
User Device
    |
    v
Local DNS Resolver (ISP or OS)
    |
    v
Root DNS Server
    |
    v
TLD DNS Server (e.g., .com, .org)
    |
    v
Authoritative DNS Server (for domain)
    |
    v
Returns IP Address to Resolver
    |
    v
User Device connects to Website
```

**Step-by-step DNS Resolution:**
1. User enters a domain (e.g., www.example.com).
2. Local DNS resolver checks its cache. If not found, queries a Root DNS Server.
3. Root DNS Server responds with address of the TLD DNS Server (e.g., for `.com`).
4. Resolver queries the TLD DNS Server.
5. TLD DNS Server responds with the Authoritative DNS Server for the domain.
6. Resolver queries the Authoritative DNS Server.
7. Authoritative DNS Server returns the IP address.
8. Resolver provides the IP to the user's device, which then connects to the website.

## Which protocol does DNS use?
### Ans : DNS uses UDP beacuse the payload is small(chaicode.com) and speed is important.

# Command for DNS resolution

    dig chaicode.com
     <<>> DiG 9.18.30-0ubuntu0.22.04.2-Ubuntu <<>> chaicode.com
    ;; global options: +cmd
    ;; Got answer:
    ;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 53236
    ;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1

    ;; OPT PSEUDOSECTION:
    ; EDNS: version: 0, flags:; udp: 512
    ;; QUESTION SECTION:
    ;chaicode.com.                  IN      A

    ;; ANSWER SECTION:
    chaicode.com.           300     IN      A       76.76.21.21

    ;; Query time: 124 msec
    ;; SERVER: 10.255.255.254#53(10.255.255.254) (UDP)
    ;; WHEN: Mon Jul 28 13:02:54 IST 2025
    ;; MSG SIZE  rcvd: 57

#### Note : DNS resolution takes time, so ,often is cache.








