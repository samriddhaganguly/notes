---
tags:
  - condensed-matter
  - superconductivity
  - quasiclassical
  - eilenberger
  - usadel
  - keldysh
  - green-functions
  - transport
  - mesoscopic
cssclasses:
  - academia
  - wide-page
banner: Quasiclassical Green's Function Formalism
---

# Quasiclassical (Eilenberger & Usadel) Green's Function Formalism

> [!abstract]+ **Chapter Abstract**
> This chapter develops the **quasiclassical (Eilenberger) Green's function formalism** for superconductors directly from the Keldysh–Gor'kov equations. We first motivate the hierarchy of length scales that allows one to "integrate out" the rapid Fermi-scale oscillations, retaining only the slow (superconducting coherence-length) variations.
>
> The derivation of the **Eilenberger transport equation** is then given in full detail, including the crucial normalization condition $\check{g}^2 = -\pi^2\check{1}$ and the Andreev reflection boundary conditions at interfaces. Spectral, charge, and heat current expressions are derived from the quasiclassical propagator.
>
> The **dirty (diffusive) limit** is taken systematically: we integrate out the anisotropic part of the quasiclassical GF and derive the **Usadel equation**, discuss its physical content, and obtain the corresponding transport equations for charge current, spin current, and heat current. Throughout, every equation is accompanied by detailed physical commentary.

---

## §1 Physical Motivation: Separation of Length Scales

### 1.1 The Three Relevant Length Scales

A superconductor (or a hybrid normal-metal/superconductor system) is characterized by **three parametrically distinct length scales**:

> [!info]+ **The Three Length Scales**
>
> | Scale | Symbol | Typical Range | Physical Origin |
> |-------|--------|--------------|-----------------|
> | Fermi wavelength | $\lambda_F = 2\pi/k_F$ | $\sim 0.1$–$1\;\mathrm{nm}$ | Inverse Fermi momentum |
> | Coherence length | $\xi_{\rm sc} = v_F/(\pi\Delta)$ | $\sim 10$–$1000\;\mathrm{nm}$ | Pair amplitude variation (clean limit) |
> | Mean free path | $\ell_F = v_F \tau_{\rm sc}$ | $\sim 1$–$10^3\;\mathrm{nm}$ | Elastic disorder scattering |

In conventional superconductors, these are strongly separated:

$$
\boxed{\lambda_F \ll \xi_{\rm sc},\;\ell_F}
\tag{1}
$$

The full Gor'kov Green's function $\check{\hat{G}}(\mathbf{k},\mathbf{r};\omega)$ oscillates on the scale $\lambda_F$ through the rapidly varying factor $e^{i\mathbf{k}\cdot\mathbf{r}}$, but its **envelope**: encoding pairing correlations and the distribution function, varies on the scale $\xi_{\rm sc}$.

The quasiclassical approximation exploits this separation: **integrate out the Fermi-scale oscillations** to obtain an equation for the slowly varying envelope alone.

> [!tip]+ **Physical Picture**
> Imagine watching a rapidly oscillating carrier wave modulated by a slowly varying envelope. The *full* Gor'kov equation resolves every oscillation; the *Eilenberger equation* describes only the envelope. The computational saving is enormous: the Eilenberger GF contains $O(\xi_{\rm sc}/\lambda_F)\sim 10^3$–$10^4$ fewer degrees of freedom.

---

### 1.2 The Wigner Transform and the Gradient Expansion

