import React, { Component } from 'react'
import * as eCharts from 'echarts'
// import Information from '../Information'
import Fighting from '../Fighting'
import ThreePage from '../ThreePage'
import ThreeTestPage from '../ThreeTest'
import { SubTabs } from '../../components'
import './index.scss'

class Index extends Component {
  render() {
    return (
      <div className='home'>
        <SubTabs
          defaultActiveKey={localStorage.panel_active_key || '1'}
          fontSize={14}
          width={'100vw'}
          height={'100vh'}
          onChange={(val: string): void => {
            localStorage.setItem('panel_active_key', val)
          }}
        >
          {/* <SubTabs.Option tab='Three' key='1' active='1'>
            <ThreePage />
          </SubTabs.Option> */}
          <SubTabs.Option tab='Three2' key='11' active='11'>
            <ThreeTestPage />
          </SubTabs.Option>
          <SubTabs.Option tab='Fighting' key='2' active='2'>
            <Fighting />
          </SubTabs.Option>
        </SubTabs>
      </div>
    )
  }
}

export default Index
