import { FC, useEffect, useState } from 'react'
import './index.scss'

const Option: FC<any> = (props: any) => {
  const { tab, active, ...rest } = props
  return <div {...rest}>{props.children}</div>
}

const Index: any = (props: any) => {
  const {
    defaultActiveKey = '',
    onChange,
    width = 800,
    height = 400,
    fontSize = 14,
    style,
    children
  }: any = props

  const [selectActive, setSelectActive] = useState(defaultActiveKey)

  useEffect(() => {
    setSelectActive(defaultActiveKey)
  }, [defaultActiveKey])

  const handleTitleSelect = (val: any): void => {
    setSelectActive(val)
    onChange && onChange(val)
  }

  return (
    <div className='rh-tab-content' style={{ width, height, ...style }}>
      <div className='rh-tab-header'>
        {children &&
          children.map((item: any = {}):any => {
            const { tab, active = undefined } = item.props
            if (active !== undefined)
              return (
                <div
                  key={active}
                  style={{ fontSize }}
                  className={`rh-tab-title ${
                    selectActive === active ? 'rh-tab-title-select' : 'rh-tab-title-noselect'
                  }`}
                  onClick={(): void => handleTitleSelect(active)}
                >
                  {tab}
                </div>
              )
          })}
      </div>

      {children.map((item: any):any => {
        const { active = undefined, ...rest } = item.props
        if (active !== undefined)
          return (
            <div
              {...rest}
              className={`rh-tab-pane ${
                selectActive === active ? 'rh-tab-pane-select' : 'rh-tab-pane-noselect'
              }`}
              key={active + 'pane'}
            >
              {item.props.children}
            </div>
          )
      })}
    </div>
  )
}

Index.Option = Option

export default Index
