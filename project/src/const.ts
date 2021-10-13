export enum AppRoute {
  MainPage = '/',
  SignInPage = '/login',
  MyListPage = '/mylist',
  MoviePage = '/films/:id',
  AddReviewPage = '/films/:id/review',
  PlayerPage = '/player/:id'
}

export enum AuthStatus {
  Auth = 'AUTH',
  UnAuth = 'UNAUTH'
}
