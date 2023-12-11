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

export enum EUserRoles {
   USER
}

export enum ECurrency {
   RUB
}

export enum EPlanTypes {
   FREE
}