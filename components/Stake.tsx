'use client'

import { ConnectButton, useReadContract } from "thirdweb/react"
import { useActiveAccount } from "thirdweb/react";
import{ chain } from '@/app/chain'
import{ client} from '@/app/client'
import { balanceOf } from "thirdweb/extensions/erc20"
import { REWARD_TOKEN_ADDRESS, STAKE_TOKEN_ADDRESS } from "../utils/contracts"
import { toEther } from "thirdweb"



export const Stake=() =>{
    const account= useActiveAccount();
    console.log("Account object:", account?.address );

   

    const {data:stakingTokenBalance,isLoading:loadingStakeTokenBalance} = useReadContract(balanceOf,{
        contract:STAKE_TOKEN_ADDRESS,
        address:account?.address || "",
        queryOptions:{
            enabled: !!account, 
        }
    });
    console.log("Account address",account?.address);
    console.log("Staking Token Balance:", stakingTokenBalance);
    console.log("isloading211",loadingStakeTokenBalance)
    
    const {data:rewardTokenBalance,isLoading:loadingrewardTokenBalance} = useReadContract(balanceOf,{
        contract:REWARD_TOKEN_ADDRESS,
        address:account?.address || "",
        queryOptions:{
            enabled: !!account, 
        }
    });
    console.log("Reward Token Balance:", rewardTokenBalance);



    function truncate(value: string | number, decimalPlaces: number): number {
        const numericValue: number = Number(value);
        if (isNaN(numericValue)) {
            throw new Error('Invalid input: value must be a convertible to a number.');
        }
        const factor: number = Math.pow(10, decimalPlaces);
        return Math.trunc(numericValue * factor) / factor;
    }
    

    return(
        <div>
            {account && (
                <div style={{
                    backgroundColor:"#151515",
                    padding:"40px",
                    borderRadius:"10px"
                  }}>
                     <ConnectButton
                      client={client}
                      chain={chain}
                    />
                    <div>
                        {loadingStakeTokenBalance? (
                            <p>Loading....</p>
                        ) : (
                            <p>Staking Token: {truncate(toEther(stakingTokenBalance!),2)}</p>
                        )}

                        {loadingrewardTokenBalance? (
                            <p>Loading....</p>
                        ) : (
                            <p>Staking Token: {truncate(toEther(rewardTokenBalance!),2)}</p>
                        )}

                    </div>
                  </div>
            )}
        </div>
    )
}