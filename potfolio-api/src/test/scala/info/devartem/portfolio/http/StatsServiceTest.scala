package info.devartem.portfolio.http

import org.specs2.mutable.Specification
import spray.testkit.Specs2RouteTest
import spray.http._
import StatusCodes._


class StatsServiceTest extends Specification with Specs2RouteTest with StatsService {
  def actorRefFactory = system

  "The DemoService" should {

    "return a greeting for GET requests to the root path" in {
      Get() ~> demoRoutes ~> check { responseAs[String] === "/"}
    }
  }
}
