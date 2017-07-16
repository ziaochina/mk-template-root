import React from 'react'
import { action as MetaAction, AppLoader } from 'mk-meta-engine'
import config from './config'

class action {
    constructor(option) {
        this.metaAction = option.metaAction
    }

    onInit = ({ component, injections }) => {
        this.component = component
        this.injections = injections
        injections.reduce('init')
    }
    
    handleAboutClick = () =>{
        this.component.props.onRedirect({appName:'mk-template-root-about', appParams:{}})
    }

    handleHelloClick = () =>{
        this.component.props.onRedirect({appName:'mk-template-root-helloWorld', appParams:{}})   
    }

}

export default function creator(option) {
    const metaAction = new MetaAction(option),
        o = new action({ ...option, metaAction }),
        ret = { ...metaAction, ...o }

    metaAction.config({ metaHandlers: ret })

    return ret
}