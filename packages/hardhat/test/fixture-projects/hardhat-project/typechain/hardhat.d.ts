/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "EdgeCases",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EdgeCases__factory>;
    getContractFactory(
      name: "SafeMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeMath__factory>;
    getContractFactory(
      name: "TestContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestContract__factory>;
    getContractFactory(
      name: "TestContract1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TestContract1__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;

    getContractAt(
      name: "EdgeCases",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EdgeCases>;
    getContractAt(
      name: "SafeMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeMath>;
    getContractAt(
      name: "TestContract",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestContract>;
    getContractAt(
      name: "TestContract1",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TestContract1>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
