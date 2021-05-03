import firebase from 'firebase/app';
import 'firebase/auth'
import { environment } from './assets/env/firebaseEnv'

const app = firebase.initializeApp({
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId
})

export const auth = app.auth()
export default app