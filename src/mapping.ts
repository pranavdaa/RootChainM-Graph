import {
  ProxyOwnerUpdate as ProxyOwnerUpdateEvent,
  ProxyUpdated as ProxyUpdatedEvent
} from "../generated/RootChainManager/RootChainManager"
import { ProxyOwnerUpdate, ProxyUpdated } from "../generated/schema"

export function handleProxyOwnerUpdate(event: ProxyOwnerUpdateEvent): void {
  let entity = new ProxyOwnerUpdate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._new = event.params._new
  entity._old = event.params._old
  entity.save()
}

export function handleProxyUpdated(event: ProxyUpdatedEvent): void {
  let entity = new ProxyUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity._new = event.params._new
  entity._old = event.params._old
  entity.save()
}
