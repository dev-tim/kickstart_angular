package info.devartem.portfolio

import akka.util.Timeout
import scala.concurrent.duration._
import org.json4s.{Formats, DefaultFormats}

package object service {

  implicit def timeout = Timeout(10 seconds)
  implicit def json4sFormats: Formats = DefaultFormats


}
