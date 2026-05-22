# Quasiclassical Green's Functions: Eilenberger and Usadel Formalism

Tags: #quasiclassical #Eilenberger #Usadel #Gor'kov #spin-susceptibility #triplet-correlations #LRTC #odd-frequency

---

## Why Quasiclassical?

The full Gor'kov Green's function varies on two scales:
- **Fast scale:** ~k_F⁻¹ (atomic, Fermi wavelength)
- **Slow scale:** ξ₀ = ℏv_F/2πk_BT_c (coherence length, much larger)

**Quasiclassical approximation:** integrate out the fast oscillations, keep only the slow envelope. This is valid when:
$$k_F\xi_0 \gg 1 \quad \text{(always satisfied in metals)}$$

Result: equations ~1000× simpler than full Gor'kov, yet capture all mesoscopic SC physics including **proximity effect, triplet correlations, spin susceptibility**.

---

## Gor'kov Green's Functions (Starting Point)

The full matrix Green's function in Nambu-spin space (8×8 in Matsubara formalism):

$$\hat{G}(\mathbf{r},\mathbf{r}',\omega_n) = -\langle T_\tau \Psi(\mathbf{r},\tau)\Psi^\dagger(\mathbf{r}',0)\rangle$$

where $\omega_n = \pi k_BT(2n+1)$ are **Matsubara frequencies**.

In matrix form:
$$\hat{G} = \begin{pmatrix} G_{\alpha\beta} & F_{\alpha\beta} \\ \tilde{F}_{\alpha\beta} & \tilde{G}_{\alpha\beta} \end{pmatrix}$$

