import { config, start, componentFactory } from 'xr-meta-engine'
import myConfig  from './config'

import xr_template_root_about from './apps/xr-template-root/apps/xr-template-root-about/index.js'
import xr_template_root_helloWorld from './apps/xr-template-root/apps/xr-template-root-helloWorld/index.js'
import xr_template_root from './apps/xr-template-root/index.js'

const apps = {
	[xr_template_root_about.name]:xr_template_root_about,	
	[xr_template_root_helloWorld.name]:xr_template_root_helloWorld,	
	[xr_template_root.name]:xr_template_root,	
}


config(myConfig({apps}))


import * as xrComponents from 'xr-component'

Object.keys(xrComponents).forEach(key=>{
	componentFactory.registerComponent(key, xrComponents[key])
})
	

start()