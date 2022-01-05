import { useState } from 'react'
import { _array, _math } from 'rh-js-methods'
import { useFight } from './hook'
import { isCanRun, setStyle, isHurt, hurtConfigType } from './util'
import './index.scss'
import { render } from '@testing-library/react'

function Cell(props: any) {
  const { className = '', children, ...rest } = props
  return (
    <div {...rest} className={`fighting-panel-cell ${className}`}>
      {children}
    </div>
  )
}

let x: number = 24
let y: number = 11
let itemW: number = 4
let itemH: number = 7.5
let canRunRangs: number[] = [1, 2]
let layoutArray: any[][] = _array.initMultArray({ key: 'id' }, `${x * y}`)

function Index() {
  // 指定实体
  const [selectIndex, setSelectIndex] = useState(0)

  const [handeleXYs, renderXYs]: any = useFight(2, [
    [1, 1],
    [10, 3]
  ])

  return (
    <div className='fighting'>
      <div className='fighting-panel'>
        <div
          className='own'
          onClick={(): void => {
            if (selectIndex !== 0) setSelectIndex(0)
          }}
          style={{
            left: renderXYs[0][0] * itemW + 'vw',
            top: renderXYs[0][1] * itemH + 'vh'
          }}
        >
          <div style={{ backgroundColor: 'rgba(191,96,211,0.9)' }}>R</div>
        </div>
        <div
          className='enemy'
          onClick={(): void => {
            if (selectIndex !== 1) setSelectIndex(1)
          }}
          style={{ left: renderXYs[1][0] * itemW + 'vw', top: renderXYs[1][1] * itemH + 'vh' }}
        >
          <div>E</div>
        </div>
        {layoutArray.map((ilist: any, iindex: number): any => {
          let ix: number = (iindex + 1) % x
          if (ix <= 0) ix = x - 1
          let iy: number = _math.ceil((iindex + 1) / x)
          let canRun: boolean = isCanRun(renderXYs[selectIndex], [ix, iy], canRunRangs[selectIndex])
          let hurtFlag: boolean = isHurt(
            hurtConfigType.line,
            renderXYs[selectIndex],
            [1, 1, 1, 1, 2, 6, 4, 5],
            [ix, iy]
          )
          let istyle: any = setStyle(canRun, hurtFlag)

          return (
            <Cell
              key={iindex + ilist.key}
              onClick={() => {
                handeleXYs(selectIndex, { x: ix - 1, y: iy - 1 })
              }}
              style={istyle}
            >
              {ix + ',' + iy}
            </Cell>
          )
        })}
      </div>
      <div className='fighting-info'>
        {JSON.stringify(renderXYs[selectIndex])}
        <button
          onClick={() => {
            handeleXYs(0, { x: 1, y: 2 })
          }}
        >
          x
        </button>
        <div className='fighting-info-user-base'>
          {/* <span>
            <div>文字1 100/100</div>
            <div>文字2 100/100</div>
            <div>文字3 100/100</div>
          </span>
          <span>
            <div>文字4 100/100</div>
            <div>文字5 100/100</div>
            <div>文字6 100/100</div>
          </span>
          <span>
            <div>文字7 100/100</div>
            <div>文字8 100/100</div>
            <div>文字9 100/100</div>
          </span> */}

          {/* <span>
            <div>血量</div>
            <div>灵力</div>
            <div>灵魂</div>
          </span>
          <span>
            <div>精神</div>
            <div>物攻</div>
            <div>特攻</div>
          </span>
          <span>
            <div>物防</div>
            <div>特防</div>
            <div>速度</div>
          </span> */}
        </div>
      </div>
    </div>
  )
}

export default Index
