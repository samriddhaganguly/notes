# K-Theory Classification of Topological Insulators and Topological Superconductors

Tags: #K-theory #topological #classification #10-fold-way #symmetry #topo-ins #topoSC

---

## Why Classification?

Two gapped Hamiltonians are **topologically equivalent** if one can be continuously deformed into the other **without closing the gap**. K-theory provides the mathematical language to:
- Count how many **distinct topological phases** exist for a given symmetry class and dimension
- Assign **topological invariants** (integers or Z₂ labels) that cannot change without a phase transition
- Predict **protected boundary states** via the bulk-boundary correspondence

---

## The Three Fundamental Symmetries

All symmetry classes are built from three discrete symmetries acting on the Bloch/BdG Hamiltonian H(**k**):

### Time-Reversal Symmetry (TRS) — T
$$\mathcal{T} H(\mathbf{k}) \mathcal{T}^{-1} = H(-\mathbf{k}), \qquad \mathcal{T} = U_T \mathcal{K}$$
- $\mathcal{T}^2 = +1$: integer spin (bosons, spinless fermions)
- $\mathcal{T}^2 = -1$: half-integer spin (electrons, spin-1/2)
- Absent: T = 0

### Particle-Hole Symmetry (PHS) — C
$$\mathcal{C} H(\mathbf{k}) \mathcal{C}^{-1} = -H(-\mathbf{k}), \qquad \mathcal{C} = U_C \mathcal{K}$$
- **Intrinsic to BdG Hamiltonians** (always present in mean-field SC)
- $\mathcal{C}^2 = +1$ or $\mathcal{C}^2 = -1$
- Absent: C = 0

### Chiral (Sublattice) Symmetry — S
$$\mathcal{S} H(\mathbf{k}) \mathcal{S}^{-1} = -H(\mathbf{k}), \qquad \mathcal{S} = \mathcal{T}\mathcal{C}$$
- S = 1 if both T and C present, or if imposed independently
- S = 0 otherwise

---

## The 10-Fold Way (Altland-Zirnbauer Classification)

| Class | T | C | S | d=0 | d=1 | d=2 | d=3 |
|---|---|---|---|---|---|---|---|
| **A** | 0 | 0 | 0 | Z | 0 | Z | 0 |
| **AIII** | 0 | 0 | 1 | 0 | Z | 0 | Z |
| **AI** | +1 | 0 | 0 | Z | 0 | 0 | 0 |
| **BDI** | +1 | +1 | 1 | Z₂ | **Z** | 0 | 0 |
| **D** | 0 | +1 | 0 | Z₂ | **Z₂** | **Z** | 0 |
| **DIII** | -1 | +1 | 1 | 0 | Z₂ | **Z₂** | **Z** |
| **AII** | -1 | 0 | 0 | Z₂ | 0 | **Z₂** | **Z** |
| **CII** | -1 | -1 | 1 | 0 | 2Z | 0 | Z₂ |
| **C** | 0 | -1 | 0 | 0 | 0 | 2Z | 0 |
| **CI** | +1 | -1 | 1 | 0 | 0 | 0 | 2Z |

**Bold** = physically important for TSC and TI systems

---

## Key Physical Systems and Their Classes

### Quantum Hall Effect (Integer) — Class A, d=2
- No TRS, no PHS: purely Chern insulator
- Invariant: **Chern number N ∈ Z**
$$N = \frac{1}{2\pi}\int_{BZ} \Omega(\mathbf{k})\ d^2k$$
- Edge states: N chiral edge modes

### Quantum Spin Hall / 2D TI — Class AII, d=2
- TRS with $\mathcal{T}^2 = -1$, no PHS
- Invariant: **Z₂ index ν ∈ {0,1}**
- Kramers degeneracy protects edge states
- Materials: HgTe/CdTe, InAs/GaSb, Bi₂Se₃ thin films

