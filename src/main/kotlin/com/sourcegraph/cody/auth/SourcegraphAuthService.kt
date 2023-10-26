package com.sourcegraph.cody.auth

import com.intellij.openapi.components.Service
import com.intellij.openapi.components.service
import com.intellij.util.Url
import com.intellij.util.Urls
import com.sourcegraph.config.ConfigUtil
import java.util.concurrent.CompletableFuture
import org.jetbrains.ide.BuiltInServerManager

@Service
internal class SourcegraphAuthService : AuthServiceBase() {

  override val name: String
    get() = SERVICE_NAME

  fun authorize(authMethod: SsoAuthMethod): CompletableFuture<String> {
    return authorize(SourcegraphAuthRequest(name, authMethod))
  }

  private class SourcegraphAuthRequest(
      override val serviceName: String,
      authMethod: SsoAuthMethod
  ) : AuthRequest {
    private val port: Int
      get() = BuiltInServerManager.getInstance().port

    override val authUrlWithParameters: Url = createUrl(authMethod)

    private fun createUrl(authMethod: SsoAuthMethod) =
        when (authMethod) {
          SsoAuthMethod.GITHUB -> {
            val end =
                ".auth/github/login?pc=https%3A%2F%2Fgithub.com%2F%3A%3Ae917b2b7fa9040e1edd4&redirect=/post-sign-up?returnTo=/user/settings/tokens/new/callback?requestFrom=JETBRAINS-$port"
            Urls.newFromEncoded(ConfigUtil.DOTCOM_URL + end)
          }
          SsoAuthMethod.GITLAB -> {
            val end =
                ".auth/gitlab/login?pc=https%3A%2F%2Fgitlab.com%2F%3A%3Ab45ecb474e92c069567822400cf73db6e39917635bf682f062c57aca68a1e41c&redirect=/post-sign-up?returnTo=/user/settings/tokens/new/callback?requestFrom=JETBRAINS-$port"
            Urls.newFromEncoded(ConfigUtil.DOTCOM_URL + end)
          }
          SsoAuthMethod.GOOGLE -> {
            val end =
                ".auth/openidconnect/login?pc=google&redirect=/post-sign-up?returnTo=/user/settings/tokens/new/callback?requestFrom=JETBRAINS-$port"
            Urls.newFromEncoded(ConfigUtil.DOTCOM_URL + end)
          }
          else ->
              SERVICE_URL.addParameters(
                  mapOf("requestFrom" to "JETBRAINS", "port" to port.toString()))
        }
  }

  companion object {
    private const val SERVICE_NAME = "sourcegraph"

    @JvmStatic
    val instance: SourcegraphAuthService
      get() = service()

    @JvmStatic
    val SERVICE_URL: Url =
        Urls.newFromEncoded(ConfigUtil.DOTCOM_URL + "user/settings/tokens/new/callback")
  }
}
