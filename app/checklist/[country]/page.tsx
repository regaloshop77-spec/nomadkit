import { redirect } from 'next/navigation'
import { countries } from '../../../data/countries'
import { getTasksByCountry } from '../../../data'
import ChecklistClient from './ChecklistClient'

export default async function ChecklistPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  const countryData = countries.find((c) => c.id === country)
  if (!countryData) redirect('/')
  const tasks = getTasksByCountry(country)
  return <ChecklistClient countryId={country} countryData={countryData} tasks={tasks} />
}
