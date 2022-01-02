import React, { Component } from 'react'
import * as eCharts from 'echarts'
// import Information from '../Information'
import Fighting from '../Fighting'
import ThreePage from '../ThreePage'
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
          <SubTabs.Option tab='11' key='1' active='1'>
            <ThreePage />
          </SubTabs.Option>
          <SubTabs.Option tab='Fighting' key='2' active='2'>
            <Fighting />
          </SubTabs.Option>
          <SubTabs.Option tab='33' key='3' active='3'>
            333
          </SubTabs.Option>
          <SubTabs.Option tab='44' key='4' active='4'>
            444
          </SubTabs.Option>
          <SubTabs.Option tab='55' key='5' active='5'>
            555
          </SubTabs.Option>
        </SubTabs>
      </div>
    )
  }
}

export default Index
