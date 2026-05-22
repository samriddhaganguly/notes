# SC-FM Heterostructures

Tags: #heterostructure #proximity-effect #SC-FM #interface #Andreev

---

## What Is It?
A **superconductor-ferromagnet (SC-FM) heterostructure** is a layered system where a superconductor is placed in direct contact with a ferromagnet. The competition and cooperation between superconducting (pairing) and ferromagnetic (spin-polarization) orders produces rich physics absent in either material alone.

---

## Competing Order Parameters

| Order | SC | FM |
|---|---|---|
| **Tendency** | Pairs electrons into singlets (↑↓) | Aligns spins (↑↑) |
| **Energy scale** | Δ (gap) | J_ex (exchange energy) |
| **Effect on other** | Suppresses FM | Pair-breaks singlets |

**Key length scales:**
- ξ_S = SC coherence length (Cooper pair size) ~ 10–100 nm
- ξ_F = FM coherence length (pair oscillation) ~ 1–10 nm (short!)
- ξ_N = normal metal coherence length ~ 100s nm

---

## Proximity Effect

When SC and FM are in contact:
- Superconducting correlations **leak** into the FM (Andreev reflection)
- Magnetic correlations **leak** into the SC (pair-breaking)

### In the FM (singlet):
The order parameter **oscillates and decays**:
$$F(x) \propto e^{-x/\xi_F} \cos(x/\xi_F)$$
This is the **FFLO-like oscillation**: the exchange field acts like a momentum boost on pairs.

### In the SC:
- Thin FM → suppresses Tc
- Exchange field induces **spin-split DOS** (Yu-Shiba-Rusinov states)
- Can induce **π-junctions** (order parameter changes sign)

---

## Interface Physics

The interface is where most of the interesting physics happens:

**Andreev Reflection:** Electron from normal side → Cooper pair in SC + reflected hole
- Retro-Andreev (normal metal)
- Specular Andreev (graphene, topological)

**Spin-Mixing:** Spin-dependent phase shifts at interface generate **triplet correlations**
$$r_{\uparrow\uparrow} \neq r_{\downarrow\downarrow}$$

**Spin-Active Interface:** Interface with spin-orbit coupling or magnetic disorder
- Converts singlet → triplet locally
- Essential for LRTC generation

---

## Common Heterostructure Geometries

```
SC | FM              — Bilayer (basic proximity)
SC | FM | SC         — π-junction / 0-π transition
SC | F1 | F2 | SC    — Spin-valve (non-collinear → LRTC)
SC | N | FM          — Spacer controls coupling
N | SC | FM | N      — Full transport device (NEGF target)
```

---

## π-Junctions

In SC/FM/SC Josephson junctions:
- Thin FM: **0-junction** (normal phase)
- Thicker FM: **π-junction** (order parameter shifts by π)
- Transition tunable by temperature, thickness, field

$$I_c(d_{FM}) \propto e^{-d_{FM}/\xi_F}\cos(d_{FM}/\xi_F)$$

This has been **experimentally observed** and forms the basis for superconducting memory devices.

---

## Key Material Systems

| Materials | Notes |
|---|---|
| Nb / Permalloy (Ni₈₀Fe₂₀) | Classic, well-studied |
| Nb / Co, Ni | Strong FM, clear FFLO oscillations |
| Nb / CrO₂ | Half-metallic FM → LRTC demonstrated |
| Al / EuS | Thin-film, spin-split SC |
| NbSe₂ / EuS | 2D van der Waals heterostructure |
| Bi₂Se₃ / SC | Topological insulator + SC → TSC |

---

## Transport Signatures

| Observable | Signature |
|---|---|
| Andreev conductance | Sub-gap peaks/dips |
| Josephson current | 0-π oscillations with FM thickness |
| ZBCP | Majorana or trivial Andreev |
| Spin-polarized current | Crossed Andreev reflection |
| dI/dV vs V | Reflects density of states |

---

## Connection to Topological SC

Engineering **effective p-wave** pairing in heterostructures:
- SC proximity + **strong spin-orbit coupling** + FM exchange → topological SC
- Kitaev chain analogue in 1D nanowire
- Signatures: **Majorana bound states** at ends → ZBCP

---

## Key Papers to Read
- [ ] Buzdin : Proximity effects in SC-FM systems (Rev. Mod. Phys. 2005)
- [ ] Bergeret, Volkov, Efetov : Odd triplet superconductivity (Rev. Mod. Phys. 2005)
- [ ] Demler et al. : π-junctions
- [ ] Keizer et al. : LRTC in CrO₂ (Nature 2006)
- [ ] Robinson et al. : Controlled LRTC generation
- [ ] [[]] ← More soon

---

## Connections
- [[Chapter 1 - The Green's Function Formalism]] : transport method for these systems
- [[Odd-Parity Triplet Pairing]] : triplet generated at SC-FM interface
- [[Topological Superconductivity]] : end goal via heterostructure engineering
- [[Andreev Reflection]] ← Soon
- [[π-Junctions]] ← Soon

---

## My Notes / Open Questions
- 
