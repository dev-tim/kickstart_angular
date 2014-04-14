package info.devartem.portfolio.service

import spray.routing.Directives

class StaticService extends Directives {
  val route =
    pathSingleSlash {
      get {
        complete("/")
      }
    }
}
