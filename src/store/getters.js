/*
 * @Description:
 * @Author: lz
 * @Date: 2022-04-18 14:03:39
 * @LastEditTime: 2022-04-19 20:55:02
 * @LastEditors: lz
 */
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  themeType: (state) => state.theme.themeType,
  themeColor: (state) => state.theme.themes[state.theme.themeType].color,
}
export default getters
