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
### Ans : DNS uses UDP beacuse the payload is small(chaicode.com) and speed is important.Port used : 53

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

#### Note : DNS resolution takes time, so ,often is cached

## What are DNS records?
Follow the below link to understand : https://www.cloudflare.com/learning/dns/dns-records/


# What is DNS and Why is it Important?

The Domain Name System (DNS) is a foundational technology that enables the internet to function as we know it. It acts as the "phonebook" of the internet, translating human-friendly domain names (like `www.example.com`) into machine-readable IP addresses that computers use to identify each other on the network.

## How Does DNS Work?

When you enter a website address in your browser, several steps occur behind the scenes:

1. **DNS Lookup Initiation:** Your device checks its local cache for the IP address of the domain. If not found, it queries a local DNS resolver (usually provided by your ISP or operating system).
2. **Root DNS Server:** If the resolver doesn't have the answer, it asks a Root DNS Server, which directs it to the appropriate Top-Level Domain (TLD) DNS Server (such as `.com` or `.org`).
3. **TLD DNS Server:** The resolver then queries the TLD DNS Server, which responds with the address of the domain's Authoritative DNS Server.
4. **Authoritative DNS Server:** This server provides the actual IP address for the requested domain.
5. **Connection Established:** The resolver returns the IP address to your device, which then connects to the website.

### Visual Representation

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

# Article
## Why is DNS Important?

- **User-Friendly Browsing:** DNS allows users to access websites using easy-to-remember names instead of complex IP addresses.
- **Scalability:** It enables the internet to scale by efficiently managing billions of domain names and their corresponding IP addresses.
- **Performance:** DNS caching reduces lookup times, making web browsing faster.
- **Redundancy and Reliability:** The distributed nature of DNS ensures that the system is robust and can handle failures gracefully.

## Which Protocol Does DNS Use?

DNS primarily uses the **UDP protocol** on port 53 because DNS queries are typically small and speed is crucial. However, for larger queries or when reliability is needed, DNS can also use TCP.

## DNS Records

DNS records are instructions stored in authoritative DNS servers that provide information about a domain, such as its IP address, mail server, and other essential data. Learn more about DNS records here: [Cloudflare DNS Records Guide](https://www.cloudflare.com/learning/dns/dns-records/)

## Example: DNS Lookup Command

You can use the `dig` command to perform a DNS lookup:

```
dig example.com
```

This command queries the DNS system and returns information about the domain, including its IP address and other DNS records.

---

**In summary:** DNS is a critical component of the internet, making it possible for users to access websites easily and efficiently. Its speed, reliability, and scalability are essential for the seamless functioning of online services.

## Link for artilce : https://web-cohort.hashnode.dev/how-does-the-internet-work-from-osi-model-to-dns-resolution




