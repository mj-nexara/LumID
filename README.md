# 🕊️ LumID — Verifiable Constitution Engine

_LumID is the formal successor to NexID Vault, designed to sign, verify, and anchor foundational governance manifests. It operates as part of the Nexara ethical framework curated by MJ Ahmad._

---

## 🌐 Overview

LumID is a decentralized signature engine that enables individuals, organizations, and DAOs to issue and verify digital constitutions and agreements using DIDKit.

It adheres to the ethical principles defined in [`mjahmad`](https://mj-nexara.github.io/mjahmad) and extends the Nexara Protocol vision as a production-grade tool for dignified digital governance.

---

## 🔐 Key Features

- ✅ Ed25519 JWK generation using DIDKit
- ✅ VerifiableCredential signing of JSON-LD documents
- ✅ DID-based authentication and verification
- ✅ CLI-ready scripts for signature and validation
- ✅ Designed for sovereign, ethical use cases
- ✅ IPFS compatibility (optional)

---

## 📦 Folder Structure

```
LumID/
├── keys/           🔐 Guardian JWK key
├── manifest/       📜 Original document (JSON-LD)
├── signed/         ✅ Signed output and verification reports
├── scripts/        🧠 Signature and verification logic
├── lumid-config.json  ⚙️ Metadata
├── lumid.ps1       🖥️ One-click runner
└── README.md       📘 Project documentation
```

---

## 🧭 Usage

### 1. Key Generation
```
didkit key generate ed25519 > keys/guardian-001.jwk
```

### 2. Extract DID & Verification Method
```
didkit key-to-did key --key-path keys/guardian-001.jwk
didkit key-to-verification-method key --key-path keys/guardian-001.jwk
```

### 3. Customize Manifest
Place a valid JSON-LD document at `manifest/manifest.json` using your DID.

### 4. Sign Manifest
```
node scripts/sign-manifest.js
```

### 5. Verify Signature
```
node scripts/verify-manifest.js
```

---

## 💾 Output

| File | Description |
|------|-------------|
| `signed/manifest.signed.json` | Signed credential |
| `signed/verify.report.json` | Verification result |

---

## 🛡️ Guardian Identity

```
Curated by: MJ Ahmad
DID: did:key:z6MkgWS6mju6DzmtQna69G2rw13s3r3KQopreNViupVLoGg5
Protocol: Nexara (https://mj-nexara.github.io/nexara-protocol)
Ethical Heart: https://mj-nexara.github.io/mjahmad
```

---

## 🏛️ Legacy & Replacement

LumID replaces **NexID Vault** and inherits its purpose:

> “To empower people to sign foundational documents with dignity, decentralization, and permanence.”

It will be listed under:

- [`nexara-protocol/docs/products`](https://mj-nexara.github.io/nexara-protocol/docs/products)
- [`mjahmad/docs/projects`](https://mj-nexara.github.io/mjahmad/docs/projects)

---

## 🌱 Next Steps

- Set up GitHub repo and push
- Add IPFS anchoring (via Web3.Storage)
- Enable CLA system for contributors
- Prepare Airtable dashboard for signature history
- Optional: Ethereum anchoring via smart contract

---

## 🧾 License

MIT License — use freely, but ethically.  
Preserve the Accord of Trust.  
Honor the Constitution.

---

> “LumID is not just software.  
> It is a ritual of dignity.”  
> — MJ Ahmad
