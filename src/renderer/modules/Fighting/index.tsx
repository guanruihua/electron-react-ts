import { useState } from 'react'
import { _array, _math } from 'rh-js-methods'
import { useFight } from './hook'
import './index.scss'

function Cell(props: any) {
  const { className = '', children, ...rest } = props
  return (
    <div {...rest} className={`fighting-panel-cell ${className}`}>
      {children}
    </div>
  )
}

let x: number = 24
let y: number = 10
let itemW: number = 4
let itemH: number = 7.5
let canRunRangs: number[] = [1, 2]
let layoutArray: any[][] = _array.initMultArray({ key: 'id' }, `${x * y}`)

function Index() {
  const [xx, setXX] = useState(1)
  const [yy, setYY] = useState(1)
  // 指定实体
  const [selectIndex, setSelectIndex] = useState(0)

  const [handeleXYs, renderXYs]: any = useFight(2, [
    [1, 1],
    [10, 3]
  ])

  const handleX = (): void => {
    setXX(xx + 1)
  }
  const handleY = (): void => {
    setYY(yy + 1)
  }
  return (
    <div className='fighting'>
      <div className='fighting-panel'>
        <div
          className='own'
          onClick={(): void => {
            // selectIndex = 0
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
          let istyle: any = {}
          let flag: boolean = false
          let canRun: boolean = false
          let ix: number = (iindex + 1) % x
          let iy: number = _math.ceil((iindex + 1) / x)
          if (iindex < x || iindex > (y - 1) * x - 1) flag = true
          if (flag === false) {
            for (let i: number = 1; i < y; i++) {
              if (iindex === i * x || iindex === i * x - 1) {
                flag = true
                break
              }
            }
          }
          // 1-7
          // 8-14

          // 判断是否可以移动到改位置
          const [px, py]: number[] = renderXYs[selectIndex]
          let ipx: number = Math.abs(px + 1 - ix)
          let ipy: number = Math.abs(py + 1 - iy)
          const canRunRang: number = canRunRangs[selectIndex]
          if (ipx + ipy <= canRunRang) {
            canRun = true
          }
          if (!flag && canRun) {
            istyle['backgroundColor'] = 'rgba(86,156,233,0.3)'
          }

          return (
            <Cell
              key={iindex + ilist.key}
              onClick={() => {
                console.log({
                  selectIndex,
                  iindex,
                  x: (iindex + 1) % x,
                  y: _math.ceil((iindex + 1) / x)
                })
                !flag &&
                  handeleXYs(selectIndex, {
                    x: ((iindex + 1) % x) - 1,
                    y: _math.ceil((iindex + 1) / x) - 1
                  })
              }}
              style={istyle}
              className={flag ? `fighting-panel-cell-border` : ''}
            >
              {/* {iindex} */}
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
            handleX()
          }}
        >
          x
        </button>
        <button onClick={() => handleY()}>y</button>
        <div className='fighting-info-user-base'>
          <span>
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
          </span>

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
