import React, { ReactNode } from 'react'
import {
  withStreamlitConnection,
  StreamlitComponentBase,
  Streamlit,
} from 'streamlit-component-lib'
import Cards from './components/Cards'

interface State {
  label: string,
  icon: string
}

class MyComponent extends StreamlitComponentBase<State> {
  public render = (): ReactNode => {
    return (
      <Cards />
    )
  }
}

export default withStreamlitConnection(MyComponent)
