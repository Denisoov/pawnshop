export default function ({ store, redirect, route }) {
  const token = store.state.user.token

  //добавить проверку на куки

  console.log(token)

  if (!token) {
    if (route.name !== 'login') {
        redirect('/login')
    }
  }
  else if (token) {
    if (route.name === 'login') {
      redirect('/')
    }
  }

}