package info.devartem.portfolio.service

import akka.actor._
import spray.routing._
import scala.util.control.NonFatal
import spray.util._

class RoutesHandlerService(val routes: Route) extends Actor with ActorLogging with HttpService {
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


