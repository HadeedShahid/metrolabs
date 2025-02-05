import { createClient } from "@/utils/supabase/server";

export default async function supaBaseClient() {
  return await createClient();
}
