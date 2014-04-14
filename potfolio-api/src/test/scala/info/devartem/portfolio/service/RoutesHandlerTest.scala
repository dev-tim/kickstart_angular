package info.devartem.portfolio.service

import org.specs2.mutable.Specification
import spray.testkit._
import spray.routing.RouteConcatenation


class RoutesHandlerTest extends Specification with Specs2RouteTest with RouteConcatenation {
  def actorRefFactory = system

  val routes =
    new StaticService().route ~
      new TwitterService().route

  "The DemoService" should {
    "return slash for a root path" in {
      Get("/") ~> routes ~> check {
        responseAs[String] === "/"
      }
    }
    "respond to tweets route" in {
      Get("/tweets") ~> routes ~> check {
        response.status.intValue == 200
      }
    }
    "respond to tweets route" in {
      Get("/tweets") ~> routes ~> check {
        responseAs[String] !== Nil
      }
    }
  }
}

