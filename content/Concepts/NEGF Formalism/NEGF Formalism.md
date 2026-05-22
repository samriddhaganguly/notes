# NEGF Formalism

Tags: #NEGF #transport #Green's-function #Keldysh #method

---

## What Is It?
Non-Equilibrium Green's Function (NEGF) formalism is the standard quantum transport framework for open systems driven out of equilibrium (e.g., by a voltage bias). It extends equilibrium Green's function theory to handle current flow, dissipation, and scattering in nanostructures.

---

## Core Objects

### Retarded Green's Function G^R
$$G^R(\omega) = \left[(\omega + i\eta)I - H - \Sigma^R\right]^{-1}$$
- Encodes the **density of states** and **propagation**
- η → 0⁺ is a positive infinitesimal

### Advanced Green's Function G^A
$$G^A = (G^R)^\dagger$$

### Lesser Green's Function G^<
$$G^< = G^R \Sigma^< G^A$$
- Encodes the **electron occupation** (non-equilibrium distribution)
- Key to computing current

### Greater Green's Function G^>
$$G^> = G^R \Sigma^> G^A$$

---

## Self-Energies Σ

| Self-Energy | Source | Role |
|---|---|---|
| Σ^R_lead | Coupling to leads | Broadening, level shift |
| Σ^< | Lead occupation (Fermi fn) | Drives non-equilibrium |
| Σ_disorder | Impurity scattering | Born approximation |
| Σ_interaction | Many-body (e-e, e-ph) | Advanced treatments |

**Wide-band limit:** Often used to simplify Σ_lead → constant Γ matrix

---

## Keldysh Formalism
The Keldysh contour organizes the four Green's functions:
$$\hat{G} = \begin{pmatrix} G^T & G^< \\ G^> & G^{\tilde{T}} \end{pmatrix}$$

**Keldysh relation (equilibrium):**
$$G^< - G^> = G^R - G^A$$

---

## Application to Superconductors — Nambu-Gor'kov Space

In SC systems, the basis is expanded to **Nambu space**:
$$\Psi_k = (c_{k\uparrow},\ c_{k\downarrow},\ c^\dagger_{-k\downarrow},\ -c^\dagger_{-k\uparrow})^T$$

The Green's function becomes a **4×4 matrix** (spin ⊗ particle-hole):
$$\hat{G} = \begin{pmatrix} G & F \\ \tilde{F} & \tilde{G} \end{pmatrix}$$

- G = normal Green's function
- F = anomalous (Gorkov) Green's function → **encodes pairing**
- F ≠ 0 → superconducting order

---

## Current Formula (Meir-Wingreen)
$$I = \frac{e}{h} \int d\omega\ \text{Tr}\left[\Gamma_L G^> - \Gamma_L^> G^A - G^R \Gamma_L^>\right]$$

Simplified for non-interacting case:
$$I = \frac{2e}{h} \int d\omega\ T(\omega) \left[f_L(\omega) - f_R(\omega)\right]$$

where $T(\omega) = \text{Tr}\left[\Gamma_L G^R \Gamma_R G^A\right]$ is the transmission function.

---

## Andreev Reflection in NEGF
In SC-Normal junctions, Andreev reflection contributes through **off-diagonal** (anomalous) self-energies. The conductance includes:
- **Normal transmission** (electron → electron)
- **Andreev transmission** (electron → hole = Cooper pair in SC)

$$G_{AR} \propto |F(\omega)|^2$$

---

## Advantages of NEGF for My Thesis work
- Handles **disorder** naturally via self-energies
- Works for **finite-voltage** transport (not just linear response)
- Can incorporate **spin-orbit coupling**, **exchange fields**, **triplet pairing** — all in the same matrix framework
- Directly gives **local density of states** (useful for comparing with STM data)

---

## Key Papers to Read
- [ ] Meir & Wingreen, PRL 1992 — foundational current formula
- [ ] Datta, *Electronic Transport in Mesoscopic Systems* — textbook
- [ ] Haug & Jauho, *Quantum Kinetics in Transport* — advanced reference
- [ ] Suominen et al. — NEGF for hybrid SC systems
- [ ] [[]] ← add your specific NEGF+SC papers here

---

## Connections
- [[Bogoliubov-de Gennes Framework]] — BdG gives H; NEGF gives transport from it
- [[Odd-Parity Triplet Pairing]] — F matrix encodes triplet components
- [[SC-FM Heterostructures]] — system where NEGF is applied
- [[Topological Superconductivity]] — topological invariants from G^R poles

---

## My Notes / Open Questions
- 
