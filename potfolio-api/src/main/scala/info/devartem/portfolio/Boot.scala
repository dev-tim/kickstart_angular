package info.devartem.portfolio

import akka.actor.{Props, ActorSystem}
import akka.io.IO
import spray.can.Http
import info.devartem.portfolio.service.{TwitterService, RoutesHandlerService, StaticService}
import spray.routing.RouteConcatenation

object Boot extends App with Core with RouteConcatenation {

  private implicit val ex = actorSystem.dispatcher

  val compoundRoutes =
    new StaticService().route ~
      new TwitterService().route

  val rootHandler = actorSystem.actorOf(Props(new RoutesHandlerService(routes = compoundRoutes)), name = "handler")
  IO(Http) ! Http.Bind(rootHandler, interface = "localhost", port = 7777)
}
