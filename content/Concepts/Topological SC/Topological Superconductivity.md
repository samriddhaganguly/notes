# Topological Superconductivity

Tags: #topoSC #Majorana #topological #bulk-boundary #Chern

---

## What Is It?
A **topological superconductor (TSC)** is a superconductor with a **non-trivial topological invariant** in its bulk, leading to **protected gapless modes** at its boundaries or defects. The most famous of these are **Majorana bound states (MBS)**.

---

## Why "Topological"?

The bulk Hamiltonian can be classified by topological invariants (Chern number, Z₂ index, winding number) that **cannot change** without closing the bulk gap.

**Bulk-Boundary Correspondence:**
> A non-trivial bulk invariant ↔ protected gapless boundary states

Unlike ordinary surface states, topological edge modes are:
- **Robust to disorder** (within the topological gap)
- **Pinned** by topology, not fine-tuned parameters

---

## Symmetry Classification (10-fold Way)

TSCs are classified by **Time Reversal (T), Particle-Hole (C), Chiral (S)** symmetries:

| Class | T | C | S | d=1 | d=2 | d=3 |
|---|---|---|---|---|---|---|
| **D** | 0 | +1 | 0 | Z₂ | Z | 0 |
| **DIII** | -1 | +1 | 1 | Z₂ | 0 | Z |
| **A** | 0 | 0 | 0 | 0 | Z | 0 |

- **Class D** (no TRS): p+ip SC in 2D → Chern number
- **Class DIII** (TRS): ³He-B, topological insulator/SC interface

---

## Majorana Bound States

**Majorana fermion:** Particle = its own antiparticle
$$\gamma = \gamma^\dagger$$

In a TSC, **Majorana bound states** appear at:
- Ends of 1D chains
- Vortex cores in 2D TSC
- Domain walls between topological/trivial regions

**Key property:** MBS come in **pairs** and are **non-local**, quantum information stored non-locally → robust to local decoherence → **topological qubit**

---

## Kitaev Chain (1D Model)

The simplest TSC model:
$$H = -\mu\sum_i c_i^\dagger c_i - t\sum_i(c_i^\dagger c_{i+1} + h.c.) + \Delta\sum_i(c_i c_{i+1} + h.c.)$$

**Topological phase:** $|\mu| < 2t$
**Trivial phase:** $|\mu| > 2t$

At the ends: **Majorana zero modes** γ₁ and γ₂
These can be combined into one Dirac fermion: $f = (\gamma_1 + i\gamma_2)/2$

---

## p_x + ip_y Superconductor (2D)

- Odd-parity triplet pairing
- **Chern number N = 1**
- Chiral Majorana edge mode
- Vortex cores host non-Abelian anyons

**Real material candidate:** Sr₂RuO₄ (debated), He-3 A phase

---

## Heterostructure Routes to TSC

### Route 1: Semiconductor nanowire
```
SC (s-wave) | Nanowire (InAs, InSb)
+ B-field + spin-orbit coupling
→ Effective p-wave + Majorana at ends
```
**Condition:** $E_Z > \sqrt{\Delta^2 + \mu^2}$ (Zeeman energy exceeds SC gap)

### Route 2: Topological Insulator / SC
```
TI surface + SC proximity
→ Effective spinless p+ip SC (Fu-Kane model)
→ Majorana in vortex cores
```

### Route 3: SC-FM heterostructure (your focus!)
```
SC + FM (exchange field) + spin-orbit coupling
→ Topological SC phase
→ Majorana at interface/edges
```

---

## Topological Invariants

**1D (Class D) : Z₂ invariant:**
$$\mathcal{M} = \text{sign}\left[\text{Pf}(H(0)) \cdot \text{Pf}(H(\pi))\right] = \pm 1$$

**2D (Class A) : Chern number:**
$$N = \frac{1}{2\pi}\int_{BZ} \Omega(\mathbf{k})\ d^2k$$

**From NEGF:** Topological invariant extractable from poles of G^R at zero frequency

---

## Experimental Signatures

| Signature | Measurement | Caveat |
|---|---|---|
| **ZBCP** (zero-bias conductance peak) | Tunneling dI/dV | Also trivial Andreev states |
| **2e²/h quantized conductance** | Point contact | Requires fine-tuning |
| **Oscillating splitting** | ZBCP vs B-field | Finite-size coupling of MBS |
| **Non-Abelian braiding** | Interferometry | Not yet demonstrated |
| **4π-periodic Josephson effect** | AC Josephson | Poisoning competes |

**⚠️ Critical note:** ZBCP alone is **not sufficient** evidence for Majorana. Many trivial mechanisms produce ZBCP (disorder, smooth potential). Field must reproduce full spectral evolution.

---

## Odd-Parity Triplet Connection

- Triplet p-wave → odd-parity → **natural TSC**
- In SC-FM heterostructures: induced triplet + geometry → effective TSC
- The **NEGF** framework naturally captures both pairing and topology through the anomalous Green's function F

---

## Key Papers to Read
- [ ] Kitaev (2001) : Unpaired Majorana fermions in quantum wires
- [ ] Fu & Kane (2008) : TI/SC → Majorana in vortices
- [ ] Lutchyn et al. / Oreg et al. (2010) : Nanowire proposals
- [ ] Mourik et al. (2012) : First nanowire ZBCP experiment
- [ ] Nadj-Perge et al. (2014) : Atomic chain Majorana
- [ ] Frolov et al. : Critical review of Majorana evidence
- [ ] [[]] ← More soon

---

## Connections
- [[Chapter 1 - The Green's Function Formalism]] : transport signatures, G^R poles
- [[Odd-Parity Triplet Pairing]] : prerequisite for odd-parity TSC
- [[SC-FM Heterostructures]] : heterostructure route to TSC
- [[Majorana Bound States]] ←  For TQC
- [[Bulk-Boundary Correspondence]] ← Soon
- [[Kitaev Chain]] ← Soon

---

## My Notes / Open Questions
- 
