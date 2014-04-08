package info.devartem.portfolio

import akka.actor.{Props, ActorSystem}
import akka.io.IO
import spray.can.Http
import info.devartem.portfolio.http.StatsServiceActor

object Runner extends App {

  override def main(args: Array[String]) = {
    implicit val actorSystem = ActorSystem("system")

    val handler = actorSystem.actorOf(Props[StatsServiceActor], name = "handler")
    IO(Http) ! Http.Bind(handler, interface = "localhost", port = 7777)
  }
}
