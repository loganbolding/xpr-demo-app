---
itemId: reqs-app-transmit-packet
itemType: Requirement
Requirement type: Functional
---

# Transmit packet

## Overview

The app shall package each sensor reading into a packet ready for transmission.

## Acceptance criteria

1. Each packet shall contain the processed reading for the raw sensor value.
2. Each packet shall contain the glucose trend compared with the previous reading.
3. The trend shall be empty when there is no previous reading.
4. Each packet shall be stamped with the time it was built.
