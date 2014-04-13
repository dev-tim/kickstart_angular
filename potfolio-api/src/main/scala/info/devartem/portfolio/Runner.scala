package info.devartem.portfolio

import akka.actor.{Props, ActorSystem}
import akka.io.IO
import spray.can.Http
import info.devartem.portfolio.http.RoutesServiceActor

object Runner extends App with Core {
  //boostrap Spray with routes
  val handler = actorSystem.actorOf(Props[RoutesServiceActor], name = "handler")
  IO(Http) ! Http.Bind(handler, interface = "localhost", port = 7777)
}
