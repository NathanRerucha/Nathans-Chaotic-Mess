import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient(<url />, <secret />)
  return supabase
}

export async function insertCard(card) {
  const supabase = getClient()
  // implement https://supabase.com/docs/reference/javascript/insert
}

export async function findCards() {
  const supabase = getClient()
  // implements https://supabase.com/docs/reference/javascript/select
}
