import { _array, _math } from 'rh-js-methods'
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
let layoutArray: any[][] = _array.initMultArray({ key: 'id' }, `${x * y}`)
function Index() {
  // console.log({ a: layoutArray })
  return (
    <div className='fighting'>
      <div className='fighting-panel'>
        {layoutArray.map((ilist: any, iindex: number): any => {
          let flag: boolean = false
          if (iindex < x || iindex > (y - 1) * x - 1) flag = true
          if (flag === false) {
            for (let i: number = 1; i < y; i++) {
              if (iindex === i * x || iindex === i * x - 1) {
                flag = true
                break
              }
            }
          }
          return (
            <Cell
              key={iindex + ilist.key}
              onClick={() => {
                console.log({ iindex, x: (iindex + 1) % x, y: _math.ceil((iindex + 1) / x) })
              }}
              className={flag ? `fighting-panel-cell-border` : ''}
            >
              {iindex}
            </Cell>
          )
        })}
      </div>
      <div className='fighting-info'>
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
