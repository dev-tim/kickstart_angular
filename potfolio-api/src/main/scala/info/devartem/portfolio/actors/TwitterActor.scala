package info.devartem.portfolio.actors

import akka.actor.Actor
import info.devartem.portfolio.auth.TwitterAuth
import info.devartem.portfolio.actors.TwitterActorMessages._
import info.devartem.portfolio.model.{User, Tweet}

class TwitterActor extends Actor with TwitterAuth {
  def receive = {
    case GetTweets =>
      sender ! ReceivedTweets(Tweet("1", User("1", "name", 0), "text") :: Nil)
  }
}

object TwitterActorMessages {

  case object GetTweets

  case class ReceivedTweets(tweets: List[Tweet])

}

