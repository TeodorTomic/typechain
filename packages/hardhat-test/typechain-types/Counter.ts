/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface CounterInterface extends utils.Interface {
  contractName: "Counter";

  functions: {
    "countDown()": FunctionFragment;
    "countUp()": FunctionFragment;
    "getCount()": FunctionFragment;
  };

  events: {
    "CountedTo(uint256)": EventFragment;
  };

  getFunction(nameOrSignatureOrTopic: "countDown"): FunctionFragment;
  getFunction(nameOrSignatureOrTopic: "countUp"): FunctionFragment;
  getFunction(nameOrSignatureOrTopic: "getCount"): FunctionFragment;

  encodeFunctionData(functionFragment: "countDown", values?: undefined): string;
  encodeFunctionData(functionFragment: "countUp", values?: undefined): string;
  encodeFunctionData(functionFragment: "getCount", values?: undefined): string;

  decodeFunctionResult(functionFragment: "countDown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "countUp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;

  getEvent(nameOrSignatureOrTopic: "CountedTo"): EventFragment;
}

export type CountedToEvent = TypedEvent<[BigNumber], { number: BigNumber }>;

export type CountedToEventFilter = TypedEventFilter<CountedToEvent>;

export interface Counter extends BaseContract {
  contractName: "Counter";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CounterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    countDown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    countUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCount(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  countDown(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  countUp(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCount(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    countDown(overrides?: CallOverrides): Promise<BigNumber>;

    countUp(overrides?: CallOverrides): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "CountedTo(uint256)"(number?: null): CountedToEventFilter;
    CountedTo(number?: null): CountedToEventFilter;
  };

  estimateGas: {
    countDown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    countUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    countDown(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    countUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