### 3D Topological Insulator — Class AII, d=3
- Invariant: **Z₂ index (ν₀; ν₁ν₂ν₃)** — four indices, ν₀ is "strong"
- Surface: **Dirac cone** — single helical Dirac fermion
- Materials: Bi₂Se₃, Bi₂Te₃, Sb₂Te₃

### 1D Topological SC (Kitaev chain) — Class D, d=1
- PHS with $\mathcal{C}^2 = +1$, no TRS
- Invariant: **Z₂ (Majorana number)**
$$\mathcal{M} = \text{sign}\left[\text{Pf}(iH(0))\cdot\text{Pf}(iH(\pi))\right] \in \{+1,-1\}$$
- End states: **Majorana zero modes**
- Realization: SC nanowire + Zeeman field + SOC

### 2D Topological SC — Class D, d=2
- Invariant: **Chern number N ∈ Z**
- Vortex cores: Majorana zero modes
- Edge: chiral Majorana mode
- Candidates: p+ip SC, TI/SC heterostructure

### 3D Topological SC — Class DIII, d=3
- TRS with $\mathcal{T}^2 = -1$ + PHS
- Invariant: **Z (winding number)**
- Surface: **Majorana cone** (helical)
- Candidates: ³He-B, Cu_xBi₂Se₃

### 1D BDI Class (Chiral + TRS + PHS)
- Invariant: **Z (winding number)**
$$w = \frac{1}{2\pi i}\int_0^{2\pi} dk\ \partial_k \ln\det[q(k)]$$
- Counts number of Majorana modes at each end
- Realization: atomic chains on SC surface (Shiba chains)

---

## The Periodic Table of Topological Phases

The classification is **periodic in dimension** (Bott periodicity):

**Complex classes** (A, AIII): period 2 in d
**Real classes** (AI through CI): period 8 in d

This periodicity is the mathematical content of **K-theory** (complex K-theory for complex classes, real KO-theory for real classes).

---

## Z₂ Invariant — Detailed Construction

For TRS-invariant systems ($\mathcal{T}^2 = -1$), the Z₂ invariant can be computed as:

### Method 1: Pfaffian (Kramers-invariant momenta)
At time-reversal invariant momenta (TRIM) $\Gamma_i$:
$$(-1)^\nu = \prod_i \frac{\text{Pf}[w(\Gamma_i)]}{\sqrt{\det[w(\Gamma_i)]}}$$
where $w_{mn}(\mathbf{k}) = \langle u_m(-\mathbf{k})|\mathcal{T}|u_n(\mathbf{k})\rangle$

### Method 2: Parity eigenvalues (inversion-symmetric)
$$(-1)^\nu = \prod_i \prod_{n=1}^{N/2} \xi_{2n}(\Gamma_i)$$
where $\xi_{2n}$ are parity eigenvalues of occupied Kramers pairs. **Much simpler computationally.**

### Method 3: Wilson loop / hybrid Wannier centers
Tracks **Wannier center flow** across the BZ — numerically robust.

---

## Chern Number — Detailed Construction

$$N = \frac{1}{2\pi}\int_{BZ} \mathbf{\Omega}(\mathbf{k})\cdot d\mathbf{S}$$

**Berry curvature:**
$$\Omega_n(\mathbf{k}) = -2\text{Im}\sum_{m\neq n} \frac{\langle n|\partial_{k_x}H|m\rangle\langle m|\partial_{k_y}H|n\rangle}{(E_m - E_n)^2}$$

**Lattice formula (Fukui-Hatsugai-Suzuki):**
$$N = \frac{1}{2\pi}\sum_{\text{plaquettes}} \text{Im}\ln\left[U_x(\mathbf{k})U_y(\mathbf{k}+\hat{x})U_x^*(\mathbf{k}+\hat{y})U_y^*(\mathbf{k})\right]$$
where $U_\mu(\mathbf{k}) = \langle u(\mathbf{k})|u(\mathbf{k}+\hat{\mu})\rangle / |\cdots|$

---

## K-Theory: The Mathematical Framework

