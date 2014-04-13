package info.devartem.portfolio.actors

import akka.actor.Actor
import info.devartem.portfolio.auth.TwitterAuth
import info.devartem.portfolio.actors.TwitterActor._


class TwitterActor extends Actor with TwitterAuth {
  def receive = {
    case CountTweets =>
      sender ! TweetCount(42)
    case GetInfo =>
      sender ! Info("info")
  }
}

object TwitterActor {

  case object GetInfo

  case class Info(msg: String)

  case object CountTweets

  case class TweetCount(count: Int)

}

