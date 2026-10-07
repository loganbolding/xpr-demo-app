---
itemId: reqs-app-packet-integrity
itemType: Requirement
Requirement type: Functional
---

# Packet integrity and authenticity

## Overview

The app shall protect every packet so the receiver can detect tampering and confirm the sending device.

## Acceptance criteria

1. Each packet shall include a checksum of its reading and trend.
2. Each packet shall include a signature of its reading and trend, made with the device key.
3. Changing the reading or trend after the packet is built shall make its checksum and signature no longer match.
