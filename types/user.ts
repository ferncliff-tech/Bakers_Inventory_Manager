export interface DBUser {
    id: string
    username: string
    password: string
    userDeniedSquare?: boolean
    firstName?: string | null
    lastName?: string | null
    salt: string
    avatar: string
    createdAt: Date
    squareData?: SquareData | null
    metaData?: MetaData | null
}

export interface CreateUser {
    username: string
    password: string
    firstName: string
    lastName: string
    salt: string
    avatar: string
}

export interface BasicUserData {
    username: string
    firstName: string
    lastName: string
    avatar: string
}

export interface SquareData {
    id?: number
    tokens?: string
    refreshToken?: string
    expiresAt?: string
    merchantId?: string
    userId?: string
}

export interface MetaData {
    id?: number
    userId?: string
    iv?: string
    scopes?: string
    squareTokenLastUpdated?: string | Date
}

export interface Tokens {
    accessToken: string
    refreshToken: string
}

export interface LastModifiedData {
    [key: string]: {
        id: string
    }
}

export interface MerchantData {
    [key: string]: string
}

export interface AuthStatus {
    isAuthed: boolean
    userDeniedSquare: boolean
}
