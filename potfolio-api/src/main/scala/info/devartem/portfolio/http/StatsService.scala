package info.devartem.portfolio.http

import akka.actor._
import org.json4s.jackson.Serialization._
import spray.routing._
import spray.http._
import scala.concurrent.Future
import info.devartem.portfolio.http.handler.{Handler, TwitterStatsHandler}
import org.json4s.DefaultFormats

class StatsServiceActor extends Actor with ActorLogging with StatsService {
  def actorRefFactory = context

  def receive = runRoute(demoRoutes)
}

trait StatsService extends HttpService {

  implicit def executionContext = actorRefFactory.dispatcher

  val demoRoutes = {
    pathSingleSlash {
      complete("/")
    }
    path("twitter" / "all") {
      handle1(TwitterStatsHandler)
    }
  }

  def handle1(handler: Handler, params: Option[AnyRef] = None)(ctx: RequestContext) = {
    val f: Future[String] = executionContext.execute({
      val requestBody = ctx.request.entity.asString(HttpCharsets.`UTF-8`)
      val executionResult = handler(requestBody, params)
      write(executionResult)
    })
    ctx.complete(f)
  }

}


