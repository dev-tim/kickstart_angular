package info.devartem.portfolio.http

import org.specs2.mutable.Specification
import spray.testkit._
import spray.http._
import StatusCodes._
import info.devartem.portfolio.{CoreActors, Core}
import akka.actor.Props
import info.devartem.portfolio.actors.{TwitterActor, GithubActor}
import akka.routing.RoundRobinRouter


class RoutesHandlerTest extends Specification with Specs2RouteTest with RoutesHandler  {
  def actorRefFactory = system

  "The DemoService" should {
    "return a greeting for GET requests to the root path" in {
      Get("/") ~> routes ~> check {
        responseAs[String] === "/"
      }
    }
    "count tweets " in {
      Get("/tweets") ~> routes ~> check {
        responseAs[String] != ""
      }
    }
  }
}

