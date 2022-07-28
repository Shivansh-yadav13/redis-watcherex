import { RedisWatcher } from '@casbin/redis-watcher';
import { Watcher, Model } from 'casbin-core'

export interface WatcherEx extends Watcher {
  updateForAddPolicy(sec: string, ptype: string, ...params: string[]): Promise<void>;

  updateForRemovePolicy(sec: string, ptype: string, ...params: string[]): Promise<void>;

  updateForRemoveFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<void>;

  updateForSavePolicy(model: Model): Promise<void>;

  updateForAddPolicies(sec: string, ptype: string, ...rules: string[][]): Promise<void>;

  updateForRemovePolicies(sec: string, ptype: string, ...rules: string[][]): Promise<void>;
}

class RedisWatcherEx extends RedisWatcher implements WatcherEx  {
  public async updateForAddPolicy (sec: string, ptype: string, ...params: string[]): Promise<void> {
  }
  public async updateForRemovePolicy (sec: string, ptype: string, ...params: string[]): Promise<void> {
  }
  public async updateForRemoveFilteredPolicy(sec: string, ptype: string, fieldIndex: number, ...fieldValues: string[]): Promise<void> {
  }
  public async updateForSavePolicy(model: Model): Promise<void> {
  }
  public async updateForAddPolicies(sec: string, ptype: string, ...rules: string[][]): Promise<void> {
  }
  public async updateForRemovePolicies(sec: string, ptype: string, ...rules: string[][]): Promise<void> {
  }
}