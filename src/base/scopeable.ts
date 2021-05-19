export abstract class ScopeableService<T> {
  private scopes: { [scopeId: string]: T } = {}

  public forBot(botId: string): T {
    let scope = this.scopes[botId]
    if (!scope) {
      scope = this.createScope(botId)
      this.scopes[botId] = scope
    }
    return scope
  }

  protected abstract createScope(botId: string): T
}
