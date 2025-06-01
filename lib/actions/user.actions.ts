'use server';

import { cookies } from "next/headers";
import { createAdminClient, createSessionClient } from "../appwrite";
import {ID} from "node-appwrite"
import { parseStringify } from "../utils";





export const signIn = async ( {email , password}: signInProps) => {
    try{
      const { account } = await createAdminClient();

      const response = await account.createEmailPasswordSession(email, password);

      return parseStringify(response);
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
      const user = await account.get();

      return parseStringify(user);
    } catch (error) {
      return null;
    }
  }


  export const logoutAccount = async () => {
    try {
      const { account } = await createSessionClient();
      await account.deleteSession("current"); // Deletes the current user's session
      cookies().delete("appwrite-session"); // Ensure "appwrite-session" is your correct cookie name
  
      return parseStringify(true);
    } catch (error) {
      console.error("Logout Error:", error); // Server-side error logging
      return null; // Indicate failure
    }
  };
  