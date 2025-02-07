import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card"
import { Star } from "lucide-react"

interface CharizardStats {
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
}

interface CharizardData {
  name: string
  type: string[]
  image: string
  stats: CharizardStats
  description: string
}

const charizardData: CharizardData = {
  name: "Charizard",
  type: ["Fire", "Flying"],
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  stats: {
    hp: 78,
    attack: 84,
    defense: 78,
    specialAttack: 109,
    specialDefense: 85,
    speed: 100,
  },
  description: " Charizard vuela por el cielo en busca de oponentes poderosos. Exhala fuego con tal intensidad que derrite cualquier cosa. Sin embargo, nunca dirige su aliento ardiente contra ningún oponente más débil que él.",
}

export default function CharizardPokedexEntry() {
  return (
    <Card className="w-full max-w-md mx-auto bg-red-500 shadow-md rounded-lg overflow-hidden text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          <img src={charizardData.image} alt={charizardData.name} className="w-16 h-16 mr-4" />
          {charizardData.name}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {charizardData.type.map((type, index) => (
            <span key={index} className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {type}
            </span>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Base Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-white" />
              HP: {charizardData.stats.hp}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-white" />
              Attack: {charizardData.stats.attack}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-white" />
              Defense: {charizardData.stats.defense}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-white" />
              Special Attack: {charizardData.stats.specialAttack}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-white" />
              Special Defense: {charizardData.stats.specialDefense}
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-white" />
              Speed: {charizardData.stats.speed}
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-gray-300">{charizardData.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}