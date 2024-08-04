"use server"

import { createClient } from "@supabase/supabase-js";

 const supabase = createClient(
  `${process.env.SUPABASE_PAYMENT_API}`,
  `${process.env.SUPABASE_KEY_ANON}`,
  {
    global: {
      fetch: (url: any, options = {}) => {
        return fetch(url, { ...options, cache: 'no-store' });
      }
    }
  }
);

const url = process.env.BASE_FRONTEND_URL;
export async function getPaymentStatusByUrl() {
  
  try {
  const { data } = await supabase.from("payment").select("status_pay").eq("url", url).single();

    return data

} catch (error) {

    return console.log(error);
    
}



}