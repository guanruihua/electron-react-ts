import React from 'react'
import { _array } from 'rh-js-methods'
import './index.scss'

function Cell(props: any) {
  const { className = '', children, ...rest } = props
  return (
    <div {...rest} className={`fighting-panel-cell ${className}`}>
      {children}
    </div>
  )
}

let x: number = 20
let y: number = 10
let layoutArray: any[][] = _array.initMultArray({}, `${x * y}`)
function Index(props: any) {
  console.log({ a: layoutArray })
  return (
    <div className='fighting'>
      <div className='fighting-panel'>
        {layoutArray.map((ilist: any[], iindex: number): any => {
          return <Cell>{iindex}</Cell>
        })}
      </div>
      <div className='fighting-info'>
        <div className='fighting-info-user-base'>
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
