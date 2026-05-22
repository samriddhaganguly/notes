# Bogoliubov-de Gennes (BdG) Formalism

Tags: #BdG #Bogoliubov #Nambu #superconductivity #pairing #mean-field #Hamiltonian

---

## What Is BdG?

The **Bogoliubov-de Gennes formalism** is the mean-field theory of superconductivity in real space (or mixed real/k-space). It rewrites the interacting SC Hamiltonian as a quadratic problem in a **doubled (particle-hole) Hilbert space**, enabling:
- Calculation of quasiparticle spectra in **inhomogeneous** systems
- Treatment of **interfaces, vortices, surfaces, heterostructures**
- Natural framework for **topological SC** (particle-hole symmetry is built-in)
- Direct input Hamiltonian for **NEGF transport**

---

## Starting Point: Reduced BCS Hamiltonian

$$H = \sum_{\mathbf{k}\sigma} \xi_{\mathbf{k}} c^\dagger_{\mathbf{k}\sigma}c_{\mathbf{k}\sigma} + \sum_{\mathbf{k}} \left(\Delta_{\mathbf{k}} c^\dagger_{\mathbf{k}\uparrow}c^\dagger_{-\mathbf{k}\downarrow} + \Delta^*_{\mathbf{k}} c_{-\mathbf{k}\downarrow}c_{\mathbf{k}\uparrow}\right)$$

where $\xi_{\mathbf{k}} = \epsilon_{\mathbf{k}} - \mu$ and $\Delta_{\mathbf{k}}$ is the **gap function** (order parameter).

**Mean-field decoupling:**
$$\Delta_{\mathbf{k}} = -\sum_{\mathbf{k}'} V_{\mathbf{k}\mathbf{k}'}\langle c_{-\mathbf{k}'\downarrow}c_{\mathbf{k}'\uparrow}\rangle$$
This must be solved **self-consistently**.

---

## Nambu Spinor — The Key Step

Introduce the **Nambu (particle-hole) spinor**:

### 2-component (spin-polarized or spinless):
$$\Psi_{\mathbf{k}} = \begin{pmatrix} c_{\mathbf{k}} \\ c^\dagger_{-\mathbf{k}} \end{pmatrix}$$

### 4-component (spin-1/2, most general):
$$\Psi_{\mathbf{k}} = \begin{pmatrix} c_{\mathbf{k}\uparrow} \\ c_{\mathbf{k}\downarrow} \\ c^\dagger_{-\mathbf{k}\downarrow} \\ -c^\dagger_{-\mathbf{k}\uparrow} \end{pmatrix}$$

The Hamiltonian becomes:
$$H = \frac{1}{2}\sum_{\mathbf{k}} \Psi^\dagger_{\mathbf{k}} \mathcal{H}_{BdG}(\mathbf{k}) \Psi_{\mathbf{k}} + \text{const}$$

---

## The BdG Hamiltonian Matrix

In the 4-component Nambu basis, the general BdG Hamiltonian is:

$$\mathcal{H}_{BdG}(\mathbf{k}) = \begin{pmatrix} \hat{h}(\mathbf{k}) & \hat{\Delta}(\mathbf{k}) \\ \hat{\Delta}^\dagger(\mathbf{k}) & -\hat{h}^T(-\mathbf{k}) \end{pmatrix}$$

where:
- $\hat{h}(\mathbf{k})$ = **normal-state Hamiltonian** (2×2 in spin space)
- $\hat{\Delta}(\mathbf{k})$ = **gap matrix** (2×2 in spin space)

### Normal-state Hamiltonian with all physical terms:
$$\hat{h}(\mathbf{k}) = \xi_{\mathbf{k}}\sigma_0 + \mathbf{h}\cdot\boldsymbol{\sigma} + \boldsymbol{\alpha}(\mathbf{k})\cdot\boldsymbol{\sigma}$$

| Term | Physical Meaning |
|---|---|
| $\xi_{\mathbf{k}}\sigma_0$ | Kinetic energy + chemical potential |
| $\mathbf{h}\cdot\boldsymbol{\sigma}$ | Exchange field (FM), Zeeman field |
| $\boldsymbol{\alpha}(\mathbf{k})\cdot\boldsymbol{\sigma}$ | Spin-orbit coupling (Rashba, Dresselhaus) |

---

## Gap Matrix Structure

The **gap matrix** $\hat{\Delta}$ encodes the pairing symmetry. It must satisfy:
$$\hat{\Delta} = -\hat{\Delta}^T \quad \text{(fermionic antisymmetry)}$$

### Singlet pairing:
$$\hat{\Delta}_S = \Delta(i\sigma_y) = \Delta\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$$
- Even in **k**: $\Delta(\mathbf{k}) = \Delta(-\mathbf{k})$
- s-wave: $\Delta(\mathbf{k}) = \Delta_0$ (uniform)
- d-wave: $\Delta(\mathbf{k}) = \Delta_0(\cos k_x - \cos k_y)$

