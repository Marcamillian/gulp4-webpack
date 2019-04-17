import gulp from 'gulp'

import { scripts } from './webpack'
import { server }  from './server'
import { scripts as reactScript } from './react-webpack'
import { server as reactServer } from './react-server'


export const dev   = gulp.series( server )
export const build = gulp.series( scripts )
export const react_dev = gulp.series( reactServer )
export const react_build = gulp.series( reactScript )

export default dev
