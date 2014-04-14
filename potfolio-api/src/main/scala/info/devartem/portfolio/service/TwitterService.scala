package info.devartem.portfolio.service

import akka.pattern.ask
import spray.routing.Directives
import org.json4s.DefaultFormats
import info.devartem.portfolio.CoreActors._
import info.devartem.portfolio.actors.TwitterActorMessages._
import scala.util.{Failure, Success}
import scala.concurrent.ExecutionContext
import org.json4s.jackson.Serialization.write


class TwitterService(implicit ex: ExecutionContext) extends Directives {

  implicit val formats = DefaultFormats

  val route =
    path("tweets") {
      get {
        val f = twitterActor ? GetTweets mapTo manifest[ReceivedTweets]
        onComplete(f) {
          case Success(res) =>
            val json = write(res.tweets)
            complete(json)
          case Failure(e) => failWith(e)
        }
      }
    }
}
