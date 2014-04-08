package info.devartem.portfolio.http.handler

import org.json4s.jackson.Serialization._

case class TwitterRequest(name: String)

object TwitterStatsHandler extends Handler {
  def execute(request: String, params: Option[AnyRef]): String = {
    val twReq = read[TwitterRequest](request)
    write(twReq)
  }
}