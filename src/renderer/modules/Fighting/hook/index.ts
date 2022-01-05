import React from 'react'

export function useFight(num: number = 2, initState?: [number, number][]): any[] {
  const renderXYs: [number, number][] = []
  const handleStates: any[] = []

  while (num--) {
    const [x, setX] = React.useState((initState && initState[num][0]) || 0)
    const [y, setY] = React.useState((initState && initState[num][1]) || 0)

    renderXYs.push([x, y])
    handleStates.push([setX, setY])
  }

  const handeleXYs: any = (index: number, coordinates: { x?: number; y?: number }): void => {
    if (coordinates.x) {
      handleStates[index][0](coordinates.x)
    }
    if (coordinates.y) {
      handleStates[index][1](coordinates.y)
    }
  }
  return [handeleXYs, renderXYs]
}
