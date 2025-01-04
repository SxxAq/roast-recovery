import RoastDashboard from '@/components/RoastDashboard'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Roast Recovery Hotline
      </h1>
      <RoastDashboard />
    </div>
  )
}
