import { FunctionComponent } from 'react'
import RampTemplate from './ramp'
import GemmaTemplate from './gemma'
import { IWorkSlugs } from '@/shared/types'

interface CompountedComponent extends Partial<Record<IWorkSlugs, FunctionComponent<any>>> {}

const WorkTemplate: CompountedComponent = {}

WorkTemplate['ramp'] = RampTemplate
WorkTemplate['gemma-russia'] = GemmaTemplate

export default WorkTemplate
