'use server';

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import {ID} from "node-appwrite"
import { ReceiptEuro } from "lucide-react";
import { parseStringify } from "../utils";





export const signIn = async () => {
    try{

    }catch(error){
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) => {
    const {email, password, firstName , lastName } = userData;
    
    try{
        const { account } = await createAdminClient();

  const newUSerAccount = await account.create(
    ID.unique(), 
    email, 
    password, 
    `${firstName} ${lastName}`
   );
  const session = await account.createEmailPasswordSession(
    email, password);

  cookies().set("appwrite-session", session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  return parseStringify(newUSerAccount);
    }catch(error){
        console.error('Error', error);
    }
}


export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  