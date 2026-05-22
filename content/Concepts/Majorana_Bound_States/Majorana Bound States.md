# Majorana Bound States

Tags: #Majorana #MBS #MZM #zero-mode #non-Abelian #topological #ZBCP

---

## What Is a Majorana Fermion?

A **Majorana fermion** is a particle that is its own antiparticle:
$$\gamma = \gamma^\dagger$$

This is impossible for electrons (charge prevents it), but in **superconductors**, the particle-hole symmetry of BdG quasiparticles makes it possible for a zero-energy quasiparticle to be Majorana:
$$\gamma^\dagger = \gamma \implies E = 0 \text{ (exactly)}$$

**Majorana bound states (MBS)** or **Majorana zero modes (MZM)** are zero-energy excitations pinned at topological defects: ends of 1D chains, vortex cores in 2D TSC, domain walls.

---

## From BdG to Majorana

A generic BdG eigenstate at energy E:
$$\mathcal{H}_{BdG}\begin{pmatrix}u \\ v\end{pmatrix} = E\begin{pmatrix}u \\ v\end{pmatrix}$$

Particle-hole symmetry implies: if $(u,v)^T$ is an eigenstate at $+E$, then $\mathcal{C}(u,v)^T = (v^*,u^*)^T$ is an eigenstate at $-E$.

**At E = 0:** the two are the same state:
$$\begin{pmatrix}u_0 \\ v_0\end{pmatrix} = \begin{pmatrix}v_0^* \\ u_0^*\end{pmatrix} \implies u_0 = v_0^*$$

This is the **Majorana condition** — particle and hole components are complex conjugates.

---

## Majorana Operators

Any regular fermion can be decomposed into **two Majorana operators**:
$$c = \frac{1}{2}(\gamma_1 + i\gamma_2), \qquad c^\dagger = \frac{1}{2}(\gamma_1 - i\gamma_2)$$

where $\gamma_1 = c + c^\dagger$, $\gamma_2 = -i(c - c^\dagger)$, satisfying:
$$\{\gamma_i, \gamma_j\} = 2\delta_{ij}, \qquad \gamma_i^2 = 1, \qquad \gamma_i^\dagger = \gamma_i$$

In the **Kitaev chain** at the topological fixed point ($\mu=0$, $t=\Delta$):
- $\gamma_{2j-1}$ pairs with $\gamma_{2j+2}$ (neighboring sites)
- $\gamma_1$ (left end) and $\gamma_{2N}$ (right end) are **unpaired**
- These two form a **non-local fermion**: $f = (\gamma_1 + i\gamma_{2N})/2$

**Non-locality:** $\gamma_1$ and $\gamma_{2N}$ are spatially separated — quantum information stored between them is **immune to local perturbations**.

---

## Energy Splitting of MBS

In a **finite system**, the two MBS overlap and hybridize:
$$H_{MBS} = i\epsilon_M\gamma_1\gamma_{2N} = \epsilon_M(2f^\dagger f - 1)$$

The splitting:
$$\epsilon_M \propto e^{-L/\xi}\cos(k_F L)$$

where L = system length, ξ = coherence length, k_F = Fermi wavevector.
- **Oscillates and decays** with system size
- Topological protection requires $L \gg \xi$
- Oscillations visible in experiments as **ZBCP splitting in magnetic field**

---

## Kitaev Chain: MBS in Detail

$$H = -\mu\sum_j c_j^\dagger c_j - t\sum_j(c_j^\dagger c_{j+1}+h.c.) + \Delta\sum_j(c_j c_{j+1}+h.c.)$$

**Phase diagram:**
- **Topological:** $|\mu| < 2t$ → Z₂ invariant = −1, **one MZM per end**
- **Trivial:** $|\mu| > 2t$ → Z₂ invariant = +1, no edge modes

**Topological fixed point** ($\mu=0$, $t=\Delta$):
- MBS wavefunction: exponentially localized at j=1 and j=N
- Exactly zero energy (no overlap at this point)