### What K-Theory Does
K-theory classifies **vector bundles** over the BZ torus T^d. Occupied bands form a vector bundle; topological invariants are elements of K-groups:

- **Complex K-theory K(T^d):** for class A, AIII
- **Real K-theory KO(T^d):** for the 8 real classes

### Key K-Groups (no disorder)
| d | K(T^d) | KO(T^d) |
|---|---|---|
| 1 | Z | Z₂ |
| 2 | Z² | Z₂ ⊕ Z |
| 3 | Z³ | Z |

### Twisted K-Theory and Disorder
With disorder (Wigner-Dyson symmetry classes), use:
- **Kasparov KK-theory** for disordered systems
- **Spectral localizer** — local topological marker, works with NEGF

---

## Bulk-Boundary Correspondence

For a d-dimensional system with topological invariant ν:
- **(d−1)-dimensional boundary** hosts **ν gapless modes**
- Modes are **topologically protected** — cannot be removed by boundary perturbations that preserve symmetry
- **Anomaly cancellation:** boundary theory is anomalous alone; bulk provides the missing anomaly

**In SC context:**
- 1D TSC (ν=1) → 1 MBS per end
- 2D TSC (N=1) → 1 chiral Majorana edge mode
- 3D TSC → Majorana surface cone

---

## Topological Invariants from Green's Functions

A powerful approach relevant to NEGF: topological invariants from the **single-particle Green's function G(ω,k)**:

**Chern-Simons invariant (3D):**
$$N_3 = \frac{\epsilon^{\mu\nu\rho}}{24\pi^2}\int d\omega d^2k\ \text{Tr}\left[G\partial_\mu G^{-1} G\partial_\nu G^{-1} G\partial_\rho G^{-1}\right]$$

This works even for **interacting systems** and can be evaluated within NEGF!

**Topological Hamiltonian:**
$$H_\text{topo}(\mathbf{k}) = -G^{-1}(\omega=0, \mathbf{k})$$
Same topological class as the non-interacting Hamiltonian → use H_topo to compute invariants.

---

## Stability and Interaction Effects

- **Non-interacting:** K-theory classification is exact
- **With interactions:** some Z classifications reduce to Z_n (e.g., 1D class BDI: Z → Z₈ with interactions)
- **With disorder:** bulk gap must remain open; classification holds for Anderson localization length > system size
- **Symmetry breaking perturbations:** reduce the symmetry class → may gap out protected modes

---

## Connection to SC-FM Heterostructures

In SC-FM heterostructures, the effective BdG Hamiltonian typically falls in:
- **Class D** (if TRS broken by FM exchange field, no SOC)
- **Class DIII** (if effective TRS preserved, e.g., non-collinear FM)
- **Class BDI** (with additional chiral symmetry, e.g., 1D atomic chains)

The **exchange field** tunes the topological transition: trivial (|J| < Δ) ↔ topological (|J| > Δ) at the critical point where the gap closes.

---

## Key Papers to Read
- [ ] Altland & Zirnbauer, PRB 1997 — original 10-fold classification
- [ ] Kitaev, AIP Conf. Proc. 2009 — K-theory periodic table
- [ ] Schnyder et al., PRB 2008 — classification of TI and TSC
- [ ] Ryu et al., NJP 2010 — detailed K-theory treatment
- [ ] Fu & Kane, PRB 2007 — Z₂ invariants with inversion
- [ ] Volovik, *The Universe in a Helium Droplet* — Green's function approach
- [ ] Wang & Zhang, PRB 2012 — topological invariants from G(ω,k)
- [ ] [[]] ← add your papers here

---

## Connections
- [[Topological Superconductivity]] — physical realization
- [[BdG Formalism]] — Hamiltonian that gets classified
- [[Majorana Bound States]] — protected boundary states
- [[NEGF Formalism]] — Green's function invariants
- [[SC-FM Heterostructures]] — physical system, class D/DIII
- [[Odd-Parity Triplet Pairing]] — odd-parity → non-trivial class

---

## My Notes / Open Questions
-
