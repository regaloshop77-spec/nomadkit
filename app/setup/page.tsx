import { redirect } from 'next/navigation'
import { countries } from '../../data/countries'
import SetupClient from './SetupClient'

export default async function SetupPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>
}) {
  const { country } = await searchParams
  const countryData = countries.find((c) => c.id === country)
  if (!countryData) redirect('/')
  return <SetupClient countryData={countryData} />
}
