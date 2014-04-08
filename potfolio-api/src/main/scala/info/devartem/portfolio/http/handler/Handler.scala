package info.devartem.portfolio.http.handler

import grizzled.slf4j.Logger
import scala.sys.process.ProcessLogger
import scala.util.Failure

trait Handler {
  private val logger = Logger(this.getClass)
  protected val processLogger = ProcessLogger(message => logger.debug(message))
  protected val userDir = System.getProperty("user.dir")

  def apply(request: String, params: Option[AnyRef]): String = {
    logger.info("Perform action: " + getClass.getSimpleName + ", by request: " + request)
    execute(request, params)
  }

  def execute(request: String, params: Option[AnyRef]): String

}

