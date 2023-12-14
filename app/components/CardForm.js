import { redirect } from 'next/navigation'
import { insertCard } from '../utils/supabase-client'
import Button from './Button'
import Field from './Field'
import Input from './Input'
import Label from './Label'

async function createCard(formData) {
  'use server'
  let title = formData.get('title')
  let subtitle = formData.get('subtitle')
  let img = formData.get('img')
  let description = formData.get('description')
  if (['EMPTY', 'NULL', ''].includes(img)) {
    img = 'https://placekitten.com/500/300'
  }
  if (!img.includes('http')) {
    img = 'https://placekitten.com/500/300'
  }
  if (['EMPTY', 'NULL', ''].includes(title)) {
    title = 'Title'
  }
  if (['EMPTY', 'NULL', ''].includes(subtitle)) {
    subtitle = 'Subtitle'
  }
  if (['EMPTY', 'NULL', ''].includes(description)) {
    description = 'Description'
  }
  insertCard({ title, subtitle, img, description })
  redirect('/')
}

export default function CardForm() {
  return (
    <form
      action={createCard}
      className="flex flex-col my-4 m-auto p-4 bg-gray-700 outline outline-white rounded-lg shadow-lg max-w-xl"
    >
      <Field>
        <Label label="Image" />
        <Input id="img" name="img" placeholder="enter image URL here" />
      </Field>
      <Field>
        <Label label="Title" />
        <Input id="title" name="title" placeholder="enter card title here" />
      </Field>
      <Field>
        <Label label="Subtitle" />
        <Input id="subtitle" name="subtitle" placeholder="enter card subtitle here" />
      </Field>
      <Field>
        <Label label="Description" />
        <Input id="description" name="description" placeholder="enter card description here" />
      </Field>
      <Button type="submit button">Add Card</Button>
    </form>
  )
}
