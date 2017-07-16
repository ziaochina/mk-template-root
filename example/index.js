import { config, start, componentFactory } from 'mk-meta-engine'
import myConfig  from './config'

import mk_template_root_about from './apps/mk-template-root/apps/mk-template-root-about/index.js'
import mk_template_root_helloWorld from './apps/mk-template-root/apps/mk-template-root-helloWorld/index.js'
import mk_template_root from './apps/mk-template-root/index.js'

const apps = {
	[mk_template_root_about.name]:mk_template_root_about,	
	[mk_template_root_helloWorld.name]:mk_template_root_helloWorld,	
	[mk_template_root.name]:mk_template_root,	
}


config(myConfig({apps}))


import * as mkComponents from 'mk-component'

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	

start()