import React from 'react'
import ReactDOM from 'react-dom'
import { fromJS } from 'immutable'
import Main from './Main'
import './index.css'
import redaxeInit from 'redaxe'
import ImmutableLogger from './lib/ImmutableLogger'
import { syncData, localStorageMiddlewareImmutable } from './lib/LocalStorage'

let syncProp = ['nodeCache', 'rootName', 'rootAddress']
let initialData = {
  rootName: '',
  rootAddress: '0x0000000000000000000000000000000000000000',
  nodes: [],
  nodeCache: [],
  notifications: [],
  publicResolver: '',
  selectedNode: '',
  updateForm: {
    newOwner: '',
    newResolver: '',
    newSubDomain: '',
    subDomain: '',
    newAddr: '',
    newContent: ''
  },
  currentTab: 'nodeDetails'
}

//var syncedData = syncData(syncProp)(initialData)

let middleware = [
  ImmutableLogger,
  //localStorageMiddlewareImmutable(syncProp, Immutable)
]

redaxeInit(
  fromJS(initialData),//fromJS(syncedData),
  () => ReactDOM.render(<Main />, document.getElementById('root')),
  middleware
)
