import type { Championship } from '@/types'
import { F1_2026 } from './f1-2026'
import { F2_2026 } from './f2-2026'
import { F3_2026 } from './f3-2026'
import { F1_ACADEMY_2026 } from './f1-academy-2026'
import { INDYCAR_2026 } from './indycar-2026'
import { SUPER_FORMULA_2026 } from './super-formula-2026'
import { F4_BRASIL_2026 } from './f4-brasil-2026'
import { FRECA_2026 } from './freca-2026'
import { MOTOGP_2026 } from './motogp-2026'
import { MOTOAMERICA_2026 } from './motoamerica-2026'
import { FORMULA_E_2026 } from './formula-e-2026'
import { WSBK_2026 } from './wsbk-2026'
import { WEC_2026 } from './wec-2026'
import { IMSA_2026 } from './imsa-2026'
import { ELMS_2026 } from './elms-2026'
import { GT_WORLD_CHALLENGE_2026 } from './gt-world-challenge-2026'
import { IGTC_2026 } from './igtc-2026'
import { NLS_2026 } from './nls-2026'
import { DTM_2026 } from './dtm-2026'
import { NASCAR_CUP_2026 } from './nascar-cup-2026'
import { BTCC_2026 } from './btcc-2026'
import { SUPERCARS_2026 } from './supercars-2026'
import { TCR_WORLD_TOUR_2026 } from './tcr-world-tour-2026'
import { WRC_2026 } from './wrc-2026'
import { ERC_2026 } from './erc-2026'

export const ALL_CHAMPIONSHIPS: Championship[] = [
  // Formula
  F1_2026,
  F2_2026,
  F3_2026,
  F1_ACADEMY_2026,
  INDYCAR_2026,
  SUPER_FORMULA_2026,
  F4_BRASIL_2026,
  FRECA_2026,
  FORMULA_E_2026,
  // Moto
  MOTOGP_2026,
  MOTOAMERICA_2026,
  WSBK_2026,
  // Endurance
  WEC_2026,
  IMSA_2026,
  ELMS_2026,
  GT_WORLD_CHALLENGE_2026,
  IGTC_2026,
  NLS_2026,
  // Touring
  DTM_2026,
  NASCAR_CUP_2026,
  BTCC_2026,
  SUPERCARS_2026,
  TCR_WORLD_TOUR_2026,
  // Rally
  WRC_2026,
  ERC_2026,
]

export {
  F1_2026, F2_2026, F3_2026, F1_ACADEMY_2026,
  INDYCAR_2026, SUPER_FORMULA_2026, F4_BRASIL_2026, FRECA_2026, FORMULA_E_2026,
  MOTOGP_2026, MOTOAMERICA_2026, WSBK_2026,
  WEC_2026, IMSA_2026, ELMS_2026, GT_WORLD_CHALLENGE_2026, IGTC_2026, NLS_2026,
  DTM_2026, NASCAR_CUP_2026, BTCC_2026, SUPERCARS_2026, TCR_WORLD_TOUR_2026,
  WRC_2026, ERC_2026,
}
