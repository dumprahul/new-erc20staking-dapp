import { createThirdwebClient } from "thirdweb";

const CLIENT_ID=process.env.NEXT_PUBLIC_CLIENT_ID as string;
const SECRET_ID=process.env.SECRET_KEY as string;
////1qEoNF_0YghWpAoDXN7jwBWLvwq_-QUHWfAJoziZaR0hlkeZQNaxgXhgulkZcmBbtph-z8XeP1vtNskbe_cvEg 

export const client= createThirdwebClient({
   clientId:CLIENT_ID,
   secretKey:SECRET_ID
});