- $G$ = normal Green's function (propagation)
- $F$ = anomalous (Gor'kov) Green's function (**pairing amplitude**)

**Gor'kov equations:**
$$(i\omega_n - \hat{H}_0 - \hat{\Sigma})\hat{G} = 1 + \hat{\Delta}\tilde{\hat{G}}$$
$$(-i\omega_n + \hat{H}_0^* - \hat{\Sigma}^*)\tilde{\hat{G}} = 1 + \hat{\Delta}^*\hat{G}$$

---

## The Quasiclassical Green's Function ǧ

Define the **quasiclassical (Eilenberger) Green's function** by integrating over the fast momentum:

$$\check{g}(\hat{\mathbf{k}}, \mathbf{r}, \omega_n) = \frac{i}{\pi}\int d\xi_k\ \hat{\tau}_3\hat{G}(\mathbf{k},\mathbf{r},\omega_n)$$

where $\xi_k = \epsilon_k - \mu$ and $\hat{\mathbf{k}}$ is the Fermi surface direction unit vector.

The result is a **4×4 matrix** in Nambu-spin space:
$$\check{g} = \begin{pmatrix} g_{\alpha\beta} & f_{\alpha\beta} \\ \tilde{f}_{\alpha\beta} & \tilde{g}_{\alpha\beta} \end{pmatrix}$$

**Normalization condition** (fundamental constraint):
$$\check{g}^2 = -\pi^2\check{1}$$

This replaces the full Gor'kov equation; all solutions must satisfy this.

---

## Eilenberger Equation (Clean Systems)

For **clean (ballistic)** SC systems:

$$i\hbar v_F\hat{\mathbf{k}}\cdot\nabla\check{g} + \left[\epsilon_n\hat{\tau}_3 + i\hat{\Delta} - \hat{\Sigma}, \check{g}\right] = 0$$

where:
- $\epsilon_n = i\omega_n + \mathbf{h}\cdot\hat{\boldsymbol{\sigma}}\hat{\tau}_3$ (Matsubara energy + exchange field)
- $\hat{\Delta} = \begin{pmatrix} 0 & \Delta_{\alpha\beta} \\ -\Delta^*_{\alpha\beta} & 0 \end{pmatrix}$ (gap matrix in Nambu)
- $[A,B] = AB - BA$ (commutator)
- $v_F$ = Fermi velocity, $\hat{\mathbf{k}}$ = Fermi surface direction

**Self-consistency:**
$$\Delta_{\alpha\beta}(\mathbf{r}) = \lambda\pi k_BT\sum_{\omega_n > 0} f_{\alpha\beta}(\mathbf{r},\omega_n)$$

---

## Usadel Equation (Diffusive Systems)

For **dirty (diffusive)** systems where elastic mean free path $\ell \ll \xi_0$:

The Eilenberger equation simplifies dramatically. The quasiclassical function becomes **isotropic** in $\hat{\mathbf{k}}$:
$$\check{g}(\hat{\mathbf{k}},\mathbf{r},\omega_n) \approx \check{g}(\mathbf{r},\omega_n) + \check{\mathbf{g}}(\mathbf{r},\omega_n)\cdot\hat{\mathbf{k}} + \ldots$$

The **Usadel equation** (angle-averaged):

$$D\nabla\left(\check{g}\nabla\check{g}\right) + \left[i\omega_n\hat{\tau}_3 + i\hat{\Delta} + i\mathbf{h}\cdot\hat{\boldsymbol{\sigma}}\hat{\tau}_3 - \hat{\Sigma}_{so}, \check{g}\right] = 0$$

where $D = v_F\ell/3$ is the **diffusion constant** and $\hat{\Sigma}_{so}$ is the spin-orbit self-energy.

**This is a matrix diffusion equation**, much simpler than Eilenberger.

---

## Parametrization of the Quasiclassical Function

### Riccati Parametrization (most useful for numerics)

For **singlet + short-range triplet** (most common in diffusive SC-FM):
$$\check{g} = \frac{1}{1+ab}\begin{pmatrix} 1-ab & 2a \\ -2b & -(1-ab) \end{pmatrix}$$

where $a(\mathbf{r},\omega_n)$ and $b(\mathbf{r},\omega_n)$ are **scalar** Riccati amplitudes satisfying:
$$\hbar v_F\hat{\mathbf{k}}\cdot\nabla a + 2\omega_n a + \Delta + \Delta^* a^2 = 0$$
$$\hbar v_F\hat{\mathbf{k}}\cdot\nabla b - 2\omega_n b - \Delta^* - \Delta b^2 = 0$$

**Advantages:** automatically satisfies $\check{g}^2 = -\pi^2$, numerically stable.

### θ-Parametrization (clean, 1D, singlet)
$$\check{g} = \begin{pmatrix} \cos\theta & i\sin\theta e^{i\chi} \\ i\sin\theta e^{-i\chi} & -\cos\theta \end{pmatrix}$$

where θ(x) is the **pairing angle** (θ=0: normal, θ=π/2: pure SC).

---

## Spin Structure: Singlet + Triplet Decomposition

The anomalous function F in **full spin-Nambu space** decomposes as:

$$\hat{f} = (f_s + \mathbf{f}_t\cdot\hat{\boldsymbol{\sigma}})i\hat{\sigma}_y$$

| Component | Symbol | Spin | Physical Meaning |
|---|---|---|---|
| Singlet | $f_s$ | Scalar | Conventional SC pairing |
| $m=0$ triplet | $f_{t,z}$ | Along h | Short-range, pair-broken by h |
| $m=\pm1$ triplet | $f_{t,x}, f_{t,y}$ | ⊥ to h | **Long-range** in strong FM |

In the **Usadel equation with exchange field** $\mathbf{h} = h\hat{z}$:

**Singlet $f_s$:**
$$D\nabla^2 f_s = 2(\omega_n + ih)f_s + 2\Delta$$
- Decays on length $\xi_F = \sqrt{D/(h+\omega_n)}$ → **short range** in strong FM

**Short-range triplet $f_{t,z}$:**
$$D\nabla^2 f_{t,z} = 2(\omega_n + ih)f_{t,z}$$
- Same decay as singlet, also short-range

**Long-range triplet $f_{t,\perp} = f_{t,x} \pm if_{t,y}$:**
$$D\nabla^2 f_{t,\perp} = 2\omega_n f_{t,\perp}$$
- **No $ih$ term!** Decays on $\xi_N = \sqrt{D/\omega_n}$ → **long-range** (same as normal metal)

---

## Long-Range Triplet Correlations (LRTC): Generation Mechanisms

The LRTC ($f_{t,\perp}$) is **not sourced** by a uniform exchange field alone. It requires:

### 1. Non-collinear Ferromagnets (Spin-Valve)
Two FM layers with misaligned magnetizations $\mathbf{h}_1 \not\parallel \mathbf{h}_2$:
- At each FM interface: mixing of singlet and $m=0$ triplet
- At the second interface (misaligned): mixing produces $m=\pm1$ triplet
- **Maximized for 90° misalignment**

### 2. Spin-Active Interfaces
Interface with spin-dependent scattering phases $\phi_\uparrow \neq \phi_\downarrow$:
$$t_{\uparrow\uparrow} = |t|e^{i\phi_\uparrow}, \quad t_{\downarrow\downarrow} = |t|e^{i\phi_\downarrow}$$
- **Spin-mixing angle** $\vartheta = (\phi_\uparrow - \phi_\downarrow)/2$
- Non-zero $\vartheta$ → converts singlet → LRTC at the interface

Boundary condition for Usadel at spin-active interface:
$$2\xi_N\check{g}\partial_n\check{g} = \frac{G_T}{G_N}[\check{g}_S, \check{g}_N] + \frac{G_{T,\phi}}{G_N}[\hat{M}\check{g}_S\hat{M}^\dagger, \check{g}_N]$$

where $\hat{M} = \exp(i\vartheta\hat{\boldsymbol{\sigma}}\cdot\hat{\mathbf{m}})$ is the spin-mixing matrix.

### 3. Spin-Orbit Coupling
Intrinsic or interfacial SOC mixes spin channels:
- Generates $f_{t,\perp}$ from $f_s$ locally
- **Dzyaloshinskii-Moriya-like** mechanism in Usadel: $\hat{\Sigma}_{so}$ term

### 4. Magnetic Inhomogeneity
Conical magnets, spiral order, domain walls, i.e., spatially varying $\mathbf{h}(\mathbf{r})$:
- Even in single FM layer, spatial gradients source LRTC

---

## Odd-Frequency Pairing in Usadel Framework

**Matsubara frequency:** $\omega_n > 0$ (sum over positive Matsubara frequencies)

**Odd-frequency condition:** $f(\omega_n) = -f(-\omega_n)$

In the Usadel formalism (imaginary time):
- **Even-frequency singlet:** $f_s(\omega_n) = f_s(|\omega_n|)$; conventional
- **Odd-frequency triplet (LRTC):** $f_{t,\perp}(\omega_n) = -f_{t,\perp}(-\omega_n)$

**Physical consequence:** Odd-frequency pairs have **negative spectral weight** at E=0 → **paramagnetic Meissner effect** (opposite to Londons)! Observable in principle as paramagnetic response.

---

## Spin Susceptibility Studies

### Static Spin Susceptibility χ

The spin susceptibility measures the response of the system to a magnetic field:
$$\chi_{\alpha\beta}(\mathbf{q},\omega) = -\frac{\partial^2 F}{\partial h_\alpha\partial h_\beta}$$

In a superconductor, the **Knight shift** measures the uniform susceptibility:
- **Singlet SC:** χ → 0 as T→0 (spin-singlet pairs don't respond to B)
- **Triplet SC:** χ remains finite (spin-triplet pairs polarized)

From Usadel, the spin susceptibility is:

$$\chi(\mathbf{r}) = \chi_N\frac{1}{2}\pi k_BT\sum_{\omega_n}\text{Re}\left[\tilde{g}(\mathbf{r},\omega_n)\right]$$

where $\chi_N$ is the normal-state susceptibility.

**In SC-FM proximity systems:**
- χ is **spatially inhomogeneous**
- Enhanced near interface due to odd-frequency triplet
- Provides fingerprint of triplet correlations

### Spin Susceptibility and Odd-Frequency Pairing

A remarkable connection:
$$\chi(\mathbf{r}) \propto \sum_{\omega_n} \text{Re}[f_s] + \text{(triplet corrections)}$$

The **odd-frequency triplet enhances** local susceptibility:
$$\delta\chi_{OTE} > 0 \quad \text{(paramagnetic correction)}$$

This is opposite to the singlet contribution (diamagnetic), direct experimental handle.

---

## Triplet Correlation Functions: Detailed Analysis

### Triplet Amplitude vs Position

For SC|FM bilayer (Usadel):
$$f_s(x) = f_s^{(0)}e^{-x/\xi_F}\cos(x/\xi_F)$$
$$f_{t,z}(x) = f_{t,z}^{(0)}e^{-x/\xi_F}\sin(x/\xi_F)$$
$$f_{t,\perp}(x) = f_{t,\perp}^{(0)}e^{-x/\xi_N} \quad\text{(only if LRTC source present)}$$

### Frequency Dependence

Plot $|f(\omega_n)|$ vs $\omega_n$:
- Even-frequency: peaks at $\omega_1 = \pi k_BT$ (lowest Matsubara), decays for larger $n$
- **Odd-frequency:** $f(\omega_1) \approx 0$, grows then decays, has a **maximum at intermediate ωₙ**

### Spatial Profile of LRTC

In a FM of thickness $d_{FM}$:
$$f_{t,\perp}(x) \propto \sinh\left(\frac{d_{FM}-x}{\xi_N}\right)/\sinh\left(\frac{d_{FM}}{\xi_N}\right)$$

Penetrates deeply for $d_{FM} \ll \xi_N$ (normal-metal regime of FM).

---

## Josephson Current via Usadel

For a SC/FM/SC junction, the Josephson current:
$$I(\phi) = 2ek_BT\sum_{\omega_n > 0}\text{Im}\left[f_s^R f_s^{A*}e^{i\phi}\right]$$

- **0-junction:** $I_c > 0$ → minimum energy at φ=0
- **π-junction:** $I_c < 0$ → minimum energy at φ=π
- Transition when $d_{FM} \sim \xi_F$: $I_c$ passes through zero

**With LRTC:**
$$I_{LRTC}(\phi) \propto \text{Im}\left[f_{t,\perp}^R f_{t,\perp}^{A*}\right]\sin\phi$$
LRTC contributes a **long-range positive Josephson current** which survives for $d_{FM} \gg \xi_F$.

---

## Boundary Conditions

### SC/N interface (transparent):
$$\check{g}_S = \check{g}_N \quad \text{(continuity)}$$

### SC/Insulator/N (tunnel junction, Kupriyanov-Lukichev):
$$\xi_N\check{g}_N\partial_n\check{g}_N = \frac{G_T}{G_N}\left[\check{g}_S, \check{g}_N\right]$$

where $G_T/G_N$ = tunneling conductance ratio (small = tunneling limit).

### Spin-active interface (Eschrig-Kopu-Schöpohl-Schön):
Full matrix boundary condition incorporating spin-mixing angle $\vartheta$ and interface polarization P.

### Outer boundary (vacuum or insulator):
$$\hat{\mathbf{n}}\cdot\nabla\check{g} = 0$$

---

## Comparison: Usadel vs Eilenberger vs NEGF

| Property | Usadel | Eilenberger | NEGF |
|---|---|---|---|
| Regime | Diffusive ($\ell \ll \xi$) | Ballistic/Clean | Any (disorder via Σ) |
| Equations | Diffusion (2nd order PDE) | Transport (1st order PDE) | Matrix inversion |
| Dimensionality | Handles 3D naturally | 1D/2D feasible | Best for 1D/quasi-1D |
| Spin structure | 4×4 matrix | 4×4 matrix | 4×4 Nambu |
| Triplet | Natural decomposition | Natural | Via anomalous G |
| Topology | Not directly | Winding number | Topological H method |
| Self-consistency | Built-in | Built-in | Extra loop needed |
| Computational cost | Low | Medium | High |

Use **Usadel** for diffusive trilayer/spin-valve physics → LRTC, spin susceptibility. Use **NEGF** for transport, sharp interfaces, topological signatures.

---

## Key Experimental Connections

| Usadel Observable | Experiment |
|---|---|
| $|f_s(x)|^2$ = DOS suppression | STM, tunneling |
| $I_c(d_{FM})$ oscillations | SQUID, junction measurements |
| LRTC: long-range $I_c$ | Josephson with thick FM |
| $\chi(\mathbf{r})$ enhancement | NMR Knight shift, μSR |
| Triplet spin valve effect | R(T) of SC/FM₁/FM₂ |
| Paramagnetic Meissner | Susceptometry of bilayer |

---

## Key Papers to Read
- [ ] Eilenberger, Z. Phys. 1968 : original quasiclassical equation
- [ ] Usadel, PRL 1970 : dirty limit equation
- [ ] Bergeret, Volkov, Efetov : Odd triplet (Rev. Mod. Phys. 2005)
- [ ] Eschrig et al. : Spin-active interfaces and LRTC (PRL 2003, JLTP 2009)
- [ ] Cottet, Huertas-Hernando, Belzig, Nazarov : triplet in diffusive systems
- [ ] Tanaka, Golubov : odd-frequency pairing (PRL 2007)
- [ ] Linder & Robinson : Superconducting spintronics (Nature Physics 2015)
- [ ] Heikkilä, Teixeira da Silva : spin susceptibility in SC hybrids
- [ ] Champel & Eschrig : Eilenberger for non-collinear FM
- [ ] [[]] ← More

---

## Connections
- [[BdG Formalism]] : Usadel is the dirty limit of BdG/Gor'kov
- [[Odd-Parity Triplet Pairing]] : $f_t$ decomposition gives triplet content
- [[SC-FM Heterostructures]] :  primary application domain
- [[Chapter 1 - The Green's Function Formalism]] : complementary: Usadel for bulk, NEGF for transport
- [[Topological Superconductivity]] : Eilenberger can access winding numbers
- [[Majorana Bound States]] : Usadel approach to topological signatures


---

## My Notes / Open Questions
-
