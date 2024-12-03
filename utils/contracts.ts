import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { STAKING_CONTRACT_ABI } from "./stakingcontractabi";
import { STAKE_TOKEN_CONTRACT_ABI } from "./staketokencontractabi";
import { REWARD_TOKEN_CONTRACT_ABI } from "./rewardtokencontractabi";

const stakeTokenContractAddress="0xC3Bf6610aC2261964482d6e4A30731CC40DbC8F4";
const rewardTokenContractAddress="0xA348939e200eF636B532C80b09C5b8F1C51D0bF7";
const finalstakeContractAddress="0x4Af5257643bbE4F1A1670C31F7e13754Cb63FfB3";

export const STAKE_TOKEN_ADDRESS=getContract({
    client:client,
    chain:chain,
    address:stakeTokenContractAddress,
    abi:STAKE_TOKEN_CONTRACT_ABI
});

export const REWARD_TOKEN_ADDRESS=getContract({
    client:client,
    chain:chain,
    address:rewardTokenContractAddress,
    abi:REWARD_TOKEN_CONTRACT_ABI
});

export const STAKING_CONTRACT=getContract({
    client:client,
    chain:chain,
    address:finalstakeContractAddress,
    abi:STAKING_CONTRACT_ABI
});


