export interface IUser {
   avatar: null
   created_at: string
   email: string
   id: string
   name: string
   password: null
   role: EUserRoles
   subscription: IUserSubscription
   tg_id: null
}

export interface IUserSubscription {
   additional_tokens: number
   created_at: string
   id: string
   plan: IUserSubscriptionPlan
   plan_id: string
   tokens: number
   user_id: string
}

export interface IUserSubscriptionPlan {
   currency: ECurrency
   id: string
   price: number
   tokens: number
   type: EPlanTypes
}

export interface IUserTransItem {
   amount: number
   created_at: Date
   currency: ECurrency
   external_id: null
   id: string
   meta: null
   plan_id: null
   provider: string
   referral_id: null
   status: ETransStatus
   type: ETransType
   user_id: string
}

export enum EUserRoles {
   USER
}

export enum ECurrency {
   RUB,
   SYSTEM_TOKEN
}

export enum EPlanTypes {
   FREE
}

export enum ETransStatus {
   SUCCEDED
}

export enum ETransType {
   REPLENISH,
   WRITE_OFF
}