// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ProxyOwnerUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProxyOwnerUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProxyOwnerUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProxyOwnerUpdate", id.toString(), this);
  }

  static load(id: string): ProxyOwnerUpdate | null {
    return store.get("ProxyOwnerUpdate", id) as ProxyOwnerUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _new(): Bytes {
    let value = this.get("_new");
    return value.toBytes();
  }

  set _new(value: Bytes) {
    this.set("_new", Value.fromBytes(value));
  }

  get _old(): Bytes {
    let value = this.get("_old");
    return value.toBytes();
  }

  set _old(value: Bytes) {
    this.set("_old", Value.fromBytes(value));
  }
}

export class ProxyUpdated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProxyUpdated entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProxyUpdated entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProxyUpdated", id.toString(), this);
  }

  static load(id: string): ProxyUpdated | null {
    return store.get("ProxyUpdated", id) as ProxyUpdated | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get _new(): Bytes {
    let value = this.get("_new");
    return value.toBytes();
  }

  set _new(value: Bytes) {
    this.set("_new", Value.fromBytes(value));
  }

  get _old(): Bytes {
    let value = this.get("_old");
    return value.toBytes();
  }

  set _old(value: Bytes) {
    this.set("_old", Value.fromBytes(value));
  }
}
