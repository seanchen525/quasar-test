/*
export function someAction (context) {
}
*/
import * as types from './mutation_type'

export const login = ({ commit }, userInfo) => {
  return userInfo.axios.post('/api/login', userInfo).then(({ data }) => {
    commit(types.SET_TOKEN, data.token)
    commit(types.SET_USER, userInfo)
  })
}
