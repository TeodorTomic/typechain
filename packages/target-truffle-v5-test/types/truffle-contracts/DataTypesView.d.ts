/* Generated by ts-generator ver. 0.1.0 */
/* tslint:disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface DataTypesViewContract
  extends Truffle.Contract<DataTypesViewInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<DataTypesViewInstance>;
}

type AllEvents = never;

export interface DataTypesViewInstance extends Truffle.ContractInstance {
  view_uint8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  view_uint256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  view_int8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  view_int256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  view_bool(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

  view_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

  view_bytes1(txDetails?: Truffle.TransactionDetails): Promise<string>;

  view_bytes(txDetails?: Truffle.TransactionDetails): Promise<string>;

  view_string(txDetails?: Truffle.TransactionDetails): Promise<string>;

  view_stat_array(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;

  view_tuple(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

  view_named(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

  view_struct(
    txDetails?: Truffle.TransactionDetails
  ): Promise<{ uint256_0: BN; uint256_1: BN }>;

  view_enum(txDetails?: Truffle.TransactionDetails): Promise<BN>;

  methods: {
    view_uint8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    view_uint256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    view_int8(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    view_int256(txDetails?: Truffle.TransactionDetails): Promise<BN>;

    view_bool(txDetails?: Truffle.TransactionDetails): Promise<boolean>;

    view_address(txDetails?: Truffle.TransactionDetails): Promise<string>;

    view_bytes1(txDetails?: Truffle.TransactionDetails): Promise<string>;

    view_bytes(txDetails?: Truffle.TransactionDetails): Promise<string>;

    view_string(txDetails?: Truffle.TransactionDetails): Promise<string>;

    view_stat_array(txDetails?: Truffle.TransactionDetails): Promise<BN[]>;

    view_tuple(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

    view_named(txDetails?: Truffle.TransactionDetails): Promise<[BN, BN]>;

    view_struct(
      txDetails?: Truffle.TransactionDetails
    ): Promise<{ uint256_0: BN; uint256_1: BN }>;

    view_enum(txDetails?: Truffle.TransactionDetails): Promise<BN>;
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
