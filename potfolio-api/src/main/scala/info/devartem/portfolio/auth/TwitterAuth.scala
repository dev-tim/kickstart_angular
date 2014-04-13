package info.devartem.portfolio.auth

import org.scribe.builder.ServiceBuilder
import org.scribe.builder.api.TwitterApi
import org.scribe.oauth.OAuthService

trait TwitterAuth extends Auth {
  override val authService: OAuthService = new ServiceBuilder()
    .provider(classOf[TwitterApi])
    .apiKey("d8YLEzptWnpHCMpfUjIduC2bH")
    .apiSecret("B0y2lWaLPNsg1PotY9E3zHVbUE6IzkwIZh1FGLjcKtPkhKprf7")
    .build()
}
