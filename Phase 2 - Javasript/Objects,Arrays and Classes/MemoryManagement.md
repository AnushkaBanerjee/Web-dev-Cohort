# Playing with memory

This code demonstrates the difference between primitive values and objects in JavaScript when assigning variables.

Primitives (e.g., strings, numbers)

```
let fname = 'Anu'
let fname2 = fname
```

fname2 gets a copy of the value in fname.
Changing fname2 (fname2 = 'Ankit') does not affect fname.
Output:
console.log(fname2); // Ankit
console.log(fname); // Anu
Key point: Primitives are copied by value.

Objects
```
let p2 = person
p2.name = 'Ankit'
console.log(person.name); // Ankit
```
p2 gets a reference to the same object as person.
Changing p2.name also changes person.name, because both point to the same object in memory.
Key point: Objects are copied by reference.

Gotcha
If you want to copy an object without affecting the original, use methods like Object.assign() or the spread operator:
```
let p2 = { ...person }
```

Summary:

Primitives (string, number, boolean, etc.) are copied by value.
Objects (arrays, functions, objects) are copied by reference.
This affects how changes to variables impact the original data.

## Memory Leak and Memory management
A memory leak occurs when a program allocates memory (e.g., for objects, arrays) but fails to release it when it's no longer needed. Over time, this can cause the program to use more and more memory, potentially slowing down or crashing.

In JavaScript (like in your Objects.js file):
JavaScript uses automatic garbage collection. If an object is no longer referenced, its memory is reclaimed. However, if you keep references to objects you don't need, they can't be garbage collected—this causes a memory leak.

Example based on your code:
```
let person = { name: 'John' }
let p2 = person
p2.name = 'Ankit'
console.log(person.name) // Ankit
```
Here, both person and p2 reference the same object. If you keep adding references to objects and never remove them, those objects stay in memory.

## Memory Leak Scenario
Suppose you have a global array storing objects:
```
let cache = []
function addPerson(name) {
    cache.push({ name })
}
```

If you keep adding objects to cache and never remove them, all those objects stay in memory—even if you don't need them anymore.

### Key Points
Reference is passed: As in your code, if you keep references (like p2 and person), the object stays in memory.
Memory leak: Happens if you unintentionally keep references to unused objects.
#### Gotcha
Be careful with global variables, event listeners, or closures that keep references to objects you no longer need.

Example Fix
Remove references when done:
```
cache = null // allows garbage collection
```
Summary:
A memory leak in JavaScript happens when objects are kept alive by references you no longer need. In your file, if you keep references like person and p2 around unnecessarily, their memory won't be freed. Always clean up references to avoid leaks.





# Windows Shutdown in Indian Airlines – Technical Analysis

## 1. Overview of the Incident

On July 19, 2024, multiple Indian airlines experienced widespread IT system failures, leading to shutdowns of Windows-based systems across airports. This resulted in:

- **Flight delays and cancellations** (IndiGo canceled ~280 flights)
- **Manual operations** at check‑in and boarding
- **Airport display and check-in system outages**

The primary cause was traced to a faulty update from CrowdStrike’s Falcon Sensor, a kernel-level endpoint security software used on Windows.

---

## 2. Root Cause

- **Source of failure:** Malformed content configuration update to CrowdStrike Falcon Sensor
- **Affected layer:** Windows Kernel Mode
- **Immediate effect:** Systems encountered Blue Screen of Death (BSOD) and boot loops
- **Technical trigger:** Invalid memory access in kernel driver

**Not a memory leak:**

- Memory leaks cause gradual resource exhaustion.
- This incident caused immediate crashes, consistent with invalid pointer or out-of-bounds memory access.

---

## 3. Memory-Level Explanation

### 3.1 Types of Memory Errors Related

The scenario resembles use-after-free or invalid pointer dereference:

- **Use-After-Free:**  
    Pointer accesses memory after it has been freed.  
    Can lead to undefined behavior or system crash.

- **Invalid Pointer Dereference:**  
    Pointer points to a null or unallocated memory address.  
    Any access in kernel mode triggers BSOD.

- **Out-of-Bounds Access (OOB):**  
    Pointer arithmetic moves beyond valid memory bounds.  
    Windows kernel halts the system to prevent corruption.

The CrowdStrike incident aligns with OOB/invalid memory access, as reported officially.

### 3.2 Kernel-Level Behavior

- Falcon Sensor loads during system boot.
- Faulty update triggers pointer access to an invalid kernel memory region.
- Windows Kernel detects violation → triggers STOP error (BSOD).
- System enters boot loop until driver is removed or update is rolled back.

**Key Point:**  
Kernel memory violations are fatal because the OS cannot recover without risking data corruption.

---

## 4. Timeline of the Incident

| Time (IST)           | Event                                               |
|----------------------|-----------------------------------------------------|
| July 19, 2024 AM     | Faulty update pushed to Falcon Sensor               |
| Minutes after update | Windows systems crash (BSOD)                        |
| Immediate aftermath  | Check-in, FIDS, and booking systems fail; airlines switch to manual ops |
| ~78 minutes later    | CrowdStrike issues rollback/fix                     |
| By July 20 morning   | Systems gradually restored                          |

---

## 5. Impact on Indian Airlines

- **Airlines Affected:** IndiGo, Akasa, SpiceJet, Vistara, partial impact on Air India & AI Express
- **Airports Impacted:** Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kochi, Trivandrum

**Operational Disruption:**

- Manual boarding passes issued
- Flight delays and cancellations
- Digital displays and check-in kiosks offline

---

## 6. Lessons Learned

- Centralized Security Updates are a single point of failure in aviation IT.
- Kernel-mode drivers need extra safeguards in update pipelines.
- Rollback and offline recovery plans must be ready for mission-critical infrastructure.

---

## 7. Visual Representation of the Memory Issue

```
[Allocated Kernel Memory] ---> 0xA1B2C3D4  (Valid pointer)

Faulty Update Loads...
↓

Pointer Arithmetic / Access

[Invalid Pointer]
     |
     └──> Points to 0xDEADBEEF (Freed or non-existent memory)

Windows Kernel:
    -> Detects invalid memory access
    -> Trigger BSOD to prevent corruption
```

---

## 8. Summary

- **Cause:** Faulty CrowdStrike Falcon Sensor update
- **Effect:** BSOD and boot loops on Windows systems
- **Type of Bug:** Invalid memory access (Out-of-Bounds / Use-After-Free-like)
- **Not a Memory Leak:** Crash occurred instantly, not due to gradual resource exhaustion
- **Outcome:** Manual airline operations, delayed flights, global IT outage