**Wavefunction profile:**
$$\psi_{MBS}(j) \propto \left(\frac{t+\Delta}{t-\Delta}\right)^{-j/2}e^{\pm ik_F j}$$

---

## Semiconductor Nanowire: Physical Realization

The most-studied platform (Lutchyn/Oreg 2010 proposal):

**Setup:**
```
SC (proximity) + Nanowire (InAs or InSb) + B-field (along wire)
```

**Effective 1D BdG Hamiltonian:**
$$H = \left(\frac{k^2}{2m^*} - \mu\right)\sigma_0 + \alpha k\sigma_y + E_Z\sigma_x - \Delta i\sigma_y\tau_y + \xi_k\tau_z$$

where:
- $\alpha$ = Rashba SOC strength
- $E_Z = g\mu_B B/2$ = Zeeman energy
- $\Delta$ = proximity-induced SC gap

**Topological condition:**
$$E_Z > \sqrt{\Delta^2 + \mu^2}$$

**Phase boundary:** gap closes at $k=0$ when $E_Z^2 = \Delta^2 + \mu^2$

**MBS energy:** vanishes at and beyond the phase boundary.

---

## Atomic Chains on SC (Shiba Chains)

Another platform: magnetic atoms on SC surface (e.g., Fe on Pb):
- Each magnetic atom creates a **Yu-Shiba-Rusinov (YSR) state** at $E_{YSR} = \pm\Delta\sqrt{1-\alpha^2}/(1+\alpha^2)$ where α = JS/W
- Chain of atoms → **YSR band**
- Topological phase: MBS at chain ends
- **Directly imaged by STM** at zero bias

**Class BDI** (chiral + TRS + PHS): integer Z invariant → multiple MBS possible at each end.

---

## Non-Abelian Statistics

MBS obey **non-Abelian anyon** exchange statistics — fundamentally different from bosons and fermions.

**Braiding:** Exchanging two MBS $\gamma_i$ and $\gamma_j$:
$$U_{ij} = \frac{1}{\sqrt{2}}(1 + \gamma_i\gamma_j)$$

These operations **do not commute**:
$$U_{12}U_{23} \neq U_{23}U_{12}$$

**Fusion rules:** Two MBS fuse to give vacuum (0) or a fermion (1):
$$\gamma \times \gamma = 1 + \psi$$

**Topological quantum computing:** Sequences of braidings implement quantum gates — **fault-tolerant** because the result depends only on the topology of the braid, not details of the path.

---

## Experimental Signatures

### 1. Zero-Bias Conductance Peak (ZBCP)
In a tunnel junction (N|barrier|TSC):
$$G(V=0) = \frac{2e^2}{h}$$
The quantized **2e²/h** value is predicted for a perfect NS interface.

**Observation history:**
- Mourik et al. (2012): InSb nanowire — first ZBCP report
- Deng et al. (2016): InAs nanowire — ZBCP at quantized value
- Albrecht et al. (2016): Epitaxial Al/InAs — hard gap + ZBCP

**⚠️ Caution:** ZBCP alone is NOT sufficient — many trivial mechanisms produce ZBCP:
- Disorder/Andreev bound states
- Kondo effect
- Smooth confining potential
- Class D peak (random matrix theory)

### 2. Oscillating ZBCP vs B-field / Gate voltage
MBS energy splitting: $\epsilon_M \propto e^{-L/\xi}\cos(k_F L)$
- Oscillates as function of μ (gate) or B
- Distinguishes Majorana (oscillating) from trivial ABS (non-oscillating in principle)

### 3. 4π-periodic Josephson Effect
In a topological Josephson junction:
$$I(\phi) \propto \sin(\phi/2) \quad \text{(4π-periodic, not 2π)}$$
Due to fermion parity conservation — ground state switches at φ=π.
**Observable as:** missing odd Shapiro steps in AC Josephson effect.

