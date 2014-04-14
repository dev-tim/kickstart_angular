package info.devartem.portfolio.actors

import akka.actor.Actor

class GithubActor extends Actor {
  override def receive: Actor.Receive = {
    case _ => println("Stub!!!")
  }
}
