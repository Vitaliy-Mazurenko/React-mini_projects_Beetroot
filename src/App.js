/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";
import React from "react"
import Counter from "./components/Counter"
import Form from "./components/Form"
import {Button, NewButton} from './components/styles/counter'
import {WrapApp} from './components/styles/app'
import {yellow, green, gray} from './components/styles/colors'
import * as mq from './components/styles/mq'

function App() {
  return (
    <div className="container"
      css={{
        backgroundColor: 'teal',
        [mq.small]: {backgroundColor: yellow},
        [mq.medium]: {backgroundColor: green},
        [mq.large]: {backgroundColor: gray},
      }}
    >
      <div className="row">
        <Counter>
          { ({count, increment, decrement}) => 
            <>
              <h1>Counter: {count}</h1>
              <Button mr="1rem" onClick={increment}>Increment</Button>
              <NewButton onClick={decrement}>Decrement</NewButton>
         </>
    }
        </Counter>
      </div>
      <WrapApp>
        <Form />
      </WrapApp>
    </div>
  )
}

export default App
