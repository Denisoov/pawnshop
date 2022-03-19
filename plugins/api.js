import Auth from '@/api/auth'

export default (context, inject) => {

    const apiFactories = {
        auth:  Auth(context.$axios)
    }

    inject('api', apiFactories)
}