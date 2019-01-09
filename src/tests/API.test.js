import { getRepos, getUserData } from '@utils/github-api'

test('handles repository requests', async () => {
  expect(await getRepos('facebook'))
  expect(await getRepos('google'))
  expect(await getRepos('cyrusdean'))
  expect(await getRepos('ehsrthbndxhjdrtjass'))
})

test('handles user requests', async () => {
  expect(await getUserData('facebook'))
  expect(await getUserData('google'))
  expect(await getUserData('cyrusdean'))
  expect(await getUserData('ehnjrsjdeshnedrsbhedawe'))
})