### 4. Tunneling Spectroscopy (STM)
- Local DOS at chain end: sharp peak at E=0 for MBS
- Bulk: full gap
- Spatial profile: exponential decay from end into bulk

### 5. Non-local Correlations
In a SC island between two normal leads:
- Cross-conductance $dI_L/dV_R$ → non-local signal from MBS
- **Distinguishes** single-site ABS (local) from Majorana (non-local)
- Demonstrated: Puglia et al. 2021, Microsoft group experiments

---

## Distinguishing MBS from Trivial ABS

| Property | True MBS | Trivial ABS |
|---|---|---|
| Energy | Pinned at E=0 over finite parameter range | Moves with parameters |
| Non-locality | Yes (splits into two spatially separated modes) | No (local) |
| Quantized conductance | 2e²/h (ideal) | Sub-quantized, oscillates |
| Josephson effect | 4π-periodic | 2π-periodic |
| Temperature dependence | Stable until T ~ Δ_topo | May gap out earlier |
| Magnetic field evolution | Survives topological phase | Varies |

---

## Topological Gap and Protection

The **topological gap** $\Delta_{topo}$ (minimum bulk gap in the topological phase) sets the energy scale for protection:
- Temperature: $k_BT \ll \Delta_{topo}$
- Perturbation strength: must be $< \Delta_{topo}$

In nanowires, $\Delta_{topo} \lesssim \Delta$ (proximity gap), typically 0.1–0.5 meV → requires T < 100 mK.

---

## MBS in SC-FM Heterostructures (Your Context)

In SC/FM/SC or SC/TI/FM geometries:
- Exchange field J plays role of Zeeman energy
- LRTC + interface SOC + SC gap → effective topological SC
- MBS at edges or vortex cores of the 2D heterostructure

**Key geometry:** 2D SC-FM with broken TRS → Class D → Chern insulator → **chiral Majorana edge modes**

Prediction: chiral Majorana mode at boundary between topological and trivial SC regions.

---

## Fusion and Readout

**Fusion:** Bringing two MBS together and measuring the resulting fermion parity:
- Parity even (vacuum): $f|0\rangle = 0$
- Parity odd (fermion): $f^\dagger|0\rangle = |1\rangle$

**Parity measurement = qubit readout**

Readout methods:
- **Charge sensing:** RF reflectometry on coupled quantum dot
- **Current measurement:** charge transport through the island
- **Interferometry:** Aharonov-Bohm with Majorana loop

---

## Key Papers to Read
- [ ] Kitaev (2001) — Unpaired Majorana fermions in quantum wires
- [ ] Mourik et al., Science 2012 — First nanowire ZBCP
- [ ] Nadj-Perge et al., Science 2014 — Fe chain on Pb, STM imaging
- [ ] Albrecht et al., Nature 2016 — Epitaxial Al/InAs, exponential protection
- [ ] Aguado, La Rivista del Nuovo Cimento 2017 — comprehensive MBS review
- [ ] Frolov, Manfra, Sau — critique of Majorana evidence (2020)
- [ ] Microsoft Station Q — topological qubit roadmap papers
- [ ] Nayak et al., Rev. Mod. Phys. 2008 — non-Abelian anyons review
- [ ] [[]] ← add your papers here

---

## Connections
- [[BdG Formalism]] — MBS are zero-energy BdG eigenstates
- [[Topological Superconductivity]] — MBS are the boundary states
- [[K-Theory Classification of Topo Ins and Topo SC]] — Class D Z₂ → MBS
- [[NEGF Formalism]] — ZBCP computed from NEGF conductance
- [[SC-FM Heterostructures]] — heterostructure platform for MBS
- [[Odd-Parity Triplet Pairing]] — odd-parity gap → topological → MBS
- [[Yu-Shiba-Rusinov States]] ← create this note
- [[Josephson Effect]] ← create this note

---

## My Notes / Open Questions
-
