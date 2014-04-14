package info.devartem.portfolio.service

import akka.pattern.ask
import info.devartem.portfolio.CoreActors._
import spray.routing.Directives
import org.json4s.DefaultFormats
import info.devartem.portfolio.actors.TwitterActorMessages._
import scala.util.Failure
import scala.concurrent.ExecutionContext
import org.json4s.jackson.Serialization.write


class GithubService(implicit ex: ExecutionContext) extends Directives {

  implicit val formats = DefaultFormats

  val route =
    path("github" / "commits") {
      get {
        complete("")
      }
    } ~ path("github" / "commits") {
      complete("")
    }
}