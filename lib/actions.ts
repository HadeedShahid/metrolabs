"use server";

import { bookCallFormSchema } from "@/utils/formSchema";
import supaBaseClient from "@/utils/supabase/client";
import { z } from "zod";

export async function createLead(values: z.infer<typeof bookCallFormSchema>) {
  const supabase = await supaBaseClient();

  try {
    const { data, error } = await supabase
      .from("leads")
      .insert(values)
      .select();

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
