import netlifyIdentity from 'netlify-identity-widget'

export default defineNuxtPlugin(() => {
  netlifyIdentity.init()

  return {
    provide: {
      netlifyIdentity
    }
  }
})