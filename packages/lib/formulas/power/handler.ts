import type { FormulaHandler } from '@nordcraft/core/dist/types'

const handler: FormulaHandler<number> = ([a, b]) => {
  if (isNaN(Number(a)) || isNaN(Number(b))) {
    return null
  }

  return Number(a) ** Number(b)
}

export default handler
