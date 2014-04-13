package info.devartem.portfolio.http

import akka.actor._
import spray.routing._
import akka.pattern.ask
import scala.util.{Failure, Success}
import info.devartem.portfolio.CoreActors
import info.devartem.portfolio.actors.TwitterActor.{TweetCount, CountTweets}
import akka.util.Timeout
import scala.util.control.NonFatal
import spray.util.LoggingContext
import info.devartem.portfolio.CoreActors._

class RoutesServiceActor extends Actor with ActorLogging with RoutesHandler {
  def actorRefFactory = context

  implicit val handler = ExceptionHandler {
    case NonFatal(e) => ctx => {
      log.error(e, "Error")
      ctx.complete("")
    }
  }

  def receive = runRoute(routes)(handler, RejectionHandler.Default, context, RoutingSettings.default(actorRefFactory),
    LoggingContext.fromActorRefFactory(actorRefFactory))
}

trait RoutesHandler extends HttpService {

  implicit def executionContext = actorRefFactory.dispatcher

  implicit def timeout = Timeout(1000)


  val routes = {
    pathSingleSlash {
      complete("/")
    } ~
      path("tweets") {
        val f = twitterActor ? CountTweets mapTo manifest[TweetCount]
        onComplete(f) {
          case Success(twCount) => {
            complete("Twittes count" + twCount.count)
          }
          case Failure(e) => failWith(e)
        }
      } ~
      path("commits") {
        complete("ok")
      } ~
      path("projects") {
        complete("ok")
      }
  }
}


