package info.devartem.portfolio

import akka.actor.{Props, ActorSystem}
import akka.routing.RoundRobinRouter
import info.devartem.portfolio.actors.{TwitterActor, GithubActor}

trait Core {
  implicit lazy val actorSystem = ActorSystem("backend-service")
}


object CoreActors extends Core {
  val githubActor = actorSystem.actorOf(Props[GithubActor].withRouter(RoundRobinRouter(3)), name = "githubActor")
  val twitterActor = actorSystem.actorOf(Props[TwitterActor].withRouter(RoundRobinRouter(3)), name = "twitterActor")
}
