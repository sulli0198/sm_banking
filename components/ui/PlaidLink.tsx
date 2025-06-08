import React, { useCallback, useEffect, useState } from 'react'
import { Button } from './button'
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { useRouter } from 'next/navigation';

const PlaidLink = ({user, variant}: PlaidLinkProps) => {
const router = useRouter();

    const [token,settoken] = useState('');
    
    useEffect(() => {
        const getLinkToken = async () => {
            // const data = await createLinkToken(user);

            // setToken(data?.linkToken);
        }

        getLinkToken()
     }, [] )


    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    //   await exchangePublicToken({
    //     publicToken: public_token,
    //     user,
    //   });

    router.push('/');
    }, [user])


    const config: PlaidLinkOptions = {
        token,
        onSuccess
        // onExit: (err, metadata) => {}
        // onEvent: (eventName, metadata) => {}
        
      };

    const {open,ready} = usePlaidLink(config);

  return (
    <>
    {variant === 'primary' ? (
        <Button 
        onClick={() => open()}
        disabled={!ready}
        className='plaidlink-primary'>
         Connect bank
        </Button>
    ): variant === 'ghost' ? (
        <Button>
          Connect bank
        </Button>
    ): (
        <Button>
            Connect bank
        </Button>
    )
    }
    </>
  )
}

export default PlaidLink