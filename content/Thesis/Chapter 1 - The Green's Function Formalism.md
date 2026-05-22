---
tags:
  - condensed-matter
  - superconductivity
  - green-functions
  - nambu-gorkov
  - keldysh
  - field-theory
  - topological
cssclasses:
  - academia
  - wide-page
banner: " Green's Function Formalism for Superconductors"
---

#  Green's Function Formalism for Superconductors

> [!abstract]+ **Chapter Abstract**
> This chapter develops the **complete Green's function formalism for superconductors**, starting from the Nambu–Gor'kov field theory for BCS pairing, through the derivation of the Gor'kov equations and the self-energy, and culminating in the **non-equilibrium Keldysh formulation** on the Schwinger–Keldysh contour.
>
> The full spin degree of freedom is restored at the end, yielding the **$8\times 8$ Nambu–spin–Keldysh Green's function** and its associated Dyson equation, which is the appropriate framework for:
> - **Topological superconductors**
> - **Spintronic hybrid structures**
> - **Driven open quantum systems**

---

## §1 Preliminaries: Field Operators and the BCS Hamiltonian

> [!note]+ **Reference:** [[#References|Bardeen, Cooper & Schrieffer (1957)]] · [[#References|Schrieffer (1964)]]

We consider a system of spin-$\frac{1}{2}$ electrons with the **BCS reduced Hamiltonian**:

$$
\boxed{
H = \sum_{\mathbf{k}\sigma}\xi_{\mathbf{k}}\,c^{\dagger}_{\mathbf{k}\sigma}c^{\phantom{\dagger}}_{\mathbf{k}\sigma}
    - \sum_{\mathbf{k}\mathbf{k}'} V_{\mathbf{k}\mathbf{k}'}\,
      c^{\dagger}_{\mathbf{k}\uparrow}c^{\dagger}_{-\mathbf{k}\downarrow}
      c^{\phantom{\dagger}}_{-\mathbf{k}'\downarrow}c^{\phantom{\dagger}}_{\mathbf{k}'\uparrow}
}
\tag{1}
$$

where:
- $\xi_{\mathbf{k}} = \varepsilon_{\mathbf{k}} - \mu$  single-particle energy measured from the chemical potential $\mu$
- $V_{\mathbf{k}\mathbf{k}'} > 0$  attractive pairing interaction
- Throughout: $\hbar = 1$ unless stated otherwise

---

### 1.1 The Gap Function

The **mean-field (BCS) decoupling** introduces the *gap function*:

$$
\Delta_{\mathbf{k}} = \sum_{\mathbf{k}'} V_{\mathbf{k}\mathbf{k}'}
\langle c^{\phantom{\dagger}}_{-\mathbf{k}'\downarrow}c^{\phantom{\dagger}}_{\mathbf{k}'\uparrow}\rangle
\tag{2}
$$

and the **self-consistency (gap) equation**:

$$
\Delta_{\mathbf{k}} = \sum_{\mathbf{k}'} V_{\mathbf{k}\mathbf{k}'}\frac{\Delta_{\mathbf{k}'}}{2E_{\mathbf{k}'}}\tanh\!\left(\frac{E_{\mathbf{k}'}}{2k_B T}\right), \qquad E_{\mathbf{k}}=\sqrt{\xi_{\mathbf{k}}^{2}+|\Delta_{\mathbf{k}}|^{2}}
\tag{3}
$$

> [!tip]+ **Isotropic $s$-wave case**
> For an isotropic $s$-wave superconductor: $V_{\mathbf{k}\mathbf{k}'} = V$ and $\Delta_{\mathbf{k}} = \Delta$ is **momentum-independent**.

---

## §2 Nambu Spinor and the $2\times2$ Nambu–Gor'kov Green's Function

> [!note]+ **Reference:** [[#References|Gor'kov (1958, 1959)]] · [[#References|Abrikosov, Gor'kov & Dzyaloshinski (1975)]] · [[#References|Mahan (2000)]]

### 2.1 The Nambu Spinor

The key step in the **Gor'kov theory** is the introduction of the *Nambu (particle-hole) spinor*:

$$
\Psi_{\mathbf{k}} = \begin{pmatrix} c_{\mathbf{k}\uparrow} \\ c^{\dagger}_{-\mathbf{k}\downarrow}\end{pmatrix},
\qquad
\Psi^{\dagger}_{\mathbf{k}} = \begin{pmatrix} c^{\dagger}_{\mathbf{k}\uparrow} & c^{\phantom{\dagger}}_{-\mathbf{k}\downarrow}\end{pmatrix}
\tag{4}
$$

The Nambu spinor satisfies the **anti-commutation relation**:
$$
\{\Psi_{\mathbf{k},\alpha},\Psi^{\dagger}_{\mathbf{k}',\beta}\}=\delta_{\mathbf{k}\mathbf{k}'}\delta_{\alpha\beta}
$$
where $\alpha,\beta\in\{1,2\}$ label the particle/hole components.

---

### 2.2 Mean-Field BCS Hamiltonian in Nambu Basis

In this basis the mean-field BCS Hamiltonian reads:

$$
H_{\mathrm{MF}} = \sum_{\mathbf{k}}
\Psi^{\dagger}_{\mathbf{k}}
\underbrace{\begin{pmatrix}\xi_{\mathbf{k}} & \Delta \\ \Delta^{*} & -\xi_{\mathbf{k}}\end{pmatrix}}_{\displaystyle\mathcal{H}_{\mathbf{k}}}
\Psi_{\mathbf{k}}
= \sum_{\mathbf{k}}\Psi^{\dagger}_{\mathbf{k}}
  \bigl(\xi_{\mathbf{k}}\,\tau_{3} + \Delta_{1}\,\tau_{1}+\Delta_{2}\,\tau_{2}\bigr)
  \Psi_{\mathbf{k}}
\tag{5}
$$

where $\Delta=\Delta_{1}+i\Delta_{2}$, and $\tau_{1,2,3}$ are the **Pauli matrices acting in Nambu (particle-hole) space**, with $\tau_0=\mathbf{1}_{2\times2}$.

---

### 2.3 Definition of the Nambu–Gor'kov Green's Function

The *time-ordered* Nambu–Gor'kov Green's function is the $2\times2$ matrix:

$$
\hat{G}(\mathbf{k},\tau-\tau') \equiv
-\langle\mathcal{T}\,\Psi_{\mathbf{k}}(\tau)\Psi^{\dagger}_{\mathbf{k}}(\tau')\rangle
=
\begin{pmatrix}
  G(\mathbf{k},\tau-\tau') & F(\mathbf{k},\tau-\tau') \\
  \bar{F}(\mathbf{k},\tau-\tau') & \bar{G}(\mathbf{k},\tau-\tau')
\end{pmatrix}
\tag{6}
$$

where $\tau$ is **imaginary (Matsubara) time** and $\mathcal{T}$ is the imaginary-time ordering operator.

> [!info]+ **The Four Components**
>
> | Symbol | Expression | Name |
> |--------|-----------|------|
> | $G(\mathbf{k},\tau)$ | $-\langle\mathcal{T}\,c_{\mathbf{k}\uparrow}(\tau)c^{\dagger}_{\mathbf{k}\uparrow}(0)\rangle$ | Normal GF |
> | $F(\mathbf{k},\tau)$ | $-\langle\mathcal{T}\,c_{\mathbf{k}\uparrow}(\tau)c^{\phantom{\dagger}}_{-\mathbf{k}\downarrow}(0)\rangle$ | Anomalous / Gor'kov GF |
> | $\bar{F}(\mathbf{k},\tau)$ | $-\langle\mathcal{T}\,c^{\dagger}_{-\mathbf{k}\downarrow}(\tau)c^{\dagger}_{\mathbf{k}\uparrow}(0)\rangle$ | Conjugate anomalous GF |
> | $\bar{G}(\mathbf{k},\tau)$ | $-\langle\mathcal{T}\,c^{\dagger}_{-\mathbf{k}\downarrow}(\tau)c^{\phantom{\dagger}}_{-\mathbf{k}\downarrow}(0)\rangle$ | Hole GF |

> [!warning]+ **Key Insight**
> The anomalous propagators $F$ and $\bar{F}$ are the **hallmark of the superconducting state**; they **vanish in the normal phase**.

---

### 2.4 Matsubara (Frequency-Domain) Representation

Using the **anti-periodicity** of fermionic imaginary-time GFs,
$$
\hat{G}(\mathbf{k},\tau+\beta)=-\hat{G}(\mathbf{k},\tau),
$$
one expands in *fermionic Matsubara frequencies* $\omega_n=(2n+1)\pi/\beta$, $n\in\mathbb{Z}$:

$$
\hat{G}(\mathbf{k},i\omega_n) = \int_0^{\beta}d\tau\,e^{i\omega_n\tau}\,\hat{G}(\mathbf{k},\tau)
\tag{7}
$$

For the BCS mean-field Hamiltonian $(5)$, the result is:

$$
\hat{G}^{-1}(\mathbf{k},i\omega_n) = i\omega_n\,\tau_0 - \mathcal{H}_{\mathbf{k}}
= \begin{pmatrix} i\omega_n - \xi_{\mathbf{k}} & -\Delta \\ -\Delta^{*} & i\omega_n + \xi_{\mathbf{k}}\end{pmatrix}
\tag{8}
$$

Inverting the $2\times 2$ matrix gives the **full BCS propagator**:

$$
\boxed{
\hat{G}(\mathbf{k},i\omega_n)
= \frac{1}{(i\omega_n)^2 - E_{\mathbf{k}}^2}
  \begin{pmatrix} i\omega_n + \xi_{\mathbf{k}} & \Delta \\
                  \Delta^{*} & i\omega_n - \xi_{\mathbf{k}}\end{pmatrix}
}
\tag{9}
$$

so that individually:

$$
G(\mathbf{k},i\omega_n) = \frac{i\omega_n + \xi_{\mathbf{k}}}{\omega_n^2 + E_{\mathbf{k}}^2}
\tag{10a}
$$

$$
F(\mathbf{k},i\omega_n) = \frac{\Delta}{\omega_n^2 + E_{\mathbf{k}}^2}
\tag{10b}
$$

$$
\bar{F}(\mathbf{k},i\omega_n) = \frac{\Delta^{*}}{\omega_n^2 + E_{\mathbf{k}}^2}
\tag{10c}
$$

$$
\bar{G}(\mathbf{k},i\omega_n) = \frac{i\omega_n - \xi_{\mathbf{k}}}{\omega_n^2 + E_{\mathbf{k}}^2}
\tag{10d}
$$

> [!example]+ **Remark: Bogoliubov Poles**
> The poles of $\hat{G}(\mathbf{k},z)$ at $z=\pm E_{\mathbf{k}}$ correspond to the **Bogoliubov quasiparticle excitations** ([[#References|Bogoliubov 1958]]).

---

## §3 Gor'kov Equations

> [!note]+ **Reference:** [[#References|Gor'kov (1958)]] · [[#References|Abrikosov et al. (1975)]] · [[#References|Fetter & Walecka (2003)]]

### 3.1 Derivation from the Equations of Motion

The Gor'kov equations are derived by taking the imaginary-time **equation of motion (EOM)** for the field operator:
$$
\partial_\tau c_{\mathbf{k}\uparrow}(\tau)=-[c_{\mathbf{k}\uparrow},H]
$$
and computing the time derivative of the Green's function. Starting from the definition of $G$ one obtains:

$$
-\partial_\tau G(\mathbf{k},\tau)
= \delta(\tau) + \xi_{\mathbf{k}}G(\mathbf{k},\tau) + \Delta F(\mathbf{k},\tau)
\tag{11}
$$

and from $F$:

$$
-\partial_\tau F(\mathbf{k},\tau) = -\xi_{\mathbf{k}}F(\mathbf{k},\tau)+\Delta^{*}G(\mathbf{k},\tau)
\tag{12}
$$

Fourier transforming to Matsubara space and writing the two equations together in **Nambu matrix form** gives the *Gor'kov equations*:

$$
\boxed{
\bigl[(i\omega_n)\tau_0 - \mathcal{H}_{\mathbf{k}}\bigr]\hat{G}(\mathbf{k},i\omega_n) = \tau_0
}
\tag{13}
$$

or equivalently:

$$
\begin{pmatrix}i\omega_n-\xi_{\mathbf{k}} & -\Delta \\ -\Delta^{*} & i\omega_n+\xi_{\mathbf{k}}\end{pmatrix}
\begin{pmatrix} G & F \\ \bar{F} & \bar{G}\end{pmatrix}
= \begin{pmatrix}1 & 0 \\ 0 & 1\end{pmatrix}
\tag{14}
$$

This matrix equation encodes **two coupled scalar equations**, the original Gor'kov equations:

$$
(i\omega_n - \xi_{\mathbf{k}})\,G(\mathbf{k},i\omega_n) - \Delta\,\bar{F}(\mathbf{k},i\omega_n)
= 1
\tag{15a}
$$

$$
(i\omega_n + \xi_{\mathbf{k}})\,\bar{F}(\mathbf{k},i\omega_n) - \Delta^{*}\,G(\mathbf{k},i\omega_n)
= 0
\tag{15b}
$$

Solving $(15a)$–$(15b)$ reproduces the results $(10a)$–$(10d)$.

---

### 3.2 Gor'kov Equations in Real Space

> [!note]+ **Reference:** [[#References|de Gennes (1966)]] · [[#References|Kopnin (2001)]]

For an **inhomogeneous system** (e.g., a vortex or an interface), it is necessary to work in real space. Defining:

$$
G(\mathbf{r},\mathbf{r}';\tau)=-\langle\mathcal{T}\psi_{\uparrow}(\mathbf{r},\tau)\psi^{\dagger}_{\uparrow}(\mathbf{r}',0)\rangle,
\quad
F(\mathbf{r},\mathbf{r}';\tau)=-\langle\mathcal{T}\psi_{\uparrow}(\mathbf{r},\tau)\psi_{\downarrow}(\mathbf{r}',0)\rangle
$$

the Gor'kov equations in frequency space become:

$$
\bigl[i\omega_n - \hat{h}(\mathbf{r})\bigr]G(\mathbf{r},\mathbf{r}';i\omega_n)
- \int d\mathbf{r}''\,\Delta(\mathbf{r},\mathbf{r}'')F^{\dagger}(\mathbf{r}'',\mathbf{r}';i\omega_n)
= \delta^{(3)}(\mathbf{r}-\mathbf{r}')
\tag{16a}
$$

$$
\bigl[i\omega_n + \hat{h}(\mathbf{r})\bigr]F^{\dagger}(\mathbf{r},\mathbf{r}';i\omega_n)
+ \int d\mathbf{r}''\,\Delta^{*}(\mathbf{r},\mathbf{r}'')G(\mathbf{r}'',\mathbf{r}';i\omega_n)
= 0
\tag{16b}
$$

where $\hat{h}(\mathbf{r})=-\nabla^2/2m + V(\mathbf{r})-\mu$ is the **single-particle Hamiltonian**.

> [!tip]+ **Local $s$-wave interaction**
> For a local ($s$-wave) interaction: $\Delta(\mathbf{r},\mathbf{r}')=\Delta(\mathbf{r})\delta(\mathbf{r}-\mathbf{r}')$

---

## §4 Self-Energy in the Nambu Formalism

### 4.1 Dyson Equation

> [!note]+ **Reference:** [[#References|Dyson (1949)]] · [[#References|Abrikosov et al. (1975)]]

Beyond mean-field, interactions produce a **self-energy** $\hat{\Sigma}(\mathbf{k},i\omega_n)$ which is itself a $2\times 2$ matrix in Nambu space. The full Green's function satisfies the *Dyson equation*:

$$
\hat{G}(\mathbf{k},i\omega_n)
= \hat{G}_0(\mathbf{k},i\omega_n)
+ \hat{G}_0(\mathbf{k},i\omega_n)\,\hat{\Sigma}(\mathbf{k},i\omega_n)\,\hat{G}(\mathbf{k},i\omega_n)
\tag{17}
$$

where $\hat{G}_0$ is the **bare (mean-field BCS) propagator** $(9)$. Rearranging:

$$
\boxed{
\hat{G}^{-1}(\mathbf{k},i\omega_n) = \hat{G}_0^{-1}(\mathbf{k},i\omega_n) - \hat{\Sigma}(\mathbf{k},i\omega_n)
}
\tag{18}
$$

---

### 4.2 Structure of the Self-Energy

The most general Nambu-space self-energy decomposition is:

$$
\hat{\Sigma}(\mathbf{k},i\omega_n) = \Sigma_0\,\tau_0 + \Sigma_1\,\tau_1
+ \Sigma_2\,\tau_2 + \Sigma_3\,\tau_3
\tag{19}
$$

where the $\Sigma_i$ are (complex) functions of $(\mathbf{k},i\omega_n)$.

> [!info]+ **Physical Content of Each Component**
>
> | Component | Physical Meaning |
> |-----------|-----------------|
> | $\Sigma_0$ | Quasi-particle self-energy (energy renormalization, damping) |
> | $\Sigma_{1,2}$ | Anomalous self-energy, renormalization of the gap |
> | $\Sigma_3$ | Particle-hole asymmetry (relevant in strong-coupling or multi-band systems) |

Combining $(18)$ with $(19)$, the **full Dyson equation in Nambu space** is:

$$
\hat{G}^{-1}(\mathbf{k},i\omega_n)
= (i\omega_n - \Sigma_0)\,\tau_0
  - (\xi_{\mathbf{k}}+\Sigma_3)\,\tau_3
  - (\Delta_1+\Sigma_1)\,\tau_1
  - (\Delta_2+\Sigma_2)\,\tau_2
\tag{20}
$$

---

### 4.3 Impurity Self-Energy: Born Approximation

> [!note]+ **Reference:** [[#References|Schrieffer (1964)]] · [[#References|Maki (1969)]]

For **non-magnetic (scalar) impurities** with concentration $n_i$ and potential $u(\mathbf{k}-\mathbf{k}')$, the Born-approximation self-energy is:

$$
\hat{\Sigma}^{\mathrm{Born}}(i\omega_n)
= n_i\sum_{\mathbf{k}'}|u_{\mathbf{k}\mathbf{k}'}|^2\,\hat{G}(\mathbf{k}',i\omega_n)
= n_i\,|u|^2\,N(0)
  \int_{-\infty}^{\infty}d\xi\,\hat{G}(\xi,i\omega_n)
\equiv \frac{1}{2\tau}\frac{\tilde{\omega}_n\,\tau_0+\tilde{\Delta}\,\tau_1}
  {\sqrt{\tilde{\omega}_n^2+|\tilde{\Delta}|^2}}
\tag{21}
$$

where $\tau=(2\pi n_i |u|^2 N(0))^{-1}$ is the **elastic scattering time**, and the renormalized frequency $\tilde{\omega}_n$ and gap $\tilde{\Delta}$ satisfy self-consistent equations known as the **Abrikosov–Gor'kov equations** ([[#References|Abrikosov & Gor'kov 1961]]).

> [!warning]+ **Magnetic Impurities**
> For **magnetic impurities** (pair-breaking), the $\tau_3$ component is also generated, leading to the **Abrikosov–Gor'kov theory of gapless superconductivity** ([[#References|Abrikosov & Gor'kov 1961]]).

---

## §5 Spectral Representation

### 5.1 Analytic Continuation: Retarded and Advanced Green's Functions

Physical (real-frequency) response functions are obtained by **analytic continuation** from the Matsubara GF via $i\omega_n \to \omega \pm i\eta$ ($\eta\to 0^+$):

$$
G^R(\mathbf{k},\omega) = \hat{G}(\mathbf{k},i\omega_n\to\omega+i\eta),
\quad
G^A(\mathbf{k},\omega) = \hat{G}(\mathbf{k},i\omega_n\to\omega-i\eta)
\tag{22}
$$

Explicitly for the BCS case:

$$
G^R(\mathbf{k},\omega) =
\frac{(\omega+i\eta)\tau_0+\xi_{\mathbf{k}}\tau_3+\Delta\tau_1}
     {(\omega+i\eta)^2-E_{\mathbf{k}}^2}
\tag{23}
$$

$$
G^A(\mathbf{k},\omega) = \bigl[G^R(\mathbf{k},\omega)\bigr]^{\dagger}
=
\frac{(\omega-i\eta)\tau_0+\xi_{\mathbf{k}}\tau_3+\Delta^{*}\tau_1}
     {(\omega-i\eta)^2-E_{\mathbf{k}}^2}
\tag{24}
$$

> [!example]+ **Remark**
> The retarded and advanced GFs are related by $G^A(\mathbf{k},\omega)=[G^R(\mathbf{k},\omega)]^{\dagger}$, which can be verified directly from the definitions.
> They are **not** related by simple complex conjugation because $\Delta$ may be complex.

---

### 5.2 Spectral Function (Spectral Weight)

The **Nambu spectral function** (matrix) is defined as:

$$
\mathcal{A}(\mathbf{k},\omega)
= \frac{1}{2\pi i}\bigl[G^A(\mathbf{k},\omega)-G^R(\mathbf{k},\omega)\bigr]
= -\frac{1}{\pi}\operatorname{Im}G^R(\mathbf{k},\omega)
\tag{25}
$$

For the BCS case ($\eta\to0^+$):

$$
\mathcal{A}(\mathbf{k},\omega)
= \frac{1}{2E_{\mathbf{k}}}\bigl(u_{\mathbf{k}}^2\,\delta(\omega-E_{\mathbf{k}})
   +v_{\mathbf{k}}^2\,\delta(\omega+E_{\mathbf{k}})\bigr)\tau_0
+\frac{1}{2E_{\mathbf{k}}}\bigl(\delta(\omega-E_{\mathbf{k}})-\delta(\omega+E_{\mathbf{k}})\bigr)
  \frac{\xi_{\mathbf{k}}}{E_{\mathbf{k}}}\tau_3
+ \cdots \text{(anomalous part)}
\tag{26}
$$

where $u_{\mathbf{k}}^2=\frac{1}{2}\!\left(1+\frac{\xi_{\mathbf{k}}}{E_{\mathbf{k}}}\right)$ and
$v_{\mathbf{k}}^2=\frac{1}{2}\!\left(1-\frac{\xi_{\mathbf{k}}}{E_{\mathbf{k}}}\right)$ are the **BCS coherence factors**.

The spectral function satisfies the **sum rule**:

$$
\boxed{
\int_{-\infty}^{\infty}d\omega\,\mathcal{A}(\mathbf{k},\omega) = \tau_0
}
\tag{27}
$$

reflecting the **completeness of quasiparticle states**.

---

### 5.3 Lehmann (Spectral) Representation

> [!note]+ **Reference:** [[#References|Zubarev (1960)]] · [[#References|Fetter & Walecka (2003)]]

The Matsubara GF is recovered from $\mathcal{A}$ via the *Lehmann representation*:

$$
\hat{G}(\mathbf{k},i\omega_n) = \int_{-\infty}^{\infty}d\omega'\,
\frac{\mathcal{A}(\mathbf{k},\omega')}{i\omega_n - \omega'}
\tag{28}
$$

and the retarded GF by:

$$
G^R(\mathbf{k},\omega) = \int_{-\infty}^{\infty}d\omega'\,
\frac{\mathcal{A}(\mathbf{k},\omega')}{\omega - \omega' + i\eta}
\tag{29}
$$

---

## §6 Keldysh Green's Function Formalism

> [!quote]+ **Why Keldysh?**
> The Matsubara formalism is restricted to **thermal equilibrium**.
> For non-equilibrium superconductors, i.e., driven by external fields, coupled to reservoirs, or in a transient state, one must use the **Schwinger–Keldysh closed-time-path (CTP) formalism**.

> [!note]+ **Reference:** [[#References|Schwinger (1961)]] · [[#References|Keldysh (1964/1965)]] · [[#References|Rammer & Smith (1986)]]

---

### 6.1 The Schwinger–Keldysh Contour

The **Keldysh contour** $\mathcal{C} = \mathcal{C}^+ \cup \mathcal{C}^-$ consists of:

```tikz
\usepackage{tikz}
\usetikzlibrary{arrows.meta}
\begin{document}
\begin{tikzpicture}[>=Stealth,thick]
  \draw[->,blue!70!black,line width=1.5pt]
    (-0.5,0.18) -- (5.5,0.18)
    node[midway,above=12pt,font=\small] {$\mathcal{C}^{+}$ (forward)};
  \draw[->,red!70!black,line width=1.5pt]
    (5.5,-0.18) -- (-0.5,-0.18)
    node[midway,below=12pt,font=\small] {$\mathcal{C}^{-}$ (backward)};
  \draw[fill=black] (5.6, 0) circle (0.07);
  \draw[->] (-1,0) -- (6.5,0) node[right] {$t$};
  \node[below left] at (-0.5,0) {$t_0$};
  \node at (6.2,0.35) {$t\to+\infty$};
  \node[blue!70!black,font=\small] at (2.5, 0.55) {$t_{1}<t_{2}$ on $\mathcal{C}^{+}$};
  \node[red!70!black,font=\small] at (2.5,-0.55) {$t_{2}<t_{1}$ on $\mathcal{C}^{-}$};
  \foreach \x in {1,2,3,4,5}{
    \draw (\x,0.08)--(\x,-0.08);
  }
\end{tikzpicture}
\end{document}
```

> **Figure:** The Schwinger–Keldysh closed-time-path contour $\mathcal{C}=\mathcal{C}^+\cup\mathcal{C}^-$. The forward branch $\mathcal{C}^+$ runs from $t_0$ to $+\infty$ and the backward branch $\mathcal{C}^-$ returns to $t_0$. The contour ordering $\mathcal{T}_{\mathcal{C}}$ on $\mathcal{C}$ gives rise to four Green's function components.

- **Forward branch** $\mathcal{C}^+$: from $t_0$ to $+\infty$
- **Backward branch** $\mathcal{C}^-$: from $+\infty$ back to $t_0$
- A time $t_{+}$ on $\mathcal{C}^+$ is considered to come **before** any time $t_{-}$ on $\mathcal{C}^-$ in the contour ordering $\mathcal{T}_{\mathcal{C}}$

---

### 6.2 Contour-Ordered Green's Function and Its Components

The **contour-ordered (Nambu) Green's function** on $\mathcal{C}$ is:

$$
\check{G}(\mathbf{k};t,t') = -i\langle\mathcal{T}_{\mathcal{C}}\,\Psi_{\mathbf{k}}(t)\Psi^{\dagger}_{\mathbf{k}}(t')\rangle
\tag{30}
$$

where $\check{G}$ is a $2\times2$ Nambu matrix for each pair of contour times. Since each of $t,t'$ can lie on $\mathcal{C}^{\pm}$, there are **four components** forming a $2\times2$ structure in *Keldysh space*:

$$
\begin{pmatrix} \hat{G}^{++} & \hat{G}^{+-} \\ \hat{G}^{-+} & \hat{G}^{--}\end{pmatrix}
\tag{31}
$$

> [!info]+ **Explicit Definitions of the Four Components**
>
> $$
> \hat{G}^{++}(\mathbf{k};t,t')
> =
> -i\langle\mathcal{T}\,\Psi(t)\Psi^{\dagger}(t')\rangle
> \quad
> \text{(time-ordered)}
> \tag{32a}
> $$
>
> $$
> \hat{G}^{+-}(\mathbf{k};t,t')
> =
> +i\langle\Psi^{\dagger}(t')\Psi(t)\rangle
> \quad
> \text{(``lesser'', }G^{<}\text{)}
> \tag{32b}
> $$
>
> $$
> \hat{G}^{-+}(\mathbf{k};t,t')
> =
> -i\langle\Psi(t)\Psi^{\dagger}(t')\rangle
> \quad
> \text{(``greater'', }G^{>}\text{)}
> \tag{32c}
> $$
>
> $$
> \hat{G}^{--}(\mathbf{k};t,t')
> =
> -i\langle\tilde{\mathcal{T}}\,\Psi(t)\Psi^{\dagger}(t')\rangle
> \quad
> \text{(anti-time-ordered)}
> \tag{32d}
> $$
>
> where $\tilde{\mathcal{T}}$ denotes
> **anti-chronological ordering**.

These four are **not independent**; they satisfy the exact identity:

$$
\hat{G}^{++} + \hat{G}^{--} = \hat{G}^{>} + \hat{G}^{<}
\tag{33}
$$

---

### 6.3 Retarded, Advanced, and Keldysh Components

The physically transparent **Keldysh rotation** ([[#References|Larkin & Ovchinnikov 1975]]) brings the $2\times2$ Keldysh-space matrix to **triangular (Larkin–Ovchinnikov) form** via:

$$
\check{G} \to L\,\check{G}\,L^{\dagger},
\qquad
L = \frac{1}{\sqrt{2}}\begin{pmatrix}1 & 1 \\ 1 & -1\end{pmatrix}
\tag{34}
$$

yielding:

$$
\boxed{
\check{G}(\mathbf{k};t,t') =
\begin{pmatrix} G^R(\mathbf{k};t,t') & G^K(\mathbf{k};t,t') \\ 0 & G^A(\mathbf{k};t,t')\end{pmatrix}
}
\tag{35}
$$

> [!success]+ **The Three Independent Components (RAK Basis)**
>
> $$
> G^R(\mathbf{k};t,t')
> =
> \hat{G}^{>}
> -
> \hat{G}^{<}
> =
> \Theta(t-t')
> \bigl(
> \hat{G}^{>}
> -
> \hat{G}^{<}
> \bigr)
> \tag{36a}
> $$
>
> $$
> G^A(\mathbf{k};t,t')
> =
> \hat{G}^{<}
> -
> \hat{G}^{>}
> =
> -\Theta(t'-t)
> \bigl(
> \hat{G}^{>}
> -
> \hat{G}^{<}
> \bigr)
> =
> \bigl[
> G^R(\mathbf{k};t',t)
> \bigr]^{\dagger}
> \tag{36b}
> $$
>
> $$
> G^K(\mathbf{k};t,t')
> =
> \hat{G}^{>}
> +
> \hat{G}^{<}
> \tag{36c}
> $$

The **zero in the lower-left** of $(35)$ is an *exact* identity following from $(33)$.

---

### 6.4 Explicit Expressions in Frequency Space

In the stationary (translationally invariant in time) limit, Fourier transforming $t-t'\to\omega$:

$$
G^R(\mathbf{k},\omega) = \bigl[G^R_0(\mathbf{k},\omega)^{-1} - \Sigma^R(\mathbf{k},\omega)\bigr]^{-1}
\tag{37a}
$$

$$
G^A(\mathbf{k},\omega) = \bigl[G^A_0(\mathbf{k},\omega)^{-1} - \Sigma^A(\mathbf{k},\omega)\bigr]^{-1}
= \bigl[G^R(\mathbf{k},\omega)\bigr]^{\dagger}
\tag{37b}
$$

$$
G^K(\mathbf{k},\omega) = G^R(\mathbf{k},\omega)\,\Sigma^K(\mathbf{k},\omega)\,G^A(\mathbf{k},\omega)
\tag{37c}
$$

where $G^R_0(\mathbf{k},\omega)=(\omega\tau_0-\mathcal{H}_{\mathbf{k}}+i\eta)^{-1}$ is the **bare retarded propagator**.

---

### 6.5 Physical Meaning of $G^K$: The Fluctuation-Dissipation Theorem

> [!important]+ **FDT in Equilibrium**
>
> The Keldysh component encodes the
> **distribution function**.
> In equilibrium:
>
> $$
> G^K(\mathbf{k},\omega)\big|_{\mathrm{eq}}
> =
> \bigl[
> G^R(\mathbf{k},\omega)
> -
> G^A(\mathbf{k},\omega)
> \bigr]
> \tanh\!\left(
> \frac{\omega}{2k_B T}
> \right)
> \tag{38}
> $$
>
> a relation known as the
> **fluctuation-dissipation theorem (FDT)**
> ([[#References|Callen & Welton 1951]] [[#References|Kubo 1957]]).

> [!warning]+ **Out of Equilibrium**
> $G^K \neq (G^R-G^A)\tanh(\omega/2k_B T)$, and the **deviation from FDT drives currents and dissipation**.

---

### 6.6 Keldysh Dyson Equation

In the $4\times4$ Keldysh–Nambu space (Keldysh $\otimes$ Nambu), the full Keldysh Green's function obeys ([[#References|Rammer & Smith 1986]] · [[#References|Kopnin 2001]]):

$$
\check{G}^{-1}(\mathbf{k},\omega) = \check{G}_0^{-1}(\mathbf{k},\omega) - \check{\Sigma}(\mathbf{k},\omega)
\tag{39}
$$

where:

$$
\check{G}_0^{-1} =
\begin{pmatrix}(G^R_0)^{-1} & 0 \\ 0 & (G^A_0)^{-1}\end{pmatrix},
\qquad
\check{\Sigma} =
\begin{pmatrix}\Sigma^R & \Sigma^K \\ 0 & \Sigma^A\end{pmatrix}
\tag{40}
$$

The component equations of $(39)$ reproduce $(37a)$–$(37c)$.

The Keldysh self-energy components are related by:

$$
\Sigma^R - \Sigma^A = \Sigma^K\big|_{\mathrm{diag}}
\tag{41}
$$

and in equilibrium $\Sigma^K = (\Sigma^R-\Sigma^A)\tanh(\omega/2k_B T)$ by FDT.

---

### 6.7 Quantum Kinetic Equation (Kadanoff–Baym)

> [!note]+ **Reference:** [[#References|Kadanoff & Baym (1962)]] · [[#References|Rammer & Smith (1986)]]

Subtracting the Dyson equation and its conjugate, one derives the *Keldysh quantum kinetic equation* (Kadanoff–Baym equation in frequency space):

$$
\bigl[(G^R_0)^{-1}-\Sigma^R,\,G^K\bigr]
= \Sigma^K\,G^A - G^R\,\Sigma^K
\tag{42}
$$

where $[A,B]=AB-BA$ denotes the commutator.

> [!tip]+ **Quasi-classical limits**
> - In the **quasi-classical limit** (slowly varying perturbations), $(42)$ reduces to the **Eilenberger equation** ([[#References|Eilenberger 1968]]) for the quasi-classical GF.
> - Further in the **diffusive limit**, it reduces to the **Usadel equation** ([[#References|Usadel 1970]]).

---

## §7 Summary of All Green's Function Components

> [!summary]+ **Complete Table of Nambu–Keldysh Green's Function Components**
>
> | Symbol | Name | Definition | Physical Role |
> |--------|------|-----------|---------------|
> | $G,\,F,\,\bar{F},\,\bar{G}$ | Matsubara (Nambu) | Eq. (6) | Thermodynamics, gap equation |
> | $\hat{G}^{>}$ | Greater | Eq. (32c) | Spectral weight (empty states) |
> | $\hat{G}^{<}$ | Lesser | Eq. (32b) | Spectral weight (filled states) |
> | $G^R$ | Retarded | Eq. (36a) | Spectral function, density of states |
> | $G^A$ | Advanced | Eq. (36b) | $=[G^R]^{\dagger}$ |
> | $G^K$ | Keldysh | Eq. (36c) | Distribution, non-equilibrium current |
> | $\hat{G}^{++}$ | Time-ordered | Eq. (32a) | Dyson expansion |
> | $\hat{G}^{--}$ | Anti-time-ordered | Eq. (32d) | Dyson expansion |

The Lesser and Greater components give the spectral function and distribution:

$$
\hat{G}^{>}(\mathbf{k},\omega) - \hat{G}^{<}(\mathbf{k},\omega) = -2\pi i\,\mathcal{A}(\mathbf{k},\omega)
\tag{43a}
$$

$$
\hat{G}^{<}(\mathbf{k},\omega) = 2\pi i\,\mathcal{A}(\mathbf{k},\omega)\,f(\omega)
\tag{43b}
$$

where $f(\omega)$ is the **Fermi–Dirac (or non-equilibrium) distribution matrix**.

---

## §8 Full Spin-Resolved $8\times8$ Nambu–Spin–Keldysh Green's Function

> [!note]+ **Reference:** [[#References|Bernevig & Hughes (2013)]] · [[#References|Alicea (2012)]] · [[#References|Lutchyn, Sau & Das Sarma (2010)]]

When the spin degree of freedom is non-trivially coupled to the orbital or superconducting sector: as in **spin-orbit coupled systems**, **magnetic superconductors**, or **topological materials**, one must work with the *full* Nambu–spin basis.

---

### 8.1 Full Nambu–Spin Basis ($4\times4$)

The **full Nambu spinor** including both spin species is:

$$
\Psi_{\mathbf{k}} =
\begin{pmatrix} c_{\mathbf{k}\uparrow} \\ c_{\mathbf{k}\downarrow} \\
                c^{\dagger}_{-\mathbf{k}\downarrow} \\ -c^{\dagger}_{-\mathbf{k}\uparrow}
\end{pmatrix},
\quad
\Psi^{\dagger}_{\mathbf{k}} =
\begin{pmatrix} c^{\dagger}_{\mathbf{k}\uparrow} & c^{\dagger}_{\mathbf{k}\downarrow} &
c_{-\mathbf{k}\downarrow} & -c_{-\mathbf{k}\uparrow}\end{pmatrix}
\tag{44}
$$

> [!tip]+ **Sign Convention**
> The sign conventions in $(44)$ are chosen to **preserve time-reversal symmetry**.

The $4\times4$ **Nambu–Bogoliubov–de Gennes (BdG) Hamiltonian** is ([[#References|de Gennes 1966]] · [[#References|Bernevig & Hughes 2013]]):

$$
\mathcal{H}_{\mathbf{k}}^{\mathrm{BdG}} =
\begin{pmatrix}
  H_0(\mathbf{k}) & \hat{\Delta}(\mathbf{k}) \\
  \hat{\Delta}^{\dagger}(\mathbf{k}) & -H_0^{*}(-\mathbf{k})
\end{pmatrix}
\equiv \xi_{\mathbf{k}}\,\tau_3\otimes\sigma_0
       + \mathbf{g}(\mathbf{k})\cdot(\tau_0\otimes\boldsymbol{\sigma})
       + \mathrm{Re}(\Delta)\,\tau_1\otimes(i\sigma_2)
       - \mathrm{Im}(\Delta)\,\tau_2\otimes(i\sigma_2)
\tag{45}
$$

where:
- $\sigma_{0,1,2,3}$  Pauli matrices in **spin space**
- $\mathbf{g}(\mathbf{k})$  spin-orbit coupling (SOC) vector
- $\hat{\Delta}(\mathbf{k})=i\sigma_2\Delta(\mathbf{k})$ for **spin-singlet** pairing
- For **spin-triplet**: $\hat{\Delta}=i(\mathbf{d}\cdot\boldsymbol{\sigma})\sigma_2$

---

### 8.2 The $4\times4$ Matsubara Green's Function

$$
\hat{\mathcal{G}}(\mathbf{k},i\omega_n) = \bigl[(i\omega_n)\tau_0\otimes\sigma_0
- \mathcal{H}_{\mathbf{k}}^{\mathrm{BdG}}\bigr]^{-1}
\tag{46}
$$

which has the block structure:

$$
\hat{\mathcal{G}}(\mathbf{k},i\omega_n) =
\begin{pmatrix}
  \hat{G}(\mathbf{k},i\omega_n) & \hat{F}(\mathbf{k},i\omega_n) \\
  \hat{\bar{F}}(\mathbf{k},i\omega_n) & \hat{\bar{G}}(\mathbf{k},i\omega_n)
\end{pmatrix}
\tag{47}
$$

where **each block is now a $2\times2$ matrix in spin space**.

---

### 8.3 The Full $8\times8$ Keldysh–Nambu–Spin Green's Function

Including the Keldysh degree of freedom (for non-equilibrium), the *complete* Green's function lives in the product space:

$$
\boxed{
\underbrace{\mathbb{C}^2}_{\text{Keldysh}} \otimes
\underbrace{\mathbb{C}^2}_{\text{Nambu (p-h)}} \otimes
\underbrace{\mathbb{C}^2}_{\text{spin}}
= \mathbb{C}^8
}
\tag{48}
$$

and is represented by an **$8\times8$ matrix**:

$$
\check{\mathcal{G}}(\mathbf{k},\omega) =
\begin{pmatrix}
  \hat{\mathcal{G}}^{R}(\mathbf{k},\omega) & \hat{\mathcal{G}}^{K}(\mathbf{k},\omega) \\
  0 & \hat{\mathcal{G}}^{A}(\mathbf{k},\omega)
\end{pmatrix}_{\text{Keldysh}}
\tag{49}
$$

where each entry is a $4\times4$ Nambu–spin matrix.

---

### 8.4 Explicit $8\times8$ Layout

Ordering the basis as:
$$
(c_{\mathbf{k}\uparrow}^+,\; c_{\mathbf{k}\downarrow}^+,\; c_{-\mathbf{k}\downarrow}^{\dagger,+},\; -c_{-\mathbf{k}\uparrow}^{\dagger,+},\;
  c_{\mathbf{k}\uparrow}^-,\; c_{\mathbf{k}\downarrow}^-,\; c_{-\mathbf{k}\downarrow}^{\dagger,-},\; -c_{-\mathbf{k}\uparrow}^{\dagger,-})
$$
(superscripts $\pm$ label the Keldysh branch), the full Green's function is:

$$
\check{\mathcal{G}} =
\left(\begin{array}{cc|cc}
  G^{R}_{\uparrow\uparrow} & G^{R}_{\uparrow\downarrow} &
  G^{K}_{\uparrow\uparrow} & G^{K}_{\uparrow\downarrow} \\
  G^{R}_{\downarrow\uparrow} & G^{R}_{\downarrow\downarrow} &
  G^{K}_{\downarrow\uparrow} & G^{K}_{\downarrow\downarrow} \\[2pt]
  \hline
  0 & 0 &
  G^{A}_{\uparrow\uparrow} & G^{A}_{\uparrow\downarrow} \\
  0 & 0 &
  G^{A}_{\downarrow\uparrow} & G^{A}_{\downarrow\downarrow}
\end{array}\right)_{\text{(abbreviated)}}
\tag{50}
$$

> [!info]+ **Zero Block**
> The **zero block in the lower-left is exact** (as in the spinless case).

Full expansion of each $G^{R,A,K}_{\sigma\sigma'}$ reveals both normal and anomalous ($F$, $\bar{F}$) components:

$$
\hat{\mathcal{G}}^{R} =
\begin{pmatrix}
  \hat{G}^{R} & \hat{F}^{R} \\
  \hat{\bar{F}}^{R} & \hat{\bar{G}}^{R}
\end{pmatrix},
\quad
\hat{\mathcal{G}}^{K} =
\begin{pmatrix}
  \hat{G}^{K} & \hat{F}^{K} \\
  \hat{\bar{F}}^{K} & \hat{\bar{G}}^{K}
\end{pmatrix},
\quad
\hat{\mathcal{G}}^{A} =
\begin{pmatrix}
  \hat{G}^{A} & \hat{F}^{A} \\
  \hat{\bar{F}}^{A} & \hat{\bar{G}}^{A}
\end{pmatrix}
\tag{51}
$$

where each block is **$2\times2$ in spin space**.

---

### 8.5 $8\times8$ Dyson Equation and Self-Energy

The **Dyson equation in the full $8\times8$ space** is:

$$
\check{\mathcal{G}}^{-1}(\mathbf{k},\omega)
= \check{\mathcal{G}}_0^{-1}(\mathbf{k},\omega) - \check{\Sigma}(\mathbf{k},\omega)
\tag{52}
$$

with the **inverse bare GF**:

$$
\check{\mathcal{G}}_0^{-1} =
\begin{pmatrix}
  [(\omega+i\eta)\tau_0\otimes\sigma_0 - \mathcal{H}^{\mathrm{BdG}}_{\mathbf{k}}] & 0 \\
  0 & [(\omega-i\eta)\tau_0\otimes\sigma_0 - \mathcal{H}^{\mathrm{BdG}}_{\mathbf{k}}]
\end{pmatrix}
\tag{53}
$$

and the **$8\times8$ self-energy** in triangular Keldysh form:

$$
\check{\Sigma} =
\begin{pmatrix}
  \hat{\Sigma}^{R} & \hat{\Sigma}^{K} \\
  0 & \hat{\Sigma}^{A}
\end{pmatrix}
\tag{54}
$$

where each block $\hat{\Sigma}^{R,A,K}$ is a **$4\times4$ matrix in Nambu–spin space**.

The component equations of $(52)$ give:

$$
\hat{\mathcal{G}}^{R} =
\bigl[(\omega+i\eta)\tau_0\otimes\sigma_0
- \mathcal{H}^{\mathrm{BdG}}_{\mathbf{k}} - \hat{\Sigma}^{R}\bigr]^{-1}
\tag{55a}
$$

$$
\hat{\mathcal{G}}^{A} =
\bigl[\hat{\mathcal{G}}^{R}\bigr]^{\dagger}
\tag{55b}
$$

$$
\hat{\mathcal{G}}^{K} =
\hat{\mathcal{G}}^{R}\,\hat{\Sigma}^{K}\,\hat{\mathcal{G}}^{A}
\tag{55c}
$$

---

### 8.6 Symmetry Constraints on the $8\times8$ Green's Function

#### Particle-Hole Symmetry (PHS)

> [!note]+ **Reference:** [[#References|Chiu et al. (2016)]] · [[#References|Bernevig & Hughes (2013)]]

The BdG Hamiltonian satisfies $\mathcal{C}\mathcal{H}^{\mathrm{BdG}}\mathcal{C}^{-1}=-\mathcal{H}^{\mathrm{BdG}}$ with $\mathcal{C}=\tau_2\otimes\sigma_2\,\mathcal{K}$ ($\mathcal{K}$: complex conjugation), which implies:

$$
\hat{\mathcal{G}}^{R}(\mathbf{k},\omega)
= -(\tau_2\otimes\sigma_2)\bigl[\hat{\mathcal{G}}^{R}(-\mathbf{k},-\omega)\bigr]^{*}
  (\tau_2\otimes\sigma_2)
\tag{56}
$$

#### Time-Reversal Symmetry (TRS)

For a time-reversal invariant system with $\mathcal{T}=i\sigma_2\mathcal{K}$:

$$
\hat{\mathcal{G}}^{R}(\mathbf{k},\omega)
= (i\sigma_2)\bigl[\hat{\mathcal{G}}^{R}(-\mathbf{k},\omega)\bigr]^{*}
  (-i\sigma_2)
\tag{57}
$$

#### Hermiticity of the Spectral Function

$$
\hat{\mathcal{A}}(\mathbf{k},\omega)
= -\frac{1}{\pi}\operatorname{Im}\hat{\mathcal{G}}^{R}(\mathbf{k},\omega)
\geq 0 \quad \text{(positive semidefinite)}
\tag{58}
$$

#### Fluctuation-Dissipation in the Full Basis

In equilibrium:

$$
\boxed{
\hat{\mathcal{G}}^{K}(\mathbf{k},\omega)
= \bigl[\hat{\mathcal{G}}^{R}(\mathbf{k},\omega)
        - \hat{\mathcal{G}}^{A}(\mathbf{k},\omega)\bigr]
  \tanh\!\left(\frac{\omega}{2k_B T}\right)
}
\tag{59}
$$

---

## §9 Quasiclassical Limit: Eilenberger and Usadel Equations

> [!note]+ **Reference:** [[#References|Eilenberger (1968)]] · [[#References|Larkin & Ovchinnikov (1969)]] · [[#References|Usadel (1970)]]

In the limit where the Fermi energy $\varepsilon_F\gg\Delta,T$, one integrates out the fast (Fermi-scale) oscillations and defines the *quasi-classical (Eilenberger) Green's function*:

$$
\check{g}(\hat{\mathbf{k}},\mathbf{r};\omega)
= \frac{i}{\pi}\int d\xi\,\check{\mathcal{G}}(\mathbf{k},\mathbf{r};\omega)
\equiv
\begin{pmatrix} g^{R} & g^{K} \\ 0 & g^{A}\end{pmatrix}
\tag{60}
$$

where the $\xi$-integration is at fixed Fermi direction $\hat{\mathbf{k}}$.

> [!important]+ **Normalization Condition**
> $$\check{g}^2=\check{1} \quad \text{(holds exactly)}$$

---

### 9.1 Eilenberger Equation

The $g$'s satisfy the *Eilenberger equations*:

$$
\boxed{
i v_F\hat{\mathbf{k}}\cdot\nabla\check{g}
+ \bigl[\omega\tau_3 - \check{\Delta} - \check{\sigma},\,\check{g}\bigr]
= 0
}
\tag{61}
$$

---

### 9.2 Usadel Equation (Diffusive Limit)

In the diffusive limit (after impurity averaging), the *Usadel equation* is:

$$
\boxed{
D\,\nabla\!\cdot\!\bigl(\check{g}\,\nabla\check{g}\bigr)
+ \bigl[\omega\tau_3 - \check{\Delta} - \check{\sigma},\,\check{g}\bigr]
= 0
}
\tag{62}
$$

where $D=v_F^2\tau/3$ is the **diffusion constant**.

---

## §10 Takeaways

> [!success]+ **Summary of the Full Formalism Developed**
>
> 1. **Nambu spinor** and the **Gor'kov Green's function**, including explicit BCS expressions for all four components $G$, $F$, $\bar{F}$, and $\bar{G}$.
>
> 2. **Gor'kov equations** derived via the equation-of-motion approach, in both momentum and real-space representations.
>
> 3. **Dyson equation** and the corresponding **self-energy structure in Nambu space**, including the Born approximation for impurity scattering.
>
> 4. **Spectral representation** through the Lehmann formalism: spectral function with positivity and sum-rule properties, retarded and advanced GFs via analytic continuation.
>
> 5. **Schwinger–Keldysh contour formalism**: contour-ordered GFs $G^{++}$, $G^{>}$, $G^{<}$, $G^{--}$, their Larkin–Ovchinnikov rotation into the triangular Keldysh basis $(G^R, G^K, G^A)$, the Keldysh Dyson equation, and the **fluctuation-dissipation theorem**.
>
> 6. **Full $8\times8$ Nambu–spin–Keldysh Green's function** formalism, together with its Dyson equation, symmetry constraints (particle-hole and time-reversal), and the **quasiclassical limit**.

> [!quote]+ **Scope of This Framework**
> This framework provides the theoretical foundation for studying **transport phenomena**, **proximity effects**, **topological superconductivity**, and **non-equilibrium dynamics** in superconducting hybrid systems.

---

## References

### Foundational BCS / Nambu / Gor'kov

- **Bardeen, Cooper & Schrieffer (1957)**: Theory of Superconductivity. *Phys. Rev.* **108**, 1175–1204. [doi:10.1103/PhysRev.108.1175](https://doi.org/10.1103/PhysRev.108.1175)
- **Bogoliubov (1958)** : A new method in the theory of superconductivity. I. *Sov. Phys. JETP* **7**, 41–46.
- **Gor'kov (1958)** : On the energy spectrum of superconductors. *Sov. Phys. JETP* **7**, 505–508.
- **Gor'kov (1959)** : Microscopic derivation of the Ginzburg–Landau equations in the theory of superconductivity. *Sov. Phys. JETP* **9**, 1364–1367.
- **Abrikosov & Gor'kov (1961)** : Contribution to the theory of superconducting alloys with paramagnetic impurities. *Sov. Phys. JETP* **12**, 1243–1253.

### Textbooks on Many-Body Theory / Green's Functions

- **Schrieffer (1964)** : *Theory of Superconductivity*. W. A. Benjamin, New York.
- **Abrikosov, Gor'kov & Dzyaloshinski (1975)** : *Methods of Quantum Field Theory in Statistical Physics*. Dover, New York.
- **Fetter & Walecka (2003)** : *Quantum Theory of Many-Particle Systems*. Dover, Mineola, NY.
- **Mahan (2000)** : *Many-Particle Physics*, 3rd ed. Kluwer Academic / Plenum, New York. [doi:10.1007/978-1-4757-5714-9](https://doi.org/10.1007/978-1-4757-5714-9)
- **de Gennes (1966)** : *Superconductivity of Metals and Alloys*. W. A. Benjamin, New York.
- **Kopnin (2001)** : *Theory of Nonequilibrium Superconductivity*. Oxford University Press. [doi:10.1093/acprof:oso/9780198507888.001.0001](https://doi.org/10.1093/acprof:oso/9780198507888.001.0001)

### Keldysh / Non-Equilibrium Formalism

- **Schwinger (1961)** : Brownian motion of a quantum oscillator. *J. Math. Phys.* **2**, 407–432. [doi:10.1063/1.1703727](https://doi.org/10.1063/1.1703727)
- **Keldysh (1964/1965)** : Diagram technique for nonequilibrium processes. *Sov. Phys. JETP* **20**, 1018–1026.
- **Larkin & Ovchinnikov (1975)** : Nonlinear conductivity of superconductors in the mixed state. *Sov. Phys. JETP* **41**, 960–965.
- **Rammer & Smith (1986)** : Quantum field-theoretical methods in transport theory of metals. *Rev. Mod. Phys.* **58**, 323–359. [doi:10.1103/RevModPhys.58.323](https://doi.org/10.1103/RevModPhys.58.323)
- **Haug & Jauho (2008)** : *Quantum Kinetics in Transport and Optics of Semiconductors*, 2nd ed. Springer. [doi:10.1007/978-3-540-73564-9](https://doi.org/10.1007/978-3-540-73564-9)
- **Kadanoff & Baym (1962)** : *Quantum Statistical Mechanics*. W. A. Benjamin, New York.

### Spectral Function / Fluctuation-Dissipation

- **Callen & Welton (1951)** : Irreversibility and generalized noise. *Phys. Rev.* **83**, 34–40. [doi:10.1103/PhysRev.83.34](https://doi.org/10.1103/PhysRev.83.34)
- **Kubo (1957)** : Statistical-mechanical theory of irreversible processes. I. *J. Phys. Soc. Jpn.* **12**, 570–586. [doi:10.1143/JPSJ.12.570](https://doi.org/10.1143/JPSJ.12.570)
- **Zubarev (1960)** : Double-time Green functions in statistical physics. *Sov. Phys. Usp.* **3**, 320–345. [doi:10.1070/PU1960v003n03ABEH003275](https://doi.org/10.1070/PU1960v003n03ABEH003275)

### Dyson Equation

- **Dyson (1949)** : The S matrix in quantum electrodynamics. *Phys. Rev.* **75**, 1736–1755. [doi:10.1103/PhysRev.75.1736](https://doi.org/10.1103/PhysRev.75.1736)

### Impurity Self-Energy

- **Maki (1969)** : The magnetic properties of superconducting alloys. I. *Physics* **1**, 21–30.

### Quasiclassical / Eilenberger / Usadel

- **Eilenberger (1968)** : Transformation of Gorkov's equation for type II superconductors into transport-like equations. *Z. Phys.* **214**, 195–213. [doi:10.1007/BF01379803](https://doi.org/10.1007/BF01379803)
- **Larkin & Ovchinnikov (1969)** : Quasiclassical method in the theory of superconductivity. *Sov. Phys. JETP* **28**, 1200–1205.
- **Usadel (1970)** : Generalized diffusion equation for superconducting alloys. *Phys. Rev. Lett.* **25**, 507–509. [doi:10.1103/PhysRevLett.25.507](https://doi.org/10.1103/PhysRevLett.25.507)

### Topological Superconductors / Spin-Orbit / BdG

- **Bernevig & Hughes (2013)** : *Topological Insulators and Topological Superconductors*. Princeton University Press.
- **Lutchyn, Sau & Das Sarma (2010)** : Majorana fermions and a topological phase transition in semiconductor-superconductor heterostructures. *Phys. Rev. Lett.* **105**, 077001. [doi:10.1103/PhysRevLett.105.077001](https://doi.org/10.1103/PhysRevLett.105.077001)
- **Chiu, Teo, Schnyder & Ryu (2016)** : Classification of topological quantum matter with symmetries. *Rev. Mod. Phys.* **88**, 035005. [doi:10.1103/RevModPhys.88.035005](https://doi.org/10.1103/RevModPhys.88.035005)
- **Alicea (2012)** : New directions in the pursuit of Majorana fermions in solid state systems. *Rep. Prog. Phys.* **75**, 076501. [doi:10.1088/0034-4885/75/7/076501](https://doi.org/10.1088/0034-4885/75/7/076501)
- **Sato & Ando (2017)** : Topological superconductors: a review. *Rep. Prog. Phys.* **80**, 076501. [doi:10.1088/1361-6633/aa6ac7](https://doi.org/10.1088/1361-6633/aa6ac7)

### Superconductor-Ferromagnet / Spintronics

- **Bulaevskii et al. (1985)** : Coexistence of superconductivity and magnetism: theoretical predictions and experimental results. *Adv. Phys.* **34**, 175–261. [doi:10.1080/00018738500101741](https://doi.org/10.1080/00018738500101741)
- **Buzdin (2005)** : Proximity effects in superconductor-ferromagnet heterostructures. *Rev. Mod. Phys.* **77**, 935–976. [doi:10.1103/RevModPhys.77.935](https://doi.org/10.1103/RevModPhys.77.935)
- **Bergeret, Volkov & Efetov (2005)** : Odd triplet superconductivity and related phenomena in superconductor-ferromagnet structures. *Rev. Mod. Phys.* **77**, 1321–1373. [doi:10.1103/RevModPhys.77.1321](https://doi.org/10.1103/RevModPhys.77.1321)
- **Berezinskii (1974)** : New model of the anisotropic phase of superfluid He3. *JETP Letters* **20**, 287–289.
- **Linder & Robinson (2015)** : Superconducting spintronics. *Nature Physics* **11**, 307–315. [doi:10.1038/nphys3242](https://doi.org/10.1038/nphys3242)
- **Eschrig (2015)** : Spin-polarized supercurrents for spintronics: a review of current progress. *Rep. Prog. Phys.* **78**, 104501. [doi:10.1088/0034-4885/78/10/104501](https://doi.org/10.1088/0034-4885/78/10/104501)
- **Eschrig et al. (2003)** : Theory of Half-Metal/Superconductor Heterostructures. *Phys. Rev. Lett.* **90**, 137003. [doi:10.1103/PhysRevLett.90.137003](https://doi.org/10.1103/PhysRevLett.90.137003)
- **Jeon et al. (2018)** : Enhanced spin pumping into superconductors provides evidence for superconducting pure spin currents. *Nature Materials* **17**, 499–503. [doi:10.1038/s41563-018-0058-9](https://doi.org/10.1038/s41563-018-0058-9)

---

## Connections
- [[BdG Formalism]]: Nambu structure and superconducting Green’s functions
- [[Topological Superconductivity]] : Green’s-function signatures of topological phases
- [[K-Theory Classification of Topo Ins and Topo SC]] : symmetry classes in Green’s-function language
- [[π-Junctions]] : TBD
- [[Chapter 2 - Quasiclassical Theory of Superconductivity Eilenberger and Usadel Equations]] The continuation and detailed dealing of the Quasiclassical Formalism
- [[SC-FM Heterostructures]] : superconducting proximity effects in hybrid systems
- [[Odd-Parity Triplet Pairing]] : anomalous Green’s functions and unconventional pairing