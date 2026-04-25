/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActionProtocol {
  KEEP = 'KEEP',
  REMOVE = 'REMOVE',
  DOWNGRADE = 'DOWNGRADE',
  FLAG = 'FLAG',
}

export interface TelemetryRow {
  id: string;
  tool: string;
  toolShort: string;
  user: string;
  context: string;
  lastUsed: string;
  activity: string;
  protocol: ActionProtocol;
  confidence: number;
  reason: string;
}

export interface InventoryItem {
  id: string;
  tool: string;
  category: string;
  costPerSeat: number | string;
  owner: string;
  ownerAvatar?: string;
  renewalDate: string;
  activeSeats: number;
  flagged?: boolean;
}

export interface SpendingMetric {
  category: string;
  actual: number;
  budgeted: number;
  color?: string;
}
