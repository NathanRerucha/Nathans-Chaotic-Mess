import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://fjsdwfsbprblvilylazn.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}

export async function insertCard(card) {
  const supabase = getClient()
  const { error } = await supabase.from('xards').insert(card)
}

export async function findCards() {
  const supabase = getClient()
  const { data: xards, error } = await supabase.from('xards').select('*')
  return xards
}
