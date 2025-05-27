// /app/page.tsx
import { Satisfy, Righteous, Grand_Hotel, Short_Stack, Love_Ya_Like_a_Sister, Ribeye_Marrow } from 'next/font/google'

// Import fonts with their respective options
const satisfy = Satisfy({ subsets: ['latin'], weight: '400', display: 'swap' })
const righteous = Righteous({ subsets: ['latin'], weight: '400', display: 'swap' })
const grandHotel = Grand_Hotel({ subsets: ['latin'], weight: '400', display: 'swap' })
const shortStack = Short_Stack({ subsets: ['latin'], weight: '400', display: 'swap' })
const loveYa = Love_Ya_Like_a_Sister({ subsets: ['latin'], weight: '400', display: 'swap' })
const ribeye = Ribeye_Marrow({ subsets: ['latin'], weight: '400', display: 'swap' })

export default function Home() {
  return (
    <main className="p-4 space-y-6">
      <h1 className={satisfy.className}>Satisfy Font Example</h1>
      <h1 className={righteous.className}>Righteous Font Example</h1>
      <h1 className={grandHotel.className}>Grand Hotel Font Example</h1>
      <h1 className={shortStack.className}>Short Stack Font Example</h1>
      <h1 className={loveYa.className}>Love Ya Like a Sister Font Example</h1>
      <h1 className={ribeye.className}>Ribeye Marrow Font Example</h1>
    </main>
  )
}