> [!note]+ **Reference:** [[#References|Wigner (1932)]] · [[#References|Kadanoff & Baym (1962)]] · [[#References|Rammer & Smith (1986)]]

The starting point is the full Keldysh–Nambu Green's function in the **mixed (Wigner) representation**. For a slowly varying system define:

$$
\check{\hat{G}}(\mathbf{k},\mathbf{r};\omega) = \int d(\mathbf{r}_1-\mathbf{r}_2)\,
e^{-i\mathbf{k}\cdot(\mathbf{r}_1-\mathbf{r}_2)}\,
\check{\hat{G}}\!\left(\mathbf{r}_1,\mathbf{r}_2;\omega\right)
\tag{2}
$$

where $\mathbf{r}=(\mathbf{r}_1+\mathbf{r}_2)/2$ is the **centre-of-mass coordinate** and $\mathbf{k}$ is the relative-motion momentum.

The Wigner transform converts convolutions into the **Moyal product**:

$$
(A \star B)(\mathbf{k},\mathbf{r}) = A\,e^{\frac{i}{2}
  (\overleftarrow{\partial}_{\mathbf{r}}\cdot\overrightarrow{\partial}_{\mathbf{k}}
  -\overleftarrow{\partial}_{\mathbf{k}}\cdot\overrightarrow{\partial}_{\mathbf{r}})}
  B
\approx AB + \frac{i}{2}\bigl\{A,B\bigr\}_{\mathrm{PB}} + \cdots
\tag{3}
$$

where

$$
\{A,B\}_{\mathrm{PB}}
= \partial_{\mathbf{r}}A\cdot\partial_{\mathbf{k}}B - \partial_{\mathbf{k}}A\cdot\partial_{\mathbf{r}}B
$$

is the **Poisson bracket**. The gradient expansion retains only the first Poisson bracket correction (terms of order $\lambda_F/\xi_{\rm sc} \ll 1$), discarding higher derivatives.

---

## §2 Starting Point: The Keldysh–Gor'kov Equation

### 2.1 The Full Keldysh–Gor'kov Equation in Wigner Representation

From the previous chapter, the full Keldysh–Nambu Green's function $\check{\hat{G}}(\mathbf{k},\mathbf{r};\omega)$ obeys the **(left) Dyson equation**:

$$
\bigl[\check{\mathcal{G}}_0^{-1} \star \check{\hat{G}}\bigr](\mathbf{k},\mathbf{r};\omega)
= \check{1} + \check{\Sigma}\star\check{\hat{G}}
\tag{4}
$$

and the **(right) equation**:

$$
\bigl[\check{\hat{G}}\star\check{\mathcal{G}}_0^{-1}\bigr](\mathbf{k},\mathbf{r};\omega)
= \check{1} + \check{\hat{G}}\star\check{\Sigma}
\tag{5}
$$

where:

$$
\check{\mathcal{G}}_0^{-1}(\mathbf{k},\mathbf{r};\omega)
=\omega\check{\tau}_0-\xi_{\mathbf{k}}\check{\tau}_3-\check{\Delta}(\mathbf{r})
$$

with $\xi_{\mathbf{k}}=\mathbf{k}^2/2m-\mu$ (in the absence of external fields) and $\check{\Delta}$ is the superconducting order parameter embedded in Keldysh$\otimes$Nambu space. Here $\check{\tau}_i = \mathbf{1}_{\rm K}\otimes\tau_i$ denotes Nambu matrices extended to Keldysh space.

> [!tip]+ **Electromagnetic Fields**
> For a system in an electromagnetic field, the minimal coupling replacement $\mathbf{k} \to \mathbf{k} - e\mathbf{A}(\mathbf{r})$ is made and an electric scalar potential $\phi(\mathbf{r})$ shifts $\omega\to\omega+e\phi(\mathbf{r})$.

---

### 2.2 Subtracting Left from Right: The Quantum Transport Equation

> [!note]+ **Reference:** [[#References|Serene & Rainer (1983)]] · [[#References|Rammer & Smith (1986)]]

Subtracting Eq. $(4)$ from Eq. $(5)$, using the Moyal product expansion $(3)$, and keeping only first gradients:

$$
\bigl[\check{\mathcal{G}}_0^{-1},\,\check{\hat{G}}\bigr]
+ \frac{i}{2}\bigl\{\check{\mathcal{G}}_0^{-1},\check{\hat{G}}\bigr\}_{\mathrm{PB}}
= \bigl[\check{\Sigma},\,\check{\hat{G}}\bigr]
\tag{6}
$$

where $[A,B]=AB-BA$ is the commutator (in Nambu$\otimes$Keldysh space) and $\{A,B\}_{\mathrm{PB}}$ is the Poisson bracket.

The **first commutator** gives the "kinetic" structure:

$$
\bigl[\check{\mathcal{G}}_0^{-1},\check{\hat{G}}\bigr]
= \bigl[\omega\tau_3 - \check{\Delta},\,\check{\hat{G}}\bigr]
\tag{7}
$$

where we moved to a frame where $\xi_{\mathbf{k}}\tau_3$ commutes with $\omega\tau_3$ and the off-diagonal gap structure is the only non-trivial part.

The **Poisson bracket term** involving $\xi_{\mathbf{k}}=\mathbf{k}^2/2m-\mu$ generates the streaming (drift) term:

$$
\frac{i}{2}\bigl\{\xi_{\mathbf{k}}\tau_3,\check{\hat{G}}\bigr\}_{\mathrm{PB}}
= \frac{i}{2}\Bigl(\partial_{\mathbf{k}}\xi_{\mathbf{k}}\cdot\partial_{\mathbf{r}}\check{\hat{G}}
  - \partial_{\mathbf{r}}\xi_{\mathbf{k}}\cdot\partial_{\mathbf{k}}\check{\hat{G}}\Bigr)\tau_3
= \frac{i}{2}\mathbf{v}_{\mathbf{k}}\cdot\nabla_{\mathbf{r}}\,\check{\hat{G}}\cdot\tau_3
\tag{8}
$$

where $\mathbf{v}_{\mathbf{k}}=\partial_{\mathbf{k}}\xi_{\mathbf{k}}=\mathbf{k}/m$ is the **band velocity**, and we used that $\xi_{\mathbf{k}}$ does not depend on $\mathbf{r}$ (for a uniform band structure; the $\mathbf{r}$-dependence enters only through the electromagnetic potentials).

---

## §3 Derivation of the Eilenberger Equation

### 3.1 Step 1: Decomposing the Green's Function near the Fermi Surface

> [!note]+ **Reference:** [[#References|Eilenberger (1968)]] · [[#References|Larkin & Ovchinnikov (1969)]] · [[#References|Serene & Rainer (1983)]]

The full Green's function $\check{\hat{G}}(\mathbf{k},\mathbf{r};\omega)$ varies rapidly with $|\mathbf{k}|$ (on scale $k_F$) but the important physics comes from a thin shell of width $\sim\Delta/v_F\ll k_F$ around the Fermi surface. We write:

$$
\mathbf{k} = p_F\,\hat{k} + \delta k\,\hat{k},
\qquad |\delta k| \ll k_F
\tag{9}
$$

and define the ***energy-integrated (quasiclassical) Green's function*** by:

$$
\boxed{
\check{g}(\hat{k},\mathbf{r};\omega)
= \frac{i}{\pi}\int_{-\infty}^{+\infty}d\xi_{\mathbf{k}}\,
  \check{\hat{G}}(\mathbf{k},\mathbf{r};\omega)\bigg|_{|\mathbf{k}|\approx k_F}
}
\tag{10}
$$

where $\xi_{\mathbf{k}}=v_F(|\mathbf{k}|-k_F)$ is the **linearized dispersion near the Fermi surface** and $\hat{k}=\mathbf{k}/|\mathbf{k}|$ is the Fermi-surface direction. The factor $i/\pi$ is conventional normalization.

> [!tip]+ **Physical Meaning of the $\xi$-Integration**
> The $\xi$-integration **marginalizes over the radial (energy) direction** in momentum space while keeping the angular ($\hat{k}$) direction resolved. It removes the rapid oscillations in $|\mathbf{k}|$ while retaining the slow variations in $\hat{k}$ (Fermi-surface anisotropy) and $\mathbf{r}$ (spatial gradients). The quasiclassical GF $\check{g}(\hat{k},\mathbf{r};\omega)$ therefore depends on the *direction* of propagation on the Fermi surface, it is a function on $S^{d-1}$ rather than all of $\mathbb{R}^d$.

---

### 3.2 Step 2: Performing the $\xi$-Integration on the Transport Equation

We integrate $(i/\pi)\int d\xi_{\mathbf{k}}$ over the full kinetic equation $(6)$. Several terms require care.

**The $\omega$ and $\Delta$ commutator terms:**
The operators $\omega\tau_3$ and $\check{\Delta}(\mathbf{r})$ do not depend on $\xi_{\mathbf{k}}$, so they pass through the integral:

$$
\frac{i}{\pi}\int d\xi_{\mathbf{k}}\,\bigl[\omega\tau_3-\check{\Delta},\check{\hat{G}}\bigr]
= \bigl[\omega\tau_3 - \check{\Delta},\,\check{g}\bigr]
\tag{11}
$$

**The streaming term:**
Since $\mathbf{v}_{\mathbf{k}}\approx v_F\hat{k}$ near the Fermi surface and is $\xi_{\mathbf{k}}$-independent at leading order:

$$
\frac{i}{\pi}\int d\xi_{\mathbf{k}}\,\frac{i}{2}\mathbf{v}_{\mathbf{k}}\cdot\nabla_{\mathbf{r}}\check{\hat{G}}\cdot\tau_3
\;\approx\;
\frac{iv_F}{2}\,\hat{k}\cdot\nabla_{\mathbf{r}}
\frac{i}{\pi}\int d\xi_{\mathbf{k}}\,\check{\hat{G}}\cdot\tau_3
= \frac{iv_F}{2}\,\hat{k}\cdot\nabla_{\mathbf{r}}\,\check{g}\cdot\tau_3
\tag{12}
$$

Using the fact that the Poisson bracket with $\xi_{\mathbf{k}}\tau_3$ acting on $\check{\hat{G}}$ generates $\mathbf{v}_{\mathbf{k}}\cdot\nabla_{\mathbf{r}}\check{\hat{G}}\,\tau_3$ plus a term $\propto \partial_{\mathbf{r}}\xi_{\mathbf{k}}$, and the latter vanishes for a momentum-independent band structure, we get precisely:

$$
\frac{i}{\pi}\int d\xi_{\mathbf{k}}\,
\frac{i}{2}\bigl\{\xi_{\mathbf{k}}\tau_3,\check{\hat{G}}\bigr\}_{\mathrm{PB}}
= iv_F\,\hat{k}\cdot\nabla_{\mathbf{r}}\,\check{g}
\tag{13}
$$

Here we absorbed the $\tau_3$ into the gradient term using the convention that $\nabla\check{g}$ acts on the full matrix.

**The $\xi_{\mathbf{k}}$-dependent remainder:**
The only term that yields a non-trivial $\xi$-integration is the $\xi_{\mathbf{k}}\tau_3$ commutator on the left-hand side:

$$
\frac{i}{\pi}\int d\xi_{\mathbf{k}}\,[\xi_{\mathbf{k}}\tau_3,\check{\hat{G}}]
= \bigl[\xi_{\mathbf{k}}\tau_3,\check{g}\bigr]_{\xi\text{-int}}
\tag{14}
$$

But $[\xi_{\mathbf{k}}\tau_3,\check{\hat{G}}] = \xi_{\mathbf{k}}[\tau_3,\check{\hat{G}}]$ and the $\xi$-integration of $\xi_{\mathbf{k}}\check{\hat{G}}(\xi_{\mathbf{k}})$ gives a contribution that **cancels the right-hand side** $[\check\Sigma,\check{g}]$ at leading order in $1/E_F$.

> [!warning]+ **Key Step: Contour Integration**
> Close the $\xi$-integration contour in the upper half complex plane. The poles of $\hat{G}_0$ at $\xi_{\mathbf{k}}=\pm E_k$ (with imaginary parts determined by the Keldysh prescription) contribute, but upon substituting the matrix structure of $\hat{G}_0$ one finds that the $\xi_{\mathbf{k}}\tau_3\cdot\check{\hat{G}}$ integrand contributes only at **subleading order** $\sim\Delta/E_F$, which is discarded ([[#References|Larkin & Ovchinnikov 1969]] · [[#References|Kopnin 2001]]).

---

### 3.3 Step 3: Collecting Terms: The Eilenberger Equation

Collecting all terms from steps 1 and 2 gives:

> [!success]+ **Eilenberger Transport Equation**
>
> $$\boxed{iv_F\,\hat{k}\cdot\nabla_{\mathbf{r}}\,\check{g} + \bigl[\omega\tau_3 - \check{\Delta} - \check{\sigma},\;\check{g}\bigr] = 0} \tag{15}$$

where:
- $\check{\Delta}$: the Nambu$\otimes$Keldysh gap matrix
- $\check{\sigma}$: the self-energy from disorder and interactions (both in Keldysh–Nambu space)
- $[\cdot,\cdot]$: the matrix commutator

In components (separating the Keldysh sectors), Eq. $(15)$ decomposes as follows. Writing $\check{g}$ in the **Larkin–Ovchinnikov (triangular) form**:

$$
\check{g} =
\begin{pmatrix}g^R & g^K \\ 0 & g^A\end{pmatrix}
\tag{16}
$$

and similarly for $\check{\sigma}$, one obtains **three coupled equations**:

$$
iv_F\hat{k}\cdot\nabla g^R
+ \bigl[\omega\tau_3-\hat{\Delta}-\sigma^R,\;g^R\bigr] = 0
\tag{17a}
$$

$$
iv_F\hat{k}\cdot\nabla g^A
+ \bigl[\omega\tau_3-\hat{\Delta}-\sigma^A,\;g^A\bigr] = 0
\tag{17b}
$$

$$
iv_F\hat{k}\cdot\nabla g^K
+ \bigl[\omega\tau_3-\hat{\Delta}-\sigma^R,\;g^K\bigr]
= \sigma^K g^A - g^R\sigma^K
\tag{17c}
$$

where $g^R = \bigl(\begin{smallmatrix}g^R & f^R \\ \bar{f}^R & \bar{g}^R\end{smallmatrix}\bigr)$ is itself a $2\times2$ Nambu matrix (and similarly for $g^A$, $g^K$).

> [!info]+ **Physical Roles of the Three Equations**
>
> | Equation | Role |
> |----------|------|
> | $(17a)$ : Retarded | Spectral Eilenberger: governs the **quasiparticle spectrum** |
> | $(17b)$ : Advanced | Spectral Eilenberger: governs the **quasiparticle spectrum** |
> | $(17c)$ : Keldysh | **Kinetic equation**: governs the **distribution function** |

> [!tip]+ **Physical Content of the Eilenberger Equation**
> Equation $(15)$ has the structure of a **quantum Boltzmann equation**: the *streaming term* $iv_F\hat{k}\cdot\nabla\check{g}$ describes quasiparticles propagating along straight lines on the Fermi surface (as in semiclassical mechanics), while the *collision integral* $[\omega\tau_3-\check\Delta-\check\sigma,\check{g}]$ encodes scattering, pairing, and dephasing. The non-Abelian matrix structure is the **quantum-mechanical origin of coherent Andreev reflection** and proximity effects, absent in the classical Boltzmann equation.

---

### 3.4 Step 4: The Eilenberger Equation with Electromagnetic Fields

> [!note]+ **Reference:** [[#References|Eilenberger (1968)]] · [[#References|Kopnin (2001)]]

In the presence of a vector potential $\mathbf{A}(\mathbf{r})$ (magnetic field $\mathbf{B}=\nabla\times\mathbf{A}$), the momentum derivative in the gradient acquires a gauge-covariant form. The full covariant derivative is:

$$
\nabla \to \tilde\nabla \equiv \nabla + ie[\mathbf{A}\tau_3,\;\cdot\;]
= \nabla + 2ie\mathbf{A}\tau_3\bigl(\text{acting on }\check{g}\bigr)
\tag{18}
$$

and the energy variable shifts $\omega\to\omega+e\phi$, giving the ***gauge-invariant Eilenberger equation***:

$$
\boxed{
iv_F\hat{k}\cdot\tilde\nabla\,\check{g}
+ \bigl[(\omega+e\phi)\tau_3 - \check\Delta - \check\sigma,\;\check{g}\bigr] = 0
}
\tag{19}
$$

> [!success]+ **Gauge Invariance**
> This form is manifestly **gauge-invariant** under $\mathbf{A}\to\mathbf{A}+\nabla\chi$, $\phi\to\phi-\partial_t\chi$, $\check{g}\to e^{ie\chi\tau_3}\check{g}\,e^{-ie\chi\tau_3}$.

---

## §4 The Normalization Condition

### 4.1 Derivation

> [!note]+ **Reference:** [[#References|Eilenberger (1968)]] · [[#References|Larkin & Ovchinnikov (1969)]] · [[#References|Serene & Rainer (1983)]]

A fundamental property of the quasiclassical GF is the **normalization condition**. To derive it, note that the Gor'kov GF satisfies $\hat{G}_0^{-1}\hat{G}_0 = 1$ in operator form. Upon $\xi$-integration one expects $\check{g}^2 = \text{const}$. The constant is found by evaluating $\check{g}$ for a **uniform BCS bulk system** with no gradients ($\nabla=0$):

$$
\check{g}^{\mathrm{bulk}}(\hat{k};\omega)
= \frac{i}{\pi}\int_{-\infty}^{\infty}d\xi
  \begin{pmatrix}
    G_0^R & F_0^R & G_0^K & F_0^K \\
    \bar{F}_0^R & \bar{G}_0^R & \bar{F}_0^K & \bar{G}_0^K \\
    0 & 0 & G_0^A & F_0^A \\
    0 & 0 & \bar{F}_0^A & \bar{G}_0^A
  \end{pmatrix}
\tag{20}
$$

Using the BCS forms $G_0^R(\xi,\omega)=(\omega+i\eta+\xi)/[(\omega+i\eta)^2-E^2]$, and evaluating the $\xi$-integral by residues, one finds:

$$
\frac{i}{\pi}\int_{-\infty}^{\infty}d\xi\,G_0^R
= \frac{i}{\pi}\cdot\frac{\pi\omega^R}{\sqrt{(\Delta^2-(\omega^R)^2)}}
\equiv g^R_{\mathrm{bulk}}
\tag{21}
$$

where $\omega^R=\omega+i\eta$. Computing $(\check{g}^{\mathrm{bulk}})^2$ explicitly shows:

> [!important]+ **Normalization Condition (Exact)**
>
> $$\boxed{\check{g}^2 = -\pi^2\,\check{1}} \tag{22}$$
>
> or in the Larkin–Ovchinnikov decomposition:
>
> $$(g^R)^2 = -\pi^2\,\hat{1} \tag{22a}$$
>
> $$(g^A)^2 = -\pi^2\,\hat{1} \tag{22b}$$
>
> $$g^R g^K + g^K g^A = 0 \tag{22c}$$

This result is **exact** (not just for the bulk BCS case) and follows from the analytic structure of the quasiclassical propagator.

---

### 4.2 Consequences of the Normalization Condition

> [!info]+ **Four Key Consequences**
>
> 1. The normalization $(22)$ is a **constraint**, not an additional equation. It reduces the number of independent components: $g^R$ has 4 complex entries but only 2 are independent once $(g^R)^2+(f^R)(\bar{f}^R)=-\pi^2$, etc. are enforced.
>
> 2. It is **preserved by the Eilenberger equation**: if the initial/boundary condition satisfies $(22)$, the equation of motion keeps it satisfied ([[#References|Kopnin 2001]]).
>
> 3. The normalization gives the **self-consistency check** for numerical solutions: deviations from $\check{g}^2=-\pi^2$ signal accumulation of numerical error.
>
> 4. In the **bulk BCS limit**:
>    $$g^R=-\pi\omega/\sqrt{\Delta^2-\omega^2}, \quad f^R=\pi\Delta/\sqrt{\Delta^2-\omega^2}$$
>    (with $\mathrm{Im}\sqrt{\cdot}<0$ for $|\omega|>\Delta$), which satisfies $(g^R)^2+(f^R)^2=-\pi^2$ trivially.

---

### 4.3 Riccati Parameterization

> [!note]+ **Reference:** [[#References|Schopohl & Maki (1995)]] · [[#References|Schopohl (1998)]]

The normalized quasiclassical GF is often parameterized in terms of the **Riccati amplitude** $\gamma(\hat{k},\mathbf{r};\omega)$ (a $2\times2$ Nambu sub-matrix) via:

$$
g^R = -i\pi\frac{1-\gamma\tilde\gamma}{1+\gamma\tilde\gamma},
\qquad
f^R = -2i\pi\frac{\gamma}{1+\gamma\tilde\gamma}
\tag{23}
$$

where $\tilde\gamma(\hat{k},\mathbf{r};\omega)$ is the amplitude for the **time-reversed trajectory** $-\hat{k}$. This parameterization automatically satisfies the normalization $(22a)$ and is particularly convenient for numerical solutions.

---

## §5 The Self-Energy and Gap Equation in the Quasiclassical Framework

### 5.1 Structure of the Self-Energy

In the quasiclassical framework, the self-energy $\check\sigma(\hat{k},\mathbf{r};\omega)$ has contributions from:

> [!info]+ **Sources of the Quasiclassical Self-Energy**
>
> **1. Elastic impurity scattering (non-magnetic):**
> In the Born approximation for a random potential with correlator $\langle V(\mathbf{r})V(\mathbf{r}')\rangle=n_i|u|^2\delta(\mathbf{r}-\mathbf{r}')$:
>
> $$\check\sigma_{\mathrm{imp}} = \frac{1}{2\tau_{\rm sc}}\langle\check{g}(\hat{k},\mathbf{r};\omega)\rangle_{\hat{k}} \tag{24}$$
>
> where $\tau_{\rm sc}=(2\pi N_0 n_i|u|^2)^{-1}$ is the elastic scattering time and $\langle\cdots\rangle_{\hat{k}}=(4\pi)^{-1}\int d\hat{k}\,(\cdots)$ denotes the **Fermi-surface average**.
>
> **2. Magnetic impurities (pair-breaking):**
>
> $$\check\sigma_{\mathrm{mag}} = \frac{1}{2\tau_{\mathrm{sf}}}\sum_{\alpha=x,y,z}\bigl\langle\tau_\alpha\,\check{g}\,\tau_\alpha\bigr\rangle_{\hat{k}} \tag{25}$$
>
> where $\tau_{\mathrm{sf}}$ is the spin-flip scattering time.
>
> **3. Spin-orbit coupling** (relevant for topological systems): more complex angular structure on the Fermi surface.
>
> **4. Inelastic (electron-phonon) scattering** ([[#References|Eliashberg 1960]]): frequency-dependent self-energy $\propto\int d\omega'\,\alpha^2F(\omega')\,\check{g}(\omega-\omega')$.

---

### 5.2 The Self-Consistency (Gap) Equation

The gap $\Delta(\mathbf{r})$ is determined self-consistently from the **anomalous component** of $\check{g}$. In the quasiclassical framework:

$$
\Delta(\mathbf{r}) = \frac{\pi\lambda}{2N_0}
\int_{-\omega_D}^{+\omega_D}
\frac{d\omega}{2\pi i}
\langle f^K(\hat{k},\mathbf{r};\omega)\rangle_{\hat{k}}
\tag{26}
$$

where $\lambda=N_0 V$ is the dimensionless BCS coupling constant, $\omega_D$ is the Debye cutoff, and $f^K$ is the **anomalous Keldysh component**.

> [!tip]+ **Equilibrium Reduction**
> In equilibrium this reduces to the standard BCS gap equation via:
> $$f^K=-2\pi i f^R\cdot\tanh(\omega/2T)$$
> (fluctuation-dissipation theorem).

---

## §6 Boundary Conditions for the Quasiclassical Green's Function

The Eilenberger equation is a **first-order PDE** in $\mathbf{r}$ along the direction $\hat{k}$. Boundary conditions (BCs) must therefore be supplied on the "incoming" side of every interface or surface.

---

### 6.1 Specular Interface between Two Materials

> [!note]+ **Reference:** [[#References|Zaitsev (1984)]]

At a specular (smooth) interface between two materials (labeled 1 and 2) with a $\delta$-function potential barrier of strength $Z$, the boundary conditions are the ***Zaitsev boundary conditions***:

$$
\check{g}_1^{\mathrm{in}} = \check{g}_1^{\mathrm{in}}[\check{g}_1^{\mathrm{out}},\check{g}_2^{\mathrm{out}}]
\tag{27}
$$

relating the incoming quasiclassical GF on side 1 to the outgoing ones on both sides. For a **perfect (transparent) NS interface**, the BCs reduce to **continuity of $\check{g}$**.

---

### 6.2 Diffuse Interface: Kupriyanov–Lukichev Boundary Conditions

> [!note]+ **Reference:** [[#References|Kupriyanov & Lukichev (1988)]]

For a diffuse (disordered) interface with normal transparency $T_n$, the boundary conditions for the Usadel equation (relevant in the dirty limit) are the ***Kupriyanov–Lukichev boundary conditions***:

$$
\boxed{
\sigma_1\,\check{g}_1\partial_{\hat{n}}\check{g}_1
= \sigma_2\,\check{g}_2\partial_{\hat{n}}\check{g}_2
= \frac{G_T}{2}\bigl[\check{g}_2,\check{g}_1\bigr]
}
\tag{28}
$$

where:
- $\hat{n}$: the interface normal
- $\sigma_{1,2}$: the normal-state conductivities
- $G_T$: the interface conductance per unit area
- In the tunneling limit $T_n\to0$: $G_T = G_N T_n$ with $G_N$ the Sharvin conductance

---

### 6.3 Free Surface

At a specularly reflecting **free surface** (vacuum interface), quasiparticles are reflected with $\hat{k}\to\hat{k}-2(\hat{k}\cdot\hat{n})\hat{n}$ and no mixing of the two spin channels (for non-magnetic surfaces). The BC is simply:

$$
\check{g}(\hat{k}_{\mathrm{in}},\mathbf{r}_s) = \check{g}(\hat{k}_{\mathrm{out}},\mathbf{r}_s)
\tag{29}
$$

where $\mathbf{r}_s$ is a point on the surface ([[#References|Kopnin 2001]]).

---

## §7 Transport Equations from the Quasiclassical Green's Function

### 7.1 Spectral Current (Matrix Current)

> [!note]+ **Reference:** [[#References|Serene & Rainer (1983)]] · [[#References|Rammer & Smith (1986)]]

The fundamental transport quantity in the quasiclassical theory is the ***matrix spectral current***:

$$
\check{j}(\mathbf{r};\omega) = \pi N_0 v_F
\bigl\langle\hat{k}\,\check{g}(\hat{k},\mathbf{r};\omega)\bigr\rangle_{\hat{k}}
\tag{30}
$$

This is a matrix in Keldysh$\otimes$Nambu space. The Eilenberger equation can be recast as a **continuity equation** for $\check{j}$:

$$
\nabla\cdot\check{j}
+ \pi N_0\bigl[\omega\tau_3-\check\Delta-\check\sigma,\;
\langle\check{g}\rangle_{\hat{k}}\bigr] = 0
\tag{31}
$$

In the absence of sources (normal-state spectral divergence), $\nabla\cdot\check{j}=0$, which is the quasiclassical conservation law.

---

### 7.2 Electrical Current

> [!note]+ **Reference:** [[#References|Serene & Rainer (1983)]] · [[#References|Kopnin (2001)]] · [[#References|Rammer & Smith (1986)]]

The electrical (charge) current density is extracted from the $\tau_3$-component of the Keldysh part of the matrix current:

$$
\mathbf{j}_{\mathrm{el}}(\mathbf{r})
= -eN_0 v_F
\int_{-\infty}^{\infty}\frac{d\omega}{4\pi i}
\mathrm{Tr}_N\bigl[\tau_3\,
\bigl\langle\hat{k}\,g^K(\hat{k},\mathbf{r};\omega)\bigr\rangle_{\hat{k}}\bigr]
\tag{32}
$$

where $\mathrm{Tr}_N$ denotes the trace in Nambu space. In equilibrium, using $g^K=(g^R-g^A)\tanh(\omega/2T)$, this gives the **standard BCS supercurrent**:

$$
\mathbf{j}_s(\mathbf{r})
= \pi e N_0 v_F\int_0^{\infty}\frac{d\omega}{2\pi}\tanh\!\left(\frac{\omega}{2T}\right)
\mathrm{Tr}_N\bigl[\tau_3\,
\langle\hat{k}\,\mathrm{Im}(g^R)\rangle_{\hat{k}}\bigr]
\tag{33}
$$

Together with the self-consistency equation $(26)$ and the Maxwell equation $\nabla\times\mathbf{B}=\mu_0\mathbf{j}_s$, this gives the **full electromagnetic response** of the superconductor.

---

### 7.3 Heat Current

> [!note]+ **Reference:** [[#References|Rammer & Smith (1986)]] · [[#References|Kopnin (2001)]]

The thermal (heat) current is obtained by weighting the matrix current with the energy $\omega$:

$$
\mathbf{j}_Q(\mathbf{r})
= N_0 v_F\int_{-\infty}^{\infty}\frac{d\omega}{4\pi i}\,\omega\,
\mathrm{Tr}_N\bigl[\tau_3\,
\bigl\langle\hat{k}\,g^K(\hat{k},\mathbf{r};\omega)\bigr\rangle_{\hat{k}}\bigr]
\tag{34}
$$

> [!tip]+ **Normal-State Limit**
> In the normal state $(\Delta=0)$, this reduces to the **Wiedemann–Franz result**.

---

### 7.4 Density of States

The **local density of states (LDOS)** per spin is:

$$
N(\mathbf{r},\omega) = -\frac{N_0}{2\pi}
\mathrm{Tr}_N\bigl[\tau_3\,
\mathrm{Im}\langle g^R(\hat{k},\mathbf{r};\omega)\rangle_{\hat{k}}\bigr]
= N_0\,\mathrm{Re}\langle g^R\rangle_{\hat{k}}\big|_{(11)}/(-\pi)
\tag{35}
$$

where the $(11)$ subscript denotes the particle (upper-left) component in Nambu space. In the BCS bulk:

$$
N(\omega)/N_0 = |\omega|/\sqrt{\omega^2-\Delta^2}\,\Theta(|\omega|-\Delta)
$$

reproducing the well-known **BCS $V$-shaped gap** ([[#References|de Gennes 1966]] · [[#References|Schrieffer 1964]]).

---
## §8 Fermi-Surface Averaging and the Dirty Limit

### 8.1 Angular Decomposition of the Quasiclassical GF

In the presence of strong impurity scattering ($\ell_F\ll\xi_{\rm sc}$), the quasiclassical GF is rendered nearly isotropic on the Fermi surface by rapid randomization of $\hat{k}$. We decompose:

$$
\check{g}(\hat{k},\mathbf{r};\omega) = \check{g}_s(\mathbf{r};\omega)
+ \hat{k}\cdot\check{g}_p(\mathbf{r};\omega) + O(\hat{k}^2)
\tag{36}
$$

where $\check{g}_s=\langle\check{g}\rangle_{\hat{k}}$ is the **isotropic ($s$-wave) part** and $\check{g}_p$ is the **$p$-wave (dipole) part**. In the dirty limit, the hierarchy is:

$$
|\check{g}_p| \sim (\ell_F/\xi_{\rm sc})\,|\check{g}_s| \ll |\check{g}_s|
\tag{37}
$$

The self-energy from isotropic elastic scattering $(24)$ is $\check\sigma_{\mathrm{imp}}=\check{g}_s/2\tau_{\rm sc}$, and it acts only on the $s$-wave part.

---

### 8.2 Physical Origin of the Diffusive Limit

> [!tip]+ **Why Diffusion?**
> In the **clean limit**, a quasiparticle propagates ballistically along $\hat{k}$ for a distance $\sim\xi_{\rm sc}$ before the pairing potential deflects it.
>
> In the **dirty limit** ($\ell_F\ll\xi_{\rm sc}$), many elastic scattering events occur on the scale $\ell_F$; after each scattering, $\hat{k}$ is randomized. The net motion is therefore **diffusive**: the mean-square displacement after time $t$ is $\langle r^2\rangle = 2Dt$ with diffusion constant $D = v_F^2\tau_{\rm sc}/d$ (in $d$ spatial dimensions, $D=v_F\ell_F/3$ in 3D).
>
> The relevant length scale for pairing correlations becomes the **diffusive coherence length**:
> $$\xi_D = \sqrt{D/\Delta}\ll\xi_{\rm sc}$$
> The Eilenberger equation, when expanded in $\check{g}_p/\check{g}_s\sim\ell_F/\xi_D\ll1$, reduces to a purely isotropic (diffusion-like) equation for $\check{g}_s$: **the Usadel equation**.

---

## §9 Derivation of the Usadel Equation

> [!note]+ **Reference:** [[#References|Usadel (1970)]] · [[#References|Serene & Rainer (1983)]] · [[#References|Kopnin (2001)]]

### 9.1 Step 1: Eilenberger Equation for the $s$- and $p$-Wave Components

Insert the decomposition $(36)$ into the Eilenberger equation $(15)$:

$$
iv_F\hat{k}\cdot\nabla(\check{g}_s + \hat{k}\cdot\check{g}_p)
+ \bigl[\omega\tau_3-\check\Delta-\check\sigma_{\mathrm{imp}},\;
  \check{g}_s+\hat{k}\cdot\check{g}_p\bigr] = 0
\tag{38}
$$

The impurity self-energy acts as $\check\sigma_{\mathrm{imp}}=\check{g}_s/(2\tau_{\rm sc})$, so:

$$
\bigl[\omega\tau_3-\check\Delta-\frac{\check{g}_s}{2\tau_{\rm sc}},\;
\check{g}_s\bigr]
= \bigl[\omega\tau_3-\check\Delta,\;\check{g}_s\bigr]
- \frac{1}{2\tau_{\rm sc}}[\check{g}_s,\check{g}_s] = \bigl[\omega\tau_3-\check\Delta,\;\check{g}_s\bigr]
\tag{39}
$$

since $[\check{g}_s,\check{g}_s]=0$ trivially.

---

### 9.2 Step 2: Separating Angular Harmonics

Equation $(38)$ mixes $\check{g}_s$ and $\check{g}_p$. We isolate each angular harmonic by **Fermi-surface averaging**.

**$s$-wave equation (average over $\hat{k}$):**

$$
iv_F\nabla\cdot\langle\hat{k}\,\check{g}_p\rangle_{\hat{k}}
+ \bigl[\omega\tau_3-\check\Delta,\;\check{g}_s\bigr] = 0
\tag{40}
$$

using $\langle\hat{k}\rangle_{\hat{k}}=0$ and $\langle(\hat{k}\cdot\check{g}_p)\rangle_{\hat{k}} = \frac{1}{d}\nabla\cdot\langle\hat{k}\,\check{g}_p\rangle_{\hat{k}}$ in $d$ dimensions. More precisely in 3D: $\langle\hat{k}_i\hat{k}_j\rangle_{\hat{k}}=\frac{1}{3}\delta_{ij}$, so $iv_F\langle\hat{k}_i(\partial_i\check{g}_s)\rangle_{\hat{k}}=\frac{iv_F}{3}\nabla\check{g}_s$ (for the $s$-wave component of the streaming term). However the streaming term for $\check{g}_s$ itself vanishes: $iv_F\langle\hat{k}\rangle_{\hat{k}}\cdot\nabla\check{g}_s=0$.

**$p$-wave equation (multiply by $\hat{k}$ and average):**

$$
iv_F\langle\hat{k}(\hat{k}\cdot\nabla\check{g}_s)\rangle_{\hat{k}}
+ \bigl[\omega\tau_3-\check\Delta
  -\frac{\check{g}_s}{2\tau_{\rm sc}},\;\check{g}_p\bigr]
- \frac{\check{g}_p}{2\tau_{\rm sc}} = 0
\tag{41}
$$

where the last term comes from $[\check\sigma_{\mathrm{imp}},\hat{k}\cdot\check{g}_p]=[\check{g}_s/(2\tau_{\rm sc}),\hat{k}\cdot\check{g}_p]$ which contains a piece $\sim\check{g}_p/(2\tau_{\rm sc})$ upon using the normalization condition.

---

### 9.3 Step 3: Solving for $\check{g}_p$ in the Dirty Limit

In the dirty limit, the impurity scattering rate $1/\tau_{\rm sc}$ is **much larger than all other energy scales** ($\Delta$, $\omega$, $D/\xi_{\rm sc}^2$). Therefore, in Eq. $(41)$, the commutator $[\omega\tau_3-\check\Delta,\check{g}_p]$ is subleading compared to $\check{g}_p/\tau_{\rm sc}$, and we may solve **algebraically** for $\check{g}_p$:

$$
\frac{iv_F}{3}\nabla\check{g}_s
+ \bigl[\omega\tau_3-\check\Delta,\;\check{g}_p\bigr]_{\approx0}
- \frac{1}{\tau_{\rm sc}}
\check{g}_s\check{g}_p = 0
\tag{42}
$$

where we dropped $[\omega\tau_3-\check\Delta,\check{g}_p]$ compared to $\check{g}_p/(2\tau_{\rm sc})$, and used $[\check{g}_s,\check{g}_p]=-\check{g}_s\check{g}_p+\check{g}_p\check{g}_s$ (which, using the normalization $\check{g}_s^2=-\pi^2$, gives $\check{g}_s\check{g}_p=\check{g}_p\check{g}_s$ only for specific structures; in general the algebra must be kept explicit).

The standard derivation uses the normalization condition $(22)$ to write $\check{g}_s(\check{g}_s\check{g}_p)=-\pi^2\check{g}_p$ and hence:

$$
\boxed{
\check{g}_p = -\frac{v_F\tau_{\rm sc}}{\pi^2}(\check{g}_s\,\nabla\check{g}_s)
}
\tag{43}
$$

up to corrections of order $(\Delta\tau_{\rm sc})$, $(\omega\tau_{\rm sc})\ll1$.

> [!tip]+ **Physical Meaning of $\check{g}_p$**
> The $p$-wave component $\check{g}_p$ plays the role of the **diffusion current**. Equation $(43)$ says that $\check{g}_p$ is proportional to the *gradient* of the isotropic part $\check{g}_s$, exactly as the particle current in **Fick's first law** is proportional to the gradient of the density. The factor $v_F^2\tau_{\rm sc}/3 = D$ (in 3D) is the diffusion constant, and $\check{g}_s$ plays the role of the "density" of quasiclassical propagators.

---

### 9.4 Step 4: Substituting Back: The Usadel Equation

Substituting Eq. $(43)$ into the $s$-wave equation $(40)$:

$$
iv_F\nabla\cdot\bigl(-\frac{v_F\tau_{\rm sc}}{\pi^2}\check{g}_s\nabla\check{g}_s\bigr)
+ \bigl[\omega\tau_3-\check\Delta,\;\check{g}_s\bigr] = 0
\tag{44}
$$

Defining the diffusion constant $D=v_F^2\tau_{\rm sc}/3$ (in 3D) and using the normalization $\check{g}_s^2=-\pi^2$ to simplify the divergence, we arrive at:

> [!success]+ **The Usadel Equation**
>
> $$\boxed{D\,\nabla\!\cdot\!\bigl(\check{g}_s\,\nabla\check{g}_s\bigr) + \bigl[\omega\tau_3 - \check\Delta - \check\sigma_{\mathrm{sf}},\;\check{g}_s\bigr] = 0} \tag{45}$$

where we have also included $\check\sigma_{\mathrm{sf}}$ for **spin-flip (magnetic) scattering**, since it is isotropic and thus not eliminated by the averaging. Henceforth we drop the subscript $s$ and write $\check{g}\equiv\check{g}_s$.

---

### 9.5 Step 5: Covariant Form with Electromagnetic Fields

> [!note]+ **Reference:** [[#References|Usadel (1970)]] · [[#References|Kopnin (2001)]]

In the presence of electromagnetic fields, the gradient acquires a gauge-covariant form:

$$
\boxed{
D\,\tilde\nabla\!\cdot\!\bigl(\check{g}\,\tilde\nabla\check{g}\bigr)
+ \bigl[(\omega+e\phi)\tau_3 - \check\Delta - \check\sigma_{\mathrm{sf}},\;
  \check{g}\bigr] = 0
}
\tag{46}
$$

with $\tilde\nabla=\nabla+ie\mathbf{A}[\tau_3,\cdot]$ as in $(18)$. The Usadel equation $(46)$ is the **fundamental equation of the dirty-limit quasiclassical theory**.

---

## §10 The Usadel Equation: Component Form

### 10.1 Retarded and Advanced Components

> [!note]+ **Reference:** [[#References|Usadel (1970)]] · [[#References|de Gennes (1966)]] · [[#References|Belzig et al. (1999)]]

Writing $\check{g}$ in Larkin–Ovchinnikov form $(16)$, the $R$ component of $(45)$ reads:

$$
D\,\nabla\!\cdot\!\bigl(g^R\,\nabla g^R\bigr)
+ \bigl[\omega\tau_3 - \hat{\Delta} - \sigma^R,\;g^R\bigr] = 0
\tag{47}
$$

and similarly for $g^A$ (with $g^A=[g^R]^\dagger$ in equilibrium).

Writing $g^R$ explicitly in Nambu components:

$$
g^R = \begin{pmatrix} g^R & f^R \\
-f^{R*} & -g^R\end{pmatrix}
\quad\text{(for spin-singlet, $s$-wave)}
\tag{48}
$$

(where we used the particle-hole symmetry $\bar{g}^R=-g^R$, $\bar{f}^R=-f^{R*}$), Eq. $(47)$ gives two coupled scalar equations:

$$
D\bigl(g^R\nabla^2 f^R
       - f^R\nabla^2 g^R\bigr)
+ 2\omega f^R - 2\Delta g^R = 0
\tag{49a}
$$

$$
D\bigl(f^R\nabla^2 f^{R*}
       - f^{R*}\nabla^2 f^R\bigr)
+ 2\omega\bigl((g^R)^2+1\bigr) = 0
\tag{49b}
$$

These are supplemented by the normalization $(g^R)^2 + f^R f^{R*} = -1$ (in units where $\pi=1$, i.e. $g=-i\pi\tilde{g}$ etc.).

---

### 10.2 $\theta$-Parameterization

> [!note]+ **Reference:** [[#References|de Gennes (1966)]] · [[#References|Belzig et al. (1999)]]

A convenient parameterization of the retarded part uses the ***pairing angle*** $\theta(\mathbf{r};\omega)\in\mathbb{C}$:

$$
g^R = -i\pi\cos\theta,\quad
f^R = -i\pi\sin\theta,\quad
f^{R*} = -i\pi\sin\theta^*
\tag{50}
$$

The normalization $(g^R)^2+(f^R)^2=-\pi^2$ is automatically satisfied: $(-i\pi)^2(\cos^2\theta+\sin^2\theta)=-\pi^2$. Substituting into $(47)$:

$$
\boxed{
D\nabla^2\theta
+ 2i\omega\sin\theta - 2i\Delta\cos\theta = 0
}
\tag{51}
$$

> [!warning]+ **Nonlinear PDE**
> This is a **nonlinear** equation in $\theta(\mathbf{r})$ (analogous to the sine-Gordon equation) which must be solved with appropriate BCs.
>
> In the **bulk BCS limit** ($\nabla\theta=0$):
> $$\sin\theta=\Delta/\sqrt{\omega^2-\Delta^2}, \qquad \cos\theta=-\omega/\sqrt{\omega^2-\Delta^2}$$
> (with the correct branch for $\mathrm{Im}\sqrt{\cdot}>0$ when $\omega>0$), which reproduces the standard BCS spectral functions.

---

### 10.3 Keldysh Component and the Distribution Function

> [!note]+ **Reference:** [[#References|Rammer & Smith (1986)]] · [[#References|Kopnin (2001)]] · [[#References|Schmid & Schön (1975)]]

The Keldysh component of Eq. $(45)$ gives:

$$
D\nabla\!\cdot\!\bigl(g^R\nabla g^K + g^K\nabla g^A\bigr)
+ \bigl[\omega\tau_3-\hat{\Delta}-\sigma^R,\;g^K\bigr]
= \sigma^K g^A - g^R\sigma^K
\tag{52}
$$

In the dirty limit, we parameterize:

$$
g^K = g^R\hat{h} - \hat{h}\,g^A
\tag{53}
$$

where $\hat{h}(\mathbf{r};\omega)$ is the ***distribution matrix*** (a $2\times2$ Nambu matrix). Substituting $(53)$ into $(52)$ and using the Eilenberger structure, one obtains an equation for $\hat{h}$:

$$
\nabla\!\cdot\!\bigl[N_0 D(g^R\nabla h-\nabla h\,g^A)\bigr]
+ \bigl[\omega\tau_3-\hat\Delta,\;\hat{h}\bigr] = \hat{S}[\hat{h}]
\tag{54}
$$

where $\hat{S}$ is the collision integral. For energy-independent scattering, decomposing $\hat{h} = h_L\tau_0 + h_T\tau_3$ (longitudinal and transverse distributions), one recovers two coupled kinetic equations for $h_L$ and $h_T$, which describe the **energy and charge imbalance** respectively ([[#References|Schmid & Schön (1975)]] · [[#References|Schmid (1979)]]).

---

## §11 Transport Equations in the Dirty Limit

### 11.1 Charge Current in the Usadel Theory

The electrical current density in the dirty limit is obtained by substituting Eq. $(43)$ into Eq. $(32)$:

$$
\mathbf{j}_{\mathrm{el}}(\mathbf{r})
= \frac{\sigma_N}{4i}\int_{-\infty}^{\infty}d\omega\,
\mathrm{Tr}_N\!\bigl[\tau_3\bigl(g^R\nabla g^K+g^K\nabla g^A\bigr)\bigr]
\tag{55}
$$

where $\sigma_N = 2e^2 N_0 D$ is the **normal-state (Drude) conductivity**. This can be separated into the **supercurrent** (from the spectral part) and the **quasiparticle current** (from the Keldysh part):

$$
\mathbf{j}_{\mathrm{el}} = \mathbf{j}_s + \mathbf{j}_{\mathrm{qp}}
\tag{56}
$$

$$
\mathbf{j}_s = \frac{\pi\sigma_N}{2}
\int_0^{\infty}\frac{d\omega}{2\pi}
\tanh\!\!\left(\frac{\omega}{2T}\right)
\mathrm{Tr}_N\!\bigl[\tau_3\bigl(g^R\nabla g^R-g^A\nabla g^A\bigr)\bigr]
\tag{57a}
$$

$$
\mathbf{j}_{\mathrm{qp}} = \frac{\sigma_N}{4i}\int_{-\infty}^{\infty}d\omega\,
\mathrm{Tr}_N\!\bigl[\tau_3\,(g^R-g^A)\nabla h_L\bigr]
\tag{57b}
$$

In terms of the $\theta$-parameterization:

$$
\mathbf{j}_s = \frac{\pi\sigma_N}{2}
\int_0^{\infty}\frac{d\omega}{2\pi}
\tanh\!\!\left(\frac{\omega}{2T}\right)
\mathrm{Im}\bigl[\sin^2\!\theta\,\nabla\phi\bigr]
\tag{58}
$$

where $\phi(\mathbf{r})$ is the superconducting phase ($\Delta=|\Delta|e^{i\phi}$), and we used $\nabla f^R\sim \sin\theta\,\nabla\phi$.

---

### 11.2 Charge Conservation and Continuity

> [!note]+ **Reference:** [[#References|Schmid & Schön (1975)]]

The continuity equation for charge in the Usadel theory reads:

$$
\partial_t\rho + \nabla\cdot\mathbf{j}_{\mathrm{el}} = 0
\tag{59}
$$

where $\rho$ is the charge density. This is guaranteed by the **Ward identity** associated with $U(1)$ gauge invariance, and is built into the Keldysh structure of the theory.

---

### 11.3 Spin Current

> [!note]+ **Reference:** [[#References|Bergeret, Volkov & Efetov (2005)]] · [[#References|Eschrig (2015)]]

In systems with spin-orbit coupling or ferromagnetic exchange, it is necessary to track the spin degree of freedom. The **spin current tensor** $j_{\mathrm{spin}}^{i\alpha}$ (spatial component $i$, spin component $\alpha$) is:

$$
j_{\mathrm{spin}}^{i\alpha}(\mathbf{r})
= \frac{\sigma_N}{8i}\int_{-\infty}^{\infty}d\omega\,
\mathrm{Tr}_N\!\bigl[\sigma_\alpha\,\bigl(g^R\partial_i g^K
  +g^K\partial_i g^A\bigr)\bigr]
\tag{60}
$$

where $\sigma_\alpha$ acts in spin space (and the Nambu matrices are extended to $4\times4$ as in the previous chapter). In the presence of spin-splitting (exchange field $\mathbf{B}_{\mathrm{ex}}$), the Usadel equation acquires additional commutator terms $[\mathbf{B}_{\mathrm{ex}}\cdot\boldsymbol\sigma\tau_3,\check{g}]$, generating a **non-zero spin accumulation and spin current** ([[#References|Bergeret et al. 2005]]).

---

### 11.4 Heat Current

> [!note]+ **Reference:** [[#References|Kopnin (2001)]] · [[#References|Rammer & Smith (1986)]]

In the dirty limit, the thermal current is:

$$
\mathbf{j}_Q(\mathbf{r})
= \frac{\sigma_N}{4ie^2}
\int_{-\infty}^{\infty}d\omega\;\omega\,
\mathrm{Tr}_N\!\bigl[\tau_3\bigl(g^R\nabla g^K+g^K\nabla g^A\bigr)\bigr]
\tag{61}
$$

In terms of the distribution function:

$$
\mathbf{j}_Q = -\kappa_N T\nabla T + (\text{interference terms})
\tag{62}
$$

where $\kappa_N=\pi^2 k_B^2 T\sigma_N/(3e^2)$ is the **normal-state thermal conductivity (Wiedemann–Franz)**, and the interference terms arise from the superconducting correlations.

---

### 11.5 The Usadel Kinetic Equations for $h_L$ and $h_T$

> [!note]+ **Reference:** [[#References|Schmid & Schön (1975)]] · [[#References|Schmid (1979)]] · [[#References|Belzig et al. (1999)]]

Decomposing $\hat{h}=h_L\tau_0+h_T\tau_3$ and using the $\theta$-parameterization of $g^R$, the kinetic equations $(54)$ reduce to the ***two-component diffusion equations***:

$$
\nabla\!\cdot\!\bigl[D_L(\omega,\mathbf{r})\nabla h_L\bigr]
- 2\mathrm{Im}(\Delta\sin\theta)\,h_T
= I_{\mathrm{in}}[h_L]
\tag{63a}
$$

$$
\nabla\!\cdot\!\bigl[D_T(\omega,\mathbf{r})\nabla h_T\bigr]
+ 2\mathrm{Im}(\Delta\sin\theta)\,h_L
= I_{\mathrm{in}}[h_T]
\tag{63b}
$$

where the **spectral diffusion coefficients** are:

$$
D_L(\omega,\mathbf{r}) = D\,\mathrm{Re}\bigl[1-\cos\theta\cos\theta^*\bigr]
= D\,\mathrm{Re}\bigl[\sin\theta\sin\theta^*\bigr]
\tag{64a}
$$

$$
D_T(\omega,\mathbf{r}) = D\,\mathrm{Re}\bigl[\cos\theta\bigr]^2
\tag{64b}
$$

and $I_{\mathrm{in}}$ is the inelastic collision integral (from electron-electron or electron-phonon interactions).

> [!tip]+ **Normal-State Limit**
> In the normal state ($\theta=0$): $D_L=D$, $D_T=D$, and the two equations **decouple** to give standard energy and charge diffusion.

> [!info]+ **Physical Meaning of $h_L$ and $h_T$**
> The function $h_L(\mathbf{r},\omega)$ is the **longitudinal (energy-mode) distribution**, governing the energy (heat) imbalance between quasiparticle branches, it is associated with the **even part** of the distribution under particle-hole symmetry.
>
> The function $h_T(\mathbf{r},\omega)$ is the **transverse (charge-mode) distribution**, governing the charge imbalance between electrons and holes: it is associated with the **non-equilibrium chemical potential**.
>
> In a voltage-biased normal-metal wire in the normal state: $h_T\propto eV/\omega$ and $h_L\propto\partial_\omega n_F$, where $n_F$ is the Fermi function.
>
> The **coupling between $h_L$ and $h_T$** in $(63a)$–$(63b)$ is a purely superconducting effect (it vanishes when $\Delta=0$) and causes energy-mode to charge-mode conversion at NS interfaces (**charge imbalance**) ([[#References|Clarke (1972)]] · [[#References|Tinkham (2004)]]).

---

## §12 Self-Consistency and the Usadel Gap Equation

In the dirty limit, the self-consistency (gap) equation becomes:

$$
\Delta(\mathbf{r})\ln\!\left(\frac{T}{T_c}\right)
= \pi T\sum_{\omega_n>0}
\left[\frac{\Delta(\mathbf{r})}{\omega_n}
  - \mathrm{Im}\bigl(f^R(\mathbf{r};\omega_n)\bigr)\right]
\tag{65}
$$

where the sum is over positive Matsubara frequencies ([[#References|Usadel 1970]] · [[#References|de Gennes 1966]]). Using the $\theta$-parameterization, $f^R=-i\pi\sin\theta$, this is:

$$
\boxed{
\Delta(\mathbf{r})\ln\!\left(\frac{T}{T_c}\right)
= \pi T\sum_{\omega_n>0}
\left[\frac{\Delta(\mathbf{r})}{\omega_n} - \pi\mathrm{Re}(\sin\theta(\mathbf{r};\omega_n))\right]
}
\tag{66}
$$

Together with $(51)$ and the boundary conditions, these form a **complete, self-consistent system**.

---

## §13 Symmetry Relations and Sum Rules

### 13.1 Particle-Hole Symmetry

The Usadel GF satisfies the **particle-hole symmetry (PHS)**:

$$
g^R(\mathbf{r};\omega) = -\tau_1[g^R(\mathbf{r};-\omega)]^*\tau_1
\tag{67}
$$

which in the $\theta$-parameterization gives $\theta(\mathbf{r};-\omega^*)=\theta^*(\mathbf{r};\omega)$, so that the spectral functions are even/odd in $\omega$ as required by the density of states being real and positive ([[#References|Kopnin 2001]]).

---

### 13.2 Fluctuation-Dissipation Theorem

In thermal equilibrium the Keldysh GF satisfies:

$$
\boxed{
g^K(\mathbf{r};\omega) = (g^R-g^A)\tanh\!\left(\frac{\omega}{2k_B T}\right)
}
\tag{68}
$$

from which $h_L=\tanh(\omega/2T)$ and $h_T=0$, corresponding to a **thermally equilibrated distribution with no current flow**.

---

### 13.3 Sum Rule: Spectral Weight

The local density of states satisfies the **sum rule**:

$$
\int_{-\infty}^{\infty}d\omega\,N(\mathbf{r},\omega) = N_0
\tag{69}
$$

ensuring that the **total spectral weight is conserved** (no spectral weight is created or destroyed by the superconducting condensation, it is merely redistributed into the coherence peaks) ([[#References|Tinkham 2004]]).

---

## §14 Applications and Extensions

### 14.1 NS Proximity Effect

> [!note]+ **Reference:** [[#References|de Gennes (1966)]] · [[#References|Belzig et al. (1999)]]

The most direct application of the Usadel equation is the **proximity effect** in a normal metal (N) in contact with a superconductor (S). In N, $\Delta=0$ but $g^R\neq g^R_N$ because of the Andreev-reflected pairs that penetrate from S. The penetration depth is the ***diffusive coherence length***:

$$
\xi_D(\omega) = \sqrt{D/(2|\omega|)}
\tag{70}
$$

For a uniform NS bilayer with perfect interface transparency, the Usadel equation in N with $\Delta=0$ reduces to:

$$
D\nabla^2\theta_N + 2i\omega\sin\theta_N = 0
\tag{71}
$$

with solution $\theta_N(x)\propto e^{-x/\xi_D(\omega)}$ for $x>0$ into N. The induced gap in N is:

$$
|\Delta_{\rm ind}|\sim\Delta\,e^{-x/\xi_D} \quad \text{(minigap)}
$$

([[#References|McMillan 1968]] · [[#References|Golubov, Kupriyanov & Il'ichev 2004]])

---

### 14.2 Josephson Effect in a Diffusive Junction

> [!note]+ **Reference:** [[#References|Kupriyanov & Lukichev (1988)]] · [[#References|Golubov et al. (2004)]]

In a diffusive SNS junction (length $L$, gap $\Delta$, phase difference $\phi$ between the two S electrodes), the **supercurrent** is:

$$
I(\phi) = \frac{\pi\sigma_N A}{2eL}
\int_0^{\infty}\frac{d\omega}{\cosh^2(\omega/2T)}
\mathrm{Im}\!\left[f_S\,\nabla f_S^*\right]_{\rm junction}
\tag{72}
$$

where $A$ is the cross-section and $f_S=f^R$ is the anomalous component solved from the Usadel equation with appropriate BCs. In the **long-junction limit** ($L\gg\xi_D$) and low temperature $T\ll E_{\rm Th}=D/L^2$:

$$
I(\phi) = I_c\sin\phi,
\qquad
I_c \propto \frac{\sigma_N A}{eL}\Delta\,e^{-L/\xi_D(0)}
\tag{73}
$$

---

### 14.3 Spin-Polarized (Ferromagnetic) Systems

> [!note]+ **Reference:** [[#References|Bergeret, Volkov & Efetov (2001)]] · [[#References|Eschrig (2015)]]

In a ferromagnet (F) with exchange field $h_{\rm ex}$, the Usadel equation acquires an additional term:

$$
D\nabla\!\cdot\!\bigl(\check{g}\nabla\check{g}\bigr)
+ \bigl[\omega\tau_3 - \check\Delta - h_{\rm ex}\sigma_z\tau_3
  - \check\sigma,\;\check{g}\bigr] = 0
\tag{74}
$$

The exchange field is **pair-breaking** (it acts like $i/\tau_{\rm sc}\to ih_{\rm ex}$ in the effective energy denominator), reducing the coherence length to $\xi_F=\sqrt{D/h_{\rm ex}}$ and causing **spatial oscillations** of the pair amplitude: the FFLO-like oscillations in the diffusive regime ([[#References|Bergeret et al. 2001]]). The short-range singlet pairs are suppressed, but **long-range triplet correlations** (the $m=\pm1$ components) can be generated at interfaces with misaligned magnetizations ([[#References|Bergeret et al. 2005]] · [[#References|Eschrig 2015]]).

---

## §15 Summary and Comparison

> [!summary]+ **Eilenberger vs. Usadel: Comparison Table**
>
> | Property | Eilenberger | Usadel |
> |----------|------------|--------|
> | **Validity** | $\ell_F\lesssim\xi_{\rm sc}$ (clean to moderately dirty) | $\ell_F\ll\xi_{\rm sc}$ (strongly dirty) |
> | **Degrees of freedom** | $\check{g}(\hat{k},\mathbf{r};\omega)$: direction-resolved | $\check{g}(\mathbf{r};\omega)$: isotropic |
> | **PDE type** | 1st order along $v_F\hat{k}$ | 2nd order (nonlinear diffusion) |
> | **Nonlinearity** | Linear in $\check{g}$ for each $\hat{k}$ | Nonlinear: $\check{g}\nabla\check{g}$ |
> | **Normalization** | $\check{g}^2=-\pi^2$ | $\check{g}^2=-\pi^2$ |
> | **BCs** | Zaitsev (specular) | Kupriyanov–Lukichev (diffuse) |
> | **Key length scale** | $\xi_{\rm sc}=v_F/\pi\Delta$ | $\xi_D=\sqrt{D/\Delta}$ |
> | **Current formula** | Eq. $(32)$ | Eq. $(55)$ |
> | **References** | Eilenberger (1968), Larkin & Ovchinnikov (1969), Serene & Rainer (1983) | Usadel (1970), Belzig et al. (1999), Kopnin (2001) |

The **hierarchy** of quasiclassical approximations is:

$$
\underbrace{\text{Gor'kov (full GF)}}_{\text{scale: }\lambda_F}
\xrightarrow{\;\xi\text{-integration}\;}
\underbrace{\text{Eilenberger}}_{\text{scale: }\xi_{\rm sc},\ell_F}
\xrightarrow{\;\ell_F/\xi_{\rm sc}\to0\;}
\underbrace{\text{Usadel}}_{\text{scale: }\xi_D}
\tag{75}
$$

Each step is a **systematic expansion** in a small parameter and retains all relevant physics at the corresponding length scale.

---

## §16 Conclusion

> [!success]+ **Summary of the Full Derivation**
>
> We derived the **Eilenberger and Usadel quasiclassical equations** from first principles, starting from the Keldysh–Gor'kov framework. The derivation proceeded through a sequence of key steps:
>
> 1. **Scale separation** via the Wigner transform and gradient expansion.
>
> 2. **$\xi$-integration**, which marginalizes over Fermi-scale oscillations and yields the Eilenberger equation.
>
> 3. **Normalization condition** $\check{g}^2=-\pi^2$, which emerges as an exact identity following from the analytic structure of the quasiclassical propagator.
>
> 4. **Decomposition** of the Fermi-surface dependence into $s$- and $p$-wave components together with the algebraic elimination of $\check{g}_p$ in the dirty limit, leading to the Fick's-law relation and ultimately the **Usadel equation**.
>
> 5. **Charge, spin, and heat current** expressions derived from the Keldysh part of the quasiclassical GF.
>
> 6. **Kinetic equations** governing the longitudinal and transverse distribution functions $h_L$ and $h_T$.
>
> 7. **Self-consistency gap equation** in the dirty limit.

> [!quote]+ **Scope of This Framework**
> These equations form the **workhorse of mesoscopic superconductivity** and provide the quantitative framework for describing proximity effects, Josephson junctions, spin-valve superconductors, and non-equilibrium dynamics.

---

## References

### Original Eilenberger / Larkin–Ovchinnikov Papers

- **Eilenberger, G. (1968)**: Transformation of Gorkov's equation for type II superconductors into transport-like equations. *Z. Phys.* **214**, 195–213. [doi:10.1007/BF01379803](https://doi.org/10.1007/BF01379803)
- **Larkin, A. I. and Ovchinnikov, Yu. N. (1969)**: Quasiclassical method in the theory of superconductivity. *Sov. Phys. JETP* **28**, 1200–1205.

### Usadel

- **Usadel, K. D. (1970)**: Generalized diffusion equation for superconducting alloys. *Phys. Rev. Lett.* **25**, 507–509. [doi:10.1103/PhysRevLett.25.507](https://doi.org/10.1103/PhysRevLett.25.507)

### Serene & Rainer: Quasiclassical Review

- **Serene, J. W. and Rainer, D. (1983)**: The quasiclassical approach to superfluid $^3$He. *Phys. Rep.* **101**, 221–311. [doi:10.1016/0370-1573(83)90051-0](https://doi.org/10.1016/0370-1573(83)90051-0)

### Keldysh / Non-Equilibrium Formalism

- **Rammer, J. and Smith, H. (1986)**: Quantum field-theoretical methods in transport theory of metals. *Rev. Mod. Phys.* **58**, 323–359. [doi:10.1103/RevModPhys.58.323](https://doi.org/10.1103/RevModPhys.58.323)
- **Kadanoff, L. P. and Baym, G. (1962)**: *Quantum Statistical Mechanics*. W. A. Benjamin, New York.

### Standard Textbooks

- **Tinkham, M. (2004)**: *Introduction to Superconductivity*, 2nd ed. Dover, Mineola, NY.
- **Kopnin, N. B. (2001)**: *Theory of Nonequilibrium Superconductivity*. Oxford University Press. [doi:10.1093/acprof:oso/9780198507888.001.0001](https://doi.org/10.1093/acprof:oso/9780198507888.001.0001)
- **de Gennes, P. G. (1966)**: *Superconductivity of Metals and Alloys*. W. A. Benjamin, New York.
- **Schrieffer, J. R. (1964)**: *Theory of Superconductivity*. W. A. Benjamin, New York.

### Wigner Transform

- **Wigner, E. (1932)**: On the quantum correction for thermodynamic equilibrium. *Phys. Rev.* **40**, 749–759. [doi:10.1103/PhysRev.40.749](https://doi.org/10.1103/PhysRev.40.749)

### Eliashberg (Strong Coupling)

- **Eliashberg, G. M. (1960)**: Interactions between electrons and lattice vibrations in a superconductor. *Sov. Phys. JETP* **11**, 696–702.

### Boundary Conditions

- **Zaitsev, A. V. (1984)**: Quasiclassical equations of the theory of superconductivity for contiguous metals and the properties of constricted microcontacts. *Sov. Phys. JETP* **59**, 1015–1024.
- **Kupriyanov, M. Yu. and Lukichev, V. F. (1988)**: Influence of boundary transparency on the critical current of "dirty" SS'S structures. *Sov. Phys. JETP* **67**, 1163–1168.

### Riccati Parameterization

- **Schopohl, N. and Maki, K. (1995)**: Quasiparticle spectrum around a vortex line in a $d$-wave superconductor. *Phys. Rev. B* **52**, 490–493. [doi:10.1103/PhysRevB.52.490](https://doi.org/10.1103/PhysRevB.52.490)
- **Schopohl, N. (1998)**: Transformation of the Eilenberger equations of superconductivity to a scalar Riccati equation. *arXiv:cond-mat/9804064* (unpublished but widely cited).

### Schmid: Kinetic Equations

- **Schmid, A. and Schön, G. (1975)**: Linearized kinetic equations and relaxation processes of a superconductor near $T_c$. *J. Low Temp. Phys.* **20**, 207–227. [doi:10.1007/BF00115264](https://doi.org/10.1007/BF00115264)
- **Schmid, A. (1979)**: The approach to equilibrium in a pure superconductor: the pair-breaking time. *Phys. Kond. Mat.* **5**, 302–317. (See also: Schmid, A., in *Nonequilibrium Superconductivity*, ed. D. N. Langenberg and A. I. Larkin, North-Holland (1986), p. 14)

### Belzig: Review of Quasiclassical Theory

- **Belzig, W., Wilhelm, F. K., Bruder, C., Schön, G. and Zaikin, A. D. (1999)**: Quasiclassical Green's function approach to mesoscopic superconductivity. *Superlatt. Microstruct.* **25**, 1251–1288. [doi:10.1006/spmi.1999.0710](https://doi.org/10.1006/spmi.1999.0710)

### Proximity Effect

- **McMillan, W. L. (1968)**: Tunneling model of the superconducting proximity effect. *Phys. Rev.* **175**, 537–542. [doi:10.1103/PhysRev.175.537](https://doi.org/10.1103/PhysRev.175.537)
- **Golubov, A. A., Kupriyanov, M. Yu. and Il'ichev, E. (2004)**: The current-phase relation in Josephson junctions. *Rev. Mod. Phys.* **76**, 411–469. [doi:10.1103/RevModPhys.76.411](https://doi.org/10.1103/RevModPhys.76.411)

### Ferromagnetic Superconductors / Triplet Correlations

- **Bergeret, F. S., Volkov, A. F. and Efetov, K. B. (2001)**: Long-range proximity effects in superconductor-ferromagnet structures. *Phys. Rev. Lett.* **86**, 4096–4099. [doi:10.1103/PhysRevLett.86.4096](https://doi.org/10.1103/PhysRevLett.86.4096)
- **Bergeret, F. S., Volkov, A. F. and Efetov, K. B. (2005)**: Odd triplet superconductivity and related phenomena in superconductor-ferromagnet structures. *Rev. Mod. Phys.* **77**, 1321–1373. [doi:10.1103/RevModPhys.77.1321](https://doi.org/10.1103/RevModPhys.77.1321)
- **Eschrig, M. (2015)**: Spin-polarized supercurrents for spintronics: a review of current progress. *Rep. Prog. Phys.* **78**, 104501. [doi:10.1088/0034-4885/78/10/104501](https://doi.org/10.1088/0034-4885/78/10/104501)

### Charge Imbalance

- **Clarke, J. (1972)**: Experimental observation of pair-quasiparticle potential difference in nonequilibrium superconductors. *Phys. Rev. Lett.* **28**, 1363–1366. [doi:10.1103/PhysRevLett.28.1363](https://doi.org/10.1103/PhysRevLett.28.1363)

---
## Connections
- [[BdG Formalism]] : Usadel is the dirty limit of BdG/Gor'kov
- [[Odd-Parity Triplet Pairing]] : $f_t$ decomposition gives triplet content
- [[SC-FM Heterostructures]] :  primary application domain
- [[Chapter 1 - The Green's Function Formalism]] : complementary: Usadel for bulk, NEGF for transport
- [[Topological Superconductivity]] : Eilenberger can access winding numbers
- [[Majorana Bound States]] : Usadel approach to topological signatures
