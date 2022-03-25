export default async function ({ store, redirect, route }) {
  const token = await store.state.user.token

  if (token) {
    if (route.name !== 'login') {
        redirect('/login')
    }
  }
}