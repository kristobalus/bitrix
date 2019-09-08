import { BoolString, NumberString } from '../../entities/common'

export interface StatusExtra {
  readonly SEMANTICS: string
  readonly COLOR: string
}

export interface Status {
  readonly ID: NumberString
  readonly ENTITY_ID: string
  readonly STATUS_ID: NumberString
  readonly NAME: string
  readonly NAME_INIT: string
  readonly SORT: NumberString
  readonly SYSTEM: BoolString
  readonly EXTRA: StatusExtra | undefined
}