### Triplet pairing:
$$\hat{\Delta}_T = (\mathbf{d}(\mathbf{k})\cdot\boldsymbol{\sigma})(i\sigma_y) = \begin{pmatrix} -d_x + id_y & d_z \\ d_z & d_x + id_y \end{pmatrix}$$
- Odd in **k**: $\mathbf{d}(\mathbf{k}) = -\mathbf{d}(-\mathbf{k})$
- p_x: $\mathbf{d} = \Delta_0 k_x \hat{z}$
- p_x + ip_y: $\mathbf{d} = \Delta_0(k_x + ik_y)\hat{z}$

### Mixed (in heterostructures):
$$\hat{\Delta} = \hat{\Delta}_S + \hat{\Delta}_T$$
Both singlet and triplet present simultaneously due to broken symmetries.

---

## Particle-Hole Symmetry in BdG

BdG **always** has particle-hole symmetry:
$$\mathcal{C}\mathcal{H}_{BdG}(\mathbf{k})\mathcal{C}^{-1} = -\mathcal{H}_{BdG}(-\mathbf{k})$$
$$\mathcal{C} = \begin{pmatrix} 0 & i\sigma_y \\ -i\sigma_y & 0 \end{pmatrix}\mathcal{K} = \tau_y\sigma_y\mathcal{K}$$

**Consequence:** If $E_n(\mathbf{k})$ is an eigenvalue, so is $-E_n(-\mathbf{k})$
- Spectrum is **symmetric about E=0**
- **Zero energy modes** = particle-hole self-conjugate = **Majorana**

---

## Bogoliubov Transformation

The BdG equation is:
$$\mathcal{H}_{BdG}\begin{pmatrix} u_n \\ v_n \end{pmatrix} = E_n\begin{pmatrix} u_n \\ v_n \end{pmatrix}$$

The quasiparticle operators:
$$\gamma_n = \sum_\sigma\left(u_{n\sigma}(\mathbf{r}) c_\sigma(\mathbf{r}) + v_{n\sigma}(\mathbf{r}) c^\dagger_\sigma(\mathbf{r})\right)$$

Normalization: $\sum_\sigma(|u_{n\sigma}|^2 + |v_{n\sigma}|^2) = 1$

**Physical meaning:**
- $|u_{n\sigma}|^2$ = electron-like weight at spin σ
- $|v_{n\sigma}|^2$ = hole-like weight at spin σ
- At a Majorana: $u = v^*$ (particle = antiparticle)

---

## BdG in Real Space (Inhomogeneous Systems)

For interfaces, heterostructures, vortices — go to **real space**:
$$\sum_{j}\mathcal{H}_{BdG}^{ij}\begin{pmatrix} u_{nj} \\ v_{nj} \end{pmatrix} = E_n\begin{pmatrix} u_{ni} \\ v_{ni} \end{pmatrix}$$

Lattice BdG Hamiltonian (tight-binding on cubic lattice):
$$\mathcal{H}_{BdG} = \sum_{\langle ij\rangle\sigma} t_{ij} c^\dagger_{i\sigma}c_{j\sigma} - \mu\sum_{i\sigma} c^\dagger_{i\sigma}c_{i\sigma} + \sum_i\left(\Delta_i c^\dagger_{i\uparrow}c^\dagger_{i\downarrow} + h.c.\right) + \text{SOC + exchange}$$

---

## BdG for SC-FM Heterostructures

For a bilayer SC/FM system:

### SC region:
$$\mathcal{H}_{SC} = \begin{pmatrix} \xi_\mathbf{k}\sigma_0 & \Delta i\sigma_y \\ -\Delta i\sigma_y & -\xi_\mathbf{k}\sigma_0 \end{pmatrix}$$

### FM region:
$$\mathcal{H}_{FM} = \begin{pmatrix} \xi_\mathbf{k}\sigma_0 + J\sigma_z & 0 \\ 0 & -\xi_\mathbf{k}\sigma_0 + J\sigma_z \end{pmatrix}$$

### Full heterostructure (adding SOC at interface):
$$\mathcal{H}_{BdG}(\mathbf{k}) = \begin{pmatrix} \xi_\mathbf{k}\sigma_0 + J(x)\sigma_z + \alpha(x)(\mathbf{k}\times\hat{z})\cdot\boldsymbol{\sigma} & \Delta(x)i\sigma_y \\ -\Delta^*(x)i\sigma_y & -\xi_{-\mathbf{k}}\sigma_0 - J(x)\sigma_z^T + \alpha(x)(\mathbf{k}\times\hat{z})\cdot\boldsymbol{\sigma}^T \end{pmatrix}$$

where J(x), Δ(x) are position-dependent (step functions at interface).

---

## Pauli Matrices in Nambu Space

Convenient to use **tensor product notation**:
- $\tau_i$ = Pauli matrices in **particle-hole** space
- $\sigma_i$ = Pauli matrices in **spin** space

