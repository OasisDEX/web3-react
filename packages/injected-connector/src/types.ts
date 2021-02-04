export type SendReturnResult = { result: any }
export type SendReturn = any

export type Request = ({ method, params }: { method: string; params?: any[] }) => Promise<SendReturn>
export type Send = (method: string, params?: any[]) => Promise<SendReturnResult | SendReturn>
export type SendOld = ({ method }: { method: string }) => Promise<SendReturnResult | SendReturn>
