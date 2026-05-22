# Odd-Parity Triplet Pairing

Tags: #triplet #oddparity #pairing-symmetry #LRTC #odd-frequency

---

## Classification of Cooper Pairs

Cooper pairs are classified by **four symmetries**. The total wavefunction must be **antisymmetric** under exchange:

| Symmetry | Options |
|---|---|
| **Spin** | Singlet (↑↓ − ↓↑) or Triplet (↑↑, ↓↓, ↑↓+↓↑) |
| **Orbital/Momentum (parity)** | Even (s, d-wave) or Odd (p, f-wave) |
| **Frequency** | Even or Odd |
| **Spatial** | Uniform or Modulated (FFLO) |

**Fermionic antisymmetry constraint:**
$$S_{spin} \times S_{orbital} \times S_{frequency} = -1$$

---

## Odd-Parity Triplet: What It Means

**Odd-parity** = the pair wavefunction changes sign under spatial inversion (k → −k):
$$F(-\mathbf{k}) = -F(\mathbf{k})$$

**Triplet** = spin-triplet pairing, described by the **d-vector**:
$$\mathbf{d}(\mathbf{k}) = (d_x, d_y, d_z)$$

The anomalous Green's function:
$$\hat{F} = (i\sigma_y)(\mathbf{d}\cdot\boldsymbol{\sigma}) = \begin{pmatrix} -d_x + id_y & d_z \\ d_z & d_x + id_y \end{pmatrix}$$

---

## Types of Triplet Pairing

### Equal-spin triplet (ESP)
- d_z component → ↑↑ and ↓↓ pairs
- **Long-range in ferromagnets** — not killed by exchange field
- This is the **Long-Range Triplet Component (LRTC)**

### Mixed-spin triplet
- d_x, d_y components → ↑↓ + ↓↑ pairs
- Short-range in strong ferromagnets

---

## Short-Range vs Long-Range Triplet

| Component | Penetration in FM | Origin |
|---|---|---|
| Singlet (s-wave) | Short range ξ_F ~ few nm | Killed by exchange field |
| Short-range triplet (m=0) | Short range | Mixed spin, pair-breaking |
| **Long-range triplet (m=±1)** | **Long range ξ_N ~ hundreds nm** | **Equal spin, not pair-breaking** |

**Key condition for LRTC generation:**
Requires **broken spin-rotation symmetry** at the interface → spin-active interface, spin-orbit coupling, or non-collinear magnetization

---

## Odd-Frequency Pairing (Berezinskii)

Normal (even-frequency): $F(\omega) = F(-\omega)$

**Odd-frequency:** $F(\omega) = -F(-\omega)$

This is allowed if **spatial or spin symmetry** compensates:
- Odd-frequency + spin-singlet + even-parity ✓ (anomalous in SC)
- **Odd-frequency + spin-triplet + even-parity ✓** ← appears in SC-FM proximity!

In SC-FM heterostructures, the **LRTC is odd-frequency triplet** in the Matsubara formalism.

---

## How Triplet Pairing Arises in SC-FM Heterostructures

```
Conventional SC (singlet s-wave)
        |
   Interface (spin-mixing)
        |
   Ferromagnet
        |
   Singlet → Short-range triplet → Long-range triplet (if non-collinear FM)
```

**Mechanisms:**
1. **Spin-orbit coupling** at interface
2. **Non-collinear magnetization** (e.g., spin-valve with misaligned FMs)
3. **Spin-active interfaces** (interfacial spin-orbit scattering)
4. **Inhomogeneous magnetism** (conical, spiral, domain walls)

---

## Topological Connection

Odd-parity triplet (p-wave-like) → **candidate for topological SC**

- p_x + ip_y pairing → **Chern number ≠ 0**
- Supports **Majorana edge modes**
- Effective p-wave can be **induced** in heterostructures even from s-wave SC

---

## Experimental Signatures

| Signature | Measurement |
|---|---|
| Long-range supercurrent in FM | Josephson junction with thick FM |
| Zero-bias conductance peak (ZBCP) | Tunneling spectroscopy / dI/dV |
| Anomalous proximity effect | Resistance vs temperature |
| Spin-polarized Andreev reflection | Point-contact spectroscopy |
| Odd-frequency DOS enhancement | STM, local spectroscopy |

---

## Key Papers to Read
- [ ] Bergeret, Volkov, Efetov — LRTC in SC-FM (Reviews of Modern Physics)
- [ ] Eschrig — Triplet supercurrents (Physics Today)
- [ ] Tanaka, Golubov — odd-frequency pairing review
- [ ] Keizer et al. — long-range supercurrent through CrO₂
- [ ] [[]] ← add your papers here

---

## Connections
- [[NEGF Formalism]] — F matrix encodes triplet components
- [[SC-FM Heterostructures]] — physical system where triplet arises
- [[Topological Superconductivity]] — odd-parity triplet → topological phase
- [[Berezinskii Pairing]] ← create this note
- [[Spin-Active Interfaces]] ← create this note

---

## My Notes / Open Questions
- 
