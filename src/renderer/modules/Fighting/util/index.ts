// export function isBorder(index: number, x: number, y: number): boolean {
//   if (index < x || index > (y - 1) * x - 1) return true
//   for (let i: number = 1; i < y; i++) {
//     if (index === i * x || index === i * x - 1) return true
//   }
//   return false
// }

export function isCanRun([px, py]: number[], [ix, iy]: number[], canRunRang: number = 1): boolean {
  if (Math.abs(px + 1 - ix) + Math.abs(py + 1 - iy) <= canRunRang) {
    return true
  }
  return false
}

export const hurtConfigType: { [key: string]: string } = {
  line: 'Line', // 行 [上,右,下,左, 上长,右长,下长,左长](自身长度也算一)
  lines: 'Lines', // 多行
  range: 'Range', // 范围
  rangeArea: 'ReangeArea', // 地区范围 x*x
  rangeAreas: 'ReangeAreas', // 多个地区范围 x*x
  ceil: 'Ceil', // 单格
  ceils: 'Ceils' // 多个单元格
}

export function isHurt(
  type: string,
  [px, py]: number[],
  rang: number[],
  [ix, iy]: number[]
): boolean {
  if (type === hurtConfigType.line) {
    if (rang[0] && Math.abs(py - iy + 1) < rang[4] && iy < py + 1 && px + 1 === ix) return true
    if (rang[1] && py + 1 === iy && ix > px + 1 && Math.abs(px + 1 - ix) < rang[5]) return true
    if (rang[2] && Math.abs(py + 1 - iy) < rang[6] && iy > py + 1 && py + 1 <= iy && px + 1 === ix)
      return true
    if (rang[3] && Math.abs(px + 1 - ix) < rang[7] && px + 1 >= ix && py + 1 === iy) return true
  }
  return false
}

export function setStyle(
  canRun: boolean = false,
  hurtFlag: boolean = false
): { [key: string]: any } {
  let istyle: { [key: string]: any } = {}
  // 判断是否可以移动到改位置, 切不为边界
  if (canRun) {
    istyle['backgroundColor'] = 'rgba(86,156,233,0.6)'
  }
  if (hurtFlag) {
    istyle['backgroundColor'] = 'rgba(223,72,75,0.6)'
  }
  return istyle
}