| Operator | Meaning |
|---|---|
| $\tau_z\sigma_0$ | Particle-hole grading |
| $\tau_x\sigma_y$ | Singlet pairing |
| $\tau_y\sigma_y$ | Another pairing channel |
| $\tau_0\sigma_z$ | Spin-z in normal sector |
| $\tau_z\sigma_z$ | Spin-z (full, particle-hole symmetric) |

**Particle-hole symmetry:** $\mathcal{C} = \tau_y\sigma_y\mathcal{K}$, $\mathcal{C}^2 = +1$ → Class D

**Time reversal:** $\mathcal{T} = i\tau_0\sigma_y\mathcal{K}$, $\mathcal{T}^2 = -1$ → electrons

---

## Self-Consistency Equation

The gap must be determined self-consistently:

$$\Delta(\mathbf{r}) = g\sum_{E_n > 0} u_n(\mathbf{r})v_n^*(\mathbf{r})\tanh\left(\frac{E_n}{2k_BT}\right)$$

Or in terms of the anomalous Green's function:
$$\Delta(\mathbf{r}) = -g F(\mathbf{r},\mathbf{r},\tau=0^-)$$

where F is the Gor'kov Green's function. **In practice:** often fixed Δ in SC region (rigid gap approximation) to avoid iterative solution.

---

## Local Density of States (LDOS)

Observable from STM: the LDOS at position r, energy E:
$$N(\mathbf{r}, E) = \sum_n \left[|u_n(\mathbf{r})|^2\delta(E-E_n) + |v_n(\mathbf{r})|^2\delta(E+E_n)\right]$$

From Green's function:
$$N(\mathbf{r},\omega) = -\frac{1}{\pi}\text{Im}\left[G^R_{\uparrow\uparrow}(\mathbf{r},\mathbf{r},\omega) + G^R_{\downarrow\downarrow}(\mathbf{r},\mathbf{r},\omega)\right]$$

**Subgap states:** peaks at |E| < Δ
- Yu-Shiba-Rusinov (YSR) states from magnetic impurities
- Andreev bound states at interfaces
- **Majorana zero modes:** peak pinned at E=0

---

## Andreev Bound States

At a SC/Normal or SC/SC interface, **Andreev bound states (ABS)** form at discrete energies within the gap:
$$E_{ABS} = \pm\Delta\cos(\phi/2) \quad \text{(for short junction)}$$

where φ is the SC phase difference. In a Josephson junction:
- ABS carry the **supercurrent**: $I(\phi) = \frac{e}{\hbar}\sum_n \frac{\partial E_{ABS,n}}{\partial\phi}$
- Topological ABS at φ=π → Majorana

---

## BdG + NEGF: The Combined Framework

BdG gives the **Hamiltonian H**; NEGF gives the **transport**:

1. Construct $\mathcal{H}_{BdG}$ (real-space or k-space)
2. Attach leads via self-energies $\Sigma^R_{L/R}$
3. Compute $G^R = (\omega - \mathcal{H}_{BdG} - \Sigma^R)^{-1}$
4. Extract $G^<, G^>$ via Keldysh relations
5. Compute current/conductance via Meir-Wingreen

**The anomalous block of G^R:**
$$G^R = \begin{pmatrix} G^R_{ee} & G^R_{eh} \\ G^R_{he} & G^R_{hh} \end{pmatrix}$$
- $G^R_{eh}$ = Andreev (electron-hole) propagator → **measures pairing**
- $G^R_{he}$ = conjugate channel

---

## Symmetry Content of the Gap Matrix

Full symmetry classification of $\hat{\Delta}(\mathbf{k},\omega)$:

| Spin | Parity (k) | Frequency (ω) | Class | Example |
|---|---|---|---|---|
| Singlet | Even | Even | ESE | s-wave, d-wave |
| Triplet | Odd | Even | ETO | p-wave (intrinsic) |
| Singlet | Odd | Odd | OSO | proximity induced |
| **Triplet** | **Even** | **Odd** | **OTE** | **SC-FM proximity! LRTC** |

OTE = **Odd-frequency Triplet Even-parity** — the long-range component in SC-FM systems.

---

## Key Papers to Read
- [ ] de Gennes, *Superconductivity of Metals and Alloys* — original BdG
- [ ] Blonder, Tinkham, Klapwijk (BTK) 1982 — Andreev reflection & transport
- [ ] Beenakker — Andreev billiards review
- [ ] Tanaka, Golubov — BdG for unconventional SC interfaces
- [ ] Lutchyn et al. / Oreg et al. 2010 — BdG for Majorana nanowire
- [ ] [[]] ← add your papers here

---

## Connections
- [[NEGF Formalism]] — transport from BdG Hamiltonian
- [[Odd-Parity Triplet Pairing]] — gap matrix structure
- [[SC-FM Heterostructures]] — BdG for bilayer systems
- [[Topological Superconductivity]] — PHS from BdG → topological class
- [[K-Theory Classification of Topo Ins and Topo SC]] — classifies the BdG H
- [[Majorana Bound States]] — zero-energy BdG eigenstates
- [[Quasiclassical Green's Functions]] — limit of BdG for slowly varying systems

---

## My Notes / Open Questions
-
