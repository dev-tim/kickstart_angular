package info.devartem.portfolio.auth

import org.scribe.oauth.OAuthService

trait Auth {
  val authService: OAuthService
}
