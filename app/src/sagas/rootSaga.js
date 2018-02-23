import { fork } from 'redux-saga/effects';
import watchPutForm from './watcher';
import regeneratorRuntime from 'regenerator-runtime';

// Registers watcher saga(s and exports a single generator as root Saga
export default function* startForman(){
  console.log('foreman running?')
  yield fork(watchPutForm);
}
