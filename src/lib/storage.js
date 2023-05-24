export const BASE_KEY = 'online_finance_';

export const set = (key, value) => {
    localStorage.setItem(key, value)
}

export const get = key => {
    return localStorage.getItem(key)
}

export const remove = key => {
    return localStorage.removeItem(key)
}

export const setToken = token => {
    set(`${BASE_KEY}token`, token)
}

export const getToken = () => {
    return get(`${BASE_KEY}token`)
}


export const removeToken = () => {
    return remove(`${BASE_KEY}token`)
}

export const setUser = user => {
    set(`${BASE_KEY}user`, user)
}

export const getUser = () => {
    return JSON.parse(get(`${BASE_KEY}user`))
}

export const removeUser = () => {
    return remove(`${BASE_KEY}user`)
}

export const setRequestAmt = amount => {
    set(`${BASE_KEY}requestAmt`, amount)
}

export const setStepId = id => {
    set(`${BASE_KEY}stepId`, id)
}

export const getStepId = () => {
    return JSON.parse(get(`${BASE_KEY}stepId`))
}

export const removeStepId = () => {
    return remove(`${BASE_KEY}stepId`)
}