import { getRepos, getUserData } from '@utils/github-api'

const isObject = a => !!a && a.constructor === Object

it('repository requests are safe', async () => {
  expect(Array.isArray(await getRepos('facebook'))).toBe(true)
  expect(Array.isArray(await getRepos('google'))).toBe(true)
  expect(Array.isArray(await getRepos('cyrusdean'))).toBe(true)
  expect(Array.isArray(await getRepos('ehsrthbndxhjdrtjass'))).toBe(true)
})

it('user requests are safe', async () => {
  expect(isObject(await getUserData('facebook'))).toBe(true)
  expect(isObject(await getUserData('google'))).toBe(true)
  expect(isObject(await getUserData('cyrusdean'))).toBe(true)
  expect(isObject(await getUserData('ehnjrsjdeshnedrsbhedawe'))).toBe(true)
})
