export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id'
}

export enum AuthStatus {
  Auth = 'AUTH',
  UnAuth = 'UNAUTH'
}

export enum VideoStatus {
  Playing = 'PLAYING',
  Paused = 'PAUSED',
  Stopped = 'STOPPED'
}
